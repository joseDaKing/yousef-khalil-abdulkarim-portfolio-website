import React from "react"

import Layout from "../components/layout";

import * as sections from "../sections/";

import Head from "../components/head";

import {
    GlobalStyles,
}
from "../config";

import {
    getNavbarItems
}
from "../utilities";



const IndexPage = () => {
    return (
        <React.Fragment>
            <GlobalStyles/>
            <Head/>
            <Layout 
            items={getNavbarItems()}
            sections={Object.values(sections)}/>            
        </React.Fragment>
    );
}

export default IndexPage