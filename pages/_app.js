import {wrapper} from '../redux/store';


function MyApp({ Component, pageProps}) {
    return (
        <>
        <Component {...pageProps} />
        <style jsx global>{`
            button{
                background: darkblue;
                color: #fff;
                font-size: 15px;
                margin: 1rem;
                float: right;
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
        `}
        </style>
        </>
    );
}


export default wrapper.withRedux(MyApp);