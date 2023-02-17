import React from "react";
import "./Homepage.css";
import Logo from "./images/camera1.svg";
export default function () {
  return (
    <div className="homepage">
      <img src="https://firebasestorage.googleapis.com/v0/b/employee-management-syst-c4d72.appspot.com/o/image%2020.svg?alt=media&token=2e502dcc-9622-4d19-9ca1-b28e24aa97cf" />
      <div className="heading1">
        <h1 className="heading2_1">Bridge the gap</h1>
        <div className="middlepart">
          <img
            className="image_shift"
            src="https://firebasestorage.googleapis.com/v0/b/employee-management-syst-c4d72.appspot.com/o/smallcam.svg?alt=media&token=b1daf827-df52-41cd-8382-6edd58a8885c"
            alt=" my img"
          />
          <h1 className="heading2_2">between</h1>
        </div>
        <h1 className="heading2_3">seen and unseen</h1>
      </div>

      <img
        className="cam"
        src="https://firebasestorage.googleapis.com/v0/b/employee-management-syst-c4d72.appspot.com/o/image%2015.svg?alt=media&token=757b6515-8b7f-442a-bb56-7203f02cefb5"
      />
      <button className="end_btn">Get Started</button>
    </div>
  );
}
