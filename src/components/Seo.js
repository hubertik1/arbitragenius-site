import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';
import routeMetadata from '../seo/routeMetadata.json';

const SITE_URL = 'https://arbitragenius.hubertik.com';

const routesByPath = routeMetadata.reduce((acc, route) => {
  acc[route.path] = route;
  return acc;
}, {});

export default function Seo({ routePath }) {
  const location = useLocation();
  const route = routesByPath[routePath] || routesByPath[location.pathname] || routesByPath['/'];
  const canonical = new URL(route.path, SITE_URL).toString();
  const image = new URL(route.image, SITE_URL).toString();
  const robots = route.robots || 'index,follow';

  return (
    <Helmet prioritizeSeoTags>
      <title>{route.title}</title>
      <meta name="description" content={route.description} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonical} />
      <meta property="og:site_name" content="ArbitraGenius" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={route.title} />
      <meta property="og:description" content={route.description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={image} />
      <meta property="og:image:alt" content={route.imageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={route.title} />
      <meta name="twitter:description" content={route.description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
}
