import React from "react";

import Project, {
    IProjectProps
} 
from "./project";

import {
    IColorTheme
}
from "../../types";

import styled from "styled-components";

import { 
    spacing
}
from "../../theme";

import Fade from "react-reveal/Zoom";



const ProjectsContainer = styled.div({
    display: "grid",
    gridTemplateColumns: "repeat( auto-fill, minmax(250px, 1fr) )",
    gridGap: spacing.scaling[8]
});

interface IProjectsProps extends IColorTheme {
    projects: Omit<IProjectProps, "color">[];
}

const Projects: React.FC<IProjectsProps> = props => {
    return (
        <ProjectsContainer>
            {props.projects.map((project, index) => (
                <Fade
                key={index}
                delay={index * 150}>
                    <Project 
                    color={props.color}
                    {...project}/>
                </Fade>
            ))}
        </ProjectsContainer>
    )
}

export default Projects;