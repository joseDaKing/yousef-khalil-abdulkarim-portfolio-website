import React from "react"

import Layout from "../components/layout";

import * as sections from "../sections/";

import Head from "../components/head";

import {
    GlobalStyles,
    navbarItems
}
from "../config";



const IndexPage = () => {
    return (
        <React.Fragment>
            <GlobalStyles/>
            <Head/>
            <Layout
            items={navbarItems}>
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