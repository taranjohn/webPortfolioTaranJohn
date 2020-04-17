import React, { useState, useEffect } from "react";
import axios from 'axios';
import Sectiontitle from "../components/Sectiontitle";
import Smalltitle from '../components/Smalltitle';
import Layout from "../components/Layout";
import Resume from "../components/Resume";
import Service from '../components/Service';

function Resumes(){
  const [skills, setSkills] = useState([]);
  const [workingExperience, setWorkingExperience] = useState([]);
  const [educationExperience, setEducationExperience] = useState([]);
  const [services, setServices] = useState([]);

  useEffect(() =>{
    axios.get('/api/skills')
      .then(response =>{
        setSkills(response.data);
      })
    axios.get('/api/experience')
      .then(response =>{
        setWorkingExperience(response.data.workingExperience);
        setEducationExperience(response.data.educationExperience);
      })
      axios.get('/api/services')
      .then(response =>{
        setServices(response.data)
      })
  }, [])

  return (
    <Layout>
      <div className="mi-skills-area mi-section mi-padding-top">
        <div className="container">
          <Sectiontitle title="My Skills" />
          {/*<div className="mi-skills">
            <div className="row mt-30-reverse">
              {skills.map(skill => (
                <TrackVisibility once className="col-lg-6 mt-30" key={skill.title}>
                  <Progress title={skill.title} percentage={skill.value} />
                </TrackVisibility>
              ))}
            </div>
          </div>*/}
          {/**Remove this if necessary */}
          <div className="mi-service-wrapper">
            <div className="row mt-30-reverse">
              {skills.map(skills => (
                <div className="col-lg-4 col-md-6 col-12 mt-30" key={services.title}>
                  <Service content={skills}/>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="mi-resume-area mi-section mi-padding-top mi-padding-bottom">
        <div className="container">
          <Sectiontitle title="Resume" />
          <Smalltitle title="Working Experience" icon="briefcase" />
          <div className="mi-resume-wrapper">
            {workingExperience.map(workingExp => (
              <Resume key={workingExp.id} resumeData={workingExp} />
            ))}
          </div>
          <div className="mt-30"></div>
          <Smalltitle title="Educational Qualifications" icon="book" />
          <div className="mi-resume-wrapper">
            {educationExperience.map(educatonExp => (
              <Resume key={educatonExp.id} resumeData={educatonExp}/>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Resumes;
