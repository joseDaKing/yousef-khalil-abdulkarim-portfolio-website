import React from "react"

import Layout from "../components/layout";

import * as sectionsComponents from "../sections/";

import Head from "../components/head";

import {
    GlobalStyles,
}
from "../config";



const IndexPage = () => {
    
    const sections = Object.values(sectionsComponents);

    return (
        <React.Fragment>
            <GlobalStyles/>
            <Head/>
            <Layout 
            items={sections.map(section => section.name)}
            sections={sections}/>            
        </React.Fragment>
    );
}

export default IndexPage