import React from "react";

import styled, {
    StyledComponent,
    CSSObject
} 
from "styled-components";

import {
    getScaleValue
}
from "../utilities";

import {
    LayoutSpacing,
    MicroSpacing
}
from "../types";

import { 
    breakpoints 
}
from "../theme";



interface IBoxProps {
    name: string;
}

export const Box = styled.div<IBoxProps>(props => ({
    gridArea: props.name
}));

interface IGridProps {
    structure: string[][];
    height?: number;
    width?: number;
    gapX?: MicroSpacing;
    gapY?: MicroSpacing;
    columns?: LayoutSpacing[];
    rows?: LayoutSpacing[];
    children: (
        React.ReactElement<typeof Box>
        | React.ReactElement<typeof Box>[]
    );
};

export const Grid = styled.div<IGridProps>(props => {

    const styles: CSSObject = {
        display: "grid",
        gridTemplateAreas: getGridTemplateAreas(props.structure),
        gridRowGap: getScaleValue(props.gapY ?? "s1"),
        gridColumnGap: getScaleValue(props.gapX ?? "s1"),
    }

    if (props.height) styles.height = props.height;

    if (props.width) styles.width = props.width;

    if (props.columns) styles.gridTemplateColumns = getCellWidths(props.columns);

    if (props.rows) styles.gridTemplateRows = getCellWidths(props.rows)

    return styles;
});

function getCellWidths(cells: LayoutSpacing[]) {
    return cells.map(row => `${getScaleValue(row)}px`).join(" ");
}

function getGridTemplateAreas(structure: string[][]) {

    let gridTemplateAreas = "";

    for (let row of structure) {

        gridTemplateAreas += `"${row.join(" ")}"\n`;
    }

    return gridTemplateAreas;
}