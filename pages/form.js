import Head from "next/head";
import React from "react";
import Form from "/components/Form";

function FormPage() {

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>OFF MENU</title>
      </Head>
        <div className="formContent">
          <Form />
        </div>
    </>
  );
}

export default FormPage;
