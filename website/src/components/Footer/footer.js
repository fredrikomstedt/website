import React from "react"

import {
    FaRegEnvelope,
    FaLinkedinIn,
    FaGithub
} from 'react-icons/fa'

import footerStyles from './footer.module.css'


const CopyRight = () => (
    <div className={footerStyles.copyRight}>
        © Fredrik Omstedt {new Date().getFullYear()}
    </div>
)

const Contact = () => (
    <div className={footerStyles.content}>
        <div className={footerStyles.contentTitle}>Contact</div>
        <a className={footerStyles.contentButton} target='_blank' rel='noreferrer' href='mailto:fredrik.omstedt@gmail.com'><FaRegEnvelope>fredrik.omstedt@gmail.com</FaRegEnvelope></a>
    </div>
)

const Links = () => (
    <div className={footerStyles.content}>
        <div className={footerStyles.contentTitle}>Links</div>
        <div className={footerStyles.contentButtonRow}>
            <a 
                className={footerStyles.contentButton} 
                target='_blank' 
                rel='noreferrer' 
                href='https://linkedin.com/in/fredrik-omstedt'
            >
                <FaLinkedinIn>LinkedIn</FaLinkedinIn>
            </a>
            <a 
                className={footerStyles.contentButton} 
                target='_blank' 
                rel='noreferrer' 
                href='https://github.com/xaril'
            >
                <FaGithub>Github</FaGithub>
            </a>
        </div>
    </div>
)

const Footer = () => (
    <footer className={footerStyles.wrapper}>
        <div className={footerStyles.contentWrapper}>
            <Contact/>
            <Links/>
        </div>
        <CopyRight/>
    </footer>
)

export default Footer
