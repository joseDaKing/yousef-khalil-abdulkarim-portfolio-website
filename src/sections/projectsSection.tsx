import React from "react"

import Layout from "../components/layout";

import Projects from "../components/projects";

import {
    useStaticQuery,
    graphql
}
from "gatsby";



export const ProjectsSections = () => {
    
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
        <Layout.Section
        name="work"
        title="Some Things I've Built" 
        color="blue">
            <Layout.Grid 
            structure={[["b1"]]}>
                <Layout.Box 
                name="b1">
                   <Projects
                   color="light"
                   projects={projects}/>
                </Layout.Box>
            </Layout.Grid>
        </Layout.Section>
    )
}