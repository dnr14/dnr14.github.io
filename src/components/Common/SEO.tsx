import React, { FC } from 'react';
import { Helmet } from 'react-helmet';

const SEO: FC = () => {
  return (
    <Helmet>
      <title>LMW` Portfolio</title>
      <link rel="shortcut icon" href="favicon.ico" />
      <link rel="icon" href="static/favicon.ico" />
      <link
        rel="icon"
        type="image/png"
        href="static/favicon.ico"
        sizes="32x32"
      />
    </Helmet>
  );
};

export default SEO;
