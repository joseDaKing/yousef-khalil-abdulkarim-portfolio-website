import "normalize-css";

import React from "react"

import {
    createGlobalStyle
} 
from "styled-components";

import Layout from "../components/layout";

import * as sections from "../sections/";



const GlobalStyles = createGlobalStyle({
    ":root": {
        scrollBehavior: "smooth"
    }
});

const pages = [
    "about",
    "experience",
    "work",
    "contact"
];

const IndexPage = () => {
    return (
        <React.Fragment>
            <GlobalStyles/>

            <Layout
            items={pages}>
                {Object
                .values(sections).map(
                    (Section, index) => 
                        <Section key={index}/>
                )}
            </Layout>
        </React.Fragment>
    );
}

export default IndexPage