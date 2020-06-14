import React from "react"

import Head from "../components/head";

import Layout from "../components/layout";

import Button from "../components/button";

import {
    Display,
    Title
}
from "../components/typography";

import {
    Margin,
    Style,
}
from "../components/utilityComponents";

import {
    navigate
}
from "@reach/router";

import {
    GlobalStyles,
}
from "../config";

import {
    getNavbarItems
}
from "../utilities";



const NotFoundPage = () => {
    return (
        <React.Fragment>
            <Head/>
            <GlobalStyles/>
            <Layout 
            items={getNavbarItems()}
            sections={[{
                index: 0,
                name: "404",
                color: "light",
                content: () => {
                    return (
                        <Style
                        value={{
                            height: `calc(100vh - ${47 + 96 + 160 + 67}px)`,
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "center",
                            alignItems: "center",
                            alignContent: "center",
                        }}>
                            <Margin 
                            mb="s5">                                    
                                <Display
                                align="center" 
                                color="blue">
                                404
                                </Display>
                            </Margin>

                            <Margin
                            mb="s8">
                                <Title 
                                align="center"
                                color="dark"
                                transform="capitalize">
                                    page not found
                                </Title>
                            </Margin>

                            <Button 
                            onClick={() => navigate("/")}
                            size="xl"
                            color="blue">
                                go back
                            </Button>
                        </Style>
                    );
                }   
            }]}/>
        </React.Fragment>
    );
}

export default NotFoundPage
