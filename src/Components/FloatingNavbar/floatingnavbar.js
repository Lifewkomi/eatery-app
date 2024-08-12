import React, { useEffect, useState } from "react";
import { motion, AnimatePresence,useScroll,useMotionValueEvent,} from "framer-motion";
import{ cn } from "../../lib/util";
import { Link } from "react-router-dom";
import '../../index.css';

export default function FloatingNav({ navItems, className }){

  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useMotionValueEvent(scrollY, "change", (current) => {
    const direction = current - lastScrollY;
    if (scrollY.get() < 100) {
      setVisible(false);
    } else {
      setVisible(direction < 0);
    }
    setLastScrollY(current);
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
          duration: 0.5,
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
      </motion.div>
    </AnimatePresence>
  );
};


