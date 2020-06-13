import React from "react";

import Tabs, {
    ITab,
    ITabsProps
} 
from "./tabs";

import List from "./list";

import {
    SubTitle,
    Text
}
from "./typography";

import {
    navigate
}
from "@reach/router";

import { 
    Flex, 
    Margin,
    Style
}
from "./utilityComponents";

import {
    defaultTransition
} 
from "../utilities"

import MediaQuery from "react-responsive";

import {
    breakpoints
}
from "../theme";



type Month = (
    "jan" | "feb" | "mar" | 
    "apr" | "may" | "jun" | 
    "jul" | "aug" | "sep" | 
    "oct" | "nov" | "dec"
);

interface IDate {
    month: Month;
    year: number;
}

interface IJob {
    companyName: string;
    companyLink: string;
    descriptions: string[];
    title: string;
    date: string;
}

interface IJobsProps extends Omit<ITabsProps, "items">{
    jobs: IJob[],
}

const Jobs: React.FC<IJobsProps> = props => {
    
    const items = props.jobs.map(job => {
        const {
            companyName,
            companyLink,
            title,
            descriptions,
            date
        } = job;

        const titleComponent = (
            <SubTitle color="dark">
                {title}
            </SubTitle>
        );

        const companyNameComponent = (
            <Style
            value={{
                cursor: "pointer",
                ...defaultTransition,
                "&:hover": {
                    ...defaultTransition,
                    transform: "scale(1.035)"
                }
            }}>
                <SubTitle 
                transform="capitalize"
                onClick={() => navigate(companyLink)}
                color="blue">
                    @{companyName}
                </SubTitle>
            </Style>
        );

        return {
            name: companyName,
            content: () => (
                <React.Fragment>      
                    <MediaQuery minWidth={breakpoints.md + 1}>
                        <Margin mb="s3">
                            <Flex>
                                <Margin mr="s5">
                                    {titleComponent}
                                </Margin>

                                {companyNameComponent}
                            </Flex>
                        </Margin>
                    </MediaQuery>
                    
                    <MediaQuery maxWidth={breakpoints.md}>
                        <Margin mt="s4" mb="s3">
                            {titleComponent}
                        </Margin>

                        <Margin mb="s3">
                            {companyNameComponent}
                        </Margin>
                    </MediaQuery>

                    <Margin mb="s6">
                        <Text 
                        lighten={0.3}
                        color="dark"> 
                            {date}
                        </Text>
                    </Margin>
                    
                    <Style 
                    value={{
                        width: "100%",
                        maxWidth: 512
                    }}>
                        <List 
                        color="blue"
                        items={[ descriptions ]}/>
                    </Style>
                </React.Fragment>
            )
        }
    }); 

    return (
        <Tabs
        items={items}
        active={props.active}/>
    )
}

export default Jobs;