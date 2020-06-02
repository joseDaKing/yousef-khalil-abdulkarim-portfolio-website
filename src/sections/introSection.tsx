import React from "react"

import theme from "../theme";

import Section from "../components/section";

import Wrapper from "../components/wrapper";

import Button from "../components/button";

import {
    Text,
    Display
}
from "../components/typography";

import color from "color";



const IntroSection = () => {

    const bgColor = theme.colors.gray.dark; 

    return (
        <Section
        backgroundColor={bgColor}>
            <Text color={theme.colors.blue.lightest}>
                Hi, my name is
            </Text>

            <Display color={theme.colors.silver.light}>
                Brittany Chiang.
            </Display>

            <Wrapper mb={5}>
                <Display color={theme.colors.gray.light}>
                    I build things for the web.
                </Display>
            </Wrapper>

            <Wrapper 
            style={{
                width: "100%",
                maxWidth: 512
            }}>
                <Text color={color(theme.colors.gray.light).darken(0.05).string()}>
                    I'm a software engineer based in Boston, 
                    MA specializing in building (and occasionally designing) 
                    exceptional websites, applications, and everything in between.
                </Text>
            </Wrapper>

            <Wrapper my={9}>
                <Button href="#contact">
                    <Wrapper py={3}>
                        get in touch
                    </Wrapper>
                </Button>
            </Wrapper>
        </Section>
    );
}

export default IntroSection;