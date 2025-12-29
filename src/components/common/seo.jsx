// src/components/common/SEO.jsx
import { Helmet } from 'react-helmet-async';

const SEO = ({ title, description, isMainHomeDuringCampaign }) => {
  return (
    <Helmet>
      <title>{title} | Aarti Educare</title>
      <meta name="description" content={description} />
      
      {/* If this is /home while campaign is live, prevent duplicate indexing */}
      {isMainHomeDuringCampaign && <meta name="robots" content="noindex, follow" />}
      
      {/* Canonical always points to the root for the campaign landing */}
      {!isMainHomeDuringCampaign && <link rel="canonical" href="https://www.aartieducare.com/" />}
    </Helmet>
  );
};

export default SEO;