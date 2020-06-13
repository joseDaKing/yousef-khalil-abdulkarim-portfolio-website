import React from "react";

import styled from "styled-components";

import { 
    colors
}
from "../theme";

import { 
    defaultTransition 
} 
from "../utilities";

import { 
    IColorTheme,
    ISizeTheme
}
from "../types";

import {
    spacing
}
from "../theme";

import Color from "color";



const Button = styled.button<IColorTheme & ISizeTheme>(props => {

    const themeColors = {
        blue: colors.blueDefault,
        dark: colors.grayDark,
        light: colors.blueLightest
    }

    const color = themeColors[props.color];

    const baseFontSize = 14;

    const themeSizes = {
        xl: {
            fontSize: baseFontSize * 1.3,
            padding: `${spacing.scaling[5]}px ${spacing.scaling[6]}px`,
        },
        lg: {
            fontSize: baseFontSize * 1.15,
            padding: `${spacing.scaling[4]}px ${spacing.scaling[5]}px`,
        },
        md: {
            fontSize: baseFontSize,
            padding: `${spacing.scaling[3]}px ${spacing.scaling[4]}px`,
        },
        sm: {
            fontSize: baseFontSize * 0.85,
            padding: `${spacing.scaling[2]}px ${spacing.scaling[3]}px`,
        },
        xs: {
            fontSize: baseFontSize * 0.7,
            padding: `${spacing.scaling[1]}px ${spacing.scaling[2]}px`,
        },
    }

    const {
        fontSize,
        padding
    } = themeSizes[props.size ?? "md"];

    return {
        display: "block",
        all: "unset",
        cursor: "pointer",
        backgroundColor: "transparent",
        border: `solid ${color} 1.5px`,
        color,
        borderRadius: 3,
        letterSpacing: 1.5,
        textTransform: "uppercase",
        fontSize,
        padding,
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

export default Button;