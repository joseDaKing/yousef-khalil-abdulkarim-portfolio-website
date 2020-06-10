import React from "react"

import Layout from "../components/layout";

import Projects from "../components/projects";



const projects = [
    {
        githubLink: "https://github.com/bchiang7/bchiang7.github.io",
        projectLink: "https://brittanychiang.com/",
        title: "Personal Website V3",
        text: `
        Third iteration of my personal website built with Jekyll and hosted on GitHub Pages.
        `,
        tech: [
            "Jekyll",
            "SCSS",
            "JS"
        ]
    },
    {
        githubLink: "https://github.com/bchiang7/bchiang7.github.io",
        projectLink: "https://brittanychiang.com/",
        title: "Personal Website V3",
        text: `
        Third iteration of my personal website built with Jekyll and hosted on GitHub Pages.
        `,
        tech: [
            "Jekyll",
            "SCSS",
            "JS"
        ]
    },
    {
        githubLink: "https://github.com/bchiang7/bchiang7.github.io",
        projectLink: "https://brittanychiang.com/",
        title: "Personal Website V3",
        text: `
        Third iteration of my personal website built with Jekyll and hosted on GitHub Pages.
        `,
        tech: [
            "Jekyll",
            "SCSS",
            "JS"
        ]
    },
    {
        githubLink: "https://github.com/bchiang7/bchiang7.github.io",
        projectLink: "https://brittanychiang.com/",
        title: "Personal Website V3",
        text: `
        Third iteration of my personal website built with Jekyll and hosted on GitHub Pages.
        `,
        tech: [
            "Jekyll",
            "SCSS",
            "JS"
        ]
    },
    {
        githubLink: "https://github.com/bchiang7/bchiang7.github.io",
        projectLink: "https://brittanychiang.com/",
        title: "Personal Website V3",
        text: `
        Third iteration of my personal website built with Jekyll and hosted on GitHub Pages.
        `,
        tech: [
            "Jekyll",
            "SCSS",
            "JS"
        ]
    }
];

export const ProjectsSections = () => {
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