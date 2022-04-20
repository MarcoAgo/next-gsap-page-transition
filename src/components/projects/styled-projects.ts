import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 106px);
  overflow-y: hidden;
  overflow-x: scroll;
  
  &&::-webkit-scrollbar {
    display: none;
  }
`;

export const ProjectsSlider = styled.div`
  width: 100vw;
  height: 100vh;
`;
