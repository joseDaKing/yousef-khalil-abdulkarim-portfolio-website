import React from "react";

import styled, {
    CSSObject
} 
from "styled-components";



interface IImageContainerProps {
    width?: number;
    round?: boolean;
}

const ImageContainer = styled.div<IImageContainerProps>(props => ({
    width: "100%",
    maxWidth: props.width ?? 128,
    borderRadius: props.round ? 12 : 0,
    overflow: "hidden",
    margin: "auto",
    "& > img": {
        display: "block",
        width: "100%"
    }
}));

interface IImageProps extends IImageContainerProps{
    src: string;
    round?: true;
}

const Image: React.FC<IImageProps> = props => {
    return (
        <ImageContainer 
        round={props.round}
        width={props.width}>
            <img 
            src={props.src}/>
        </ImageContainer>
    );
};

export default Image;