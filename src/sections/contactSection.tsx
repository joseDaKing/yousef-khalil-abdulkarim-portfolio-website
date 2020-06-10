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



export const ContactSection = () => {
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
                                get in touch
                            </Display>
                        </Margin>

                        <Margin mb="s9">
                            <Text
                            color="dark"
                            align="center"
                            lighten={0.15}>
                                Although I'm not currently looking for any new opportunities, 
                                my inbox is always open.Whether you have a question or just want to say hi, 
                                I'll try my best to get back to you!
                            </Text>
                        </Margin>

                        <Flex
                        justifyContent="center">
                            <Button 
                            onClick={() => navigate("mailto:yousefkhalil125@gmail.com")}
                            color="blue" 
                            size="xl">
                                Say Hello
                            </Button>
                        </Flex>
                    </Style>
                </Layout.Box>
            </Layout.Grid>
        </Layout.Section>
    );
}