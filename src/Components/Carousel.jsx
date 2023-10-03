// src/components/Carousel.js
import React, { useState, useEffect } from 'react';
import './Carousel.css';
import person1 from './Images/person1.png';
import person2 from './Images/person2.png';
import person3 from './Images/person3.png';
import person4 from './Images/person4.png';
import person5 from './Images/person5.png';

const Carousel = () => {
  const persons = [
    { name: 'Ali', text: 'We Had A Great Experience With The Team. They Developed Everything We Need And More. They Solved Bugs Related or Existed with this Software, and they continue to be supportive. Highly Recommended.' },
    { name: 'Ahmed', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, ratione!' },
    { name: 'Nawaz', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla repellendus perspiciatis illo sunt odit quam doloribus quae ab tempora corrupti!' },
    { name: 'Raza', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate sunt eveniet similique, labore nemo illum alias quaerat deleniti iure odio dignissimos, placeat eaque natus minus excepturi! Architecto sint consectetur nostrum.' },
    // Add other persons as needed
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [initialRender, setInitialRender] = useState(true);

  useEffect(() => {
    // Skip the animation on the initial render
    setInitialRender(false);
  }, []);

  const handleArrowClick = (direction) => {
    setActiveIndex((prevIndex) => {
      if (direction === 'left') {
        return prevIndex > 0 ? prevIndex - 1 : persons.length - 1;
      } else {
        return prevIndex < persons.length - 1 ? prevIndex + 1 : 0;
      }
    });
  };

  return (
    <div className="custom-carousel">
      <h1 className="carousel-heading">What Our Valuable Clients Think About <br /> Hive Technologies</h1>
      <p>
        Discover The React Stories And Experienced Customers and <br />
        And How our Services Have Transformed Their Business.
      </p>

      {/* Person Text */}
      {persons.map((person, index) => (
        <div
          key={index}
          className={`person-text ${!initialRender && activeIndex === index ? '' : 'hidden'}`}
        >
          <h3>{person.name}</h3>
          <p>{person.text}</p>
        </div>
      ))}

      {/* Person Images */}
      <div className="person-images">
        {persons.map((person, index) => (
          <div
            key={index}
            className={`person-image ${!initialRender && activeIndex === index ? '' : 'hidden'}`}
          >
            <img src={
              index === 0 ? person1 :
              index === 1 ? person2 :
              index === 2 ? person3 :
              index === 3 ? person4 :
              person5
            } alt={person.name} />
          </div>
        ))}
      </div>

      {/* Left Arrow */}
      <div className="arrow left" onClick={() => handleArrowClick('left')}>&#8249;</div>

      {/* Right Arrow */}
      <div className="arrow right" onClick={() => handleArrowClick('right')}>&#8250;</div>

      {/* Indicators */}
      <div className="indicators-container">
        {persons.map((person, index) => (
          <div
            key={index}
            className={`indicator ${activeIndex === index ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
