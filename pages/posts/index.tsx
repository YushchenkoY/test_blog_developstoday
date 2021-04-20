import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../components/MainLayout';
import { fetching } from '../../redux/actions/postAction';
import { IPostsState } from '../../redux/reducers/postsReducer';
import { State } from '../../types/state';
import Link from 'next/link'




export default function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector<State, IPostsState['data']>(state => state.posts.data);

    useEffect(() => {
        dispatch(fetching());
    }, []);

    return (
        <MainLayout page={"Posts page"}>
            <div className='postWrapper'>
            {posts.slice(0).reverse().map(post => {
                const croppedBody = post.body.length > 50 ? post.body.substring(0, 100) + '...' : post.body;
                return (
                    <ul className='post'>
                        <li>
                            <Link href={'/posts/'+post.id} key={post.id} >
                                <a>
                                    <h3>{post.title}</h3>
                                    <p>{croppedBody}</p>
                                </a>
                            </Link>
                        </li>
                    </ul>
                )
            })}
            </div>
            <style jsx>{`
                ul{
                    width: 350px;
                    border: 1px solid black;
                    margin: 10px;
                    padding: 5px;

                }
                li{
                    padding: 15px;
                    list-style: none;
                }
                li h3{
                    padding: 0;
                    margin: 0;

                }
                .postWrapper{
                    display: flex; 
                    flex-flow: row wraper;
                    justify-content: center;
                    flex-wrap: wrap;
                }
                a {
                    display: flex;
                    text-decoration: none;
                    flex-direction: column;
                }
            `}        
            </style>
        </ MainLayout>
    )
}
