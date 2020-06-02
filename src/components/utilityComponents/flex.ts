import styled, { 
    CSSObject
}
from "styled-components";



interface IFlexProps {
    
    flexDirection?: CSSObject["flexDirection"];
    
    flexWrap?: CSSObject["flexWrap"];
    
    flexFlow?: CSSObject["flexFlow"];
    
    justifyContent?: CSSObject["justifyContent"];
    
    alignItems?: CSSObject["alignItems"];
    
    alignContent?: CSSObject["alignContent"]
}

export const Flex = styled.div<IFlexProps>(props => {

    let properties: CSSObject = {
        display: "flex",  
    };

    if (props.flexDirection) {
        properties = {
            ...properties,
            flexDirection: props.flexDirection,
        }
    }

    if (props.flexWrap) {
        properties = {
            ...properties,
            flexWrap: props.flexWrap,
        }
    }

    if (props.flexFlow) {
        properties = {
            ...properties,
            flexFlow: props.flexFlow,
        }
    }

    if (props.justifyContent) {
        properties = {
            ...properties,
            justifyContent: props.justifyContent,
        }
    }

    if (props.alignItems) {
        properties = {
            ...properties,
            alignItems: props.alignItems,
        }
    }

    if (props.alignContent) {
        properties = {
            ...properties,
            alignContent: props.alignContent,
        }
    }

    return properties;
});