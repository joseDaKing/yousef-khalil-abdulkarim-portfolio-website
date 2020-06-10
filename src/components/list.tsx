import React from "react";

import styled from "styled-components";

import {
    colors
} 
from "../theme";

import {
    Margin 
}
from "./utilityComponents";

import {
    IColorTheme
}
from "../types";

import Color from "color";


const ListItem = styled.li<IColorTheme>(props => {

    const colorTheme = {
        dark: {
            color: colors.grayDark,
            backgroundColor: colors.black,
        },
        light: {
            color: colors.silverLight,
            backgroundColor: colors.grayLight,
        },
        blue: {
            color: colors.black,
            backgroundColor: colors.blueDefault,
        }
    }

    const {
        color,
        backgroundColor
    } = colorTheme[props.color];

    return {
        position: "relative",
        fontFamily: "roboto",
        color: (
            Color(color)
            .alpha(0.8)
            .string()
        ),
        "&:before": {
            content: `""`,
            position: "absolute",
            left: -16,
            top: "0px",
            width: 8,
            height: 8,
            backgroundColor: (
                Color(backgroundColor)
                .alpha(0.85)
                .string()
            ),
            borderRadius: "100%"
        }
    }
});

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

interface IListProps extends IColorTheme {
    items: string[][];
}

const List: React.FC<IListProps> = props => {
    return (
        <ListContainer>
            {props.items.map((listGroup, index) => (
                <Margin 
                mb="s7" 
                key={index}>
                    <ListGroup>
                        {listGroup.map(skill => (
                            <ListItem 
                            color={props.color}
                            key={skill}>
                                {skill}
                            </ListItem>
                        ))}
                    </ListGroup>
                </Margin>
            ))}
        </ListContainer>
    );
}

export default List;