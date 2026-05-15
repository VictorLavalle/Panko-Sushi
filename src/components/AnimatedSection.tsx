"use client";

import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
}

export function AnimatedSection({ children }: Readonly<AnimatedSectionProps>) {
  return <div>{children}</div>;
}
