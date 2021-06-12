import React from 'react';
import { Helmet } from 'react-helmet';
import Router from 'next/router';
import _ from 'lodash';

import { withPrefix, classNames } from '../utils';
import Header from './Header';
import Footer from './Footer';

export default class Body extends React.Component {
    constructor(props) {
        super(props);
        this.handleRouteChange = this.handleRouteChange.bind(this);
    }

    componentDidMount() {
        // Sticky header
        let offsetY = 0;
        let ticking = false;

        window.addEventListener('scroll', function (e) {
            offsetY = window.scrollY;
            if (!ticking) {
                window.requestAnimationFrame(function () {
                    handleHeader(offsetY);
                    ticking = false;
                });
                ticking = true;
            }
        });

        function handleHeader(scrollPos) {
            if (scrollPos > 0) {
                document.body.classList.add('has--scrolled');
            } else {
                document.body.classList.remove('has--scrolled');
            }
        }

        Router.events.on('routeChangeStart', this.handleRouteChange);
    }

    componentWillUnmount() {
        Router.events.off('routeChangeStart', this.handleRouteChange);
    }

    handleRouteChange() {
        // Responsive video embeds
        const videoEmbeds = ['iframe[src*="youtube.com"]', 'iframe[src*="vimeo.com"]'];
        reframe(videoEmbeds.join(','));
    }

    render() {
        const page = _.get(this.props, 'page');
        const config = _.get(this.props, 'config');
        const font = _.get(config, 'base_font', 'nunito-sans');
        const favIcon = _.get(config, 'favicon');
        const palette = _.get(config, 'palette', 'blue');
        const domain = _.trim(_.get(config, 'domain', ''), '/');
        const configTitle = _.get(config, 'title');
        const pageTitle = _.get(page, 'title');
        const seo = _.get(page, 'seo');
        const seoTitle = _.get(seo, 'title');
        const title = seoTitle ? seoTitle : [pageTitle, configTitle].join(' | ');
        const seoDescription = _.get(seo, 'description');
        const seoRobots = _.get(seo, 'robots', []).join(',');
        const seoExtra = _.get(seo, 'extra', []).map((meta, metaIdx) => {
            const keyName = _.get(meta, 'keyName', 'name');
            const name = _.get(meta, 'name');
            if (!name) {
                return null;
            }
            const nameAttr = { [keyName]: name };
            const relativeUrl = _.get(meta, 'relativeUrl');
            let value = _.get(meta, 'value');
            if (!value) {
                return null;
            }
            if (relativeUrl) {
                value = domain + withPrefix(value);
            }
            return <meta key={metaIdx} {...nameAttr} content={value} />;
        });

        return (
            <React.Fragment>
                <Helmet>
                    <title>{title}</title>
                    <meta charSet="utf-8" />
                    <meta name="viewport" content="width=device-width, initialScale=1.0" />
                    <meta name="google" content="notranslate" />
                    {seoDescription && <meta name="description" content={seoDescription} />}
                    {!_.isEmpty(seoRobots) && <meta name="robots" content={seoRobots} />}
                    {seoExtra}
                    {font !== 'system-sans' && <link rel="preconnect" href="https://fonts.gstatic.com" />}
                    {font === 'nunito-sans' && (
                        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap" rel="stylesheet" />
                    )}
                    {font === 'fira-sans' && (
                        <link href="https://fonts.googleapis.com/css2?family=Fira+Sans:ital,wght@0,400;0,600;1,400;1,600&display=swap" rel="stylesheet" />
                    )}
                    {favIcon && <link rel="icon" href={withPrefix(favIcon)} />}
                    <body className={classNames(`palette-${palette}`, `font-${font}`)} />
                </Helmet>
                <div id="page" className="site">
                    <Header page={page} config={config} />
                    <main id="content" className="site-content">
                        {this.props.children}
                    </main>
                    <Footer config={config} />
                </div>
            </React.Fragment>
        );
    }
}
