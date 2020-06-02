import React from "react";

import Navbar from "./navbar/navbar";

import Drawer from "./navbar/drawer";

import MediaQuery from "react-responsive";

import theme from "../../theme";

import { 
    ThemeProvider
}
from "styled-components";

import {
    useLocation
}
from "@reach/router";

import {
    IItemsProps
}
from "./navbar/items";

import Section from "./section";



interface ILayoutProps extends Pick<IItemsProps, "items"> {
    children: React.ReactElement<typeof Section>
};

const Layout: React.FC<ILayoutProps> & { Section: typeof Section } = props => {

    const {
        hash
    } = useLocation();

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const toggleDrawerHandler = () => setIsDrawerOpen(prevValue => !prevValue);

    return (
        <ThemeProvider theme={theme}>
            <Navbar
            color="blue" 
            onDrawerButtonClick={toggleDrawerHandler}
            active={hash}
            items={props.items}/>

            <MediaQuery 
            maxWidth={theme.breakpoints.md}>
                
                <Drawer
                color="dark"
                onClose={toggleDrawerHandler}
                isOpen={isDrawerOpen}
                active={hash}
                items={props.items}/>
            </MediaQuery>

            {props.children}
        </ThemeProvider>
    );
}

Layout.Section = Section;

export default Layout;