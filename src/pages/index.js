import React from 'react';

import Seo from '../components/seo';
import ContextConsumer from '../Context';

import * as homeStyles from './index.module.css';

import Fredrik from '../images/fredrik.jpg';
import Golfer from '../images/golfer.jpg';
import Guitar from '../images/guitar.jpg';
import Logo from '../images/website-logo-black.png';

const ImageText = ({ text, image }) => (
    <div className={homeStyles.imageText}>
        {text}
        <img src={image} alt="" />
    </div>
);

const HighlightText = ({ text }) => (
    <ContextConsumer>
        {({ data, set }) => (
            <div
                onMouseEnter={() =>
                    set({
                        hover: { ...data.hover, [text.toUpperCase()]: true },
                    })
                }
                onMouseLeave={() =>
                    set({
                        hover: { ...data.hover, [text.toUpperCase()]: false },
                    })
                }
                className={homeStyles.highlightText}
                aria-hidden="true"
            >
                {text}
            </div>
        )}
    </ContextConsumer>
);

const ImportantText = ({ text }) => (
    <div className={homeStyles.importantText}>{text}</div>
);

const Home = () => (
    <div className={homeStyles.wrapper}>
        <Seo title="Home" />
        Hi, I'm <ImageText text="Fredrik" image={Fredrik} />!
        <br />
        <br />
        I'm a <ImportantText text="software engineer" /> with an interest in{' '}
        <ImportantText text="full stack development" /> and writing{' '}
        <ImportantText text="good looking code" />. I'm also a sports fan and an
        avid <ImageText text="golfer" image={Golfer} />. Music is an important
        part of my life, and I love playing the{' '}
        <ImageText text="guitar" image={Guitar} />.
        <br />
        <br />
        Currently, I am working out of my home city of{' '}
        <ImportantText text="Stockholm, Sweden" />, helping{' '}
        <ImportantText text="Quickbit" /> bring crypto to the people. If you
        want to know more about me and my work, check out my{' '}
        <HighlightText text="CV" /> or my <HighlightText text="projects" />,
        send me an <HighlightText text="email" />, or have a look at my other{' '}
        <HighlightText text="pages" />.
        <br />
        <br />
        Take care!
        <img className={homeStyles.logo} src={Logo} alt="" />
    </div>
);

const IndexPage = () => <Home />;

export default IndexPage;
