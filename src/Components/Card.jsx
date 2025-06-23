import React from "react";

function Card({
  city,
  bgImg,
  secondHeading,
  price,
  airPlanePara,
  buttonContent,
}) {
  return (
    <div className="card-bg mt-4 px-2">
      <div
        className="card card-styles"
        style={{ backgroundImage: `url(${bgImg})` }}
      >
        {/* Dark overlay */}
        <div className="card-overlay" />

        {/* Heart icon */}
        <div className="heart-bg">
          <i className="bi bi-heart mt-1 heart-icon fw-bold" />
        </div>

        {/* Main content */}
        <div className="card-body bottom-part">
          <h2 className="fw-bold">{city}</h2>
          <p className="mb-1">{secondHeading}</p>

          <div className="d-flex mt-2 gap-2 small">
            <span><i className="bi bi-tag"></i></span>
            <span>

              from <strong>${price}</strong>
            </span>
            <span>
              <i className="bi bi-airplane" /> {airPlanePara}
            </span>
          </div>

          <button className="btn btn-light mt-3 w-100 rounded-pill">
            {buttonContent}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
