import Head from 'next/head';
import Link from 'next/link'
import { ROUTES } from '../constants/routes';

export default function MainLayout({ children, page }) {

    <Head>
        <title> {page} | My test app </title>
        <meta name="keywords" content="react.js, next.js, js, javasctipt, typesctipt, blog, test, DevelopsToday" />
        <meta name="description" content="This is my test app (blog) for DevelopsToday" />
        <meta name="autor" content="Yushchenko Yulia" />
        <meta charSet="utf-8" />
    </Head>



    return (
        <>
            <nav>
                <Link href={ROUTES.home}><a>Home</a></Link>
                <Link href={ROUTES.posts}><a>Posts</a></Link>
                <Link href={ROUTES.newPost}><a>Add new post</a></Link>

            </nav>
            <main>
                {children}
            </main>
            <style jsx>{`
                nav {
                    position: fixed;
                    height: 60px;
                    left: 0;
                    top: 0;
                    right: 0;
                    background: darkblue;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                }
                
                nav a {
                    color: #fff;
                    text-decoration: none;
                    font-size: 20px;
                }
                
                main {
                    margin: 60px 10%;
                    padding: 1rem;
                }
            `}</style>
        </>
    )
}