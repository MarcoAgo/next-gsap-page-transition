import React, {Ref, useEffect, useRef, useState} from "react";
import MetaHead from "@components/shared/meta-head/head";
import {ISimplePhoto, photos} from "@app/pages";
import Photo from "@components/home/photo";
import gsap from 'gsap';
import { ProjectsSlider, ProjectsWrapper } from "@components/projects/styled-projects";
import ProjectInfo from "@components/projects/project/project-info";

const Projects: React.FC = () => {
  const projectsWrapperRef = useRef<any>(null);
  const [wrapperWidth, setWrapperWidth] = useState<number | undefined>(undefined);
  const [scrollLeft, setScrollLeft] = useState<number | undefined>(undefined);

  useEffect(() => {
    gsap.set('.anim-info', {
      y: '-15vh',
      duration: 0.8,
    })

    gsap.set('.photo-container', {
      x: '-50vw',
      duration: 0.8,
    })

    gsap.set('.anim-photo-enter', {
      x: i => i === 0 ? 0 : `${23.5 * i}vw` as any,
      scale: 0.8,
    });

    gsap.set('.project-info-wrapper', {
      left: '-45vw',
    })

    gsap.set('.view-switch', {
      opacity: 1,
    });
  }, []);

  useEffect(() => {
    if (projectsWrapperRef.current) {
      console.log(projectsWrapperRef.current.scrollLeft);
      setWrapperWidth(projectsWrapperRef.current.getBoundingClientRect().width)
    }
  }, [projectsWrapperRef])

  const renderPhoto = (photo: ISimplePhoto, index: number) => (
    <div>
      <Photo
        {...photo}
        wrapperWidth={wrapperWidth}
        wrapperScrollValue={scrollLeft}
        index={index}
        id={photo.id}
        key={photo.id}
      />
      <ProjectInfo {...photo} />
    </div>
  )

  return (
    <ProjectsWrapper
      ref={projectsWrapperRef}
      onScroll={() => setScrollLeft(projectsWrapperRef.current.scrollLeft)}
    >
      <MetaHead />
      <div>
        <ProjectsSlider className="projects-slider">
          {photos.map(renderPhoto)}
        </ProjectsSlider>
      </div>
    </ProjectsWrapper>
  )
}

export default Projects;
