import Document, { Html, Head, Main, NextScript } from "next/document"

class MyDocument extends Document {
    render(){
        return (
            <Html lang='en'>
                <Head />
                <body>
                    {/* <div id='overlays'>一些额外的东西</div> */}
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default MyDocument