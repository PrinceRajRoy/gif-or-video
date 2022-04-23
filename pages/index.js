import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8" />
        <meta property="og:image" content="https://media.giphy.com/media/l8ovpiIB77egtn2xZe/giphy.gif" />
        <meta property="og:type" content="video.other" />
        <meta property="og:video:url" content="https://video.twimg.com/ext_tw_video/1256820404972408833/pu/vid/1280x590/dHefAd7ajoG_joSW.mp4" />
        <meta property="og:video:width" content="176" />
        <meta property="og:video:height" content="144" />
      </Head>
      <p>Hello world!</p>
    </div>
  )
}

export default IndexPage