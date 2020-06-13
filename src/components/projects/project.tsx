import React from "react";

import styled from "styled-components";

import {
    IColorTheme
}
from "../../types";

import {
    Padding,
    Flex,
    Margin,
    Style
}
from "../utilityComponents";

import {
    colors
}
from "../../theme";

import {
    SubTitle,
    Text
}
from "../typography";

import {
    navigate
}
from "@reach/router";

import {
    defaultTransition
} 
from "../../utilities";

import Color from "color";

import FolderIcon from '@material-ui/icons/Folder';

import GitHubIcon from '@material-ui/icons/GitHub';

import LinkIcon from '@material-ui/icons/Link';



const ProjectContainer = styled.div<IColorTheme>(props => {
    
    const theme = {
        blue: colors.blueDefault,
        light: colors.silverLight,
        dark: colors.black,
    };
    
    const color = theme[props.color];

    const outlineColor = (
        Color(color)
        .alpha(0.3)
        .string()
    );

    return {
        backgroundColor: color,
        borderRadius: 4,
        outline: `solid ${outlineColor} 6px`,
        outlineOffset: 4,
        ...defaultTransition,
        "&:hover": {
            ...defaultTransition,
            transform: "translateY(-2.5%)"
        }
    };
});

interface ILinkableProps extends IColorTheme {
    link: string;
    icon: typeof LinkIcon,
}

const LinkableIcon: React.FC<ILinkableProps> = props => { 

    const color = {
        dark: colors.grayDark,
        blue: colors.blueDefault,
        light: colors.silverLight
    }[props.color];

    return (    
        <Style
        value={{ 
            cursor: "pointer",
            ...defaultTransition,
            "&:hover": {
                ...defaultTransition,
                transform: "scale(1.2)"       
            }
        }}>
            <props.icon
            onClick={() => navigate(props.link)}
            fontSize="small"
            style={{ color }}/>
        </Style>
    );
}

export interface IProjectProps extends IColorTheme {
    githubLink?: string;
    projectLink?: string;
    title: string;
    text: string;
    tech: string[];
}

const Project: React.FC<IProjectProps> = props => {
    
    const contentTheme = ({
        dark: "light",
        light: "dark",
        blue: "light"
    } as const )[props.color] ;

    return (
        <ProjectContainer 
        color={props.color}>
            <Padding 
            p="s6">
                <Margin
                mb="s6">
                    <Flex 
                    alignItems="flex-start">
                        <FolderIcon
                        fontSize="large"
                        style={{
                            color: (() => {
                                if (contentTheme === "dark") return colors.grayDark;

                                else return colors.silverLight;
                            })()
                        }}/>

                        <Margin 
                        ml="auto">
                            {props.githubLink &&
                            <LinkableIcon 
                            color={contentTheme}
                            icon={GitHubIcon}
                            link={props.githubLink}/>}

                            {props.projectLink &&
                            <Margin 
                            ml="s4">
                                <LinkableIcon 
                                color={contentTheme}
                                icon={LinkIcon}
                                link={props.projectLink}/>
                            </Margin>}
                        </Margin>
                    </Flex>
                </Margin>

                <Margin 
                mb="s5">
                    <SubTitle 
                    color={contentTheme}>
                        {props.title}
                    </SubTitle>
                </Margin>

                <Margin
                mb="s9">
                    <Text
                    color={contentTheme}
                    lighten={0.2}>
                        {props.text}
                    </Text>
                </Margin>

                <Flex>
                    {props.tech.map((text, index) => {

                        const isLastIndex = (props.tech.length - 1) === index;

                        if (!isLastIndex) {
                            return (
                                <Margin 
                                key={index}
                                mr="s5">
                                    <Text
                                    transform="uppercase"                                 
                                    color={contentTheme}>
                                        {text}
                                    </Text>
                                </Margin>
                            );
                        }

                        return (
                            <Text 
                            key={index}
                            transform="uppercase"
                            color={contentTheme}>
                                {text}
                            </Text>
                        );
                    })}
                </Flex>
            </Padding>
        </ProjectContainer>
    );
}

export default Project;