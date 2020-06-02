import React from "react";

import Section from "../components/section";

import Tabs from "../components/tabs";

import theme from "../theme";



const ExperienceSection = () => {
    const bgColor = theme.colors.gray.dark; 

    const titleColor = theme.colors.near.white;

    const content = () => {
        return (
            <React.Fragment>
            </React.Fragment>
        )
    }

    const tabs = [
        {
            name: "upstatment",
            content
        },
        {
            name: "scout",
            content
        },
        {
            name: "apple",
            content
        },
        {
            name: "starry",
            content
        },
        {
            name: "MullenLowe",
            content
        }
    ];

    return (
        <Section
        name="experience"
        title={"2. Where I've Worked"}
        titleColor={titleColor}
        backgroundColor={bgColor}>
            <Tabs
            active="upstatment" 
            tabs={tabs}/>
        </Section>
    );
}

export default ExperienceSection;