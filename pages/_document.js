//Allows one to customise the entyire html document
//The head being imported here is not the head we imported in the app it is the head of the whole document
import Document, { Head, NextScript, Html, Main } from "next/document";

class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head />
                 <body>
                    {/*The div can be accessed outside the normal component tree and thus can be used to access portsl etc */}
                    <div id="overlay"/>
                    {/* The main component is the actual app being rendered */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument