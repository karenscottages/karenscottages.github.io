import React from "react";

export const CaptionedImage = ({ url, children }) => <div className="column is-3-desktop is-6-tablet">
  <div className="intro-item mb-5 mb-lg-0">
    <img src={url} alt="" className=" w-100" />
    <p> {children} </p>
  </div>
</div>;
