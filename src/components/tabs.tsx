import React from "react";

import styled from "styled-components";

import Wrapper from "../components/wrapper";

import {
    defaultTransition
}
from "../utilities/index";



interface ITabItemProps {
    active: boolean
}

const TabItem = styled.li<ITabItemProps>({
    ...defaultTransition,
    fontFamily: "roboto",
    textTransform: "capitalize",
});

const TabList = styled.ul({
    padding: 0,
    margin: 0,
    listStyle: "none"
});

const TabsContent = styled.div({

});

const TabsContainer = styled.div({

});

interface ITab {
    name: string;
    link?: string; 
    content: React.FC;
}

interface ITabsProps {
    tabs: ITab[],
    active: string;
}

const Tabs: React.FC<ITabsProps> = props => {

    const [active, setActive] = React.useState(props.active);

    return (
        <TabsContainer>
            <TabList>
                {props.tabs.map(tab => {

                    const {
                        name,
                        link
                    } = tab;

                    const isActive = name === active;

                    const onSetActiveHandler = () => setActive(name);

                    return (
                        <TabItem
                        key={name}
                        onClick={onSetActiveHandler}
                        active={isActive}>
                            <a
                            href={link ?? "#"}
                            style={{
                                color: "inherit",
                                fontFamily: "inherit",
                                textDecoration: "none"
                            }}>
                                <Wrapper py={3}>
                                    {name}                                
                                </Wrapper> 
                            </a>
                        </TabItem>
                    );
                })}
            </TabList>
        
            <TabsContent>

            </TabsContent>
        </TabsContainer>
    );
};

export default Tabs;