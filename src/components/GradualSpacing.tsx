"use client";

import React from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

interface GradualSpacingProps {
  children: React.ReactNode;
  duration?: number;
  delayMultiple?: number;
  framerProps?: Variants;
  className?: string;
}

const GradualSpacing: React.FC<GradualSpacingProps> = ({
  children,
  duration = 2,
  delayMultiple = 0.04,
  framerProps = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  },
  className,
}) => {
  const childArray = React.Children.toArray(children);
  return (
    <div className={className}>
      <AnimatePresence>
        {childArray.map((child, i) => (
          <motion.div
            key={i}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={framerProps}
            transition={{ duration, delay: i * delayMultiple }}
            className="child"
          >
            {child}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

export default GradualSpacing;
//To trigger animations when a user scrolls to a specific section of the page, you can use the react-intersection-observer library. This library helps to detect when an element is visible in the viewport.