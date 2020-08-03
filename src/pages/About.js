import React, { useState, useEffect } from "react";
import axios from 'axios';
import FsLightbox from "fslightbox-react";
import * as Icon from "react-feather";
import Sectiontitle from "../components/Sectiontitle";
import Layout from "../components/Layout";
import Service from '../components/Service';
import Smalltitle from '../components/Smalltitle';
import Resume from "../components/Resume";


function About(){
  const [toggler, setToggler] = useState(false);
  const [information, setInformation] = useState("");
  const [services, setServices] = useState([]);
  const [communityOutreach, setCommunityOutreach] = useState([]);

  const handleToggler = (event) => {
    setToggler({
      toggler: event
    })
  }

  useEffect(() =>{
    axios.get('/api/information')
      .then(response =>{
        setInformation(response.data)
      })
    axios.get('/api/services')
      .then(response =>{
        setServices(response.data)
      })
    axios.get('/api/experience')
      .then(response =>{
        setCommunityOutreach(response.data.communityOutreach);
      })
  }, [])

  return (
    <Layout>
      <div className="mi-about-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="About Me" />
          <div className="row">
            <div className="col-lg-6">
              <div className="mi-about-image">
                <img
                  src={information.aboutImage}
                  alt="about"
                  onClick={() => handleToggler(!toggler)}
                />
                <span className="mi-about-image-icon">
                  <Icon.ZoomIn />
                </span>
                <FsLightbox
                  toggler={toggler}
                  sources={[information.aboutImageLg]}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="mi-about-content">
                <h3>
                  I am <span className="color-theme">{information.name}</span>
                </h3>
                <p>
                  Currently studying Software Engineering at Victoria University, I consider myself fortunate to have found a passion in technology. Being both versatile and ever-evolving, Software Engineering by its very nature lends itself to discovering innovative ways that make everyday tasks easier and more efficient.  
                </p>
                <p>
                  I have always loved learning, and believe that it goes hand in hand with hard work. For this very reason, I spend much of my time exploring new technologies and working on personal projects that enhance my skills. Outside of technology, I enjoy being involved in the community to give back, as mentioned below. 
                </p>
                <p>
                  My ultimate goal is to use my technical knowledge and abilities in ways that contribute to the tech industry as well as benefiting society at large.                 
                </p>
                <a href={information.cvfile} className="mi-button">Download CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mi-review-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Interests" />
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {services.map(service => (
                <div className="col-lg-4 col-md-6 col-12 mt-30" key={service.title}>
                  <Service content={service}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
        <Sectiontitle title="Outside of Tech" />
            <Smalltitle title="Community Outreach" icon="sun" />
            <div className="mi-resume-wrapper">
              {communityOutreach.map(educatonExp => (
                <Resume key={educatonExp.id} resumeData={educatonExp}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default About;
