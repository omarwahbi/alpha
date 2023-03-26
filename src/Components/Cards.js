import React, { useEffect, useState } from "react";
import Card1 from "../Assets/Card1.png";
import Card2 from "../Assets/Card2.png";
import Card3 from "../Assets/Card3.png";

export default function Cards() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);
  return (
    <div>
      <div className="row row-cols-1 row-cols-md-3 g-4 pb-3">
        <div className="col">
          <div
            className={`card h-100 card-animation ${visible ? "visible" : ""}`}
          >
            <img src={Card1} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div
            className={`card h-100 card-animation ${visible ? "visible" : ""}`}
          >
            <img src={Card1} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div
            className={`card h-100 card-animation ${visible ? "visible" : ""}`}
          >
            <img src={Card1} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div
            className={`card h-100 card-animation ${visible ? "visible" : ""}`}
          >
            <img src={Card1} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div
            className={`card h-100 card-animation ${visible ? "visible" : ""}`}
          >
            <img src={Card1} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div
            className={`card h-100 card-animation ${visible ? "visible" : ""}`}
          >
            <img src={Card1} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div
            className={`card h-100 card-animation ${visible ? "visible" : ""}`}
          >
            <img src={Card1} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div
            className={`card h-100 card-animation ${visible ? "visible" : ""}`}
          >
            <img src={Card1} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div
            className={`card h-100 card-animation ${visible ? "visible" : ""}`}
          >
            <img src={Card2} className="card-img-top" alt="..." />
          </div>
        </div>
        <div className="col">
          <div
            className={`card h-100 card-animation ${visible ? "visible" : ""}`}
          >
            <img src={Card3} className="card-img-top" alt="..." />
          </div>
        </div>
      </div>
    </div>
  );
}
