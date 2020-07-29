import React from "react";

function Resume(props) {
  const {year, position, graduation, university, company, detail_1, detail_2, detail_3} = props.resumeData;
  return (
    <div className="mi-resume mt-30">
      <div className="mi-resume-summary">
        <h6 className="mi-resume-year">{year}</h6>
      </div>
      <div className="mi-resume-details">
        <h5>{position || graduation}</h5>
        <h6 className="mi-resume-company">{company || university}</h6>
        <ul>
          {!detail_1 ? null : <li>{detail_1}</li> }
          {!detail_2 ? null : <li>{detail_2}</li> }
          {!detail_3 ? null : <li>{detail_3}</li> }
        </ul>
      </div>
    </div>
  );
};

export default Resume;
