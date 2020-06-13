import React from "react"

import Layout from "../components/layout";

import Jobs from "../components/jobs";

import {
    graphql,
    useStaticQuery
}
from "gatsby";


export const ExperienceSection = () => {
    
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
        <Layout.Section
        name="experience"
        title="Where I've Worked" 
        color="light">
            <Layout.Grid 
            structure={[["b1"]]}>
                <Layout.Box 
                name="b1">
                    <Jobs
                    jobs={jobs}
                    active={jobs[0].companyName}/>
                </Layout.Box>
            </Layout.Grid>
        </Layout.Section>
    );
}