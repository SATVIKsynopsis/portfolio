"use client";

import { motion, useTransform, MotionValue } from "framer-motion";

type Props = {
  children: React.ReactNode;
  progress: MotionValue<number>;
  range?: [number, number];
  className?: string;
};

export default function ScrollRevealCard({
  children,
  progress,
  range = [0.25, 0.45],
  className,
}: Props) {
  const opacity = useTransform(progress, range, [0, 1]);
  const y = useTransform(progress, range, [40, 0]);
  const scale = useTransform(progress, range, [0.96, 1]);

  return (
    <motion.div
      style={{ opacity, y, scale }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
