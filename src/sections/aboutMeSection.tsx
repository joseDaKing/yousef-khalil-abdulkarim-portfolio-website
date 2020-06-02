import React from "react"

import theme from "../theme";

import Section from "../components/section";

import Wrapper from "../components/wrapper";

import LayoutDivider from "../components/layoutDivider";

import Image from "../components/image";

import List from "../components/list";

import {
    Text
}
from "../components/typography";

// @ts-ignore
import portofolioImageUrl from "../images/test_portfolio.webp";



const RightSide = () => {
    return (
        <Wrapper
        style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
        }}>
            <Image src={portofolioImageUrl}/>
        </Wrapper>
    )
};

const LeftSide = () => {

    const textColor = theme.colors.near.black;

    return (
        <Wrapper>
            <Wrapper mb={6}>
                <Text color={textColor}>
                    Hello! I'm Brittany, a software engineer based in Boston, MA. <br/><br/>
                </Text>

                <Text color={textColor}>
                    I enjoy creating things that live on the internet, 
                    whether that be websites, applications, or anything
                    in between. My goal is to always build products
                    that provide pixel-perfect, performant experiences. <br/><br/>
                </Text>

                <Text color={textColor}>
                    Shortly after graduating from Northeastern 
                    University, I joined the engineering team at Upstatement
                    where I work on a wide variety of interesting 
                    and meaningful projects on a daily basis. <br/> <br/>
                </Text>

                <Text color={textColor}>
                    Here are a few technologies I've been working with recently:
                </Text>
            </Wrapper>
            
            <List 
            items={[
                [
                    "JavaScript (ES6+)",
                    "React",
                    "Node.js"
                ],
                [
                    "HTML & (S)CSS",
                    "Vue",
                    "WordPress"
                ]
            ]}/>
        </Wrapper>
    )
}

const AboutMeSection = () => {
    return (
        <Section
        name="about"
        title={"about me"}>

            <LayoutDivider
            invert
            left={LeftSide}
            right={RightSide}/>
        </Section>
    )
}

export default AboutMeSection;