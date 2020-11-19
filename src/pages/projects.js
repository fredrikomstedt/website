import React from "react"

import SEO from "../components/seo"

import MasterThesis from '../images/master-thesis.png'
import HannaGame from '../images/hanna-game.png'
import PPP from '../images/ppp.jpg'
import SelfDrivingCar from '../images/self-driving-car.gif'
import ValkyrGames from '../images/valkyr-games.png'
import GitHub from '../images/GitHub_Logo.png'

import projectsStyles from './projects.module.css'

const Project = ({title, image, text}) => (
    <div className={projectsStyles.projectWrapper}>
        <div className={projectsStyles.projectTextWrapper}>
            <div className={projectsStyles.projectTitle}>{title}</div>
            <div className={projectsStyles.projectText}>{text}</div>
        </div>
        <img className={projectsStyles.projectImage} src={image} alt=''/>
    </div>
)

const ProjectLink = ({link, linkText}) => (
    <a
        className={projectsStyles.projectLink}
        href={link}
        target='_blank' 
        rel='noreferrer' 
    >
            {linkText}
    </a>
)

const ProjectsPage = () => (
    <div className={projectsStyles.wrapper}>
        <SEO title="Projects" />
        <Project
            title={"Master's Thesis"}
            image={MasterThesis}
            text={
                <div>
                    During the spring of 2020, I wrote my Master's Thesis at Topgolf on the topic of deep reinforcement learning together with golf. I investigated whether a deep reinforcement learning agent could utilize shot data from a real golfer in order to learn how to play golf. This was done to figure out if a virtual entity could learn more about the shot data than the golfer already knew, i.e. learn how to play golf better than the golfer. If so, the agent could then act as a virtual caddie telling the golfer how to best play golf given their shot characteristics.
                    <br/>
                    <br/>
                    My research concluded that it is possible to utilize deep reinforcement learning with golf. However, it was inconclusive in regards to whether an agent could play golf better than a golfer, since the agents I trained only managed to play on <i>par</i> (pun intended) with the golfer. There were several possible reasons behind this, so more research should be conducted to determine the usefulness of reinforcement learning in golf.
                    <br/>
                    <br/>
                    If you are interested in learning more, you can read the thesis <ProjectLink link={'https://kth.diva-portal.org/smash/get/diva2:1449611/FULLTEXT01.pdf'} linkText={'here'}/>.
                </div>
            }
        />
        <Project
            title={"Hanna"}
            image={HannaGame}
            text={
                <div>
                    For my girlfriend's birthday, I decided to create a game in which Hanna (my amazing girlfriend) has to save Fredrik (me) from the evil Dr. Demon and his minions. The game was written using GameMaker Studio 2, and everything from graphics to code was created by me. 
                    <br/>
                    <br/>
                    The source code for Hanna is available <ProjectLink link={'https://github.com/Xaril/hanna'} linkText={'here'}/>.
                </div>
            }
        />
        <Project
            title={"Spotify Student Band Night"}
            image={PPP}
            text={
                <div>
                    In the spring of 2019, I joined the band Paper Plane Pilots to play the guitar for a gig hosted by Spotify at their office in Stockholm. It was a lot of fun and took many weeks of practice. The entire show is available in <ProjectLink link={'https://youtu.be/rYzcywiFkC0'} linkText={'this video'}/>.
                </div>
            }
        />
        <Project
            title={"Self Driving Car"}
            image={SelfDrivingCar}
            text={
                <div>
                    As part of a course on AI at KTH, I was tasked with making a car traverse maze structures as fast as possible from a start position to a goal position. The solution utilized a Rapidly-exploring Random Tree (RRT) with a kinematic motion model and a controller that handled movement. Out of the groups in the course, my group's solution performed very well, finishing in the top 3 in regards to all terrains tested. More info can be found <ProjectLink link={'https://github.com/Xaril/ai-agent-assignment-1'} linkText={'here'}/>.
                </div>
            }
        />
        <Project
            title={"Valkyr Games"}
            image={ValkyrGames}
            text={
                <div>
                    During high school, a couple of friends and I started our own video game company called Valkyr Games. Although a fun experience, it was never very successful. A few years ago, we decided to call it quits, having learned a lot about what it takes to run a company.
                    <br/>
                    <br/>
                    During Valkyr Games' lifetime, we published two apps on the App Store and Google Play. These can still be found on <ProjectLink link={'https://play.google.com/store/apps/developer?id=Valkyr+Games'} linkText={'Google Play'}/>.
                </div>
            }
        />
        <Project
            title={"GitHub"}
            image={GitHub}
            text={
                <div>
                    Aside from the projects mentioned above, I also have a GitHub containing some of my work (including this website). It can be found <ProjectLink link={'https://github.com/xaril'} linkText={'here'}/>.
                </div>
            }
        />
    </div>
)

export default ProjectsPage