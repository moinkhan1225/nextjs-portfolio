import Head from "next/head";

export default function SEO({
  title = "Moin Khan | Frontend Developer",
  description = "Frontend Developer skilled in Next.js, React, Tailwind CSS, and MongoDB. Hire me for building modern web applications.",
  keywords = "Frontend Developer, Backend Developer, UI/UX, HTML, CSS, Bootstrap, Javascript, Next.js, React, Tailwind, Portfolio",
  url = "https://www.moinkhan.site",
  image = "https://moinkhan.site/_next/image?url=%2Fimages%2Fabout-image.jpeg&w=640&q=75",
}) {
  const schemaOrgJSONLD = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Moin Khan",
    url: url,
    jobTitle: "Frontend Developer",
    description: description,
    image: image,
    sameAs: [
      "https://www.github.com/moinkhan1225",
      "https://www.linkedin.com/in/moin-khan-19b53526b",
      "https://www.twitter.com/khan__moin",
    ],
  };

  return (
    <Head>
      {/* Primary Meta */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* JSON-LD Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaOrgJSONLD) }}
      />
    </Head>
  );
}
