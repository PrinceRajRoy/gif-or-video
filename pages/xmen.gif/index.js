import Head from 'next/head'

function IndexPage() {
  return (
    <div>
      <Head>
        <title>My page title</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta charset="UTF-8" />
        <meta property="og:image" content="https://katetilton.com/wp-content/uploads/2016/08/INTRO.gif" />
        <meta property="og:type" content="video.other" />
        <meta property="og:video:url" content="https://video.twimg.com/ext_tw_video/1187387212469624832/pu/vid/480x360/aQLncLG2eyTBgXbH.mp4" />
        <meta property="og:video:width" content="498" />
        <meta property="og:video:height" content="280" />
      </Head>
      <p>Spread the word, #XmenSweep!</p>
    </div>
  )
}

export default IndexPage