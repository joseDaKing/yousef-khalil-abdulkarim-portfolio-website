import React from "react";

import styled from "styled-components";



interface IImageContainerProps {
    width?: number
}

const ImageContainer = styled.div<IImageContainerProps>(props => ({
    width: "100%",
    maxWidth: props.width ?? 32,
    overflow: "hidden",
    "& > img": {
        display: "block",
        width: "100%"
    }
}));

interface IImageProps extends IImageContainerProps{
    src: string;
}

const Image: React.FC<IImageProps> = props => (
    <ImageContainer width={props.width}>
        <img src={props.src}/>
    </ImageContainer>
);

export default Image;