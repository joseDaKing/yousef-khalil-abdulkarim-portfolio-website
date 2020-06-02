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
    IComponentTheme 
}
from "../../../types";

import MediaQuery, {
    useMediaQuery
} 
from "react-responsive";

import {
    navigate
}
from "@reach/router";

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
import logoUrl from "../../../images/logo.svg";



const Container = styled.nav<IComponentTheme>(props => {
    
    const componentThemeColors = {
        dark: colors.grayDark,
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

interface INavbarProps extends IItemsProps, IComponentTheme {
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

    

    return (
        <Container color={props.color}>
            <Style 
            onClick={() => navigate("/")}
            value={{
                cursor: "pointer",
                position: "absolute",
                left: 0,
            }}>
                
                <Flex 
                justifyContent="center" 
                alignItems="center">
                    <Margin ml="s6" >
                        <Image 
                        width={28}
                        src={logoUrl}/>
                    </Margin>
                    
                    {c && 
                    <Margin ml="s3">
                        <Brand color={buttonColor}>
                            yousef
                        </Brand>
                    </Margin>}
                </Flex>
            </Style>

            <MediaQuery minWidth={breakpoints.md + 1}>
                <Items
                items={props.items}
                onClick={() => {}}
                color={props.color}
                active={props.active}/>
                
                <Padding pl="s6">
                    <Button color={buttonColor}>
                        Resume
                    </Button>
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