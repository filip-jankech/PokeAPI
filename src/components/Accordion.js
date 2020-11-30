
import React, { useState, useRef } from 'react';
import Chevron from './Chevron';

import './Accordion.scss';

const Accordion = ({ props }) => {
  // useState hook managing whether a specified accordion is in 'active' state (the image of the pokemon is shown)
  const [accordionActive, setAccordionActive] = useState('');
  // useState hook managing the height of the 'content' element of each accordion
  const [accordionHeight, setAccordionHeight] = useState('0px');
  // useState hook managing the rotation of the chevron depending on the 'active' state of the accordion
  const [chevronRotate, setChevronRotate] = useState('accordion__icon');
  // useRef hook referencing the 'content' element and storing it in the 'content' variable
  const content = useRef(null);
  
  // the function handles the state in all useState hooks on each of the accordion button clicks
  const toggleAccordion = () => {
    setAccordionActive(accordionActive === '' ? 'active' : '');
    setAccordionHeight(accordionActive === 'active' ? '0px' : `${content.current.scrollHeight}px`);
    setChevronRotate(accordionActive === 'active' ? 'accordion__icon' : 'accordion__icon rotate');
  }
  
  return (
    <div className='accordion__wrapper'>
      <button className={`accordion ${accordionActive}`} onClick={toggleAccordion} >
        <p className='accordion__name'>
          {props.name}
        </p>
        <Chevron className={`${chevronRotate}`} width={10} fill={'#777'} />
      </button>
      <div className='accordion__content' ref={content} style={{ maxHeight: `${accordionHeight}` }}>
        <div className='accordion__image'>
          <img src={props.sprites.other.dream_world.front_default} alt={props.name} />
        </div>
      </div>
    </div>
  )
}

export default Accordion;