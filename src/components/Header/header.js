import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

import ContextConsumer from '../../Context';
import * as headerStyles from './header.module.css';

import Highlight from '../../images/highlight.png';
import Logo from '../../images/website-logo.png';

const HeaderTitle = ({ siteTitle }) => (
    <Link className={headerStyles.title} to="/">
        <img className={headerStyles.logo} src={Logo} alt="" />
        <div className={headerStyles.siteTitleText}>{siteTitle}</div>
    </Link>
);

const HeaderButton = ({ link, text }) => (
    <Link className={headerStyles.button} to={link}>
        {text}
        <HighlightCircle text={text} />
    </Link>
);

const HighlightCircle = ({ text }) => (
    <ContextConsumer>
        {({ data }) =>
            data.hover[text.toUpperCase()] ? (
                <img
                    className={headerStyles.highlightCircle}
                    src={Highlight}
                    alt=""
                />
            ) : null
        }
    </ContextConsumer>
);

const Header = ({ siteTitle }) => (
    <header className={headerStyles.wrapper}>
        <HeaderTitle siteTitle={siteTitle} />
        <div className={headerStyles.buttonWrapper}>
            <HeaderButton link="/cv" text="CV" />
            <HeaderButton link="/projects" text="Projects" />
        </div>
    </header>
);

Header.propTypes = {
    siteTitle: PropTypes.string,
};

Header.defaultProps = {
    siteTitle: ``,
};

export default Header;
