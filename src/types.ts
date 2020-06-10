import {
    colors
} 
from "./theme";

import {
    breakpoints
}
from "./theme";



export type LayoutSpacing = (
    "l1" | "l2" | "l3" |
    "l4" | "l5" | "l6" | "l7"
);

export type MicroSpacing = (
    "s1" | "s2" | "s3" | "s4" |
    "s5" | "s6" | "s7" | "s8" |
    "s9"
);

export type SpacingMetric = MicroSpacing | LayoutSpacing | "auto";

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
};

export interface IColorTheme {
    color: "dark" | "light" | "blue";
};

export interface ISizeTheme {
    size?: "xl" | "lg" | "md" | "sm" | "xs";
};