import styled from "styled-components";
import { layout, typography, flex, grid, space, position } from "styled-system";

export const Main = styled.div`
  ${layout}
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  width: 100%;
  background: #272425;
`;

export const NavBar = styled.div`
  display: flex;
  align-items: center;
  gap: 60px;

  .antD {
    margin-bottom: 3px;
  }

`;

export const NavTitles = styled.div`
  ${layout}
`

export const Title = styled.span`
    cursor: pointer;
    margin: 0px 25px;
    color: #fff;
    opacity: 0.7;
    transition: 0.5s;

    :hover {
      color: #fff;
      opacity: 1;
    }
`

export const Image = styled.img`
  ${layout}
  ${space}
`;

export const ImageContainer = styled.div`
`;

export const globalIcon = styled.img`
  width: 21%;
  /* padding: 64px; */
`;

export const DropLanguage = styled.div`
  ${layout}
  display: flex;
  align-content: center;
  margin-bottom: 3px;
`;