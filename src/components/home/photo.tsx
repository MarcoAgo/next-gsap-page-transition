import React, {useEffect, useMemo} from "react";
import {PhotoInfo, StyledPhoto, StyledPhotoContainer} from "@components/home/styled-photo";
import {useRouter} from "next/router";
import {ISimplePhoto} from "@app/pages";
import gsap from "gsap";

export interface IPhoto extends ISimplePhoto {
  index: number;
}

const Photo: React.FC<IPhoto> = (props): JSX.Element => {
  const { index, id, title, author } = props;
  const { basePath, pathname } = useRouter();
  const isHome = useMemo(() => pathname === '/', [pathname]);

  useEffect(() => {
    gsap.set(`.photo-${id}`, {
      x: index === 0 ? index : Number(`${index}70`),
      scale: index === 0 ? 1 : 1 - Number(`0.${index}`),
    });

    gsap.set(`.info-${id}`, {
      x: index === 0 ? index : `${23.5 * index}vw` as any,
      y: 500,
    })
  }, [id, index])

  return (
    <StyledPhotoContainer>
      <StyledPhoto
        {...props}
        key={id}
        basePath={basePath}
        className={`photo-${id} anim-photo-enter`}
      />
      {!isHome && (
        <PhotoInfo className={`info-${id} anim-info`}>
          <h2>{title}</h2>
          <p>{author}</p>
        </PhotoInfo>
      )}
    </StyledPhotoContainer>
  )
}

export default Photo;
