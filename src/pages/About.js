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


  /*const sliderSettings = {
    dots: false,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: true,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };*/

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
                  I am currently a student at Victoria University of Wellington, working towards a Bachelor of Engineering, majoring in software. 
                </p>
                <p>
                  My studies are my highest priority, and I am ecstatic in saying that I have found my passion in technology. I appreciate the versatility of software engineering, and the fact that it is ever evolving. In particular, I enjoy discovering innovative ways to help make everyday tasks easier and more efficient for all concerned. I have always loved learning, and believe that it goes hand in hand with hard work. As a child of immigrant parents, I have witnessed firsthand the sheer determination required for success in a new environment. With this in mind, I have continually excelled in my academic study. In conjunction with my studies at the university, I have also taken on the role as a tutor and a lab demonstrator in the field of cybersecurity. I believe this opportunity has not only allowed me to connect with my peers, but enhance my own knowledge of the subject through teaching others. My ultimate goal would be to complete my studies, and showcase not only my technical capabilities in the workforce, but also my soft skills by becoming a project manager.
                </p>
                <p>
                  Although I place large emphasis on academics, I also do not take these opportunities for granted. I believe it to be of the utmost importance to give back to the community. For this reason, I have volunteered at organisations such as the Sisters of Compassion Soup Kitchen and St Vincent De Paul from 2016-2017, and as of 2019, I have been working at Kaibosh Food Rescue.
                </p>
                {/*<ul>
                  {!information.name ? null : <li>
                    <b>Full Name</b> {information.name}
                  </li>}
                  {!information.age ? null : <li>
                    <b>Age</b> {information.age} Years
                  </li>}
                  {!information.phone ? null : <li>
                    <b>Phone</b> {information.phone}
                  </li>}
                  {!information.nationality ? null : <li>
                    <b>Nationality</b> {information.nationality}
                  </li>}
                  {!information.language ? null : <li>
                    <b>Languages</b> {information.language}
                  </li>}
                  {!information.email ? null : <li>
                    <b>Email</b> {information.email}
                  </li>}
                  {!information.address ? null : <li>
                    <b>Address</b> {information.address}
                  </li>}
                  {!information.freelanceStatus ? null : <li>
                    <b>Freelance</b> {information.freelanceStatus}
                  </li>}
                  </ul>*/}
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
