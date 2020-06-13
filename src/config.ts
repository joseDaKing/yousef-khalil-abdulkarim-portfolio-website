import {
    createGlobalStyle
} 
from "styled-components";



export const GlobalStyles = createGlobalStyle({
    ":root": {
        scrollBehavior: "smooth",
        fontFamily: "roboto"
    },
    body: {
        margin: 0
    }
});

export const navbarItems = [
    "about",
    "work",
    "contact"
];