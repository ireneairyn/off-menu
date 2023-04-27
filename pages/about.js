import Head from "next/head";
import React from "react";

function AboutPage() {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>OFF MENU</title>
      </Head>
      <div className="aboutContent">
        <h1>About</h1>
        <p>
          Welcome to Off Menu, a small project inspired by the podcast of the
          same name, hosted by comedians Ed Gamble and James Acaster.{" "}
        </p>
        <p>
          As fans of the Off Menu podcast, I was inspired by the creative and
          entertaining conversations Ed and James have with their guests about
          their dream meals and I wanted to create a platform where anyone could
          share their own imaginary meals and discover new and interesting
          foods.
        </p>

        <p>
          So whether you&apos;re a foodie, a fan of the Off Menu podcast, or
          just looking for some culinary inspiration, thanks for joining me on
          this delicious journey.
        </p>
        <div className="thanks"><p>Special thanks to José Antonio, Ángel and Tom!</p></div>
      </div>
    </>
  );
}

export default AboutPage;
