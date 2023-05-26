// @ts-nocheck
import React from "react";
import {motion as m} from "framer-motion";

export const Hire = () => {
  return (
    <m.div
      className="hirePage"
      initial={{y: 1600, opacity: 0}}
      animate={{y: 0, opacity: 1}}
      exit={{y: 1600, opacity: 0}}
      transition={{duration: 1, ease: "easeInOut"}}
    >
      <h1 className="hireTitle">Why Me?</h1>
      <div className="modelCont">
        <model-viewer
          src="../../assets/PortfolioAvatar.glb"
          poster="../../assets/ShopifyModels/Chair.webp"
          shadow-intensity="1"
          ar
          field-of-view="90deg"
          min-field-of-view="12deg"
          max-field-of-view="12deg"
          camera-orbit="0deg 95deg 0deg"
          camera-target="0m .15m .25m"
          camera-controls
          touch-action="pan-x"
          alt="Tyler Emel Avatar"
        ></model-viewer>
        <div className="avaTitle">
          <h1>Tyler Emel</h1>
        </div>
      </div>
      <div className="hireContent">
        <h2>Skills</h2>
        <ul className="skillsBin">
          <li>
            <i class="fa-brands fa-html5"></i> HTML
          </li>
          <li className="skillRating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </li>
          <li>
            <i class="fa-brands fa-css3"></i> CSS
          </li>
          <li className="skillRating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </li>
          <li>
            <i class="fa-brands fa-java"></i> Java
          </li>
          <li className="skillRating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </li>
          <li>
            <svg
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 400 400"
              width="14"
              height="14"
            >
              <path class="st0" d="M0 200V0h400v400H0" />
              <path
                class="st1"
                d="M87.7 200.7V217h52v148h36.9V217h52v-16c0-9 0-16.3-.4-16.5 0-.3-31.7-.4-70.2-.4l-70 .3v16.4l-.3-.1zM321.4 184c10.2 2.4 18 7 25 14.3 3.7 4 9.2 11 9.6 12.8 0 .6-17.3 12.3-27.8 18.8-.4.3-2-1.4-3.6-4-5.2-7.4-10.5-10.6-18.8-11.2-12-.8-20 5.5-20 16 0 3.2.6 5 1.8 7.6 2.7 5.5 7.7 8.8 23.2 15.6 28.6 12.3 41 20.4 48.5 32 8.5 13 10.4 33.4 4.7 48.7-6.4 16.7-22 28-44.3 31.7-7 1.2-23 1-30.5-.3-16-3-31.3-11-40.7-21.3-3.7-4-10.8-14.7-10.4-15.4l3.8-2.4 15-8.7 11.3-6.6 2.6 3.5c3.3 5.2 10.7 12.2 15 14.6 13 6.7 30.4 5.8 39-2 3.7-3.4 5.3-7 5.3-12 0-4.6-.7-6.7-3-10.2-3.2-4.4-9.6-8-27.6-16-20.7-8.8-29.5-14.4-37.7-23-4.7-5.2-9-13.3-11-20-1.5-5.8-2-20-.6-25.7 4.3-20 19.4-34 41-38 7-1.4 23.5-.8 30.4 1l-.2.2z"
              />
            </svg>
            &nbsp; Typescript
          </li>
          <li className="skillRating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>
          </li>
          <li>
            <i class="fa-brands fa-react"></i> React
          </li>
          <li className="skillRating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star-half-stroke"></i>
            <i class="fa-regular fa-star"></i>
          </li>
          <li>
            <i class="fa-solid fa-compass-drafting"></i> CAD
          </li>
          <li className="skillRating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-regular fa-star"></i>
            <i class="fa-regular fa-star"></i>
          </li>
          <li>
            <i class="fa-solid fa-palette"></i> Adobe Creative
          </li>
          <li className="skillRating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </li>
          <li>
            <i class="fa-solid fa-video"></i> Video Production
          </li>
          <li className="skillRating">
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
            <i class="fa-solid fa-star"></i>
          </li>
        </ul>
        <div className="hireLinksBin">
          <a
            href="../../public/assets/TylerEmelResume.pdf"
            download="Tyler_Emel_CV"
            className="resumeLink"
          >
            My Resume<i class="fa-solid fa-file"></i>
          </a>
          <a href="https://github.com/Temel00" className="resumeLink">
            Github<i class="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </m.div>
  );
};
