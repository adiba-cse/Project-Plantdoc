import React, { useState } from "react";

const CurePage = () => {

  const [currentUser, setCurrentUser] = useState(JSON.parse(sessionStorage.getItem('user')));

  const [diseaseData, setDiseaseData] = useState(JSON.parse(sessionStorage.getItem('diseaseData')));

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundImage:
          'url("https://i.pinimg.com/originals/48/93/fc/4893fc6540d38c540280130efa16ecb3.jpg")',
          backgroundPosition:"no-repeat",
          backgroundSize:"cover"
      }}
    >
      <div className="container py-5">
        <div className="card">
          <div className="card-body">
          <img
            className="img-fluid"
            style={{ display: "block", margin: "auto" }}
            src={diseaseData.cure.image}
            alt=""
          />
          <h1 className="mb-4 text-success text-center fw-bold">
            Management of {diseaseData.cure.heading}
          </h1>
          <div className="row">
            <div className=""></div>
            <div className="col-md-12">
              <p className="h4">
              {diseaseData.cure.summary}
              </p>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurePage;
