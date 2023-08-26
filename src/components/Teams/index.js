import React from "react";
import "./index.css";
const collegeArray = [
  "Cambridge University",
  "Harvard University",
  "University of California",
  "ETH Zurich",
  "Max Planck",
  "University of Edinburgh",
  "John's Hopkins",
  "Michigan State",
  "University of illinois",
  "Humboldt University Berlin",
];

const Teams = () => {
  return (
    <div className="teams-container">
      <h1 className="main-heading">Team Page</h1>
      <h2>
        Learn from Scientists, research scholars from the top institutes in the
        world
      </h2>
      <div className="college-container">
        {collegeArray.map((eachCollege) => (
          <div className="college-box">
            <h1 className="college-heading">{eachCollege}</h1>
          </div>
        ))}
      </div>
      <h1 className="main-heading">Meet your mentors</h1>
    </div>
  );
};

export default Teams;
