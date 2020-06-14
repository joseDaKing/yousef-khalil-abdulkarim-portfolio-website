import React from "react"

import Projects from "../components/projects";

import {
    useStaticQuery,
    graphql
}
from "gatsby";

import {
    ISection
}
from "../components/layout";


export const projectsSections: ISection = {
    index: 3,
    title: "Some Things I've Built",
    name: "work",
    color: "blue",
    content: () => {
    
        const data = useStaticQuery(graphql`
            {
                projects: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/projects/"} }, sort: {fields: [frontmatter___date], order: DESC}) {
                    edges {
                        node {
                            frontmatter {
                                title
                                tech
                                github
                                external
                            }
                            html
                        }
                    }
                }
            }
        `).projects.edges;
    
        const projects = (
            data
            .map(item => ({ ...item.node }))
            .map(item => ({
                title: item.frontmatter.title,
                githubLink: item.frontmatter.github,
                projectLink: item.frontmatter.external || undefined,
                tech: item.frontmatter.tech,
                text: (item.html as string).replace(/<p>/g, "").replace(/<\/p>/g, "")
            }))
        );
    
        return (
            <Projects
            color="light"
            projects={projects}/>
        );
    }
}