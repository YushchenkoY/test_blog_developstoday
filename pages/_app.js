import {wrapper} from '../redux/store';


function MyApp({ Component, pageProps}) {
    return (
        <>
        <Component {...pageProps} />
        <style jsx global>{`
            button{
                background: darkblue;
                color: #fff;
                font-size: 20px;
                margin: 1rem;
                right: 0;
                lift: auto;

                padding: 10px 15px;

            }
            * {
                box-sizing: border-box;
            }
            html,
            body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
                    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
            }
            p, div{
                font-size:20px;
            }
        `}
        </style>
        </>
    );
}


export default wrapper.withRedux(MyApp);