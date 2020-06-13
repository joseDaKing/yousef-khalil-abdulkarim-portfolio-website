import React from "react";

import {
    Helmet
} 
from "react-helmet";

import {
    useStaticQuery,
    graphql
}
from "gatsby";



const Head = () => {

    const {
        site: {
            siteMetadata: {
                title
            }
        }
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `);

    return (    
        <Helmet>
            <title>
                {title}
            </title> 
        </Helmet>
    );
}

export default Head;