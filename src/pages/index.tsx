import "normalize-css";

import React from "react"

import {
    createGlobalStyle
} 
from "styled-components";

import Layout from "../components/layout";



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
                <Layout.Section 
                color="dark"
                title="about"
                name="about">

                </Layout.Section>
            </Layout>
        </React.Fragment>
    );
}

export default IndexPage