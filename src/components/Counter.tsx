import { useState, useEffect, useRef } from 'react';
import { useInView, animate } from 'motion/react';

const Counter = ({ value }: { value: string }) => {
  const [displayValue, setDisplayValue] = useState(0);
  const numericValue = parseInt(value.replace(/\D/g, ''));
  const suffix = value.replace(/\d/g, '');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, numericValue, {
        duration: 1.5,
        ease: "easeOut",
        onUpdate: (latest) => setDisplayValue(Math.round(latest))
      });
      return () => controls.stop();
    }
  }, [isInView, numericValue]);

  return (
    <span ref={ref}>
      {displayValue}{suffix}
    </span>
  );
};

export default Counter;
