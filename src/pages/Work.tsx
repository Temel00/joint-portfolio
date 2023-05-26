import React from "react";
import {motion as m} from "framer-motion";

export const Work = () => (
  <div className="workPage">
    <m.h1
      className="workTitle"
      key="title"
      initial={{y: -200, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      exit={{
        y: -200,
        opacity: 0,
        transition: {duration: 0.8, ease: "easeInOut", delay: 0.8},
      }}
      transition={{duration: 0.8, ease: "easeInOut"}}
    >
      My Work
    </m.h1>
    <m.div
      className="workCard"
      key="card1"
      initial={{x: -200, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      exit={{
        x: -200,
        opacity: 0,
        transition: {duration: 0.8, ease: "easeInOut", delay: 0.6},
      }}
      transition={{duration: 0.8, ease: "easeInOut", delay: 0.6}}
    >
      <div>
        <h2 className="nameHead">Domino Scanner</h2>
        <p className="workDesc">
          This is my concept for a domino scanner done with barcode scanning and
          utilizing the QuaggaJS library tools. This originally started as a
          project for my parents, who were playing a lot of mexican train
          dominoes with another couple. They asked if their was a quick way to
          count the pips on leftover dominoes, so I started brainstorming. The
          project took many forms before realizing that barcodes was the most
          practical solution.
        </p>
      </div>
      <a href="https://dominoscannerv4.web.app/" className="workCard-btn">
        Go To
      </a>
    </m.div>
    <m.div
      className="workCard"
      key="card2"
      initial={{x: -200, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      exit={{
        x: -200,
        opacity: 0,
        transition: {duration: 0.8, ease: "easeInOut", delay: 0.4},
      }}
      transition={{duration: 0.8, ease: "easeInOut", delay: 0.8}}
    >
      <div>
        <h2 className="nameHead">Color Palette Generator</h2>
        <p className="workDesc">
          A simple minimalist color palette generator that allows the user to
          lock the color panels and copy the hex code directly. Useful for web
          and graphic design and written on Replit to display source code.
        </p>
      </div>
      <a
        href="https://replit.com/@Temel00/Color-Palette-Generator"
        className="workCard-btn"
      >
        Go To
      </a>
    </m.div>
    <m.div
      className="workCard"
      key="card3"
      initial={{x: -200, opacity: 0}}
      animate={{x: 0, opacity: 1}}
      exit={{
        x: -200,
        opacity: 0,
        transition: {duration: 0.8, ease: "easeInOut", delay: 0.2},
      }}
      transition={{duration: 0.8, ease: "easeInOut", delay: 1}}
    >
      <div>
        <h2 className="nameHead">Disc Golf Putting Games</h2>
        <p className="workDesc">
          I'm an avid disc golfer and I wanted to improve aspects of my game
          while competing against my brother. We put together some putting games
          that we could compete head-to-head against or with friends and
          developed an app to help us keep score.
        </p>
      </div>
      <a href="https://www.fantasyfrolf.com/" className="workCard-btn">
        Go To
      </a>
    </m.div>
  </div>
);
