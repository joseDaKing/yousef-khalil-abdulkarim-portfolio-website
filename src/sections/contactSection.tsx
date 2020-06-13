import React from "react"

import Layout from "../components/layout";

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



export const ContactSection = () => {

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

    return (
        <Layout.Section
        title="What's Next?"
        name="contact" 
        color="light">
            <Layout.Grid 
            gapX="s6"
            gapY="s6" 
            structure={[
                ["b1"],
            ]}>
                <Layout.Box 
                name="b1">
                    <Style
                    value={{
                        width: "100%",
                        maxWidth: 600
                    }}>
                        <Margin mb="s9">
                            <Display
                            color="dark"
                            align="center"
                            transform="capitalize">
                                {data.frontmatter.title}
                            </Display>
                        </Margin>

                        <Margin mb="s9">
                            <Text
                            color="dark"
                            align="center"
                            lighten={0.15}>
                                {data.html.replace(/<p>/g, "").replace(/<\/p>/g, "")}
                            </Text>
                        </Margin>

                        <Flex
                        justifyContent="center">
                            <Button 
                            onClick={() => navigate("mailto:yousefkhalil125@gmail.com")}
                            color="blue" 
                            size="xl">
                                {data.frontmatter.buttonText}
                            </Button>
                        </Flex>
                    </Style>
                </Layout.Box>
            </Layout.Grid>
        </Layout.Section>
    );
}