/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/about-section-image.png";

const imageAltText = "lighbrown background image";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I have completed my BSc in computer science from DAV Centenay College. I have a strong inclination towards web development. I like to create simple and interactive websites.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Web design",
  "User experience",
  "Animated designs",
  "Interactive user interfaces",
  "Responsive user interfaces",
  "MERN Stack",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I am passionate about designing websites in new creative ways to drive innovation. By leveraging my UI/UX experience I continually try to make websites easy to use and attractive for users.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "rgb(222,188,153)",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2 style={{color : "brown"}}>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
            color: "white"
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" , color: "white"}}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
