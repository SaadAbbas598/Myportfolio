import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import PropTypes from "prop-types";

// Reusable animated section wrapper with various animation types
const AnimatedSection = ({ 
  children, 
  animation = "fadeUp",
  delay = 0,
  duration = 0.6,
  className = "",
  once = true 
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once, 
    margin: "-100px",
    amount: 0.3 
  });

  const animations = {
    fadeUp: {
      initial: { opacity: 0, y: 50 },
      animate: { opacity: 1, y: 0 }
    },
    fadeDown: {
      initial: { opacity: 0, y: -50 },
      animate: { opacity: 1, y: 0 }
    },
    fadeLeft: {
      initial: { opacity: 0, x: -50 },
      animate: { opacity: 1, x: 0 }
    },
    fadeRight: {
      initial: { opacity: 0, x: 50 },
      animate: { opacity: 1, x: 0 }
    },
    scale: {
      initial: { opacity: 0, scale: 0.8 },
      animate: { opacity: 1, scale: 1 }
    },
    scaleRotate: {
      initial: { opacity: 0, scale: 0.5, rotate: -10 },
      animate: { opacity: 1, scale: 1, rotate: 0 }
    },
    flip: {
      initial: { opacity: 0, rotateY: 90 },
      animate: { opacity: 1, rotateY: 0 }
    },
    slideScale: {
      initial: { opacity: 0, x: -100, scale: 0.5 },
      animate: { opacity: 1, x: 0, scale: 1 }
    },
    blur: {
      initial: { opacity: 0, filter: "blur(10px)" },
      animate: { opacity: 1, filter: "blur(0px)" }
    }
  };

  const selectedAnimation = animations[animation] || animations.fadeUp;

  return (
    <motion.div
      ref={ref}
      initial={selectedAnimation.initial}
      animate={isInView ? selectedAnimation.animate : selectedAnimation.initial}
      transition={{
        duration,
        delay,
        ease: "easeOut"
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

AnimatedSection.propTypes = {
  children: PropTypes.node.isRequired,
  animation: PropTypes.oneOf([
    'fadeUp', 'fadeDown', 'fadeLeft', 'fadeRight', 
    'scale', 'scaleRotate', 'flip', 'slideScale', 'blur'
  ]),
  delay: PropTypes.number,
  duration: PropTypes.number,
  className: PropTypes.string,
  once: PropTypes.bool
};

export default AnimatedSection;
