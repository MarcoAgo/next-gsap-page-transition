import styled from "styled-components";
import { IPhoto } from "@components/home/photo";
import Fonts from "@constants/fonts";
import Colors from "@constants/colors";

interface IStyledPhoto extends IPhoto {
  basePath: string;
}

export const StyledPhotoContainer = styled.div`
  position: absolute;
  top: 5vh;
`;

export const StyledPhoto = styled.div`
  z-index: ${(p: IStyledPhoto) => p.index === 0 ? 9000 : 5 - p.index};
  width: 25vw;
  height: 65vh;
  border-radius: 260px;
  background-image: url("${(p: IStyledPhoto) => p.basePath}/assets/photos/photo-${(p: IStyledPhoto) => p.id}.jpeg");
  background-size: cover;
  background-repeat: no-repeat;
`;

export const PhotoInfo = styled.div`
  text-align: center;
  
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
