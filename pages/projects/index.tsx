import React, {useEffect} from "react";
import MetaHead from "@components/shared/meta-head/head";
import { HomeWrapper, RightContent } from "@components/home/styled-home";
import {ISimplePhoto, photos} from "@app/pages";
import Photo from "@components/home/photo";
import gsap from 'gsap';

const Projects: React.FC = () => {
  const renderPhoto = (photo: ISimplePhoto, index: number) => (
    <Photo {...photo} index={index} id={photo.id} key={photo.id} />
  )

  useEffect(() => {
    gsap.set('.anim-photo-enter', {
      x: i => i === 0 ? 0 : `${23.5 * i}vw` as any,
      scale: 0.8,
    });
  }, []);

  return (
    <HomeWrapper>
      <MetaHead />
      <RightContent className="projects-slider">
        {photos.map(renderPhoto)}
      </RightContent>
    </HomeWrapper>
  )
}

export default Projects;
