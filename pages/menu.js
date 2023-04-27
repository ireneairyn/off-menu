import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Menu from "/components/Menu";
import { useState } from "react";
import Link from "next/link";


function MenuPage() {
  const router = useRouter();
  const { query } = router;

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>OFF MENU</title>
      </Head>
      <div className="formContent">
        <Menu
          water={query.water}
          poppabread={query.poppabread}
          starter={query.starter}
          mainCourse={query.mainCourse}
          sideDish={query.sideDish}
          drink={query.drink}
          dessert={query.dessert}
        />
        <ShareButton />
        <Link href="/form" className="makeMeal">
            <p>🍽️ Make a new meal! 🍽️</p>
          </Link>
      </div>
    </>
  );
}

function ShareButton() {
  const [isCopied, setIsCopied] = useState(false);

  function handleShareClick() {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);

    setTimeout(() => {
      setIsCopied(false);
    }, 1500); // Hide the message after 2 seconds
  }

  return (
    <>
      <button onClick={handleShareClick}>{isCopied ? "copied!" : "Share"}</button>
    </>
  );
}

export default MenuPage;
