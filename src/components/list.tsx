import React from "react";

import styled from "styled-components";

import theme from "../theme";

import Wrapper from "./wrapper";



const ListItem = styled.li({
    position: "relative",
    fontFamily: "roboto",
    color: theme.colors.near.black,
    "&:before": {
        content: `""`,
        position: "absolute",
        left: -16,
        top: "50%",
        transform: "translateY(-50%)",
        width: 8,
        height: 8,
        backgroundColor: theme.colors.blue.default,
        borderRadius: "100%"
    }
})

const ListGroup = styled.ul({
    listStyle: "none",
    margin: 0,
    fontSize: 14,
    "& > li:not(:last-child)": {
        marginBottom: 8
    }
});

const ListContainer = styled.div({
    display: "flex",
    flexWrap: "wrap"
});

interface ISkillSetProps {
    items: string[][];
}

const SkillSets: React.FC<ISkillSetProps> = props => {
    return (
        <ListContainer>
            {props.items.map((listGroup, index) => (
                <Wrapper mb={7} key={index}>
                    <ListGroup>
                        {listGroup.map(skill => (
                            <ListItem key={skill}>
                                {skill}
                            </ListItem>
                        ))}
                    </ListGroup>
                </Wrapper>
            ))}
        </ListContainer>
    );
}

export default SkillSets;