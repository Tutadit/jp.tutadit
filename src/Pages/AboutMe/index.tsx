import React from 'react';
import Container from '../../Components/Container';
import './index.css';

type AboutMeProps = {

}

const AboutMePropsDefault = {

}

const AboutMe = ({ }: AboutMeProps): JSX.Element => {

  return (
    <div className='about-container'>
      <div className="about-content">
        <h2>Who am I?</h2>
        <p>A man whose name is JP. Who's dedicated a significant portion of my yet young life to the understanding of computers. It is my goal to utilize my expertise to better this wolrd in any way I can.</p>
        <h2>How did I get here?</h2>
        <p>Ever since my family purchased our first PC I have been enchanted by the many facets of computers. From hardware to software, I strived to know it all. I have played with Web Development, Arduino Boards, Android Apps, Minecraft Mods, Linux Servers, Machine Learning, and many more.</p>

        <p>I believe that the analytical mind within me is what drove me to understanding computers, however, where it not for the wonderful online communities I might've given up. Finding learning resources was never a problem, as there are many people on this earth that are happy to guide anyone who seeks. As such I am always grateful for having access to such wonderful people, anytime, anywhere.</p>

        <h2>Where to next?</h2>
        <p>Despite the many years of tinkering and messing with computers, my journey is just begining. I have recently graduated with a Bachelors in Computer Science, and now I take my first steps into the real world. I look forward to landing my first gig and showing off my skills as well as learning many more.</p>
      </div>
    </div>
  );
}

AboutMe.defaultProps = AboutMePropsDefault

export default AboutMe;



