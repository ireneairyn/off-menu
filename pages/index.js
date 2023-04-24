import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

function HomePage() {
  const router = useRouter();

  const handleImageClick = () => {
    router.push("/form");
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>OFF MENU</title>
      </Head>

      <div className="content">
        <div className="image-container" onClick={handleImageClick}>
          <Image
            src="/plate.png"
            alt="plate knife and fork"
            width={400}
            height={400}
          />
        </div>
      </div>
    </>
  );
}

export default HomePage;
