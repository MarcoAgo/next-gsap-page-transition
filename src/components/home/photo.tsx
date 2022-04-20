import React, {useEffect} from "react";
import {PhotoInfo, StyledPhoto, StyledPhotoContainer, StyledInfoContainer} from "@components/home/styled-photo";
import {useRouter} from "next/router";
import {ISimplePhoto} from "@app/pages";
import gsap from "gsap";

export interface IPhoto extends ISimplePhoto {
  index: number;
}

const Photo: React.FC<IPhoto> = (props): JSX.Element => {
  const { index, id, title, author } = props;
  const { basePath } = useRouter();

  useEffect(() => {
    gsap.set(`.photo-${id}`, {
      x: index === 0 ? index : Number(`${index}70`),
      scale: index === 0 ? 1 : 1 - Number(`0.${index}`),
    });

    gsap.set(`.info-${id}`, {
      x: index === 0 ? index : `${23.5 * index}vw` as any,
      y: 100,
    })
  }, [id, index])

  return (
    <>
      <StyledPhotoContainer className="photo-container" index={index}>
        <StyledPhoto
          {...props}
          key={id}
          basePath={basePath}
          className={`photo-${id} anim-photo-enter`}
        />
      </StyledPhotoContainer>
      <StyledInfoContainer>
        <PhotoInfo className={`info-${id} anim-info`}>
          <h2>{title}</h2>
          <p>{author}</p>
        </PhotoInfo>
      </StyledInfoContainer>
    </>
  )
}

export default Photo;
