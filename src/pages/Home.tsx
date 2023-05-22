import React from "react";
import {motion as m} from "framer-motion";

export const Home = () => (
  <div className="homePage">
    <m.h1
      className="homeTitle"
      key="title"
      initial={{opacity: 0}}
      animate={{opacity: 1}}
      exit={{y: [0, -300, 300], opacity: [1, 1, 0]}}
      transition={{duration: 1.8, ease: "easeInOut"}}
    >
      T<span className="maine">e</span>mel
    </m.h1>
    <section className="waves">
      <m.div
        className="wave wave0"
        key="wave0"
        initial={{y: 1600}}
        animate={{y: 0}}
        exit={{y: 1600, transition: {duration: 1, delay: 1.4}}}
        transition={{duration: 0.8, ease: "easeOut"}}
      >
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366 66.63"
        >
          <g id="Layer_17">
            <path
              fill="currentColor"
              d="m0,20.46s369,11.18,664,11.18S1366,0,1366,0v66.63H0V20.46Z"
            />
          </g>
        </svg>
      </m.div>
      <m.div
        className="wave wave1"
        key="wave1"
        initial={{y: 1600}}
        animate={{y: 0}}
        exit={{y: 1600, transition: {duration: 1, delay: 1.2}}}
        transition={{duration: 0.8, ease: "easeOut", delay: 0.2}}
      >
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366 131.53"
        >
          <g id="Layer_13">
            <path
              fill="currentColor"
              d="m0,20.53s362,20,515,4,589-44,851-4v111H0V20.53Z"
            />
          </g>
        </svg>
      </m.div>
      <m.div
        className="wave wave2"
        key="wave2"
        initial={{y: 1600}}
        animate={{y: 0}}
        exit={{y: 1600, transition: {duration: 1, delay: 1}}}
        transition={{duration: 0.8, ease: "easeOut", delay: 0.4}}
      >
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366 214.53"
        >
          <g id="Layer_14">
            <path
              fill="currentColor"
              d="m0,28.36s155-49.82,301-9.82,326,28,367,18,224-62,375-21,323,12.73,323,12.73v186.27H0V28.36Z"
            />
          </g>
        </svg>
      </m.div>
      <m.div
        className="wave wave3"
        key="wave3"
        initial={{y: 1600}}
        animate={{y: 0}}
        exit={{y: 1600, transition: {duration: 1, delay: 0.8}}}
        transition={{duration: 0.8, ease: "easeOut", delay: 0.6}}
      >
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366 257.09"
        >
          <g id="Layer_18">
            <path
              fill="currentColor"
              d="m0,7.16s197.96,33.5,362.48,33.5S766.89,0,1010.95,0s355.05,30.52,355.05,30.52v256.57H0V7.16Z"
            />
          </g>
        </svg>
      </m.div>
      <m.div
        className="wave wave4"
        key="wave4"
        initial={{y: 1600}}
        animate={{y: 0}}
        exit={{y: 1600, transition: {duration: 1, delay: 0.6}}}
        transition={{duration: 0.8, ease: "easeOut", delay: 0.8}}
      >
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366 295"
        >
          <g id="Layer_19">
            <path
              fill="currentColor"
              d="m0,64.91S287,0,539,0s827,27.91,827,27.91v307.09H0V64.91Z"
            />
          </g>
        </svg>
      </m.div>
      <m.div
        className="wave wave5"
        key="wave5"
        initial={{y: 1600}}
        animate={{y: 0}}
        exit={{y: 1600, transition: {duration: 1, delay: 0.4}}}
        transition={{duration: 0.8, ease: "easeOut", delay: 1}}
      >
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366 360.77"
        >
          <g id="Layer_20">
            <path
              fill="currentColor"
              d="m0,19.7s165.59,13.45,372,10.32C682.04,25.31,1096.13,3.05,1275,.01c59-1,91,49.51,91,49.51v371.25H0V19.7Z"
            />
          </g>
        </svg>
      </m.div>
      <m.div
        className="wave wave6"
        key="wave6"
        initial={{y: 1600}}
        animate={{y: 0}}
        exit={{y: 1600, transition: {duration: 1, delay: 0.2}}}
        transition={{duration: 0.8, ease: "easeOut", delay: 1.2}}
      >
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366 414.78"
        >
          <g id="Layer_21">
            <path
              fill="currentColor"
              d="m0,15.63s264,37.37,555,27.37C677.52,43,904,0,973,0s393,7.32,393,7.32v487.46L0,490.42V15.63Z"
            />
          </g>
        </svg>
      </m.div>
      <m.div
        className="wave wave7"
        key="wave7"
        initial={{y: 1600}}
        animate={{y: 0}}
        exit={{y: 1600, transition: {duration: 1}}}
        transition={{duration: 0.8, ease: "easeOut", delay: 1.4}}
      >
        <svg
          id="Layer_2"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1366 424.53"
        >
          <g id="Layer_14_copy">
            <path
              fill="currentColor"
              d="m0,17.99s155,49.82,301,9.82S627-.18,668,9.82s224,62,375,21,323-12.73,323-12.73v466.44H0V17.99Z"
            />
          </g>
        </svg>
      </m.div>
    </section>
  </div>
);
