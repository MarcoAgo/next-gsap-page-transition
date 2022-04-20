import '../styles/globals.css'
import type {AppProps} from 'next/app'
import Header from "../src/components/shared/header/header";
import styled from "styled-components";
import React, {useEffect, useState} from "react";
import {LinkItem, Switch} from "@components/home/styled-home";
import Views from "@constants/Views";
import IconObject from "@components/shared/icon/IconObject";
import {useRouter} from "next/router";
import Routes from "@constants/Routes";
import {mountAnim, unmountAnim} from "@app/src/animations/home";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  min-height: 100vh;
  background-color: #FFF2D9;
  z-index: -100;
`;

function MyApp({ Component, pageProps }: AppProps) {
  const [activeView, setActiveView] = useState<Views>(Views.COMPACTED);
  const router = useRouter();

  const handleLinkItemClick = (view: Views) => {
    if (view === Views.EXTENDED) {
      const callback = () => router.push(Routes[view], undefined, { shallow: true }).then();
      unmountAnim(callback);
    }

    if (view === Views.COMPACTED) {
      router.push(Routes[view], undefined, { shallow: true }).then(mountAnim);
    }

    setActiveView(view);
  }

  useEffect(() => {
    if (router.pathname === Routes[Views.EXTENDED]) {
      setActiveView(Views.EXTENDED);
    }
  }, [router.pathname]);

  return (
    <Wrapper>
      <Header />
      <Component {...pageProps} />
      <Switch>
        <LinkItem
          activeItem={activeView === Views.COMPACTED}
          disabled={activeView === Views.COMPACTED}
          onClick={() => handleLinkItemClick(Views.COMPACTED)}>
          <IconObject.SwitchCompactIcon />
        </LinkItem>
        <span className="divider" />
        <LinkItem
          activeItem={activeView === Views.EXTENDED}
          disabled={activeView === Views.EXTENDED}
          onClick={() => handleLinkItemClick(Views.EXTENDED)}>
          <IconObject.SwitchExtendIcon />
        </LinkItem>
      </Switch>
    </Wrapper>
  )
}

export default MyApp
