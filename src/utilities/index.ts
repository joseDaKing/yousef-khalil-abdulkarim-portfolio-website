import {
    SpacingMetric, 
    IColorProps,
    BreakpointStyleType
}
from "../types";

import {
    spacing
} 
from "../theme";

import color from "color";

import tcomb from "tcomb-validation";



export const defaultTransition = ({transition: "all 0.2s ease-in"});

export const getScaleValue = (spacingValue?: SpacingMetric) => {
    
    if (spacingValue === "auto") return spacingValue;

    const value = [...spacingValue].splice(1, 2)[0]

    const type = [...spacingValue].splice(0, 1)[0];

    if (!spacingValue) return 0;

    let pxValue: number; 

    if (type === "s") {
        pxValue = spacing.scaling[value];
    }
    else {
        pxValue = spacing.layout[value];
    }

    return pxValue;
}

export const applyColorProps = (colorStr: string, colorProps: IColorProps) => {

    const { 
        negate,
        
        lighten,
        
        darken,
        
        saturate,
        
        desaturate,
        
        grayscale,
        
        whiten,
        
        blacken,
        
        fade,
        
        opaquer,
        
        rotate,
        
        alpha
    } = colorProps;

    const hasColorProps = (
        negate !== undefined
        || lighten !== undefined
        || darken !== undefined
        || saturate !== undefined
        || desaturate !== undefined
        || grayscale !== undefined
        || whiten !== undefined
        || blacken !== undefined
        || fade !== undefined
        || opaquer !== undefined
        || rotate !== undefined
        || alpha !== undefined
    );
    
    if (hasColorProps) {
        
        let colorObj = color(colorStr);
        
        if (negate) colorObj.negate();

        if (lighten) colorObj = colorObj.lighten(lighten);
        
        if (darken) colorObj = colorObj.darken(darken);
        
        if (saturate) colorObj = colorObj.saturate(saturate);
        
        if (desaturate) colorObj = colorObj.desaturate(desaturate);
        
        if (grayscale) colorObj = colorObj.grayscale();
        
        if (whiten) colorObj = colorObj.whiten(whiten);
        
        if (blacken) colorObj = colorObj.blacken(blacken);
        
        if (fade) colorObj = colorObj.fade(fade);
        
        if (opaquer) colorObj = colorObj.opaquer(opaquer);
        
        if (rotate) colorObj = colorObj.rotate(rotate);
        
        if (alpha) colorObj = colorObj.alpha(alpha);

        return colorObj.string();   
    }

    return colorStr;
}