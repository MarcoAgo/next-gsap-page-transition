import styled from "styled-components";
import Fonts from "@constants/fonts";
import Colors from "@constants/colors";

export const ProjectWrapper = styled.div`
  width: 100vw;
  height: calc(100vh - 106px);
  overflow: hidden;
  position: relative;
`;

export const ProjectInfoWrapper = styled.div`
  position: absolute;
  top: 10vh;
  flex-direction: column;
  padding-left: 104px;
  height: 75vh;
  overflow: hidden;
  max-width: 40vw;
  
  h2 {
    font-family: ${Fonts.PLAYFAIR_DISPLAY};
    font-size: 100px;
    color: ${Colors.TEXT};
  }
  
  p {
    font-size: 20px;
    margin: 0;
  }

  .author {
    font-family: ${Fonts.PLAYFAIR_DISPLAY};
    color: ${Colors.GREY};
  }
  
  .paragraph {
    font: ${Fonts.ROBOTO};
    font-size: 20px;
    margin-top: 72px;
    color: ${Colors.DARK_GREY};
    line-height: 32px;
  }
  
  .back-button {
    display: flex;
    align-items: center;
    cursor: pointer;
    margin-top: 42px;
    
    p {
      text-transform: uppercase;
      padding-left: 16px;
    }
  }
`;
