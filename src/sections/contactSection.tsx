import React from "react"

import {
    Text,
    Display
} 
from "../components/typography";

import {
    Style,
    Margin,
    Flex
}
from "../components/utilityComponents";

import {
    navigate
}
from "@reach/router";

import Button from "../components/button";

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



export const contactSection: ISection = {
    index: 4,
    title: "What's Next?",
    name: "contact",
    color: "light",
    content: () => {

        const data = useStaticQuery(graphql`
            {
                contact: markdownRemark(fileAbsolutePath: {regex: "/contact/"}) {
                    frontmatter {
                        title
                        buttonText
                    }
                    html
                }
            }
        `).contact;
    
        const elements = [
            <Margin mb="s9">
                <Display
                color="dark"
                align="center"
                transform="capitalize">
                    {data.frontmatter.title}
                </Display>
            </Margin>,
    
            <Margin mb="s9">
                <Text
                color="dark"
                align="center"
                lighten={0.15}>
                    {data.html.replace(/<p>/g, "").replace(/<\/p>/g, "")}
                </Text>
            </Margin>,
    
            <Flex
            justifyContent="center">
                <Button 
                onClick={() => navigate("mailto:yousefkhalil125@gmail.com")}
                color="blue" 
                size="xl">
                    {data.frontmatter.buttonText}
                </Button>
            </Flex>
        ];
    
        return (    
            <Style
            value={{
                width: "100%",
                maxWidth: 600
            }}>
                {elements.map((element, index) => (
                    <Fade
                    key={index} 
                    delay={index * 100}
                    bottom>
                        {element}
                    </Fade>
                ))}
            </Style>
        );
    }
}