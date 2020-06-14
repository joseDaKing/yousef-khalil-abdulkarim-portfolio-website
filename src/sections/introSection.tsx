import React from "react"

import Button from "../components/button";

import MediaQuery from "react-responsive";

import {
    breakpoints
}
from "../theme";

import {
    Text,
    SubTitle,
    Display
} 
from "../components/typography";

import {
    Margin,
    Style,
    Flex
}
from "../components/utilityComponents";

import {
    navigate
}
from "@reach/router";

import {
    graphql,
    useStaticQuery
}
from "gatsby";

import Fade from "react-reveal/Fade";

import {
    ISection
}
from "../components/layout";



export const introSection: ISection = {
    index: 0,
    name: "intro",
    color: "light",
    includeInNav: false,
    content: () => {

        const data = useStaticQuery(graphql`
            {
                intro: markdownRemark(fileAbsolutePath: { regex: "/intro/" }) {
                    frontmatter {
                        title
                        name
                        subtitle
                        buttonText
                    }
                    html
                }
            }
        `).intro; 
    
        const button = (
            <Button
            onClick={() => navigate("mailto:yousefkhalil125@gmail.com")}
            color="blue" 
            size="lg">
                {data.frontmatter.buttonText}
            </Button>
        );
    
        const elements = [
            <Margin 
            ml="s3">
                <SubTitle 
                alpha={0.9}
                color="blue">
                    {data.frontmatter.title}
                </SubTitle>
            </Margin>,
    
            <Display 
            color="dark">
                {data.frontmatter.name}
            </Display>,
    
            <Margin 
            mb="s9">
                <Display 
                color="dark"
                alpha={0.85}>
                    {data.frontmatter.subTitle}
                </Display>
            </Margin>,
    
            <Style 
            value={{
                width: "100%",
                maxWidth: 256 + 128 + 64 + 32
            }}>
                <Margin 
                mb="s7">
                    <Text 
                    color="dark"
                    alpha={0.85}>
                        {(data.html as string).replace(/<p>/g, "").replace(/<\/p>/g, "")}
                    </Text>
                </Margin>
            </Style>,
    
            <MediaQuery 
            maxWidth={breakpoints.md}>
                <Flex 
                justifyContent="center">
                    {button}
                </Flex>
            </MediaQuery>,
    
            <MediaQuery 
            minWidth={breakpoints.md + 1}>
                {button}
            </MediaQuery>
        ];
    
        return (
            <React.Fragment>
                {elements.map((item, index) => (
                    <Fade
                    key={index}
                    delay={index * 50 + 500}
                    bottom>
                        {item}
                    </Fade>
                ))}
            </React.Fragment>
        );
    }
};