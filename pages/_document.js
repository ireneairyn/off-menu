import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Bungee+Inline&family=Bungee+Shade&family=Caveat+Brush&family=Princess+Sofia&family=Reem+Kufi&display=swap"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />

          <meta property="og:image" content="/OGimage.png" />
          <meta property="og:title" content="Off Menu" />
          <meta property="og:description" content="Dream Meal Generator" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
