import React from "react";

import styled from "styled-components";

import {
    breakpoints,
    colors
} 
from "../../../theme";

import Button from "../../button";

import MenuIcon from '@material-ui/icons/Menu';

import { up, down } from "styled-breakpoints";

import { 
    IColorTheme 
}
from "../../../types";

import MediaQuery, {
    useMediaQuery
} 
from "react-responsive";

import {
    Brand
}
from "../../typography";

import Image from "../../image";

import {
    Margin,
    Style,
    Padding,
    Flex
}
from "../../utilityComponents";

import Items, {
    IItemsProps
} 
from "./items";

// @ts-ignore
import logoLightUrl from "../../../../static/logo_light.svg";

// @ts-ignore
import logoBlueUrl from "../../../../static/logo_blue.svg";

// @ts-ignore
import cvUrl from "../../../../static/Yousef_Abdulkarim_CV.pdf";

import {
    navigate
}
from "@reach/router";

import Fade from "react-reveal";


import {
    animateScroll
}
from "react-scroll"



const getLogoUrl = (theme: IColorTheme["color"]) => {
    switch(theme) {
        case "dark":
        case "blue":
            return logoLightUrl;

        case "light":
            return logoBlueUrl;
    }
}

const Container = styled.nav<IColorTheme>(props => {
    
    const componentThemeColors = {
        dark: colors.black,
        light: colors.silverLight,
        blue: colors.blueDefault
    }

    const backgroundColor = componentThemeColors[props.color];

    return {
        backgroundColor,
        position: "sticky",
        zIndex: 99,
        top: 0,
        width: "100%",
        padding: 0,
        display: "flex",
        [up("md")(props)]: {
            justifyContent: "center"
        },
        [down("sm")(props)]: {
            justifyContent: "flex-end"
        },
        alignItems: "center",
        margin: "auto"
    }
});

interface INavbarProps extends IItemsProps, IColorTheme {
    onDrawerButtonClick: () => void;
}

const Navbar: React.FC<INavbarProps> = props => {

    const a = useMediaQuery({
        minWidth: breakpoints.md + 32 
    });

    const b = useMediaQuery({
        maxWidth: breakpoints.md - 32 
    });

    const c = a || b;

    const buttonThemes = {
        dark: "light",
        blue: "light",
        light: "blue",
    } as const;

    const buttonColor = buttonThemes[props.color];

    const navbarButtonTheme = {
        dark: colors.silverLight,
        blue: colors.silverLight,
        light: colors.blueDefault
    }

    const navbarButton = navbarButtonTheme[props.color];

    const buttonFadeInDelay = (props.items.length + 1) * 150;

    return (
        <Container color={props.color}>
            <Style 
            onClick={() => animateScroll.scrollToTop()}
            value={{
                cursor: "pointer",
                position: "absolute",
                left: 0,
            }}>    
                <Flex 
                justifyContent="center" 
                alignItems="center">
                    <Fade
                    duration={350}>
                        <Margin ml="s6" >
                            <Image 
                            width={28}
                            src={getLogoUrl(props.color)}/>
                        </Margin>
                    </Fade>
                    
                    {c && 
                    <Fade 
                    duration={350}>
                        <Margin ml="s3">
                            <Brand color={buttonColor}>
                                yousef
                            </Brand>
                        </Margin>
                    </Fade>}
                </Flex>
            </Style>

            <MediaQuery minWidth={breakpoints.md + 1}>
                <Items
                items={props.items}
                onClick={() => {}}
                color={props.color}/>
                
                <Padding pl="s6">
                    <a 
                    style={{
                        textDecoration: "none"
                    }}
                    href={cvUrl}>
                        <Fade
                        top
                        delay={buttonFadeInDelay}>
                            <Button 
                            color={buttonColor}>
                                Resume
                            </Button>
                        </Fade>
                    </a>
                </Padding>
            </MediaQuery>
            
            <MediaQuery maxWidth={breakpoints.md}>
                <Padding 
                onClick={props.onDrawerButtonClick}
                px="s3" 
                py="s2">
                    <Style
                    value={{
                        cursor: "pointer"
                    }}>
                        <MenuIcon 
                        fontSize="large"
                        style={{
                            color: navbarButton
                        }}/>
                    </Style>
                </Padding>
            </MediaQuery>
        </Container>
    );
}

export default Navbar;