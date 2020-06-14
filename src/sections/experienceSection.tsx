import React from "react"

import Jobs from "../components/jobs";

import {
    graphql,
    useStaticQuery
}
from "gatsby";

import {
    ISection
}
from "../components/layout";

import Fade from "react-reveal/Fade";



export const experienceSection: ISection = {
    index: 2,
    title: "Where I've Worked",
    name: "experience",
    color: "light",
    content: () => {
        /*
        const data = useStaticQuery(graphql`
            {
                jobs: allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/jobs/"}}, sort: {fields: [frontmatter___date], order: DESC}) {
                    edges {
                        node {
                            frontmatter {
                                title
                                company
                                location
                                range
                                url
                            }
                            html
                        }
                    }
                }
            }  
        `).jobs.edges;
        */
    
        const jobs = (
            data
            .map(item => item.node)
            .map(item => ({
                companyName: item.frontmatter.company,
                companyLink: item.frontmatter.url,
                title: item.frontmatter.title,
                range: item.frontmatter.range,
                descriptions: (
                    item
                    .html
                    .replace(/<ul>/g, "")
                    .replace(/<\/ul>/g, "")
                    .replace(/\n/g, "")
                    .replace(/<\/li>/, "")
                    .split("<li>")
                    .filter(item => item !== "")
                )
            }))
        );
    
        return (
            <Fade 
            delay={100}>
                <Jobs
                jobs={jobs}
                active={jobs[0].companyName}/>
            </Fade>
        );
    }
}