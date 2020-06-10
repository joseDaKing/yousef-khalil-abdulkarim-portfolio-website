import React from "react"

import Layout from "../components/layout";

import Jobs from "../components/jobs";



const jobbs = [
    {
        companyName: "upstatement",
        companyLink: "https://www.upstatement.com/",
        descriptions: [
            "Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern",
            "Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript",
        ],
        title: "Studio Developer",
        date: {
            start: {
                month: "aug",
                year: 2018
            },
            end: {
                month: "aug",
                year: 2019
            },
        }
    },
    {
        companyName: "ibra",
        companyLink: "https://www.upstatement.com/",
        descriptions: [
            "Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern",
            "Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript",
        ],
        title: "Studio Developer",
        date: {
            start: {
                month: "aug",
                year: 2018
            },
            end: {
                month: "aug",
                year: 2019
            },
        }
    },
    {
        companyName: "abra",
        companyLink: "https://www.upstatement.com/",
        descriptions: [
            "Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern",
            "Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript",
        ],
        title: "Studio Developer",
        date: {
            start: {
                month: "aug",
                year: 2018
            },
            end: {
                month: "aug",
                year: 2019
            },
        }
    },
    {
        companyName: "isma",
        companyLink: "https://www.upstatement.com/",
        descriptions: [
            "Collaborated with a small team of student designers to spearhead a new brand and design system for Scout’s inaugural student-led design conference at Northeastern",
            "Worked closely with designers and management team to develop, document, and manage the conference’s marketing website using Jekyll, Sass, and JavaScript",
        ],
        title: "Studio Developer",
        date: {
            start: {
                month: "aug",
                year: 2018
            },
            end: {
                month: "aug",
                year: 2019
            },
        }
    } 
];

export const ExperienceSection = () => {
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
                    jobs={jobbs}
                    active="upstatement"/>
                </Layout.Box>
            </Layout.Grid>
        </Layout.Section>
    )
}