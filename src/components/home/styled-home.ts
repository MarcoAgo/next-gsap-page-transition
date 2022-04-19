import styled from "styled-components";
import Fonts from "@constants/fonts";
import Colors from "@constants/colors";

export const HomeWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: calc(100vh - 106px);
`;

export const Container = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 124px;
`;

export const LeftContent = styled.div`
  width: 45vw;
  height: 100%;
  padding-right: 104px;
  display: flex;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-family: ${Fonts.PLAYFAIR_DISPLAY};
    font-size: 100px;
    line-height: 110px;
    font-weight: 100;
    margin-bottom: 40px;
  }

  p {
    color: ${Colors.DARK_GREY};
    font-family: ${Fonts.ROBOTO};
    font-size: 20px;
    font-weight: 100;
    line-height: 32px;
  }
`;

export const RightContent = styled.div`
  width: 50vw;
  height: 100%;
`;

export const Switch = styled.div`
  width: 150px;
  height: 72px;
  position: absolute;
  background-color: ${Colors.EXTRA_DARK};
  bottom: 58px;
  right: 124px;
  color: ${Colors.WHITE};
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  button {
    display: flex;
    padding-top: 4px;
    height: 50%;
    width: 50%;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  
  .divider {
    height: 80%;
    width: 1px;
    position: absolute;
    left: 50%;
    background-color: ${Colors.DARK_GREY};
    padding: 4px 0;
  }
`;

export const LinkItem = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  opacity: ${(p: { activeItem: boolean }) => p.activeItem ? 1 : .5};
`;
