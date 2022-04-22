import React, { useEffect, useRef, useState } from "react";
import {PhotoInfo, StyledPhoto, StyledPhotoContainer, StyledInfoContainer} from "@components/home/styled-photo";
import {useRouter} from "next/router";
import {ISimplePhoto, photos} from "@app/pages";
import gsap from "gsap";
import Routes from "@constants/Routes";
import Views from "@constants/Views";

export interface IPhoto extends ISimplePhoto {
  index: number;
  wrapperWidth?: number;
  wrapperScrollValue?: number;
}

const Photo: React.FC<IPhoto> = (props): JSX.Element => {
  const { index, id, title, author, wrapperWidth, wrapperScrollValue } = props;
  const { basePath, pathname, push } = useRouter();
  const photoRef = useRef<any>(null);
  const [width, setWidth] = useState<number | undefined>(undefined);
  const isProjectsView = pathname === Routes[Views.EXTENDED];

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

  useEffect(() => {
    if (photoRef.current) {
      setWidth(photoRef.current.offsetWidth);
    }
  }, [photoRef])

  const handlePhotoClick = () => {
    gsap.to('.anim-info', {
      opacity: 0,
      duration: 0.4,
    });

    gsap.to('.view-switch', {
      opacity: 0,
      duration: 0.4,
    });

    gsap.to(`.project-info-wrapper-${id}`, {
      left: 0,
      duration: 0.8,
    })

    if (wrapperWidth && width) {
      photos.forEach((p: ISimplePhoto, i) => {
        if (p.id !== id) {
          const { left, right } = document.querySelector(`.photo-${p.id}`)?.getBoundingClientRect() || {};
          if (left && right) {
            gsap.to(`.photo-${p.id}`, {
              x: i > index ? wrapperWidth + right : left - wrapperWidth,
              duration: 1.5,
            })
          }
        }
      })

      gsap.to(`.photo-${id}`, {
        position: 'relative',
        top: '50vh',
        x: wrapperScrollValue ? Math.round(wrapperWidth - (width + 208)) + wrapperScrollValue : Math.round(wrapperWidth - (width + 208)),
        scale: 2,
        duration: 0.8,
      }).then(() => {
        push(`/projects/${id}`, undefined, { shallow: true }).then()
      })
    }
  };

  return (
    <>
      <StyledPhotoContainer className="photo-container" index={index}>
        <div className={`photo-${id} anim-photo-enter`} ref={photoRef} key={id}>
          <StyledPhoto
            src={`${basePath}/assets/photos/photo-${id}.jpeg`}
            width={450}
            height={650}
            pointer={isProjectsView}
            onClick={isProjectsView && handlePhotoClick}
          />
        </div>
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
