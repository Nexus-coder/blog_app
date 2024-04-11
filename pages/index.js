import AllBlogs from "@/components/AllBlogs";
import Blog from "@/components/Blog";
import FeaturedBlogs from "@/components/FeaturedBlogs";
import styles from "@/styles/Home.module.css";
//The head component is used for optimization of te page for the bots
//Next Js provides this for us and allows us to be able to inject elements of the page directly to the head
//For example we can add the meta tag ehich is important for search engines
import Head from "next/head";
export default function Home() {
  return (
    <>
      <main>
        <Head>
          {/* We also do not have to hard code all the description and the name we can add them dynamically */}
          <title>
            Blog App
          </title>
          {/* the description text to the content will come up inn a search result when we search in google */}
          <meta name="description" content="This is the page that contains all the details of the blogs"/>
        </Head>
        <h2 style={{ margin: "10px 0px 10px 35px" }}>Featured Blogs</h2>
        <FeaturedBlogs>
          <Blog />
          <Blog style={"flex"} />
          <Blog style={"flex"} />
          <Blog style={"flex"} />
        </FeaturedBlogs>
        <h2 style={{ margin: "20px 0px 10px 35px" }}>All Blogs</h2>
        <AllBlogs>
          <Blog />
          <Blog />
          <Blog />
        </AllBlogs>
      </main>
    </>
  );
}

//Static generation
//pre-render the page during build time
//Can be cached by the server or cdn and incoing requests can be served instantly
//How do we tell react which page should be statically generated
//Code here will never be seen by clients
///Sognals next js that this is a page that should be pre-genrateed
export async function getStaticProps(context) {
  //Have to return an object with a props key
  //Data is up to you but it shoud be an object
  //You can do file functions here since it is performe on the server side
  return {
    props: {
      products: [{ id: ë1 }]
    },
    //You have the best of both worlds as it regenerates and serves new content every 10seconds
    //For every incoming requests it should be regenerated after every 10seconds
    revalidate: 10,
    //If the code here fails to fetch data then set t to true
    notFound: true,
    //This redirects the useer maybe there is no 
    redirect: {
      destination: "/no-data"
    }
  }
}