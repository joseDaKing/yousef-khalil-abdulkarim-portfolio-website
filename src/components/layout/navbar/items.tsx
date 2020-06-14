import React from "react";

import styled from "styled-components";

import {
    colors,
    breakpoints
} 
from "../../../theme";

import {
    Padding
}
from "../../utilityComponents";

import { 
    defaultTransition
}
from "../../../utilities";

import {
    IColorTheme
}
from "../../../types";

import {
    useMediaQuery
}
from "react-responsive";

import Fade from "react-reveal/Fade";

import {
    Link
}
from "react-scroll"



interface IItemProps extends IColorTheme {
    index: number;
}

const Item = styled.div<IItemProps>(props => {

    const componentThemeColors = {
        dark: {
            color: colors.white,
            hoverColor: colors.black,
            hoverBackgroundColor: colors.silverDefault
        },
        blue: {
            color: colors.white,
            hoverColor: colors.black,
            hoverBackgroundColor: colors.silverDefault
        },
        light: {
            color: colors.black,
            hoverColor: colors.white,
            hoverBackgroundColor: colors.blueLight
        }
    }
    
    const {
        color, 
        hoverColor,
        hoverBackgroundColor
    } = componentThemeColors[props.color];

    return {
        cursor: "pointer",
        fontSize: 15,
        display: "block",
        textDecoration: "none",
        color,
        textTransform: "capitalize",
        letterSpacing: 1.6,
        ...defaultTransition,
        "&:hover": {
            "& > *::before": {
                color: "inherit",
                transition: "inherit"
            },
            color: hoverColor,
            backgroundColor: hoverBackgroundColor,
            opacity: 0.9,
            ...defaultTransition
        },
    };
});

export interface IItemsProps extends IColorTheme {
    items: string[];
    onClick?: () => void;
}

const Items: React.FC<IItemsProps> = props => {
    
    const tabletBreakpointDown = useMediaQuery({
        maxWidth: breakpoints.md
    });

    

    return (
        <React.Fragment>
            {props.items.map((name, index) => {

                const item = (
                    <Link 
                    smooth
                    to={name}
                    key={name}>
                        <Item 
                        color={props.color}
                        onClick={props.onClick}
                        index={index + 1}>
                            <Padding 
                            px="s7" 
                            py="s6">
                                {name}
                            </Padding>
                        </Item>
                    </Link>
                );

                if (tabletBreakpointDown) return item;
                else return (
                    <Fade 
                    top 
                    key={name}
                    delay={index * 150}>
                        {item}
                    </Fade>
                )
            })}
        </React.Fragment>
    );
}

export default Items;