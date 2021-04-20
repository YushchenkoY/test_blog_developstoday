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
        `}
        </style>
        </>
    );
}


export default wrapper.withRedux(MyApp);