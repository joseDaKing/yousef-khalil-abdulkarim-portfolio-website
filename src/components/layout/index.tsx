import React from "react";

import Navbar from "./navbar/navbar";

import Drawer from "./navbar/drawer";

import Footer from "./footer";

import MediaQuery from "react-responsive";

import {
    breakpoints
} 
from "../../theme";

import { 
    ThemeProvider
}
from "styled-components";

import Section, {
    ISectionProps
} 
from "./section";



export interface ISection extends ISectionProps {
    content: React.FC;
    index: number;
    includeInNav?: boolean;
}

interface ILayoutProps {
    sections: ISection[]
};

const Layout: React.FC<ILayoutProps> = props => {

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const toggleDrawerHandler = () => setIsDrawerOpen(prevValue => !prevValue);

    const sections = props.sections.sort((a, b) => a.index - b.index);

    const navbarItems = (
        sections
        .filter(section => section.includeInNav ?? true)
        .map(section => section.name)
    );

    return (
        <ThemeProvider theme={{ breakpoints }}>
            <Navbar
            color="blue" 
            onDrawerButtonClick={toggleDrawerHandler}
            items={navbarItems}/>

            <MediaQuery 
            maxWidth={breakpoints.md}>
                
                <Drawer
                color="dark"
                onClose={toggleDrawerHandler}
                isOpen={isDrawerOpen}
                items={navbarItems}/>
            </MediaQuery>

            
            {sections.map((section, index) => (
                <Section
                key={section.name + index}
                title={section.title}
                color={section.color}
                name={section.name}>
                    <section.content/>
                </Section>
            ))}

            <Footer color="blue"/>
        </ThemeProvider>
    );
}

export default Layout;