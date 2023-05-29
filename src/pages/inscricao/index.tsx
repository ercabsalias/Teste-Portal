import type { NextPage } from "next";
import Head from "next/head";
import React from "react";
import StudentSubscriptionTest from "../../views/studentSubscription";

const StudentSubscriptionPage: NextPage = () => {
  return (
    <React.Fragment>
      <Head>
        <title>Inscrição</title>
      </Head>
      <React.Fragment>
        <StudentSubscriptionTest />
      </React.Fragment>
    </React.Fragment>
  );
};

export default StudentSubscriptionPage;
