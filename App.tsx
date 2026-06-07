import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const BG_DOTS = [
  { bg: "#f79c6e", left: 43.5, top: 26.42, size: 1, opacity: 0.29 },
  { bg: "#f7b96e", left: 189, top: 427.93, size: 2, opacity: 0.61 },
  { bg: "#f7d76e", left: 334.52, top: 78.55, size: 3, opacity: 0.19 },
  { bg: "#f7f56e", left: 86.75, top: 491.84, size: 4, opacity: 0.17 },
  { bg: "#f7b76e", left: 232.25, top: 118.82, size: 1, opacity: 0.31 },
  { bg: "#f7d56e", left: 377.77, top: 522.58, size: 2, opacity: 0.53 },
  { bg: "#f7f36e", left: 130.01, top: 169.19, size: 3, opacity: 0.24 },
  { bg: "#f7b56e", left: 275.52, top: 584.27, size: 4, opacity: 0.18 },
  { bg: "#f7d36e", left: 27.77, top: 207.48, size: 1, opacity: 0.42 },
  { bg: "#f7f06e", left: 173.27, top: 612.96, size: 2, opacity: 0.74 },
  { bg: "#f7b36e", left: 318.78, top: 267.57, size: 3, opacity: 0.15 },
  { bg: "#f7d06e", left: 71.02, top: 674.83, size: 4, opacity: 0.22 },
  { bg: "#f7ee6e", left: 216.54, top: 295.13, size: 1, opacity: 0.67 },
  { bg: "#f7b06e", left: 362.03, top: 717.11, size: 2, opacity: 0.3 },
  { bg: "#f7ce6e", left: 114.28, top: 360.74, size: 3, opacity: 0.15 },
  { bg: "#f7ec6e", left: 259.79, top: -11, size: 4, opacity: 0.27 },
  { bg: "#f7ae6e", left: 12.03, top: 391.32, size: 1, opacity: 0.5 },
  { bg: "#f7cc6e", left: 157.55, top: 22.6, size: 2, opacity: 0.76 },
  { bg: "#f7ea6e", left: 303.05, top: 453.89, size: 3, opacity: 0.15 },
  { bg: "#f7ac6e", left: 55.28, top: 77.64, size: 4, opacity: 0.36 },
  { bg: "#f7c96e", left: 200.8, top: 489.24, size: 1, opacity: 0.36 },
  { bg: "#f7e76e", left: 346.3, top: 135.2, size: 2, opacity: 0.16 },
  { bg: "#f7a96e", left: 98.56, top: 544.63, size: 3, opacity: 0.19 },
  { bg: "#f7c76e", left: 244.05, top: 171.35, size: 4, opacity: 0.35 },
  { bg: "#f7e56e", left: 389.55, top: 576.26, size: 1, opacity: 0.56 },
  { bg: "#f7a76e", left: 141.81, top: 228.1, size: 2, opacity: 0.16 },
  { bg: "#f7c56e", left: 287.31, top: 636.12, size: 3, opacity: 0.22 },
  { bg: "#f7e36e", left: 39.57, top: 260.33, size: 4, opacity: 0.46 },
];

const PIXELS = [
  { c: "#fddbc6", o: 0.83 },
  { c: "#c73d2b", o: 0.02 },
  { c: "#c73d2b", o: 0.05 },
  { c: "#c73d2b", o: 0.01 },
  { c: "#fddbc6", o: 0.09 },
  { c: "#c73d2b", o: 0.11 },
  { c: "#fddbc6", o: 0.79 },
  { c: "#fddbc6", o: 0.02 },
  { c: "#c73d2b", o: 0.01 },
  { c: "#c73d2b", o: 0.01 },
  { c: "#c73d2b", o: 0.04 },
  { c: "#fddbc6", o: 0.06 },
  { c: "#fddbc6", o: 0.32 },
  { c: "#c73d2b", o: 0.05 },
  { c: "#c73d2b", o: 0.06 },
  { c: "#fddbc6", o: 0.08 },
  { c: "#fddbc6", o: 0.02 },
  { c: "#c73d2b", o: 0.05 },
  { c: "#fddbc6", o: 0.41 },
  { c: "#c73d2b", o: 0.03 },
  { c: "#c73d2b", o: 0.89 },
  { c: "#fddbc6", o: 0.09 },
  { c: "#fddbc6", o: 0.1 },
  { c: "#fddbc6", o: 0.06 },
  { c: "#c73d2b", o: 0.04 },
  { c: "#c73d2b", o: 0.08 },
  { c: "#c73d2b", o: 0.0 },
  { c: "#fddbc6", o: 0.04 },
  { c: "#c73d2b", o: 0.08 },
  { c: "#c73d2b", o: 0.85 },
  { c: "#fddbc6", o: 0.0 },
  { c: "#fddbc6", o: 0.07 },
  { c: "#fddbc6", o: 0.18 },
  { c: "#c73d2b", o: 0.16 },
  { c: "#c73d2b", o: 0.01 },
  { c: "#c73d2b", o: 0.11 },
  { c: "#fddbc6", o: 0.14 },
  { c: "#c73d2b", o: 0.09 },
  { c: "#fddbc6", o: 0.22 },
  { c: "#c73d2b", o: 0.07 },
  { c: "#fddbc6", o: 0.13 },
  { c: "#c73d2b", o: 0.04 },
  { c: "#c73d2b", o: 0.17 },
  { c: "#fddbc6", o: 0.11 },
  { c: "#c73d2b", o: 0.03 },
  { c: "#fddbc6", o: 0.26 },
  { c: "#c73d2b", o: 0.08 },
  { c: "#fddbc6", o: 0.15 },
];

const STEPS = [
  { id: 1, text: "Phân tích yêu cầu" },
  { id: 2, text: "Thu thập vật liệu" },
  { id: 3, text: "Đang dệt các điểm ảnh 4K" },
  { id: 4, text: "Hoàn thiện chi tiết" },
];

const AnimatedDots = () => (
  <span className="inline-flex w-[14px]">
    <motion.span
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0 }}
    >
      .
    </motion.span>
    <motion.span
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.3 }}
    >
      .
    </motion.span>
    <motion.span
      animate={{ opacity: [0, 1, 0] }}
      transition={{ duration: 1.5, repeat: Infinity, delay: 0.6 }}
    >
      .
    </motion.span>
  </span>
);

export default function App() {
  const [activeStep, setActiveStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(1);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    let timeout: NodeJS.Timeout;
    setProgress(0);

    interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          timeout = setTimeout(() => {
            if (activeStep < 4) {
              const nextStep = activeStep + 1;
              setActiveStep(nextStep);
              setVisibleSteps(nextStep);
            } else {
              setActiveStep(1);
              setVisibleSteps(1);
            }
          }, 500);
          return 100;
        }
        const increment = activeStep === 3 ? 0.3 : activeStep === 4 ? 0.5 : 0.8;
        return Math.min(100, p + increment);
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [activeStep]);

  return (
    <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
      {/* Mobile Device Container */}
      <div className="w-[375px] h-[812px] bg-[#0d0d0f] relative overflow-hidden rounded-[40px] shadow-[0_0_50px_rgba(232,104,48,0.15)] ring-1 ring-white/10 shrink-0 font-['Inter',sans-serif]">
        {/* Abstract Background Layer */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage:
              "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 375 812\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -66.589 -30.752 0 187.5 284.2)\\'><stop stop-color=\\'rgba(30,12,4,1)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(17,8,6,1)\\' offset=\\'0.5\\'/><stop stop-color=\\'rgba(9,4,3,1)\\' offset=\\'0.75\\'/><stop stop-color=\\'rgba(0,0,0,1)\\' offset=\\'1\\'/></radialGradient></defs></svg>')",
          }}
        >
          {BG_DOTS.map((dot, i) => (
            <motion.div
              key={i}
              animate={{
                opacity: [dot.opacity, dot.opacity * 0.3, dot.opacity],
                y: [0, -4, 0],
              }}
              transition={{
                duration: 3 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.1,
              }}
              className="absolute rounded-full"
              style={{
                backgroundColor: dot.bg,
                left: dot.left,
                top: dot.top,
                width: dot.size,
                height: dot.size,
                opacity: dot.opacity,
              }}
            />
          ))}

          <div
            className="absolute left-[-11.5px] opacity-85 rounded-full size-[416.245px] top-[17px] pointer-events-none"
            style={{
              backgroundImage:
                "url('data:image/svg+xml;utf8,<svg viewBox=\\'0 0 416.24 416.24\\' xmlns=\\'http://www.w3.org/2000/svg\\' preserveAspectRatio=\\'none\\'><rect x=\\'0\\' y=\\'0\\' height=\\'100%\\' width=\\'100%\\' fill=\\'url(%23grad)\\' opacity=\\'1\\'/><defs><radialGradient id=\\'grad\\' gradientUnits=\\'userSpaceOnUse\\' cx=\\'0\\' cy=\\'0\\' r=\\'10\\' gradientTransform=\\'matrix(0 -29.433 -29.433 0 208.12 208.12)\\'><stop stop-color=\\'rgba(232,104,48,0.18)\\' offset=\\'0\\'/><stop stop-color=\\'rgba(116,52,24,0.09)\\' offset=\\'0.35\\'/><stop stop-color=\\'rgba(0,0,0,0)\\' offset=\\'0.7\\'/></radialGradient></defs></svg>')",
            }}
          />
        </div>

        {/* Main Interface */}
        <div className="absolute flex flex-col gap-[32px] items-center left-0 top-[110px] w-[375px] z-10">
          {/* Top Hero Graphic Assembly */}
          <div className="relative shrink-0 w-[200px] h-[220px] flex items-center justify-center">
            {/* Outer wireframe container */}
            <div className="absolute inset-0 border border-[rgba(199,61,43,0.15)] rounded-[4px]" />

            {/* Animated corner brackets with extended design */}
            <div className="absolute inset-0">
              <svg
                className="absolute left-[-2px] top-[-2px] w-[40px] h-[40px]"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M8 0L0 0L0 8"
                  stroke="rgba(199,61,43,0.5)"
                  strokeWidth="1.5"
                />
                <path
                  d="M16 0L12 0"
                  stroke="rgba(199,61,43,0.3)"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <path
                  d="M0 16L0 12"
                  stroke="rgba(199,61,43,0.3)"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <circle cx="0" cy="0" r="3" fill="rgba(199,61,43,0.6)" />
              </svg>
              <svg
                className="absolute right-[-2px] top-[-2px] w-[40px] h-[40px]"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M32 0L40 0L40 8"
                  stroke="rgba(199,61,43,0.5)"
                  strokeWidth="1.5"
                />
                <path
                  d="M24 0L28 0"
                  stroke="rgba(199,61,43,0.3)"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <path
                  d="M40 16L40 12"
                  stroke="rgba(199,61,43,0.3)"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <circle cx="40" cy="0" r="3" fill="rgba(199,61,43,0.6)" />
              </svg>
              <svg
                className="absolute left-[-2px] bottom-[-2px] w-[40px] h-[40px]"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M8 40L0 40L0 32"
                  stroke="rgba(199,61,43,0.5)"
                  strokeWidth="1.5"
                />
                <path
                  d="M16 40L12 40"
                  stroke="rgba(199,61,43,0.3)"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <path
                  d="M0 24L0 28"
                  stroke="rgba(199,61,43,0.3)"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <circle cx="0" cy="40" r="3" fill="rgba(199,61,43,0.6)" />
              </svg>
              <svg
                className="absolute right-[-2px] bottom-[-2px] w-[40px] h-[40px]"
                viewBox="0 0 40 40"
                fill="none"
              >
                <path
                  d="M32 40L40 40L40 32"
                  stroke="rgba(199,61,43,0.5)"
                  strokeWidth="1.5"
                />
                <path
                  d="M24 40L28 40"
                  stroke="rgba(199,61,43,0.3)"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <path
                  d="M40 24L40 28"
                  stroke="rgba(199,61,43,0.3)"
                  strokeWidth="1"
                  strokeDasharray="2 2"
                />
                <circle cx="40" cy="40" r="3" fill="rgba(199,61,43,0.6)" />
              </svg>
            </div>

            {/* Floating particles around the graphic */}
            <motion.div
              animate={{ y: [-5, 5, -5], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              className="absolute left-[-10px] top-[40px] w-[2px] h-[2px] bg-[#fddbc6] rounded-full shadow-[0_0_4px_rgba(253,219,198,0.8)]"
            />
            <motion.div
              animate={{ y: [5, -5, 5], opacity: [0.4, 0.8, 0.4] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="absolute right-[-10px] top-[60px] w-[2px] h-[2px] bg-[#fddbc6] rounded-full shadow-[0_0_4px_rgba(253,219,198,0.8)]"
            />
            <motion.div
              animate={{ y: [-3, 3, -3], opacity: [0.4, 0.8, 0.4] }}
              transition={{
                duration: 2.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1,
              }}
              className="absolute left-[-8px] bottom-[50px] w-[2px] h-[2px] bg-[#fddbc6] rounded-full shadow-[0_0_4px_rgba(253,219,198,0.8)]"
            />
            <motion.div
              animate={{ y: [4, -4, 4], opacity: [0.4, 0.8, 0.4] }}
              transition={{
                duration: 3.2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5,
              }}
              className="absolute right-[-8px] bottom-[70px] w-[2px] h-[2px] bg-[#fddbc6] rounded-full shadow-[0_0_4px_rgba(253,219,198,0.8)]"
            />

            {/* Horizontal scan line backdrop */}
            <motion.div
              animate={{ top: ["-5%", "105%"] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[rgba(199,61,43,0.3)] to-transparent"
            />

            {/* Side technical indicators */}
            <div className="absolute left-[-18px] top-1/2 -translate-y-1/2 flex flex-col gap-[8px]">
              <motion.div
                animate={{ scaleX: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="w-[8px] h-[1px] bg-[rgba(199,61,43,0.5)]"
              />
              <motion.div
                animate={{ scaleX: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="w-[12px] h-[1px] bg-[rgba(199,61,43,0.4)]"
              />
              <motion.div
                animate={{ scaleX: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.6,
                }}
                className="w-[8px] h-[1px] bg-[rgba(199,61,43,0.5)]"
              />
            </div>

            <div className="absolute right-[-18px] top-1/2 -translate-y-1/2 flex flex-col gap-[8px]">
              <motion.div
                animate={{ scaleX: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.2,
                }}
                className="w-[8px] h-[1px] bg-[rgba(199,61,43,0.5)] ml-auto"
              />
              <motion.div
                animate={{ scaleX: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5,
                }}
                className="w-[12px] h-[1px] bg-[rgba(199,61,43,0.4)] ml-auto"
              />
              <motion.div
                animate={{ scaleX: [0.5, 1, 0.5] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.8,
                }}
                className="w-[8px] h-[1px] bg-[rgba(199,61,43,0.5)] ml-auto"
              />
            </div>

            {/* Glowing accent lines */}
            <motion.div
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-[12px] bg-gradient-to-b from-[rgba(253,219,198,0.6)] to-transparent"
            />
            <motion.div
              animate={{ opacity: [0.2, 0.6, 0.2] }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.25,
              }}
              className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-[12px] bg-gradient-to-t from-[rgba(253,219,198,0.6)] to-transparent"
            />

            <div className="flex-none rotate-[-0.2deg] skew-x-[-0.2deg]">
              <div className="bg-black border-[0.867px] border-[rgba(199,61,43,0.4)] border-solid h-[160px] overflow-clip relative rounded-[9.971px] shadow-[0px_0px_33.238px_0px_rgba(199,61,43,0.3)] w-[100px]">
                <div
                  className="absolute h-full left-[0px] opacity-50 top-[0px] w-full"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(199, 61, 43, 0.5) 1.4085%, rgba(0, 0, 0, 0) 1.4085%), linear-gradient(90deg, rgba(199, 61, 43, 0.5) 1.4085%, rgba(0, 0, 0, 0) 1.4085%)",
                  }}
                />

                <div className="absolute inset-0 p-[6.5px] grid grid-cols-6 grid-rows-8 gap-x-[1px] gap-y-[1.1px]">
                  {PIXELS.map((p, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        opacity: [p.o, Math.min(p.o * 2.5 + 0.1, 1), p.o],
                      }}
                      transition={{
                        duration: 1 + Math.random() * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: Math.random(),
                      }}
                      style={{ backgroundColor: p.c, opacity: p.o }}
                      className="w-full h-full rounded-[1.66px]"
                    />
                  ))}
                </div>

                <motion.div
                  animate={{ top: ["-10px", "165px", "-10px"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute h-[3.332px] left-[0px] w-full z-10"
                >
                  <div className="absolute bg-[#fddbc6] drop-shadow-[0px_0px_6.648px_#c73d2b] h-full w-full" />
                  <div className="absolute bg-[#c73d2b] blur-[4.986px] h-full w-full" />
                  <div className="absolute bg-gradient-to-t from-[rgba(199,61,43,0.5)] h-[39.979px] left-[0.08px] to-[rgba(0,0,0,0)] top-[-39.9px] w-full" />
                </motion.div>
              </div>
            </div>
          </div>

          {/* Timeline & Typography Section */}
          <div className="relative w-full flex flex-col items-center justify-center px-[16px]">
            <div className="flex flex-col gap-[6px] items-center text-center mb-[24px]">
              <p className="font-['SF_Pro_Text',sans-serif] font-medium text-[#fddbc6] text-[20px]">
                Đang tạo ảnh của bạn...
              </p>
              <p className="font-normal text-[#9b9b9b] text-[13px] leading-[22px]">
                Quá trình có thể mất vài phút. Vui lòng chờ...
              </p>
            </div>

            {/* Dynamic 4-Step Vertical Stepper */}
            <div className="flex flex-col items-start w-[305px] relative">
              <AnimatePresence mode="sync">
                {STEPS.filter((step) => step.id <= visibleSteps).map(
                  (step, index, visibleArray) => {
                    const isActive = step.id === activeStep;
                    const isDone = step.id < activeStep;
                    const isLast = index === visibleArray.length - 1;

                    return (
                      <motion.div
                        key={step.id}
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.4 }}
                        className={`relative w-full shrink-0 flex flex-col justify-start transition-all duration-300 ${isActive ? "h-[46px] mb-[16px]" : "h-[22px] mb-[16px]"}`}
                      >
                        {/* SVG Icon Area */}
                        <div className="absolute left-0 size-[22px] top-0 flex items-center justify-center z-10 bg-[#0d0d0f] rounded-full">
                          {isDone && (
                            <motion.svg
                              initial={{ scale: 0 }}
                              animate={{ scale: 1 }}
                              className="absolute inset-0 size-full"
                              fill="none"
                              viewBox="0 0 22 22"
                            >
                              <path
                                d="M11 21C16.5 21 21 16.5 21 11C21 5.5 16.5 1 11 1C5.5 1 1 5.5 1 11C1 16.5 5.5 21 11 21Z"
                                stroke="#00FF66"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.83"
                              />
                              <path
                                d="M7 11.5L10 14.5L15 7.5"
                                stroke="#00FF66"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.83"
                              />
                            </motion.svg>
                          )}
                          {isActive && (
                            <>
                              <div className="absolute flex items-center justify-center size-[30.562px]">
                                <div className="border-[1.722px] border-[rgba(0,0,0,0)] border-solid rounded-[19260780px] size-[22px]" />
                              </div>
                              <motion.div
                                animate={{ rotate: 360 }}
                                transition={{
                                  duration: 1.5,
                                  repeat: Infinity,
                                  ease: "linear",
                                }}
                                className="absolute size-[17.6px]"
                              >
                                <svg
                                  className="absolute inset-0 size-full"
                                  fill="none"
                                  viewBox="0 0 17.6 17.6"
                                >
                                  <circle
                                    cx="8.8"
                                    cy="8.8"
                                    r="7"
                                    stroke="#00E5FF"
                                    strokeWidth="1.5"
                                    strokeDasharray="10 10"
                                    strokeLinecap="round"
                                    opacity="0.8"
                                  />
                                </svg>
                              </motion.div>
                            </>
                          )}
                        </div>

                        {/* Dynamic Connecting Line */}
                        {!isLast && (
                          <div
                            className="absolute bg-[rgba(255,255,255,0.1)] w-[2px] left-[10px] top-[22px] transition-all duration-300"
                            style={{ height: isActive ? "40px" : "16px" }}
                          />
                        )}

                        {/* Step Content */}
                        <div className="absolute flex flex-col gap-[4.4px] left-[40px] top-[0px] w-[265px]">
                          <p
                            className={`font-medium text-[15px] leading-[22px] transition-colors duration-300 ${isDone ? "text-[#9b9b9b]" : isActive ? "text-[#fddbc6]" : "text-[rgba(255,255,255,0.4)]"}`}
                          >
                            {step.text}
                            {isActive && <AnimatedDots />}
                          </p>

                          {/* Active Progress Bar Dropdown */}
                          <AnimatePresence>
                            {isActive && (
                              <motion.div
                                initial={{
                                  opacity: 0,
                                  height: 0,
                                  marginTop: 0,
                                }}
                                animate={{
                                  opacity: 1,
                                  height: "23px",
                                  marginTop: "0px",
                                }}
                                exit={{ opacity: 0, height: 0, marginTop: 0 }}
                                className="flex gap-[17.6px] items-center w-full overflow-hidden"
                              >
                                <div className="bg-black flex-[186.368_0_0] h-[6.6px] relative rounded-[100px] border-[0.574px] border-[rgba(255,255,255,0.05)] overflow-hidden">
                                  <div
                                    className="absolute left-0 top-0 h-full transition-all duration-75 ease-linear"
                                    style={{
                                      width: `${Math.floor(progress)}%`,
                                      backgroundImage:
                                        "linear-gradient(90deg, rgb(199, 61, 43) 0%, rgb(204, 75, 55) 7.1429%, rgb(209, 87, 67) 14.286%, rgb(214, 99, 78) 21.429%, rgb(218, 111, 89) 28.571%, rgb(222, 122, 99) 35.714%, rgb(227, 133, 110) 42.857%, rgb(230, 144, 121) 50%, rgb(234, 155, 132) 57.143%, rgb(238, 165, 143) 64.286%, rgb(241, 176, 154) 71.429%, rgb(244, 187, 165) 78.571%, rgb(248, 198, 176) 85.714%, rgb(250, 208, 187) 92.857%, rgb(253, 219, 198) 100%)",
                                    }}
                                  >
                                    <motion.div
                                      animate={{ x: ["-100%", "200%"] }}
                                      transition={{
                                        duration: 2.5,
                                        repeat: Infinity,
                                        ease: "linear",
                                      }}
                                      className="absolute bg-gradient-to-r from-[rgba(3,2,1,0)] h-full w-[138.6px] via-[rgba(255,255,255,0.5)] to-[#030201] rounded-[100px] top-[-0.03px]"
                                    />
                                  </div>
                                </div>
                                <p className="font-medium text-[#fddbc6] text-[15px] w-[37px]">
                                  {Math.floor(progress)}%
                                </p>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </motion.div>
                    );
                  },
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
