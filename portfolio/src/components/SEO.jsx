import { useEffect } from 'react';
import PropTypes from 'prop-types';

const SEO = ({ 
  title = "Saad Abbas | Mobile App Developer & Android Application Engineer",
  description = "Saad Abbas – Professional mobile app developer and Android application engineer based in Pakistan. I design, develop, and deploy custom mobile applications for Android and cross-platform devices. Expertise in mobile UI/UX, app optimization, and integration with modern platforms.",
  keywords = "mobile app developer, android application developer, mobile app dev, cross platform app developer, mobile application development, Android app development Pakistan, freelance mobile app developer, mobile application engineer, iOS and Android developer, mobile application platform, custom app developer, mobile software engineer",
  author = "Saad Abbas",
  image = "https://www.saadabbas.me/images/og-image.jpg",
  url = "https://www.saadabbas.me/",
  type = "website"
}) => {
  useEffect(() => {
    // Update document title
    document.title = title;

    // Update or create meta tags
    const updateMetaTag = (name, content, isProperty = false) => {
      const attribute = isProperty ? 'property' : 'name';
      let element = document.querySelector(`meta[${attribute}="${name}"]`);
      
      if (element) {
        element.setAttribute('content', content);
      } else {
        element = document.createElement('meta');
        element.setAttribute(attribute, name);
        element.setAttribute('content', content);
        document.head.appendChild(element);
      }
    };

    // Primary Meta Tags
    updateMetaTag('description', description);
    updateMetaTag('keywords', keywords);
    updateMetaTag('author', author);

    // Open Graph Tags
    updateMetaTag('og:type', type, true);
    updateMetaTag('og:url', url, true);
    updateMetaTag('og:title', title, true);
    updateMetaTag('og:description', description, true);
    updateMetaTag('og:image', image, true);

    // Twitter Tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:url', url);
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', image);

    // Canonical URL
    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      canonical.setAttribute('href', url);
    } else {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      canonical.setAttribute('href', url);
      document.head.appendChild(canonical);
    }
  }, [title, description, keywords, author, image, url, type]);

  return null;
};

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  keywords: PropTypes.string,
  author: PropTypes.string,
  image: PropTypes.string,
  url: PropTypes.string,
  type: PropTypes.string
};

export default SEO;
