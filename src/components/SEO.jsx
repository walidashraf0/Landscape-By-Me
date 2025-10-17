const SEO = ({
  title,
  description,
  keywords = [],
  ogImage = "",
  ogType = "website",
  canonicalUrl = "",
}) => {
  const siteTitle = "Landscape in Riyadh";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription =
    "Professional landscaping services for your home and business";

  return (
    <>
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      {keywords.length > 0 && (
        <meta name="keywords" content={keywords.join(", ")} />
      )}

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={ogType} />
      <meta property="og:title" content={fullTitle} />
      <meta
        property="og:description"
        content={description || defaultDescription}
      />
      {ogImage && <meta property="og:image" content={ogImage} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta
        name="twitter:description"
        content={description || defaultDescription}
      />
      {ogImage && <meta name="twitter:image" content={ogImage} />}

      {/* Canonical URL */}
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </>
  );
};

export default SEO;
