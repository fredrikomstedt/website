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

const PeriodicExperience = ({employer, period, text}) => (
    <div className={cvStyles.periodicExperienceWrapper}>
        <div className={cvStyles.periodicExperienceHeader}>
            <div className={cvStyles.employer}>{employer}</div>
            <div className={cvStyles.periodicPeriod}>{period}</div>
        </div>
        <div className={cvStyles.periodicExperienceText}>{text}</div>
    </div>
)

const ProfessionalExperience = () => (
    <div className={cvStyles.professionalExperienceWrapper}>
        <ComponentTitleText text='Professional Experience'/>
        <PeriodicExperience employer='Topgolf Sweden' period='AUG 2020 - ' 
            text={
                <div>
                    Continuing my journey at Topgolf as a full-time software engineer in the game development team. <br/>
                    <br/>
                    Currently working on the Tournament Range product by creating more user-friendly and modern interfaces to be used by our operators during events, whilst also being responsible for maintaining the Tournament Range code-base.
                </div>
            }
        />
        <PeriodicExperience employer='Topgolf Sweden' period='JAN 2017 - AUG 2020' 
            text={
                <div>
                    Worked part time during my studies as a software developer for various teams at the company. <br/>
                    <br/>
                    Work included web interfaces used at golf tournaments to control graphical systems, internal database services, as well as contributions to the main software used by consumers. <br/>
                    <br/>
                    Also worked as a software operator during live golf broadcasts with millions of viewers around the world. <br/>
                    <br/>
                    Finished my part time employment by writing my Master's thesis on the topic of using deep reinforcement learning to teach artificial intelligence to play golf.
                </div>
            }
        />
        <PeriodicExperience employer='Valkyr Games' period='APR 2015 - JUN 2018' 
            text={
                <div>
                    Was the CTO and co-founder of this game development company, which was created with two classmates during high school. <br/>
                    <br/>
                    Responsible for the design and development of the company's two mobile games, which were published on the App Store and on Google Play.
                </div>
            }
        />
        <PeriodicExperience employer='SIPRI' period='DEC 2016 - JUN 2017' 
            text={
                <div>
                    As part of a school project, helped recreate a database and an interface to handle and analyze data in the database.<br/>
                    <br/>
                    Worked as the back end lead developer, writing a back end in Java using the Spring framework.
                </div>
            }
        />
        <PeriodicExperience employer='Eutopia Studios' period='JUN 2016 - JAN 2017' 
            text={
                <div>
                    Worked as a software developer on mobile applications and VR games.<br/>
                    <br/>
                    Contributed on two mobile releases and helped set up guidelines for version control usage.
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