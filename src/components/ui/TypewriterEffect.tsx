import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const TITLES = [
  "Software Developer",
  "Frontend Developer",
  "React Developer",
  "Django Developer",
  "Full Stack Developer"
];

const TYPE_SPEED = 280;
const DELETE_SPEED = 200;
const PAUSE_DURATION = 2800;
const PAUSE_EMPTY_DURATION = 1300;

export const TypewriterEffect = () => {
  const prefersReducedMotion = useReducedMotion();
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (prefersReducedMotion) {
      setText(TITLES[0]);
      return;
    }

    const currentTitle = TITLES[titleIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      if (text === "") {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % TITLES.length);
      } else {
        timeoutId = setTimeout(() => {
          setText(currentTitle.substring(0, text.length - 1));
        }, DELETE_SPEED);
      }
    } else {
      if (text === currentTitle) {
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, PAUSE_DURATION);
      } else {
        const nextSpeed = text === "" ? PAUSE_EMPTY_DURATION : TYPE_SPEED;
        timeoutId = setTimeout(() => {
          setText(currentTitle.substring(0, text.length + 1));
        }, nextSpeed);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [text, isDeleting, titleIndex, prefersReducedMotion]);

  // Find the longest title to reserve space
  const longestTitle = [...TITLES].sort((a, b) => b.length - a.length)[0];

  return (
    <span className="relative inline-block text-left">
      {/* Invisible placeholder to reserve width and prevent layout shift */}
      <span className="invisible">
        {longestTitle}
        <span className="inline-block ml-1">|</span>
      </span>
      {/* Actual animated text */}
      <span 
        className="absolute top-0 left-0 w-full h-full"
        style={{ color: 'var(--color-primary)', opacity: 0.9 }}
      >
        {text}
        {!prefersReducedMotion && (
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ repeat: Infinity, duration: 1.4, ease: "linear" }}
            className="inline-block font-light ml-1"
            style={{ color: 'var(--color-primary)' }}
          >
            |
          </motion.span>
        )}
      </span>
    </span>
  );
};
