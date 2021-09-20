import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en-US">
        <Head />
        <body>
          <Main />
          {/* Here we will mount our modal portal */}
          <div id="modal-root" />
          <NextScript />
        </body>
      </Html>
    );
  }
}
export default MyDocument;
