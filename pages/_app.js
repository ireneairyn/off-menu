import Image from "next/image";
import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <div className="background"></div>
      <div className="wrapper">
        <div className="topLinks">
          <a
            href="https://github.com/ireneairyn/off-menu"
            className="logo-link"
            target="_blank"
          >
            <Image
              src="/github-mark-white.png"
              alt="github logo"
              width={35}
              height={35}
            />
          </a>{" "}
          <a
            href="https://www.offmenupodcast.co.uk/"
            className="emoji-link"
            target="_blank"
          >
            🎙️
          </a>
        </div>
        <div className="header">
          <Link href="/" className="title-link">
            <h1>OFF MENU</h1>
          </Link>
          <h2>DREAM MEAL GENERATOR</h2>
        </div>
        <Component {...pageProps} />
        <div className="footer">
          <span>
            <Link href="/about">About |</Link>
          </span>
          <span>
            <a href="https://github.com/ireneairyn/off-menu" target="_blank">
            &nbsp;Github |
            </a>
          </span>
          <span>
            <a href="https://www.offmenupodcast.co.uk/" target="_blank">
            &nbsp;Off Menu Podcast
            </a>
          </span>
        </div>
      </div>
    </>
  );
}
