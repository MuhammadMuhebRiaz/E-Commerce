import React from "react";

import "../index.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { Autoplay, Pagination } from "swiper";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import img1 from "./images/About Side Image.png";
import img2 from "./images/About Emma.png";
import img3 from "./images/About Will.png";
import img4 from "./images/About Tom.png";
import img5 from "./images/Services.png";
import img6 from "./images/Monthly.png";
import img7 from "./images/customer.png";
import img8 from "./images/Annual.png";
import img9 from "./images/fastdelivery.png";
import img10 from "./images/support.png";
import img11 from "./images/money.png";

function TeamMember({ name, role, image, twitterIcon, instagramIcon, linkedinIcon }) {
  return (
    <SwiperSlide className="team-member">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{role}</p>
      <FontAwesomeIcon className="icon" icon={twitterIcon} />
      <FontAwesomeIcon className="icon" icon={instagramIcon} />
      <FontAwesomeIcon className="icon" icon={linkedinIcon} />
    </SwiperSlide>
  );
}

function App() {
  const teamMembers = [
    {
      name: "Tom Cruise",
      role: "Founder & Chairman",
      image: img4,
      twitterIcon: faTwitter,
      instagramIcon: faInstagram,
      linkedinIcon: faLinkedin,
    },
    {
      name: "Emma Watson",
      role: "Managing Director",
      image: img2,
      twitterIcon: faTwitter,
      instagramIcon: faInstagram,
      linkedinIcon: faLinkedin,
    },
    {
      name: "Will Smith",
      role: "Product Designer",
      image: img3,
      twitterIcon: faTwitter,
      instagramIcon: faInstagram,
      linkedinIcon: faLinkedin,
    },
  ];

  return (
    <div className="content">
      {/* Our Story Section */}
      <section className="our-story">
        <h2>Our Story</h2>
        <p>
          Launched in 2015, Exclusive is South Asia's premier online shopping
          marketplace with an active presence in Bangladesh. Supported by a wide
          range of tailored marketing, data, and service solutions, Exclusive
          has 10,500 sellers and 300 brands and serves 3 million customers
          across the region.
        </p>
        <p>
          Exclusive has more than 1 Million products to offer, growing at a very
          fast pace. Exclusive offers a diverse assortment in categories ranging
          from consumer products.
        </p>
        <div className="story-image">
          <img src={img1} alt="Shopping Ladies" />
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="stat-box">
          <img src={img5} alt="Sellers" /><br />
          10.5k<br />Sellers active on our site
        </div>
        <div className="stat-box highlight">
          <img src={img6} alt="Monthly Sales" /><br />
          33k<br />Monthly Product Sale
        </div>
        <div className="stat-box">
          <img src={img7} alt="Customers" /><br />
          45.5k<br />
          Customers active in our site
        </div>
        <div className="stat-box">
          <img src={img8} alt="Annual Sales" /><br />
          25k<br />Annual gross sales on our site
        </div>
      </section>

      {/* Team Section */}
      <div className="team-section">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          speed={800}
          pagination={{ clickable: true }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {teamMembers.map((member, index) => (
            <TeamMember
              key={index}
              name={member.name}
              role={member.role}
              image={member.image}
              twitterIcon={member.twitterIcon}
              instagramIcon={member.instagramIcon}
              linkedinIcon={member.linkedinIcon}
            />
          ))}
        </Swiper>
      </div>

      {/* Features Section */}
      <section className="features">
        <div>
          <img src={img9} alt="Fast Delivery" /> <br />
          <h1>Free and Fast Delivery</h1>
          <p>Free delivery for all orders over $140</p>
        </div>
        <div>
          <img src={img10} alt="Customer Support" /> <br />
          <h1>24/7 Customer Service</h1>
          <p>Friendly 24/7 customer support</p>
        </div>
        <div>
          <img src={img11} alt="Money Back Guarantee" /> <br />
          <h1>Money Back Guarantee</h1>
          <p>We return money within 30 days</p>
        </div>
      </section>
    </div>
  );
}

export default App;
