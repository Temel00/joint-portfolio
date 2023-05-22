import React from "react";
import {motion as m} from "framer-motion";

export const Hire = () => (
  <m.div
    className="hirePage"
    initial={{y: 1600, opacity: 0}}
    animate={{y: 0, opacity: 1}}
    exit={{y: 1600, opacity: 0}}
    transition={{duration: 1, ease: "easeInOut"}}
  >
    <h1>Hire Me Page</h1>
    <div className="headShotCrop">
      <img
        className="headShot"
        src="../assets/tempHeadshot.jpg"
        alt="my headshot"
      />
    </div>
  </m.div>
);
