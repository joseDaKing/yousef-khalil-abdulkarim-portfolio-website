import React from "react";

import {
    IColorTheme    
} 
from "../../types";

import { 
    colors
}
from "../../theme";

import {
    defaultTransition
} 
from "../../utilities";

import {
    Padding,
    Style
}
from "../utilityComponents";

import {
    navigate
} 
from "@reach/router";

import {
    useStaticQuery,
    graphql
}
from "gatsby";

import Fade from "react-reveal/Fade";



const Footer: React.FC<IColorTheme> = props => {

    const theme = {
        dark: {
            backgroundColor: colors.black,
            color: colors.silverLight
        },
        blue: {
            backgroundColor: colors.blueDefault,
            color: colors.silverLight
        },
        light: {
            backgroundColor: colors.silverLight,
            color: colors.blueDefault
        }
    }

    const {
        backgroundColor,
        color
    } = theme[props.color];

    const {
        site: {
            siteMetadata: {
                author,
                link
            }
        }
    } = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    author
                    link
                }
            }
        }
    `);

    return (
        <Style 
        value={{
            backgroundColor,
            "& p": {
                color: color,
                letterSpacing: 1.3,
                fontSize: 16,
                cursor: "pointer",
                margin: 0,
                textAlign: "center",
                ...defaultTransition,
                overflow: "hidden"
            }
        }}>
            <Padding 
            py="s6" 
            px="s2">
                <Fade>
                    <p onClick={() => navigate(link)}>
                        Designed & Build by {author}
                    </p>
                </Fade>
            </Padding>
        </Style>
    );
}

export default Footer;