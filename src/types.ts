import {
    colors
} 
from "./theme";

export type SpacingMetric = (
    "s1" | "s2" | "s3" | "s4" |
    "s5" | "s6" | "s7" | "s8" |
    "s9" | "l1" | "l2" | "l3" |
    "l4" | "l5" | "l6" | "l7" | 
    "auto"
);

export type Colors = keyof typeof colors;

export interface IColorProps {
    negate?: boolean; 

    lighten?: number; 
    darken?: number;

    saturate?: number;
    desaturate?: number;
    grayscale?: boolean; 

    whiten?: number;
    blacken?: number;

    fade?: number;
    opaquer?: number;

    rotate?: number;
    alpha?: number;
}

export type ComponentTheme = "dark" | "light" | "blue";

export interface IComponentTheme {
    color: "dark" | "light" | "blue";
}