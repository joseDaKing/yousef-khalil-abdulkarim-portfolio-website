import React from "react";

import styled from "styled-components";

import {
    colors
} 
from "../../../theme";

import { 
    useLocation
}
from "@reach/router";

import {
    Padding,
    Flex,
    Style
} 
from "../../utilityComponents";

import { up, down } from "styled-breakpoints";

import Items, {
    IItemsProps
} 
from "./items";

import { 
    IColorTheme
}
from "../../../types";

import Button from "../../button";

// @ts-ignore
import cvUrl from "../../../../static/Yousef_Abdulkarim_CV.pdf";

import {
    defaultTransition
}
from "../../../utilities";



interface IDrawerContainerProps extends IColorTheme {
    open: boolean;
}

const DrawerContainer = styled.aside<IDrawerContainerProps>(props => {

    const colorTheme = {
        dark: colors.grayDark,
        light: colors.silverLight,
        blue: colors.blueDefault
    }

    const color = colorTheme[props.color];

    return {
        position: "fixed",
        zIndex: 100,
        backgroundColor: color,
        right: 0,
        transform: `translateX(${props.open ? "0%" : "100%"})`,
        ...defaultTransition,
        transitionDuration: "375ms",
        transitionTimingFunction: "ease-out",
        [down("sm")(props)]: {
            width: "65%",
        },
        [up("sm")(props)]: {
            width: "35%",
        },
        height: "100%"
    }
});

interface IDrawerProps extends IItemsProps, IColorTheme {
    isOpen: boolean;
    onClose: () => void;
}

const Drawer: React.FC<IDrawerProps> = props => {

    const url = useLocation().hash;

    const buttonThemes = {
        dark: "light",
        blue: "light",
        light: "blue",
    } as const;

    const buttonTheme = buttonThemes[props.color];

    return (
        <DrawerContainer 
        open={props.isOpen}
        color={props.color}>
            <Style
            value={{
                height: "50%",
                "& > *": {
                    textAlign: "center"
                }
            }}>
                <Flex flexDirection="column" justifyContent="space-around">
                    <Items 
                    color={props.color}
                    onClick={props.onClose}
                    items={props.items}/>

                    <Padding py="s6">
                        <a
                        href={cvUrl}
                        style={{
                            textDecoration: "none"
                        }}>
                            <Button color={buttonTheme}>
                                Resume
                            </Button>
                        </a>
                    </Padding>
                </Flex>
            </Style>
        </DrawerContainer>
    );
    
};

export default Drawer;