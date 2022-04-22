import styled from "styled-components";
import { IPhoto } from "@components/home/photo";
import Fonts from "@constants/fonts";
import Colors from "@constants/colors";
import Image from "next/image";

interface IStyledPhoto extends IPhoto {
  pointer: boolean;
}

export const StyledPhotoContainer = styled.div`
  position: absolute;
  z-index: ${(p: IStyledPhoto) => p.index === 0 ? 9000 : 5 - p.index};
  left: 50vw;
  top: 0;
`;

export const StyledInfoContainer = styled.div`
  position: absolute;
  bottom: 0;
`;

export const StyledPhoto = styled(Image)`
  z-index: ${(p: IStyledPhoto) => p.index === 0 ? 9000 : 5 - p.index};
  border-radius: 260px;
  cursor: ${(p: IStyledPhoto) => p.pointer && 'pointer'};
`;

export const PhotoInfo = styled.div`
  text-align: center;
  width: 25vw;
  
  h2 {
    font-size: 24px;
    font-weight: 200;
    font-family: ${Fonts.PLAYFAIR_DISPLAY}, serif;
  }
  
  p {
    font-size: 18px;
    font-weight: 200;
    font-family: ${Fonts.PLAYFAIR_DISPLAY}, serif;
    color: ${Colors.GREY};
  }
`;
