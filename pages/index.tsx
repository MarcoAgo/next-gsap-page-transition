import type {NextPage} from 'next'
import MetaHead from "../src/components/shared/meta-head/head";
import { Container, HomeWrapper, LeftContent, RightContent } from "@components/home/styled-home";
import React from "react";
import Photo from "@components/home/photo";

export interface ISimplePhoto {
  id: string;
  title: string;
  author: string;
  paragraph: string;
}

export const photos: ISimplePhoto[] = [
  {
    id: '1522441815192-d9f04eb0615c',
    title:'Pawel Czerwinski',
    author: '@pawel_czerwinski',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: '1604871000636-074fa5117945',
    title:'Jean-Philippe Delberghe',
    author: '@jipi32',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: '1579547621113-e4bb2a19bdd6',
    title:'Fakurian Design',
    author: '@fuku',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'},
  {
    id: '1620812097331-ff636155488f',
    title:'Valentin BEAUVAIS',
    author: '@valentinbvs',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
  {
    id: '1554189097-ffe88e998a2b',
    title:'Sebastian Svenson',
    author: '@seba',
    paragraph: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
  },
];

const Home: NextPage = () => {
  const renderPhoto = (photo: ISimplePhoto, index: number) => (
    <Photo {...photo} index={index} id={photo.id} key={photo.id} />
  )

  return (
    <HomeWrapper>
      <MetaHead />
      <Container className="homeWrapper">
        <LeftContent className="homeLeftContent">
          <h1>The Abstract design</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </LeftContent>
        {photos.map(renderPhoto)}
      </Container>
    </HomeWrapper>
  )
}

export default Home
