import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
import Form from "/components/Form";

function FormPage() {
  const handleSubmit = (formValues) => {
    // handle form submission here
    console.log(formValues);
  };

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <title>OFF MENU</title>
      </Head>
      <div className="background">
        <div className="formContent">
          <Form onSubmit={handleSubmit} />
        </div>
      </div>
    </>
  );
}

export default FormPage;
