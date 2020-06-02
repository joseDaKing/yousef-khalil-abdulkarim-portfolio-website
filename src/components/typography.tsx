import styled, { CSSObject } from "styled-components";

import {
    colors
} 
from "../theme";

import {
    ComponentTheme,
    IColorProps
}
from "../types"

import {
    applyColorProps
}
from "../utilities";



interface ITypographyProps extends IColorProps {
    color: ComponentTheme;
    size?: number; 
    align?: CSSObject["textAlign"];
    transform?: CSSObject["textTransform"];
}

const createCommonProps = (props: ITypographyProps, size: number) => {

    const colorTheme = {
        dark: colors.grayDark,
        light: colors.silverLight,
        blue: colors.blueDefault
    }

    const color = colorTheme[props.color ?? "dark"];

    return {
        color: applyColorProps(color, props),
        fontSize: size * Math.round(props.size || 1),
        fontFamily: "roboto",
        margin: 0,
        padding: 0,
        textAlign: props.align ?? "left",
        textTransform: props.transform ?? "none"
    }
};

export const Brand = styled.h6<ITypographyProps>(props => ({
    ...createCommonProps(props, 14),
    textTransform: "uppercase", 
    letterSpacing: 5,
    fontWeight: 900
}));

export const Display = styled.h1<ITypographyProps>(props => ({
    ...createCommonProps(props, 70),
    letterSpacing: 3,
}));

export const Title = styled.h2<ITypographyProps>(props => ({
    ...createCommonProps(props, 28),
    leterSpacing: 2
}));

export const SubTitle = styled.h2<ITypographyProps>(props => ({
    ...createCommonProps(props, 22),
    letterSpacing: 2
}));

export const Text = styled.p<ITypographyProps>(props => ({
    ...createCommonProps(props, 18),
    lineHeight: 1.25,
    fontWeight: 400
}));