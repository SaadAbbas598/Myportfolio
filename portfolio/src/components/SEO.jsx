import { Helmet } from 'react-helmet-async';
import PropTypes from 'prop-types';

const SEO = ({ 
  title = "Saad Abbas | Mobile App Developer & Android Application Engineer",
  description = "Saad Abbas – Professional mobile app developer and Android application engineer based in Pakistan. I design, develop, and deploy custom mobile applications for Android and cross-platform devices. Expertise in mobile UI/UX, app optimization, and integration with modern platforms.",
  keywords = "mobile app developer, android application developer, mobile app dev, cross platform app developer, mobile application development, Android app development Pakistan, freelance mobile app developer, mobile application engineer, iOS and Android developer, mobile application platform, custom app developer, mobile software engineer",
  author = "Saad Abbas",
  image = "https://www.saadabbas.me/images/og-image.jpg",
  url = "https://www.saadabbas.me/",
  type = "website",
  structuredData
}) => {
  const defaultStructuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Saad Abbas",
    "jobTitle": "Mobile App Developer & Android Application Engineer",
    "url": "https://www.saadabbas.me/",
    "sameAs": [
      "https://www.linkedin.com/in/saad-abbas-722b08345",
      "https://github.com/SaadAbbas598/",
      "https://www.instagram.com/saad__rahi",
      "https://x.com/SaadRahi8"
    ],
    "knowsAbout": [
      "Mobile App Development",
      "Android Development",
      "iOS Development",
      "Cross-Platform Development",
      "React Native",
      "Flutter",
      "Kotlin",
      "Java",
      "Swift",
      "Firebase",
      "UI/UX Design"
    ],
    "description": description,
    "image": image,
    "alumniOf": {
      "@type": "EducationalOrganization",
      "name": "Your University Name"
    },
    "worksFor": {
      "@type": "Organization",
      "name": "Freelance / Self-Employed"
    }
  };

  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content="index, follow" />
      <meta name="language" content="en" />
      <meta name="revisit-after" content="7 days" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=5.0" />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang="en" href={url} />
      
      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:site_name" content="Saad Abbas Portfolio" />
      <meta property="og:locale" content="en_US" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={url} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:creator" content="@SaadRahi8" />
      
      {/* Additional SEO Tags */}
      <meta name="theme-color" content="#06b6d4" />
      <meta name="msapplication-TileColor" content="#06b6d4" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
      
      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(structuredData || defaultStructuredData)}
      </script>
    </Helmet>
  );
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string,
  structuredData: PropTypes.object
};

export default SEO;
