import React from "react";

import styled from "styled-components";



interface IGridProps {
    columns: number;
    rows: number;
    children: React.ReactElement
}

const Grid: React.FC<IGridProps> = styled.div<IGridProps>(props => {
    return {
        
    };
});

export default Grid;