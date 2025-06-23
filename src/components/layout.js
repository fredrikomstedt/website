/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import { ContextProviderComponent } from '../Context';
import Header from './Header/header';
import Footer from './Footer/footer';
import * as layoutStyles from './layout.module.css';

const Layout = ({ children }) => {
    const data = useStaticQuery(graphql`
        query SiteTitleQuery {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (
        <ContextProviderComponent>
            <Header siteTitle={data.site.siteMetadata.title} />
            <main className={layoutStyles.content}>{children}</main>
            <div className={layoutStyles.footer}>
                <Footer />
            </div>
        </ContextProviderComponent>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Layout;
