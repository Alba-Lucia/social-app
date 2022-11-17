import styled from "styled-components";

export const List = styled.ul`
    display: flex;
    align-items: center;
    overflow-x: scroll;
    width: 100%;
    padding-bottom: 20px;
    scrollbar-width: none;
    
    ::-webkit-scrollbar{
        display: none;
    }
`

export const Item = styled.li`
    padding: 0 8px;
`