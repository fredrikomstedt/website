import React from 'react';

import { FaRegEnvelope, FaLinkedinIn, FaGithub } from 'react-icons/fa';

import ContextConsumer from '../../Context';
import footerStyles from './footer.module.css';

import Highlight from '../../images/highlight.png';

const CopyRight = () => (
    <div className={footerStyles.copyRight}>
        © Fredrik Omstedt {new Date().getFullYear()}
    </div>
);

const Contact = () => (
    <div className={footerStyles.content}>
        <HighlightCircle text={'EMAIL'} />
        <div className={footerStyles.contentTitle}>Contact</div>
        <a
            className={footerStyles.contentButton}
            target="_blank"
            rel="noreferrer"
            href="mailto:fredrik.omstedt@gmail.com"
        >
            <FaRegEnvelope>fredrik.omstedt@gmail.com</FaRegEnvelope>
        </a>
    </div>
);

const Links = () => (
    <div className={footerStyles.content}>
        <HighlightCircle text={'PAGES'} />
        <div className={footerStyles.contentTitle}>Links</div>
        <div className={footerStyles.contentButtonRow}>
            <a
                className={footerStyles.contentButton}
                target="_blank"
                rel="noreferrer"
                href="https://linkedin.com/in/fredrik-omstedt"
            >
                <FaLinkedinIn>LinkedIn</FaLinkedinIn>
            </a>
            <a
                className={footerStyles.contentButton}
                target="_blank"
                rel="noreferrer"
                href="https://github.com/fredrikomstedt"
            >
                <FaGithub>Github</FaGithub>
            </a>
        </div>
    </div>
);

const HighlightCircle = ({ text }) => (
    <ContextConsumer>
        {({ data }) =>
            data.hover[text.toUpperCase()] ? (
                <img
                    className={footerStyles.highlightCircle}
                    src={Highlight}
                    alt=""
                />
            ) : null
        }
    </ContextConsumer>
);

const Footer = () => (
    <footer className={footerStyles.wrapper}>
        <div className={footerStyles.contentWrapper}>
            <Contact />
            <Links />
        </div>
        <CopyRight />
    </footer>
);

export default Footer;
