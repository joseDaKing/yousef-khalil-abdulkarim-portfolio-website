import React from "react"

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

import {
    Grid,
    Box
}
from "../components/grid";

import {
    ISection
}
from "../components/layout";



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
                key={index}
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

export const aboutMeSection: ISection = {
    index: 1,
    title: "about me",
    name: "about",
    color: "blue",
    content: () => {

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
            <React.Fragment>
                <MediaQuery minWidth={breakpoints.md + 1}>
                    <Grid 
                    gapX="s6"
                    gapY="s6" 
                    structure={[
                        ["textSide", "portfolioSide"],
                    ]}>
                        <Box 
                        name="textSide">
                            <TextSide 
                            data={data}/>
                        </Box>

                        <Box 
                        name="portfolioSide">
                            <PortfolioSide/>
                        </Box>
                    </Grid>
                </MediaQuery>
                
                <MediaQuery maxWidth={breakpoints.md}>
                    <Grid 
                    gapX="s6"
                    gapY="s6" 
                    structure={[
                        ["portfolioSide"],
                        ["textSide"],
                    ]}>
                        <Box 
                        name="textSide">
                            <TextSide 
                            data={data}/>
                        </Box>

                        <Box 
                        name="portfolioSide">
                            <PortfolioSide/>
                        </Box>
                    </Grid>
                </MediaQuery>
            </React.Fragment>    
        );
    }
}