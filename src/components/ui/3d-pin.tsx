"use client";
import { cn } from "@/lib/utils";
import React, { useState } from "react";

export const PinContainer = ({
  children,
  className,
  containerClassName,
}: {
  children: React.ReactNode;
  className?: string;
  containerClassName?: string;
}) => {
  return (
    <div
      className={cn(
        "relative h-full w-full overflow-hidden bg-slate-950 p-4",
        containerClassName
      )}
    >
      <div className={cn("relative z-20", className)}>{children}</div>
    </div>
  );
};

export const Pin = ({
  title,
  href,
  children,
  className,
  ...props
}: {
  title: string;
  href: string;
  children: React.ReactNode;
  className?: string;
}) => {
  const [transform, setTransform] = useState(
    "translate(-50%,-50%) rotateX(0deg)"
  );

  const onMouseEnter = () => {
    setTransform("translate(-50%,-50%) rotateX(10deg) scale(1)");
  };

  const onMouseLeave = () => {
    setTransform("translate(-50%,-50%) rotateX(0deg) scale(1)");
  };

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    const rotateX = ((y - centerY) / centerY) * 10;
    const rotateY = ((centerX - x) / centerX) * 10;

    setTransform(
      `translate(-50%,-50%) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1)`
    );
  };

  return (
    <div
      className={cn(
        "group/btn relative h-20 w-20 cursor-pointer",
        className
      )}
      style={{
        perspective: "1000px",
      }}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      onMouseMove={onMouseMove}
      {...props}
    >
      <div
        style={{
          transformStyle: "preserve-3d",
          transform: transform,
        }}
        className="relative flex h-full w-full items-center justify-center"
      >
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-cyan to-accent-magenta opacity-75 blur-xl group-hover/btn:opacity-100 transition-opacity duration-300" />
        <div className="relative z-10 flex h-full w-full items-center justify-center rounded-full bg-background-secondary border border-gray-700 group-hover/btn:border-accent-cyan transition-colors duration-300">
          <div className="text-center">
            <div className="text-xs font-semibold text-text-heading group-hover/btn:text-accent-cyan transition-colors duration-300">
              {title}
            </div>
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
