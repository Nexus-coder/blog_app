import "@/styles/globals.css";
import Layout from "@/components/Layout";
import Navbar from "@/components/Navbar";
import Heading from "@/components/Heading";
import Head from "next/head";

//It is the application shell
//The _app section is the root document in your body tag
export default function App({ Component, pageProps }) {
  //You can set up a head component that is present for all the pages and that will be overwritten by the more specific page content
  return (
    <Layout>
      <Head>
        <title>All Title</title>
      </Head>
      {/* <Navbar />
      <Heading /> */}
      <div className="container">
      <Component {...pageProps} />;
      </div>
    </Layout>
  );
}
