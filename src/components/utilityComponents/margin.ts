import styled from "styled-components";

import {
    SpacingMetric
}
from "../../types";

import {
    getScaleValue
}
from "../../utilities";



interface IMarginProps {

    m?: SpacingMetric;
    
    mx?: SpacingMetric;
    
    my?: SpacingMetric;

    mb?: SpacingMetric;
    
    mt?: SpacingMetric;
    
    ml?: SpacingMetric;
    
    mr?: SpacingMetric;
}

export const Margin = styled.div<IMarginProps>(props => ({
    ...applyHorizontalMargin(props),
    ...applyVerticalMargin(props),
}));

function applyHorizontalMargin(props: IMarginProps) {
    
    let marginLeft: number;

    let marginRight: number;

    if (props.m) {
        marginLeft = getScaleValue(props.m);
        marginRight = getScaleValue(props.m)
    }

    if (props.mx) {
        marginLeft = getScaleValue(props.mx);
        marginRight = getScaleValue(props.mx)
    }

    if (props.ml) {
        marginLeft = getScaleValue(props.ml);
    }

    if (props.mr) {
        marginRight = getScaleValue(props.mr)
    }

    return {
        marginLeft,
        marginRight
    }
}

function applyVerticalMargin(props: IMarginProps) {
    
    let marginTop: number;

    let marginBottom: number;

    if (props.m) {
        marginTop = getScaleValue(props.m);
        marginBottom = getScaleValue(props.m)
    }

    if (props.my) {
        marginTop = getScaleValue(props.my);
        marginBottom = getScaleValue(props.my)
    }

    if (props.mt) {
        marginTop = getScaleValue(props.mt);
    }

    if (props.mb) {
        marginBottom = getScaleValue(props.mb)
    }

    return {
        marginTop,
        marginBottom
    }
}