import React from "react";

import styled from "styled-components";

import { 
    colors
}
from "../theme";

import {
    Padding
}
from "../components/utilityComponents";

import { 
    defaultTransition 
} 
from "../utilities";

import { 
    IComponentTheme
}
from "../types";

import Color from "color";



const Button = styled.button<IComponentTheme>(props => {

    const componentThemeColor = {
        blue: colors.blueDefault,
        dark: colors.grayDark,
        light: colors.blueLightest
    }

    const color = componentThemeColor[props.color];

    return {
        display: "block",
        fontFamily: "roboto",
        all: "unset",
        cursor: "pointer",
        backgroundColor: "transparent",
        border: `solid ${color} 1.5px`,
        color,
        borderRadius: 3,
        letterSpacing: 1.5,
        textTransform: "uppercase",
        fontSize: 14,
        "&:hover": {
            ...defaultTransition,
            backgroundColor: (
                Color(color)
                .alpha(0.3)
                .string()
            )
        }
    }
});

interface IButton extends IComponentTheme {
    href?: string;
}

const Btn: React.FC<IButton> = props => {
    return (
        <a 
        style={{
            textDecoration: "none"
        }}
        href={props.href ?? "/"}>
            <Button 
            color={props.color}>
                <Padding 
                py="s3" 
                px="s4">
                    {props.children}
                </Padding>
            </Button>
        </a>
    );
}

export default Btn;