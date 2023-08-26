import React from "react";
import "./index.css";
import profile from "../../assets/profile.png";
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
const mentorArray = [
  { name: "Tiasha Das", college: "IISER Berhampur" },
  { name: "Mandar Tornekar", college: "GMC Dhule" },
  { name: "Sehasree Mohanta", college: "IACS" },
  { name: "Aditya Nayak", college: "IISER Mohali" },
  { name: "Siddhart Bhat", college: "IISER Thiruvananthapuram" },
  { name: "Ripunjay Dwived", college: "CMI" },
  { name: "Tanmay", college: "NISER" },
  { name: "Sagar Rathore", college: "IISER Berhampur" },
  { name: "Saumya Prakash", college: "NISER" },
  { name: "Saumya Shisodiya", college: "HBTU Kanpur" },
  { name: "Veena Sri", college: "IISER TVM" },
  { name: "Adityarup Laha", college: "ISI, Kolkata" },
];

const Teams = () => {
  return (
    <div className="teams-container">
      <h1 className="main-heading">Team Page</h1>
      <h2 className="sub-heading">
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
      <div className="mentor-container">
        {mentorArray.map((eachMentor) => (
          <div className="mentor-box">
            <img className="mentor-image" src={profile} />
            <span className="mentor-name">{eachMentor.name}</span>
            <span className="mentor-college">{eachMentor.college}</span>
          </div>
        ))}
      </div>
      <div className="advisor-container">
        <h1 className="main-heading">Mentor & Advisor</h1>
        <div className="mentor-container">
          <div className="mentor-box">
            <img className="mentor-image" src={profile} />
            <span className="mentor-name">Dr Oukar</span>
            <span className="mentor-college">
              Principal Project Scientist at Indian Institute of Technology,
              Madras
            </span>
          </div>
          <div className="advisor-box">
            <img className="mentor-image" src={profile} />
            <span className="mentor-name">Vivek Dwivedi</span>
            <a className="mentor-button">
              Message <span className="hide">him now</span>
            </a>
          </div>
          <div className="advisor-box">
            <img className="mentor-image" src={profile} />
            <span className="mentor-name">Akhil Tripathi</span>
            <a className="mentor-button">
              Message <span className="hide">him now</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Teams;
