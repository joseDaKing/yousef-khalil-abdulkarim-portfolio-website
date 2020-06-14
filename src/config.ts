import {
    createGlobalStyle
} 
from "styled-components";

import 'intersection-observer'

export const GlobalStyles = createGlobalStyle({
    ":root": {
        fontFamily: "roboto"
    },
    body: {
        margin: 0
    }
});