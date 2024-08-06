import React, { useState } from "react";
import { motion, AnimatePresence,useScroll,useMotionValueEvent,} from "framer-motion";
import{ cn } from "../../lib/util";
import { Link } from "react-router-dom";

export default function FloatingNav({ navItems, className }){
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      const direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        setVisible(direction < 0);
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 1,
        }}
        className={cn(
          "flex max-w-fit fixed top-10 inset-x-0 mx-auto border border-transparent rounded-full bg-black shadow-[0px_2px_3px_-1px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)] z-[5000] pr-2 pl-8 py-2 items-center justify-center space-x-8",
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
          key={`link=${idx}`}
          to={navItem.link}
          className="flex items-center space-x-2"
        >
          <span className="block sm:hidden">{navItem.icon}</span>
          <span className="hidden sm:block text-lg text-[#eff539]">{navItem.name}</span>
        </Link>
        ))}
        <button className="border text-sm font-medium relative border-neutral-200 text-amber-400 px-4 py-2 rounded-full">
          <span className="text-green-300">Login</span>
          <span className="absolute inset-x-0 w-1/2 mx-auto -bottom-px bg-gradient-to-r from-transparent via-blue-500 to-transparent h-px" />
        </button>
      </motion.div>
    </AnimatePresence>
  );
};


