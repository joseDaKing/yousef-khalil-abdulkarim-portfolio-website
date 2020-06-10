import React from "react"

import Layout from "../components/layout";

import List from "../components/list";

import Image from "../components/image";

import MediaQuery from "react-responsive";

// @ts-ignore
import portfolioImageUrl from "../images/portfolio.jpg";

import {
    Text
} 
from "../components/typography";

import {
    Margin    
}
from "../components/utilityComponents";

import {
    breakpoints
}
from "../theme";



const TextSide = () => {
    return (
        <React.Fragment>
            <Margin mb="s5">
                <Text 
                alpha={0.9}
                color="light">
                    Hello! I'm Yousef, a software developer based in Malmö Sweden.
                </Text>
            </Margin>

            <Margin mb="s5">
                <Text
                alpha={0.9}
                color="light">
                    I enjoy creating things that live on the internet, 
                    whether that be websites, mobile apps, or anything in between. 
                    My goal is to always build products that provide pixel-perfect, 
                    performant experiences.
                </Text>
            </Margin>

            <Margin mb="s6">
                <Text 
                alpha={0.9}
                color="light">
                    Here are a few technologies I've been working with recently:
                </Text>      
            </Margin>

            <List
            color="light" 
            items={[
                [
                    "JavaScript (ES6+)",
                    "TypeScript",
                    "Node.js",
                    "MongoDB"
                ],
                [
                    "HTML & (S)CSS",
                    "React",
                    "React Native"
                ]
            ]}/>
        </React.Fragment>
    );
}

const PortfolioSide = () => {
    return (
        <Image 
        round
        width={300}
        src={portfolioImageUrl}/>
    );
}

export const AboutMeSection = () => {
    return (
        <Layout.Section
        title="About me"
        name="about" 
        color="blue">
            <MediaQuery minWidth={breakpoints.md + 1}>
                <Layout.Grid 
                gapX="s6"
                gapY="s6" 
                structure={[
                    ["textSide", "portfolioSide"],
                ]}>
                    <Layout.Box 
                    name="textSide">
                        <TextSide/>
                    </Layout.Box>

                    <Layout.Box 
                    name="portfolioSide">
                        <PortfolioSide/>
                    </Layout.Box>
                </Layout.Grid>
            </MediaQuery>
            
            <MediaQuery maxWidth={breakpoints.md}>
                <Layout.Grid 
                gapX="s6"
                gapY="s6" 
                structure={[
                    ["portfolioSide"],
                    ["textSide"],
                ]}>
                    <Layout.Box 
                    name="textSide">
                        <TextSide/>
                    </Layout.Box>

                    <Layout.Box 
                    name="portfolioSide">
                        <PortfolioSide/>
                    </Layout.Box>
                </Layout.Grid>
            </MediaQuery>
        </Layout.Section>
    );
}