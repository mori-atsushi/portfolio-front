import * as React from 'react';
import { Helmet } from 'react-helmet';

interface IProps {
  pageTitle?: string;
  description?: string;
  keywords?: string[];
  ogpImage?: string;
}

export default (props: IProps) => {
  const siteTitle = 'Mori Atsushi';
  const title = props.pageTitle
    ? `${ props.pageTitle } - ${ siteTitle }`
    : `${ siteTitle } | Engineer and Photographer`
  const url = location.href;
  const description = props.description || '森 篤史のポートフォリオサイト';
  const opgImage = props.ogpImage || 'https://at-sushi.work%PUBLIC_URL%/ogp.jpg';
  const keywords = [...(props.keywords || []), 'Mori Atsushi', '森 篤史'];
  console.log(url);

  return (
    <Helmet>
      <title>{ title }</title>
      <meta name="description" content={ description } />
      <meta name="keywords" content={ keywords.join(' ') } />
      <link rel="canonical" href={ url } />
      <meta property="og:site_name" content="Mori Atsushi | Engineer and Photographer" />
      <meta property="og:title" content={ title } />
      <meta property="og:description" content={ description } />
      <meta property="og:url" content={ url } />
      <meta property="og:image" content={ opgImage } />
    </Helmet>
  )
};
