import React from "react";
import Head from "next/head";

const MetaHead: React.FC = (): JSX.Element => {
  return (
    <Head>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com"  />
      <link href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=Roboto&display=swap" rel="stylesheet" />
      <title>AQuest test FE - Marco Agostinelli</title>
    </Head>
  )
}

export default MetaHead;
