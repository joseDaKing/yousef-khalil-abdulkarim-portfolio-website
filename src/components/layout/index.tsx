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

import {
    useLocation
}
from "@reach/router";

import {
    IItemsProps
}
from "./navbar/items";

import {
    Grid,
    Box
}
from "./grid";

import Section from "./section";



interface ILayoutProps extends Pick<IItemsProps, "items"> {
    children: (
        React.ReactElement<typeof Section>
        | React.ReactElement<typeof Section>[]
    );
};

type LayoutType = React.FC<ILayoutProps> & { 
    Section: typeof Section;
    Grid: typeof Grid;
    Box: typeof Box;
};

const Layout: LayoutType = props => {

    const {
        hash
    } = useLocation();

    const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

    const toggleDrawerHandler = () => setIsDrawerOpen(prevValue => !prevValue);

    return (
        <ThemeProvider theme={{ breakpoints }}>
            <Navbar
            color="blue" 
            onDrawerButtonClick={toggleDrawerHandler}
            active={hash}
            items={props.items}/>

            <MediaQuery 
            maxWidth={breakpoints.md}>
                
                <Drawer
                color="dark"
                onClose={toggleDrawerHandler}
                isOpen={isDrawerOpen}
                active={hash}
                items={props.items}/>
            </MediaQuery>

            {props.children}

            <Footer color="blue"/>
        </ThemeProvider>
    );
}

Layout.Section = Section;

Layout.Grid = Grid;

Layout.Box = Box;

export default Layout;