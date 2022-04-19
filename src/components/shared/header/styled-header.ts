import styled from "styled-components";
import Fonts from "@constants/fonts";
import Colors from "@constants/colors";

export const Container = styled.div`
  width: 100vw;
  height: 106px;
  border-bottom: 1px solid ${Colors.DARK_GREY};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 124px;
`;

export const Title = styled.h4`
  font-size: 20px;
  font-family: ${Fonts.PLAYFAIR_DISPLAY};
  color: ${Colors.TEXT};
  margin: 0;
`;

export const Logo = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
`;
