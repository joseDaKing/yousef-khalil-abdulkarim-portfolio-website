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
import { spacing } from "../../theme";



const ProjectsContainer = styled.div({
    display: "grid",
    gridTemplateColumns: "repeat( auto-fit, minmax(250px, 1fr) )",
    gridGap: spacing.scaling[8]
});

interface IProjectsProps extends IColorTheme {
    projects: Omit<IProjectProps, "color">[];
}

const Projects: React.FC<IProjectsProps> = props => {
    return (
        <ProjectsContainer>
            {props.projects.map((project, index) => (
                <Project 
                key={index}
                color={props.color}
                {...project}/>
            ))}
        </ProjectsContainer>
    )
}

export default Projects;