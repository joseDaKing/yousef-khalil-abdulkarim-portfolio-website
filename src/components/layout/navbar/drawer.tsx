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

import {
    AnimatePresence,
    motion
}
from "framer-motion";

// @ts-ignore
import cvUrl from "../../../../static/Yousef_Abdulkarim_CV.pdf";



const DrawerContainer = styled(motion.aside)<IColorTheme>(props => {

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

    const buttonThemes = {
        dark: "light",
        blue: "light",
        light: "blue",
    } as const;

    const buttonTheme = buttonThemes[props.color];

    const drawerClosedStyle = {
        transform: "translateX(100%)"
    };

    const drawerOpenStyle = {
        transform: "translateX(0%)"
    };

    const drawerTransition = {
        type: "spring",
        damping: 20,
        stiffness: 90
    };

    console.log(props.isOpen);

    return (
        <AnimatePresence>
            {props.isOpen &&
            <DrawerContainer 
            initial={drawerClosedStyle}
            animate={drawerOpenStyle}
            exit={drawerClosedStyle}
            transition={drawerTransition}
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
                        items={props.items}
                        active={url}/>

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
            </DrawerContainer>}
        </AnimatePresence>
    );
    
};

export default Drawer;