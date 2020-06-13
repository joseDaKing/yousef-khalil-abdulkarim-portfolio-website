import React from "react";

import styled from "styled-components";

import {
    colors,
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



interface IItemProps extends IColorTheme {
    index: number;
    active: boolean;
}

const Item = styled.a<IItemProps>(props => {

    const componentThemeColors = {
        dark: {
            color: props.active ? colors.black : colors.white,
            backgroundColor: props.active ? colors.silverLight : "transparent",
            hoverColor: colors.black,
            hoverBackgroundColor: colors.silverDefault
        },
        blue: {
            color: props.active ? colors.black : colors.white,
            backgroundColor: props.active ? colors.silverDefault : "transparent",
            hoverColor: colors.black,
            hoverBackgroundColor: colors.silverDefault
        },
        light: {
            color: props.active ? colors.white : colors.black,
            backgroundColor: props.active ? colors.blueDefault : "transparent",
            hoverColor: colors.white,
            hoverBackgroundColor: colors.blueLight
        }
    }
    
    const {
        color, 
        backgroundColor,
        hoverColor,
        hoverBackgroundColor
    } = componentThemeColors[props.color];

    return {
        fontSize: 15,
        display: "block",
        textDecoration: "none",
        color,
        textTransform: "capitalize",
        backgroundColor,
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
    active: string;
    onClick?: () => void;
}

const Items: React.FC<IItemsProps> = props => {
    return (
        <React.Fragment>
            {props.items.map((name, index) => {

                const link = `#${name}`;

                const isActive = props.active === link;

                return (
                    <Item 
                    color={props.color}
                    onClick={props.onClick}
                    key={name}
                    active={isActive}
                    index={index + 1}
                    href={link}>
                        <Padding 
                        px="s7" 
                        py="s6">
                            {name}
                        </Padding>
                    </Item>
                );
            })}
        </React.Fragment>
    );
}

export default Items;