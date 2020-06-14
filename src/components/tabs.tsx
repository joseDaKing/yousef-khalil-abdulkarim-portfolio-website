import React from "react";

import styled from "styled-components";

import {
    defaultTransition
}
from "../utilities/index";

import {
    Padding
}
from "../components/utilityComponents";

import {
    colors
}
from "../theme";

import Color from "color";

import {
    down,
    up
}
from "styled-breakpoints";

import Fade from "react-reveal";



interface ITabItemProps {
    active: boolean;
}

const TabItem = styled.li<ITabItemProps>(props => ({
    ...defaultTransition, 
    cursor: "pointer",
    textTransform: "capitalize",
    fontWeight: 500,
    letterSpacing: 1,
    fontSize: 17,
    position: "relative",
    color: props.active ? colors.blueDefault : colors.grayDark,
    backgroundColor: props.active ? (
        Color(colors.blueDefault)
        .alpha(0.25)
        .string()
    ) : "transparent",
    "&:hover": {
        ...defaultTransition,
        color: colors.blueDefault
    }
}));

const TabList = styled.ul(props => ({
    padding: 0,
    margin: 0,
    listStyle: "none",
    [down("sm")(props)]: {
        display: "flex",
        justifyContent: "center",
        width: "100%",
        overflowX: "scroll"
    },
    [up("md")(props)]: {
        height: 128 + 64,
        overflowY: "scroll",
    }
}));

const TabsContainer = styled.div(props => ({
    display: "flex", 
    position: "relative",
    overflow: "hidden",
    [down("sm")(props)]: {
        flexDirection: "column",
        alignItems: "center",
        width: "100%",
        maxWidth: 512
    }
}));

export interface ITab {
    name: string;
    content: React.FC;
}

export interface ITabsProps {
    items: ITab[],
    active: string;
}

const Tabs: React.FC<ITabsProps> = props => {

    const [active, setActive] = React.useState(props.active);

    const Content = props.items.filter(item => item.name === active)[0].content;

    return (
        <TabsContainer>
            <TabList>
                {props.items.map((tab, index) => {

                    const {
                        name,
                    } = tab;

                    const isActive = name === active;

                    const onSetActiveHandler = () => setActive(name);

                    return (
                        <TabItem
                        key={name + index}
                        onClick={onSetActiveHandler}
                        active={isActive}>
                            <Padding 
                            px="s5" 
                            py="s4">
                                {name}
                            </Padding>
                        </TabItem>
                    );
                })}
            </TabList>

            <Padding p="s4">
                <Content/>
            </Padding>
        </TabsContainer>
    );
};

export default Tabs;