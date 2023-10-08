// Carousel.js
import React, { useState } from 'react';
import './Carousel.css';
import Ali from './Images/Ali.png';
import Ahmad from './Images/Ahmad.png';
import Nawaz from './Images/Nawaz.png';
import Raza from './Images/Raza.png';
import Haseeb from './Images/Haseeb.png';

const Carousel = () => {
  const persons = [
    { name: 'Ali', text: 'We Had A Great Experience With The Team. They Developed Everything We Need And More. They Solved Bugs Related or Existed with this Software, and they continue to be supportive. Highly Recommended.' },
    { name: 'Ahmed', text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, ratione!' },
    { name: 'Nawaz', text: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla repellendus perspiciatis illo sunt odit quam doloribus quae ab tempora corrupti!' },
    { name: 'Raza', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate sunt eveniet similique, labore nemo illum alias quaerat deleniti iure odio dignissimos, placeat eaque natus minus excepturi! Architecto sint consectetur nostrum.' },
    { name: 'Haseeb', text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate sunt eveniet similique, labore nemo illum alias quaerat deleniti iure odio dignissimos, placeat eaque natus minus excepturi! Architecto sint consectetur nostrum.' },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [indicatorHover, setIndicatorHover] = useState(null);
  const [showAllText, setShowAllText] = useState(false);

  const handleArrowClick = (direction) => {
    setActiveIndex((prevIndex) => {
      let newIndex;
  
      if (direction === 'left') {
        newIndex = (prevIndex - 1 + persons.length) % persons.length;
      } else {
        newIndex = (prevIndex + 1) % persons.length;
      }
  
      // If newIndex is 0, it means we have reached the end, so loop back to the beginning
      if (newIndex === 0) {
        setShowAllText(false);
      }
  
      return newIndex;
    });
  };

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
    setShowAllText(false);
  };

  const handleIndicatorHover = (index) => {
    setIndicatorHover(index);
  };

  const handleIndicatorLeave = () => {
    setIndicatorHover(null);
  };

  const renderPersonImages = () => {
    const slicedPersons = [...persons, ...persons, ...persons]; // Repeat the array to create a loop
    return slicedPersons.slice(activeIndex, activeIndex + 3).map((person, index) => (
      <div key={index} className={`person-container ${index === 0 ? 'active' : ''}`}>
        <div className={`person-image ${index === 0 ? 'big' : ''}`}>
          <img src={getPersonImage(person.name)} alt={person.name} />
        </div>
        <div className="text-container">
          <div className={`alis-text ${index === 0 ? 'active-person-text' : ''} ${showAllText || index === 0 ? '' : 'hidden'}`}>
            <h1>{person.name}</h1>
            <p>{person.text}</p>
          </div>
        </div>
      </div>
    ));
  };
  const renderIndicators = () => {
    return persons.map((person, index) => (
      <div
        key={index}
        className={`indicator ${index >= activeIndex && index < activeIndex + 3 ? 'active' : ''} ${indicatorHover === index ? 'hover' : ''}`}
        onClick={() => handleIndicatorClick(index)}
        onMouseEnter={() => handleIndicatorHover(index)}
        onMouseLeave={handleIndicatorLeave}
      />
    ));
  };

  const getPersonImage = (name) => {
    switch (name) {
      case 'Ali':
        return Ali;
      case 'Ahmed':
        return Ahmad;
      case 'Nawaz':
        return Nawaz;
      case 'Raza':
        return Raza;
      case 'Haseeb':
        return Haseeb;
      default:
        return Ali;
    }
  };

  return (
    <div className="custom-carousel">
      <h1 className="carousel-heading">What Our Valued Clients Think About <br /> Hive Technologies</h1>
      <p>
        Discover The React Stories And Experienced Customers and <br />
        And How our Services Have Transformed Their Business.
      </p>

      {/* Person Images */}
      <div className="person-images">
        {renderPersonImages()}
      </div>

      {/* Left Arrow */}
      <div className="arrow left" onClick={() => handleArrowClick('left')}>‹</div>

      {/* Right Arrow */}
      <div className="arrow right" onClick={() => handleArrowClick('right')}>›</div>

      {/* Indicators */}
      <div className="indicators">
        {renderIndicators()}
      </div>
    </div>
  );
};

export default Carousel;
