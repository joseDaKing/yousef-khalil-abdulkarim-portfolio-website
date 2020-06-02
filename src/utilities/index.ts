import {
    SpacingMetric, 
    IColorProps,
}
from "../types";

import {
    spacing
} 
from "../theme";

import color from "color";



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

    const colorObj = color(colorStr);

    if (negate) colorObj.negate();
    
    if (lighten) colorObj.lighten(lighten)
    
    if (darken) colorObj.darken(darken);
    
    if (saturate) colorObj.saturate(saturate);
    
    if (desaturate) colorObj.desaturate(desaturate);
    
    if (grayscale) colorObj.grayscale();
    
    if (whiten) colorObj.whiten(whiten);
    
    if (blacken) colorObj.blacken(blacken);
    
    if (fade) colorObj.fade(fade);
    
    if (opaquer) colorObj.opaquer(opaquer);
    
    if (rotate) colorObj.rotate(rotate);
    
    if (alpha) colorObj.alpha(alpha);

    return colorObj.string();
}