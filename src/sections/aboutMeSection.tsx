import React from "react"

import Layout from "../components/layout";

import List from "../components/list";

import Image from "../components/image";

import MediaQuery from "react-responsive";

// @ts-ignore
import portfolioImageUrl from "../../static/portfolio.webp";

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

import {
    graphql,
    useStaticQuery
}
from "gatsby";

import Fade from "react-reveal/Fade";



const TextSide: React.FC<{ data: any }> = props => {

    const elements = [
        <Margin mb="s5">
            <Text
            alpha={0.9}
            color="light">
                {(props.data.html as string).replace(/<p>/g, "").replace(/<\/p>/g, "")}
            </Text>
        </Margin>,

        <Margin mb="s6">
            <Text 
            alpha={0.9}
            color="light">
                Here are a few technologies I've been working with recently:
            </Text>      
        </Margin>,

        <List
        color="light" 
        items={[
            props.data.frontmatter.skills1,
            props.data.frontmatter.skills2
        ]}/>
    ];

    return (
        <React.Fragment>
            {elements.map((element, index) => (
                <Fade
                bottom
                delay={index * 100}>
                    {element}
                </Fade>
            ))}
        </React.Fragment>
    );
}

const PortfolioSide = () => {
    return (
        <Fade
        delay={200}>
            <Image 
            round
            width={300}
            src={portfolioImageUrl}/>
        </Fade>
    );
}

export const AboutMeSection = () => {

    const data = useStaticQuery(graphql`
        {
            about: markdownRemark(fileAbsolutePath: {regex: "/about/"}) {
                frontmatter {
                    title
                    skills1,
                    skills2
                }
                html
            }
        }
    `).about;

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
                        <TextSide 
                        data={data}/>
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
                        <TextSide 
                        data={data}/>
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