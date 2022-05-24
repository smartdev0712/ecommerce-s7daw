import React from "react";

const PreLoader = () => {
  return (
    <div className="preloader">
      <div className="loader">
        <img src="/assets/images/loader.png" alt="loader" />
        <p>Please wait for a moment. Now we are submitting your info.</p>
      </div>
    </div>
  );
};
export default PreLoader;
