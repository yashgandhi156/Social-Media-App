import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";

const Layout = ({ children, title }) => {
  return (
    <>
      <Head>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <title>{title}</title>
      </Head>
      <Header />
      <main className="container" style={{ minHeight: "70vh" }}>
        {children}
      </main>
      <Footer />
    </>
  );
};

Layout.defaultProps = {
  title: "Social Media App By Yash Gandhi",
};
export default Layout;
