import styled from "styled-components";

import {
    SpacingMetric
}
from "../../types";

import {
    getScaleValue
}
from "../../utilities";



interface IPaddingProps {

    p?: SpacingMetric;
    
    px?: SpacingMetric;
    
    py?: SpacingMetric;

    pb?: SpacingMetric;
    
    pt?: SpacingMetric;
    
    pl?: SpacingMetric;
    
    pr?: SpacingMetric;
}

export const Padding = styled.div<IPaddingProps>(props => ({
    ...applyHorizontalPadding(props),
    ...applyVerticalPadding(props),
}));

function applyHorizontalPadding(props: IPaddingProps) {
    let paddingLeft: number | string;

    let paddingRight: number | string;

    if (props.p) {
        paddingLeft = getScaleValue(props.p);
        paddingRight = getScaleValue(props.p)
    }

    if (props.px) {
        paddingLeft = getScaleValue(props.px);
        paddingRight = getScaleValue(props.px)
    }

    if (props.pl) {
        paddingLeft = getScaleValue(props.pl);
    }

    if (props.pr) {
        paddingRight = getScaleValue(props.pr)
    }

    return {
        paddingLeft,
        paddingRight
    }
}

function applyVerticalPadding(props: IPaddingProps) {
    
    let paddingTop: number | string = 0;

    let paddingBottom: number | string = 0;

    if (props.p) {
        paddingTop = getScaleValue(props.p);
        paddingBottom = getScaleValue(props.p)
    }

    if (props.py) {
        paddingTop = getScaleValue(props.py);
        paddingBottom = getScaleValue(props.py)
    }

    if (props.pt) {
        paddingTop = getScaleValue(props.pt);
    }

    if (props.pb) {
        paddingBottom = getScaleValue(props.pb)
    }

    return {
        paddingTop,
        paddingBottom
    }
}