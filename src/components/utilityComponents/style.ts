import styled, { CSSObject } from "styled-components";



interface IStyleProps {
    value: CSSObject
}

export const Style = styled.div<IStyleProps>(props => props.value);