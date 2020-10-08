import React from "react"

import SEO from "../components/seo"

import Fredrik from '../images/fredrik.png'
import Guitar from '../images/guitar.jpg'

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

const ProjectsPage = () => (
    <div className={projectsStyles.wrapper}>
        <SEO title="Projects" />
        <Project
            title={"Master's Thesis"}
            image={Fredrik}
            text={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum sit amet massa faucibus vehicula. In euismod arcu at tortor aliquam, eu lacinia orci laoreet. Mauris sodales iaculis arcu vel cursus. Mauris porttitor bibendum mauris quis pellentesque. Proin ullamcorper suscipit lorem. Morbi et placerat elit. Nam lobortis ex a tellus aliquam suscipit. Fusce dolor diam, accumsan eu eros at, ullamcorper mattis velit. Praesent elementum blandit consectetur. Proin vulputate arcu at nibh viverra, ac volutpat augue feugiat.<br/><br/>Proin malesuada, ante eu convallis bibendum, mi quam aliquet tortor, non luctus tellus quam egestas erat. Pellentesque ut sollicitudin ligula. Maecenas molestie, urna vitae dictum lobortis, purus velit euismod purus, nec convallis elit libero in nisi. In aliquet maximus malesuada. Morbi fringilla enim eu risus fringilla, vitae porta nisi interdum. Pellentesque tellus dui, blandit vitae risus ac, egestas imperdiet diam. Suspendisse molestie libero quam.</div>}
        />
        <Project
            title={"Master's Thesis"}
            image={Guitar}
            text={<div>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum condimentum sit amet massa faucibus vehicula. In euismod arcu at tortor aliquam, eu lacinia orci laoreet. Mauris sodales iaculis arcu vel cursus. Mauris porttitor bibendum mauris quis pellentesque. Proin ullamcorper suscipit lorem. Morbi et placerat elit. Nam lobortis ex a tellus aliquam suscipit. Fusce dolor diam, accumsan eu eros at, ullamcorper mattis velit. Praesent elementum blandit consectetur. Proin vulputate arcu at nibh viverra, ac volutpat augue feugiat.<br/><br/>Proin malesuada, ante eu convallis bibendum, mi quam aliquet tortor, non luctus tellus quam egestas erat. Pellentesque ut sollicitudin ligula. Maecenas molestie, urna vitae dictum lobortis, purus velit euismod purus, nec convallis elit libero in nisi. In aliquet maximus malesuada. Morbi fringilla enim eu risus fringilla, vitae porta nisi interdum. Pellentesque tellus dui, blandit vitae risus ac, egestas imperdiet diam. Suspendisse molestie libero quam.</div>}
        />
    </div>
)

export default ProjectsPage