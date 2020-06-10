import color from "color";

const blueDefault = "#408FEC";

export const colors = {
    blueDefault,

    blueLight: "#8EBDF1",

    blueLightest: "#F6FAFF",
    
    white: "#FBFBFD",
        
    black: (
        color(blueDefault)
        .darken(.6)
        .desaturate(0.5)
        .string()
    ),

    grayDark: "#596981",

    grayDefault: "#96A3B6",

    grayLight: "#CFD7E6",

    silverDark: "#E3E7EF",

    silverDefault: "#EEF1F6",

    silverLight: "#F7F8FB",
} as const;

export const spacing = {
    scaling: {

        1: 2,
    
        2: 4,
        
        3: 8,

        4: 12,

        5: 16,

        6: 24,

        7: 32,

        8: 40,

        9: 48
    },

    layout: {

        1: 16,

        2: 24,

        3: 32,

        4: 48,

        5: 64,

        6: 96,

        7: 160
    }
} as const;

export const breakpoints = {

    xs: 368,

    sm: 395,

    md: 890,

    lg: 1451,

    xl: 1728
} as const;