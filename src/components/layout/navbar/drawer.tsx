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

import {
    useSpring,
    animated
} 
from "react-spring";

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



const DrawerContainer = styled(animated.aside)<IColorTheme>(props => {

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

    const animatedStyles = useSpring({
        transform: props.isOpen ? "translateX(0%)" : "translateX(100%)"
    });

    const buttonThemes = {
        dark: "light",
        blue: "light",
        light: "blue",
    } as const;

    const buttonTheme = buttonThemes[props.color];


    return (
        <DrawerContainer 
        color={props.color}
        style={animatedStyles}>
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
                    items={props.items}
                    active={url}/>

                    <Padding py="s6">
                        <Button color={buttonTheme}>
                            Resume
                        </Button>
                    </Padding>
                </Flex>
            </Style>
        </DrawerContainer>
    );
};

export default Drawer;