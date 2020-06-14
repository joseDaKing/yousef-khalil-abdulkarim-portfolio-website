import React from "react"

import Layout from "../components/layout";

import * as sections from "../sections/";

import Head from "../components/head";

import {
    GlobalStyles,
}
from "../config";



const IndexPage = () => {
    return (
        <React.Fragment>
            <GlobalStyles/>
            <Head/>
            <Layout 
            sections={Object.values(sections)}/>            
        </React.Fragment>
    );
}

export default IndexPage