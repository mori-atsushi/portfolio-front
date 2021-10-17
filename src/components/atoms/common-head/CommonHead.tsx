import * as React from 'react';
import Head from 'next/head';

import config from 'src/helper/config';

interface IProps {
  pageTitle?: string;
  description?: string;
  keywords?: string[];
  ogpImage?: string;
  path?: string;
}

const CommonHead = (props: IProps) => {
  const siteTitle = 'Mori Atsushi';
  const title = props.pageTitle
    ? `${ props.pageTitle } - ${ siteTitle }`
    : `${ siteTitle } | Engineer and Photographer`
  const url = `${config.domain}/${props.path ?? ""}`;
  const description = props.description || '森 篤史のポートフォリオサイト';
  const opgImage = props.ogpImage || `${ config.domain }/ogp.jpg`;
  const keywords = [...(props.keywords || []), 'Mori Atsushi', '森 篤史'];

  return (
    <Head>
      <title>{ title }</title>
      <meta name="description" content={ description } />
      <meta name="keywords" content={ keywords.join(' ') } />
      <link rel="canonical" href={ url } />
      <meta property="og:site_name" content="Mori Atsushi | Engineer and Photographer" />
      <meta property="og:title" content={ title } />
      <meta property="og:description" content={ description } />
      <meta property="og:url" content={ url } />
      <meta property="og:image" content={ opgImage } />
    </Head>
  )
};

export default CommonHead;
