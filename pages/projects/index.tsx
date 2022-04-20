import React, {useEffect} from "react";
import MetaHead from "@components/shared/meta-head/head";
import {ISimplePhoto, photos} from "@app/pages";
import Photo from "@components/home/photo";
import gsap from 'gsap';
import { ProjectsSlider, ProjectsWrapper } from "@components/projects/styled-projects";

const Projects: React.FC = () => {
  const renderPhoto = (photo: ISimplePhoto, index: number) => (
    <Photo {...photo} index={index} id={photo.id} key={photo.id} />
  )

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
  }, []);

  return (
    <ProjectsWrapper>
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
