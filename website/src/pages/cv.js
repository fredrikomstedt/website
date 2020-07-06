import React from "react"

import SEO from "../components/seo"

import cvStyles from './cv.module.css'

const ContactInfo = () => (
    <div className={cvStyles.contactWrapper}>
        <div className={cvStyles.title}>Fredrik Omstedt</div>
        <div className={cvStyles.contactInfo}>
            +46790779302<br/>
            fredrik.omstedt@gmail.com<br/>
            www.omstedt.com
        </div>
    </div>
)

const ComponentTitleText = ({text}) => (
    <div className={cvStyles.componentTitleText}>
        {text}
    </div>
)

const WorkExperience = ({employer, period, text}) => (
    <div className={cvStyles.workExperienceWrapper}>
        <div className={cvStyles.workExperienceHeader}>
            <div>{employer}</div>
            <div>{period}</div>
        </div>
        <div className={cvStyles.workExperienceText}>{text}</div>
    </div>
)

const ProfessionalExperience = () => (
    <div className={cvStyles.professionalExperienceWrapper}>
        <ComponentTitleText text='Professional Experience'/>
        <WorkExperience employer='Topgolf Sweden' period='JAN 2017 -' 
            text={
                <div>
                    Hej jag heter Fredrik och jag gillar<br/>
                    korv.
                </div>
            }
        />
    </div>
)

const CVPage = () => (
  <div className={cvStyles.wrapper}>
    <SEO title="CV" />
    <ContactInfo/>
    <ProfessionalExperience/>
    <ComponentTitleText text='Education'/>
    <ComponentTitleText text='Other Experience'/>
    <ComponentTitleText text='Achievements'/>
  </div>
)

export default CVPage