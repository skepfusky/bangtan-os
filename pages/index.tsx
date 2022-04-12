import Head from "next/head";
import Taskbar from "../components/taskbar";
import styles from "../styles/Home.module.scss";

export default function Home() {

  const description = "yes"
  const title = "BANGTANOS"

  return(
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <title>BANGTANOS</title>
        <meta name="description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@bangtanos" />
        <meta name="twitter:creator" content="@skepfuskyjs" />
        <meta name="twitter:title" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:site_name" content="BANGTANOS" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content={description} />
        <meta property="og:title" content={title} />
      </Head>
      <div className={styles.DesktopGrid}>
      </div>
      <Taskbar>
        {/* BTS Start button */}
        {/* Sum Icons in here */}
      </Taskbar>
    </>
  )
}