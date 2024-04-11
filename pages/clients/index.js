const { default: Link } = require("next/link");
const { useRouter } = require("next/router");

function ListAllClients(){
    function LoadProject(){
        //Like using the Link component just programattically
        useRouter().push('clients/max')
        //When we use this one rather than push then we replace the current page with that one
        useRouter().replace("client/ian")
     
        //Can also use this syntax there
        // pathname:'clients/[id]',
        // query:{id:client.id}
    }
return (
    <div>
{/* Using this is more effiecent than using the anchor tag because this does not reload the whole page */}
        <Link href='clients/max'>Maximillan</Link>
        <Link href={{
            //the path as it is in the folder
            pathname:'clients/[id]',
            //the query object which is an object
            query:{id:client.id}
        }}></Link>
        <button>Navigate away when the button is clicked</button>
    </div>
)
}