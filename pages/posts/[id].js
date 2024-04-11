//This is so that you can get the concrete value that is in the pathx
import { useRouter } from "next/router"

export default function PostId() {
  const router = useRouter();
  //The exact next ja  path posts/[id] inferred path
  console.log(router.pathname);
  //The query is the one that has the consrete value that we need to get the concrete value 
  console.log(router.query)
  return (
    <div>PostId</div>
  )
}

//Here you need to tell next js the ids that you will require in advance in order to statically update them
export async function getStaticProps(context) {
  if (nodata) {
    return {
      notFound: true
    }
  }
}

//Tells next js which instances of the next s page should be instantiated
export async function getStaticPaths() {
  return {
    paths: [
      { params: { pid: "p1" } }
    ],
    //Even pid values not listed uabove are also ok
    //This pages are then jit generated
    //When you use this you should be prepares to return a fallback state in your component
    //Can also be "blocking"- Next ja will wait the page to be pre-generated on the server thus it  might take longer but the page will be eventuallly genereted
    //if you know all the possible ids then you can set it to false
    fallback: true;
  }
}