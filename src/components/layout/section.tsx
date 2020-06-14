import React from "react";

import styled from "styled-components";

import{
    Padding,
    Margin,
    BackgroundColor
}
from "../utilityComponents";

import {
    down,
    up
} 
from "styled-breakpoints";

import {
    Title
}
from "../typography";

import {
    IColorTheme
}
from "../../types";

import {
    colors
}
from "../../theme"

import Color from "color";

import Fade from "react-reveal/Fade";



const Content = styled.div(props => ({
    [up("sm")(props)]: {
        maxWidth: 600,    
    },
    [up("md")(props)]: {
        maxWidth: 1000,    
    },
    [up("lg")(props)]: {
        maxWidth: 1200
    },
    width: "100%",
    margin: "auto"
}));

const TitleMargin = styled(Margin)<IColorTheme>(props => {

    const theme = {
        dark: colors.silverLight,
        light: colors.grayDark,
        blue: colors.silverLight
    }

    const color = theme[props.color];
    
    const pseudoElementStyles = {
        content: `""`,
        display: "block",
        paddingTop: 1,
        paddingBottom: 1,
        paddingLeft: 5,
        paddingRight: 5,
        [up("sm")(props)]: {
            flexBasis: 96,
        },
        [down("sm")(props)]: {
            flexBasis: 32,
        },
        backgroundColor: (
            Color(color)
            .alpha(0.5)
            .string()
        ),
    };

    return {
        display: "flex",
        alignItems: "center",
        [down("sm")(props)]: {
            justifyContent: "center"
        },
        [up("xs")(props)]: {
            "&::before": { 
                ...pseudoElementStyles
            },
            "&::after": { 
                ...pseudoElementStyles,
            }
        },
    };
});

export interface ISectionProps extends IColorTheme {
    title?: string;
    name: string;
}

const Section: React.FC<ISectionProps> = props => {

    const titleTheme = {
        dark: "light",
        light: "dark",
        blue: "light",
    } as const;

    const titleColor = titleTheme[props.color];

    const backgroundColorTheme = {
        dark: {
            color: "black",
        },
        light: {
            color: "white",
        },
        blue: {
            color: "blueDefault",
            lighten: 0.15
        }
    } as const;

    const backgroundColor = backgroundColorTheme[props.color];

    return (
        <BackgroundColor 
        id={props.name}
        {...backgroundColor}>
            <Content>
                <Padding
                px="s5"
                pt="l6"
                pb="l7">
                    <Fade bottom>
                        {props.title &&
                        <TitleMargin 
                        mb="s9"
                        color={props.color}>
                            <Margin mx="s5">
                                <Title 
                                transform="capitalize"
                                color={titleColor}>
                                    {props.title}
                                </Title>
                            </Margin>
                        </TitleMargin>}
                    </Fade>
                    
                    {props.children}
                </Padding>
            </Content>
        </BackgroundColor> 
    );
}

export default Section;