"use client";

import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface Props {
  children: ReactNode;
  delay?: number;
  className?: string; // 추가 스타일을 받기 위해
}

export default function FadeIn({ children, delay = 0, className = "" }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }} // 시작: 투명하고 30px 아래에 있음
      whileInView={{ opacity: 1, y: 0 }} // 보일때: 불투명해지고 제자리로
      viewport={{ once: true, margin: "-10% 0px" }} // 화면에 10% 정도 들어오면 실행 (한번만)
      transition={{ duration: 0.6, delay: delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}