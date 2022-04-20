import React from "react";
import {ProjectInfoWrapper} from "@components/projects/project/styled-project";
import {useRouter} from "next/router";
import gsap from "gsap";

export interface IPhotoInfo {
  id: string;
  author: string;
  paragraph: string;
  title: string;
  handleBackButton?: () => void;
}

const ProjectInfo: React.FC<IPhotoInfo> = (props) => {
  return (
    <ProjectInfoWrapper className={`project-info-wrapper project-info-wrapper-${props.id}`}>
      <h2>{props.title}</h2>
      <p className="author">{props.author}</p>
      <p className="paragraph">{props.paragraph}</p>
      <div className="back-button" onClick={props.handleBackButton}>
        <svg xmlns="http://www.w3.org/2000/svg" width="23.201" height="18.982" viewBox="0 0 23.201 18.982">
          <path id="arrow-left" d="M12.237,3.309a1.055,1.055,0,0,1,0,1.491L5.6,11.437H24.146a1.055,1.055,0,1,1,0,2.109H5.6l6.636,6.636a1.055,1.055,0,1,1-1.491,1.492L2.309,13.237a1.055,1.055,0,0,1,0-1.491l8.437-8.437A1.055,1.055,0,0,1,12.237,3.309Z" transform="translate(-2 -3)" fillRule="evenodd"/>
        </svg>
        <p>Back</p>
      </div>
    </ProjectInfoWrapper>
  )
}

export default ProjectInfo;
