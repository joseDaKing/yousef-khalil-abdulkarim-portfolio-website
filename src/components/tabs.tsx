import React from "react";

import styled, { 
    CSSObject 
} 
from "styled-components";

import {
    defaultTransition
}
from "../utilities/index";

import {
    navigate
}
from "@reach/router";

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
    useMediaQuery    
}
from "react-responsive";

import {
    down
}
from "styled-breakpoints";

import {
    breakpoints
}
from "../theme";



interface ITabItemProps {
    active: boolean,
    mediaQuery: boolean
}

const TabItem = styled.li<ITabItemProps>(props => {
    
    const styles: CSSObject = {
        ...defaultTransition, 
        cursor: "pointer",
        fontFamily: "roboto",
        textTransform: "capitalize",
        fontWeight: 500,
        letterSpacing: 1,
        fontSize: 17,
        position: "relative",
        "&:hover": {
            transitions: "inherit",
            color: colors.blueDefault
        },
        "&::before": {
            transition: "inherit",
            content: `""`,
            position: "absolute",
            ...(() => {
                let styles: CSSObject;

                if (props.mediaQuery) {
                    styles = {
                        top: 0,
                        bottom: 0,
                        width: 2,
                        transform: "translateX(-700%)"
                    };
    
                }

                else {
                    styles = {
                        left: 0,
                        right: 0,
                        bottom: 0,
                        height: 2,
                        transform: "translateY(200%)"
                    }
                }

                return styles;
            })(),
        }
    } as const;

    if (props.active) {
        
        styles.color = colors.blueDefault;

        (styles["&::before"] as CSSObject) = {
            ...(styles["&::before"] as CSSObject),
            transition: "inherit",
            backgroundColor: colors.blueDefault,            
            transform: "translateX(0%)"
        }

        styles.backgroundColor = (
            Color(colors.blueDefault)
            .alpha(0.25)
            .string()
        );
    }

    else {
        styles.color = colors.grayDark;
    }

    return styles;
});

const TabList = styled.ul(props => ({
    padding: 0,
    margin: 0,
    listStyle: "none",
    [down("sm")(props)]: {
        display: "flex",
        justifyContent: "center"
    }
}));

const TabsContainer = styled.div(props => ({
    display: "flex",
    [down("sm")(props)]: {
        flexDirection: "column",
        alignItems: "center"
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

    const isMdWidth= useMediaQuery({
        minWidth: breakpoints.md
    });

    return (
        <TabsContainer>
            <TabList>
                {props.items.map(tab => {

                    const {
                        name,
                    } = tab;

                    const isActive = name === active;

                    const onSetActiveHandler = () => setActive(name);

                    return (
                        <TabItem
                        key={name}
                        onClick={onSetActiveHandler}
                        mediaQuery={isMdWidth}
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