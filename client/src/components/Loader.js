import React from "react";
/* import style from '../styles/Loader.module.css' */

const Loader = () => {
  return (
    <div className="loaderContainer">
      <svg width="100" height="100" viewBox="0 0 100 100">
        <polyline
          className="line-cornered stroke-still"
          points="0,0 100,0 100,100"
          strokeWidth="10"
          fill="none"
        ></polyline>
        <polyline
          className="line-cornered stroke-still"
          points="0,0 0,100 100,100"
          strokeWidth="10"
          fill="none"
        ></polyline>
        <polyline
          className="line-cornered stroke-animation"
          points="0,0 100,0 100,100"
          strokeWidth="10"
          fill="none"
        ></polyline>
        <polyline
          className="line-cornered stroke-animation"
          points="0,0 0,100 100,100"
          strokeWidth="10"
          fill="none"
        ></polyline>
      </svg>

      <h3>Aguarde, isso pode levar alguns instantes...</h3>
    </div>
  );
};

export default Loader;
