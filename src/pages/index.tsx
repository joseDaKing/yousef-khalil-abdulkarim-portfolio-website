import React from "react"

import {
    createGlobalStyle
} 
from "styled-components";

import Layout from "../components/layout";

import * as sections from "../sections/";

import Head from "../components/head";



const GlobalStyles = createGlobalStyle({
    ":root": {
        scrollBehavior: "smooth",
        fontFamily: "roboto"
    },
    body: {
        margin: 0
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
            <Head/>
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