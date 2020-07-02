import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import homeStyles from "./index.module.css"

import Fredrik from '../images/fredrik.png'
import Golfer from '../images/golfer.jpg'
import Guitar from '../images/guitar.jpg'
import Highlight from '../images/highlight.png'

const ImageText = ({text, image}) => (
    <div className={homeStyles.imageText}>
        {text}
        <img src={image} alt=''/>
    </div>
)

const HighlightText = ({text, positionalStyle}) => (
    <div className={homeStyles.highlightText}>
        {text}
        <img style={positionalStyle} src={Highlight} alt=''/>
    </div>
)

const ImportantText = ({text}) => (
    <div className={homeStyles.importantText}>
        {text}
    </div>
)

const Home = () => (
    <div className={homeStyles.wrapper}>
        Hi, I'm <ImageText text='Fredrik' image={Fredrik}/>! 
        <br/><br/>
        I'm a <ImportantText text='software engineer'/> with an interest for <ImportantText text='game development'/> and <ImportantText text='machine learning'/>. I'm also a sports fan and an avid <ImageText text='golfer' image={Golfer}/>. Music is an important part of my life, and I love playing the <ImageText text='guitar' image={Guitar}/>.
        <br/><br/>
        Currently, I am working out of my home city of <ImportantText text='Stockholm, Sweden'/>, helping <ImportantText text='Topgolf'/> revolutionize the game of golf. If you want to know more about what I have done, check out my <HighlightText text='CV' positionalStyle={{top: 0, right: 125}}/> or my <HighlightText text='projects' positionalStyle={{top: 0, right: 0}}/>, send me an <HighlightText text='email' positionalStyle={{bottom: 15, left: 260}}/> or check out my other <HighlightText text='pages' positionalStyle={{bottom: 15, right: 260}}/>.
        <br/><br/>
        Take care!
    </div>
)

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Home/>
  </Layout>
)

export default IndexPage
