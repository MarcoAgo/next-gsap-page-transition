import React, {useEffect, useMemo, useRef} from "react";
import ProjectInfo, {IPhotoInfo} from "@components/projects/project/project-info";
import {ProjectWrapper} from "@components/projects/project/styled-project";
import {useRouter} from "next/router";
import {ISimplePhoto, photos} from "@app/pages";
import {StyledPhoto} from "@components/home/styled-photo";
import gsap from "gsap";
import photo from "@components/home/photo";

const Project: React.FC = () => {
  const { query, push } = useRouter();
  const wrapperRef = useRef(null) as any;
  const photoRef = useRef(null) as any;
  const project = useMemo(() => {
    return photos.find((photo: ISimplePhoto) => photo.id === query.id);
  }, [query]) as IPhotoInfo;

  useEffect(() => {
    if (wrapperRef.current && photoRef.current) {
      const width = photoRef.current.offsetWidth;
      const wrapperWidth = wrapperRef.current.getBoundingClientRect().width;

      gsap.set(`.project-info-styled-photo-${query.id}`, {
        position: 'absolute',
        scale: 2,
        top: '55vh',
        x: Math.round(wrapperWidth - (width + 208))
      });
    }
  }, [project, query.id]);

  const handleBackButton = () => {
    const wrapperWidth = wrapperRef.current.getBoundingClientRect().width;
    const width = photoRef.current.offsetWidth;

    push('/projects', undefined, { shallow: true }).then(() => {
      gsap.from('.anim-info', {
        opacity: 0,
        duration: 0.4,
      });

      gsap.from('.view-switch', {
        opacity: 0,
        duration: 0.4,
      });

      gsap.from(`.project-info-wrapper-${query.id}`, {
        left: 0,
        duration: 0.8,
      })

      gsap.from(`.photo-${query.id}`, {
        position: 'relative',
        top: '50vh',
        x: Math.round(wrapperWidth - (width + 208)),
        scale: 2,
        duration: 0.8,
      })

      photos.forEach((p: ISimplePhoto, i) => {
        if (p.id !== query.id) {
          const { left, right } = document.querySelector(`.photo-${p.id}`)?.getBoundingClientRect() || {};
          const index = photos.findIndex(photo => photo.id === query.id);

          console.log(index)

          if (left && right) {
            gsap.from(`.photo-${p.id}`, {
              x: i > index ? wrapperWidth + right : left - wrapperWidth,
              duration: 1.5,
            })
          }
        }
      })
    });
  };

  return (
    <ProjectWrapper ref={wrapperRef}>
      <ProjectInfo {...project} handleBackButton={handleBackButton} />
      <div>
        <StyledPhoto className={`project-info-styled-photo-${query.id}`} id={query.id} ref={photoRef} />
      </div>
    </ProjectWrapper>
  )
}

export default Project;
