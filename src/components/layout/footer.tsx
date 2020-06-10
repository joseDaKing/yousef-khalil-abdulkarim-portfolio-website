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



interface IFooterProps extends IColorTheme {
    link: string;
}

const Footer: React.FC<IFooterProps> = props => {

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
                fontFamily: "roboto",
                ...defaultTransition,
                overflow: "hidden"
            }
        }}>
            <Padding 
            py="s7" 
            px="s2">
                <p onClick={() => navigate(props.link)}>
                    Designed & Build by Yousef Abdulkarim
                </p>
            </Padding>
        </Style>
    );
}

export default Footer;