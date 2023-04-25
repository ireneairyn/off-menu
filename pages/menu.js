import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import Menu from "/components/Menu";

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
        
      </div>
    </>
  );
}

export default MenuPage;
