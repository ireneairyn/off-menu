import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

function HomePage() {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>OFF MENU</title>
      </Head>

      <div className="content">
        <Link href="/form" className="image-container">
          <Image
            src="/plate.png"
            alt="plate knife and fork"
            width={400}
            height={400}
          />
        </Link>
      </div>
    </>
  );
}

export default HomePage;
