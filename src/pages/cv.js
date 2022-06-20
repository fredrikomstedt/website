import React from 'react';

import SEO from '../components/seo';

import cvStyles from './cv.module.css';

const ContactInfo = () => (
    <div className={cvStyles.contactWrapper}>
        <div className={cvStyles.title}>Fredrik Omstedt</div>
        <div className={cvStyles.contactInfo}>
            +46790779302
            <br />
            fredrik.omstedt@gmail.com
            <br />
            www.omstedt.com
        </div>
    </div>
);

const ComponentTitleText = ({ text }) => (
    <div className={cvStyles.componentTitleText}>{text}</div>
);

const PeriodicExperience = ({ employer, period, text }) => (
    <div className={cvStyles.periodicExperienceWrapper}>
        <div className={cvStyles.periodicExperienceHeader}>
            <div className={cvStyles.employer}>{employer}</div>
            <div className={cvStyles.periodicPeriod}>{period}</div>
        </div>
        <div className={cvStyles.periodicExperienceText}>{text}</div>
    </div>
);

const ProfessionalExperience = () => (
    <div className={cvStyles.professionalExperienceWrapper}>
        <ComponentTitleText text="Professional Experience" />
        <PeriodicExperience
            employer="Quickbit"
            period="AUG 2020 - MAY 2022"
            text={
                <div>
                    Taking on the role as a backend software engineer at
                    Quickbit, helping bring crypto to the people. Specifically
                    working with the Quickbit app that allows people to buy,
                    exchange and use crypto in different ways. <br />
                    <br />
                    This work involves handling important data in a secure
                    manner, while interacting with third-party integrations to
                    handle the different aspects required to work with monetary
                    currencies.
                </div>
            }
        />
        <PeriodicExperience
            employer="Topgolf Sweden"
            period="AUG 2020 - MAY 2022"
            text={
                <div>
                    Continued my journey at Topgolf as a full-time software
                    engineer in the game development team. <br />
                    <br />
                    I was solely responsible for the development of the
                    Toptracer Tournament Range product, which aims at creating a
                    Toptracer experience at tournament ranges. This work
                    included both developing applications used to showcase the
                    professional golfer's shots to spectators and TV viewers, as
                    well as developing applications to operate the product at
                    events. Highlights include creating a portable and
                    user-friendly administration interface that significantly
                    reduced the workload at events, as well as creating a
                    publically available web app for showcasing shot data from
                    the range.
                    <br />
                    <br />
                    Aside from the above responsibility, I was also part of the
                    Game Experience team, working on creating game experiences
                    for customers at Toptracer Ranges. This work mainly revolved
                    around converting Toptracer's current game modes to the
                    Unity platform, focusing on creating a scalable and
                    maintainable code base.
                </div>
            }
        />
        <PeriodicExperience
            employer="Topgolf Sweden"
            period="JAN 2017 - AUG 2020"
            text={
                <div>
                    Worked part time during my studies as a software developer
                    for various teams at the company. <br />
                    <br />
                    Work included web interfaces used at golf tournaments to
                    control graphical systems, internal database services, as
                    well as contributions to the main software used by
                    consumers. <br />
                    <br />
                    Also worked as a software operator during live golf
                    broadcasts with millions of viewers around the world. <br />
                    <br />
                    Finished my part time employment by writing my Master's
                    thesis on the topic of using deep reinforcement learning to
                    teach artificial intelligence to play golf.
                </div>
            }
        />
        <PeriodicExperience
            employer="Valkyr Games"
            period="APR 2015 - JUN 2018"
            text={
                <div>
                    Was the CTO and co-founder of this game development company,
                    which was created with two classmates during high school.{' '}
                    <br />
                    <br />
                    Responsible for the design and development of the company's
                    two mobile games, which were published on the App Store and
                    on Google Play.
                </div>
            }
        />
        <PeriodicExperience
            employer="SIPRI"
            period="DEC 2016 - JUN 2017"
            text={
                <div>
                    As part of a school project, helped recreate a database and
                    an interface to handle and analyze data in the database.
                    <br />
                    <br />
                    Worked as the back end lead developer, writing a back end in
                    Java using the Spring framework.
                </div>
            }
        />
        <PeriodicExperience
            employer="Eutopia Studios"
            period="JUN 2016 - JAN 2017"
            text={
                <div>
                    Worked as a software developer on mobile applications and VR
                    games.
                    <br />
                    <br />
                    Contributed on two mobile releases and helped set up
                    guidelines for version control system usage.
                </div>
            }
        />
    </div>
);

const Education = () => (
    <div className={cvStyles.professionalExperienceWrapper}>
        <ComponentTitleText text="Education" />
        <PeriodicExperience
            employer="KTH Royal Institute of Technology"
            period="2018 - 2020"
            text={
                <div>
                    Master of Science degree in Computer Science and
                    Engineering, with a specialization in data science and
                    artificial intelligence.
                </div>
            }
        />
        <PeriodicExperience
            employer="KTH Royal Institute of Technology"
            period="2015 - 2018"
            text={
                <div>
                    Bachelor of Science degree in Computer Science and
                    Engineering.
                </div>
            }
        />
    </div>
);

const OtherExperience = () => (
    <div className={cvStyles.professionalExperienceWrapper}>
        <ComponentTitleText text="Other Experience" />
        <PeriodicExperience
            employer="Studs"
            period="2019 - 2020"
            text={
                <div>
                    Took part in the computer science chapter's annual travel
                    project, in which a group of 30 students gather money to go
                    on a trip together. <br />
                    <br />
                    Was part of the IT group, focusing on creating an app used
                    by the group members, written in React Native.
                </div>
            }
        />
        <PeriodicExperience
            employer="SpexM"
            period="2017 - 2019"
            text={
                <div>
                    Worked with a group of 14 people in organizing and hosting
                    parties and pub nights for other students at KTH. During my
                    second year, I was also the manager of this group.
                </div>
            }
        />
        <PeriodicExperience
            employer="KTH Computer Science Reception"
            period="2016 and 2017"
            text={
                <div>
                    As a group mentor, took care of groups of 15 people during
                    their first weeks at KTH, and organized events for all new
                    students to take part in.
                </div>
            }
        />
    </div>
);

const Achievements = () => (
    <div className={cvStyles.professionalExperienceWrapper}>
        <ComponentTitleText text="Achievements" />
        <div className={cvStyles.periodicExperienceText}>
            Recipient of KTH's Allmänna Studerandestiftelser scholarship of 2018
            and 2019.
            <br />
            <br />
            Recipient of the 2018 Henrik Göransson Sandviken scholarship.
            <br />
            <br />
            Winner of the KTH Computer Science introductory programming course
            quicksort competition of 2016.
            <br />
            <br />
            Finalist in the Swedish Programming Championship of 2015 for upper
            secondary school students.
            <br />
            <br />
            Tour Champion of the 2013 Lillängen Tour.
            <br />
            <br />
            Club Champion of the 2013 Lillängen Short Games.
        </div>
    </div>
);

const Download = () => (
    <div
        role="button"
        tabIndex={0}
        className={cvStyles.downloadButton}
        onClick={() => window.print()}
        onKeyDown={() => window.print()}
    >
        Download CV
    </div>
);

const CVPage = () => (
    <div className={cvStyles.wrapper}>
        <SEO title="CV" />
        <ContactInfo />
        <ProfessionalExperience />
        <Education />
        <OtherExperience />
        <Achievements />
        <Download />
    </div>
);

export default CVPage;
