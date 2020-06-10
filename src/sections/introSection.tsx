import React from "react"

import Button from "../components/button";

import Layout from "../components/layout";

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



export const IntroSection = () => {
    return (
        <Layout.Section 
        color="light">
            <Layout.Grid 
            structure={[["b1"]]}>
                <Layout.Box 
                name="b1">
                    <Margin 
                    ml="s3">
                        <SubTitle 
                        alpha={0.9}
                        color="blue">
                            Hi, my name is
                        </SubTitle>
                    </Margin>

                    <Display 
                    color="dark">
                        Yousef Abdulkarim.
                    </Display>

                    <Margin 
                    mb="s9">
                        <Display 
                        color="dark"
                        alpha={0.85}>
                            I build things for the web.
                        </Display>
                    </Margin>

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
                                I am a self taught software developer based in Malmö Sweden,
                                specializing in building exceptional websites, mobile apps
                                and everything in between. 
                            </Text>
                        </Margin>
                    </Style>

                    <MediaQuery minWidth={breakpoints.md + 1}>
                        <Button
                        onClick={() => navigate("mailto:yousefkhalil125@gmail.com")}
                        color="blue" 
                        size="lg">
                            get in touch
                        </Button>
                    </MediaQuery>

                    <MediaQuery maxWidth={breakpoints.md}>
                        <Flex justifyContent="center">
                            <Button
                            onClick={() => navigate("mailto:yousefkhalil125@gmail.com")}
                            color="blue" 
                            size="lg">
                                get in touch
                            </Button>
                        </Flex>
                    </MediaQuery>
                </Layout.Box>
            </Layout.Grid>
        </Layout.Section>
    )
}

export default IntroSection;