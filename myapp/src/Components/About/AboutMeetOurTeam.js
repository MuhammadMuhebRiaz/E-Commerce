import React from 'react'
import '../../App.css'

import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import img1 from "../images/About Emma.png"; 
import img2 from "../images/About Will.png"; 
import img3 from "../images/About Tom.png"; 
 

export default function AboutMeetOurTeam() {
    
const teamMembers = [
    {
    name: "Emma Watson",
    role: "Managing Director",
    image:img1,
    twitterIcon: "fa-brands fa-twitter",
    instagramIcon: "fa-brands fa-instagram",
    linkedinIcon: "fa-brands fa-linkedin",
    },
    {
    name: "Will Smith",
    role: "Product Designer",
    image: img2,
    twitterIcon: "fa-brands fa-twitter",
    instagramIcon: "fa-brands fa-instagram",
    linkedinIcon: "fa-brands fa-linkedin",
    },
    {
    name: "Tom Cruise",
    role: "Founder & Chairman", 
    image: img3,
    twitterIcon: "fa-brands fa-twitter",
    instagramIcon: "fa-brands fa-instagram",
    linkedinIcon: "fa-brands fa-linkedin",
    },
    {
    name: "Emma Watson",
    role: "Managing Director",
    image:img1,
    twitterIcon: "fa-brands fa-twitter",
    instagramIcon: "fa-brands fa-instagram",
    linkedinIcon: "fa-brands fa-linkedin",
    },
    {
    name: "Will Smith",
    role: "Product Designer",
    image: img2,
    twitterIcon: "fa-brands fa-twitter",
    instagramIcon: "fa-brands fa-instagram",
    linkedinIcon: "fa-brands fa-linkedin",
    },
    {
    name: "Tom Cruise",
    role: "Founder & Chairman", 
    image: img3,
    twitterIcon: "fa-brands fa-twitter",
    instagramIcon: "fa-brands fa-instagram",
    linkedinIcon: "fa-brands fa-linkedin",
    },
];
const TeamMember = ({ name, role, image, twitterIcon, instagramIcon, linkedinIcon }) => (
    <div className="team-member">
      <img src={image} alt={`${name}`} />
      <h3>{name}</h3>
      <p>{role}</p>
      <div className="social-icons">
        <i className={twitterIcon}></i>
        <i className={instagramIcon}></i>
        <i className={linkedinIcon}></i>
      </div>
    </div>
  );
  return (
    <>
        <div className="team-section">
            <div className="team">
                <h2>Meet Our Team</h2>
                <Swiper modules={[Autoplay, Pagination]}
                        spaceBetween={30}
                        slidesPerView={3}
                        loop={true}
                        autoplay={{ delay: 2000, disableOnInteraction: false }}
                        speed={800}
                        pagination={{ clickable: true }}
                        breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                        }} >
                    {teamMembers.map((member, index) => (
                    <SwiperSlide key={index}>
                    <TeamMember {...member} />
                    </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    </>
    
  )
}
