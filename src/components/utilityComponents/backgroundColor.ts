import styled from "styled-components";

import {
    applyColorProps
}
from "../../utilities";

import {
    colors
}
from "../../theme";

import {
    Colors,
    IColorProps
}
from "../../types";



export interface IBackgroundColorProps extends IColorProps {
    color: Colors;
}

export const BackgroundColor = styled.div<IBackgroundColorProps>(props => {
    
    const color = colors[props.color];

    return {
        backgroundColor: applyColorProps(color, props)
    }
});