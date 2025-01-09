import React from "react";
import "../App.css";
import OurStory from './About/AboutOurStory';
import MeetOurTeam  from './About/AboutMeetOurTeam';
import AboutFeatures from "./About/AboutFeatures";

export default function About() {
  return (
    <div className="About">
      <div>
        <OurStory/>
      </div>
      <div>
        <MeetOurTeam/>
      </div>
      <div>
        <AboutFeatures/>
      </div>
    </div>
  );
}
