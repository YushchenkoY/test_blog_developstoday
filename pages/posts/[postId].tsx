import Router, {useRouter} from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import MainLayout from '../../components/MainLayout';
import { ROUTES } from '../../constants/routes';
import React, {useEffect, useState} from 'react';
import { fetchingDetails, sendCommentRequest } from '../../redux/actions/postAction';
import { State } from '../../types/state';
import { IPostsState } from '../../redux/reducers/postsReducer';


export default function Post(props) {
    const dispatch = useDispatch();
    const post = useSelector<State, IPostsState['details']>(state => state.posts.details);
    const [comment, setComment] = useState('');
    const router = useRouter();
    const {postId} = router.query;

    useEffect(() => {
        if (!postId) return;

        dispatch(fetchingDetails(postId as string));
    }, [postId]);

    const handleButtonClick = (e) => {
        e.preventDefault();
        dispatch(sendCommentRequest(postId as string, comment));
        setComment('')
    };

    return (
        <MainLayout page={"Post"}>
            <button onClick={()=>Router.push(ROUTES.posts)}>Back to all posts</button>
            {post && (
                <div>
                    <div className='postWrapper'>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                    <div className='commentsWraper'>
                        <p className="com">Comments:</p>
                        <ul>
                            {post.comments.map(comment => {
                                return (<li key={comment.id}>{comment.body}</li>)
                            })}
                        </ul>
                    </div>
                    <form>
                        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
                        <button onClick={handleButtonClick}>Send</button>
                    </form>
                </div>
            )}

            
            <style jsx>{`
            MainLayout{
                display: flex;
                flex-direction: column;

            }

            .postWrapper{
                margin-bottom: 3rem;

            }
            h3{
                margin: 3rem 0 1rem;
            }
            .commentsWraper div{
                margin: 1rem;
            }
            form {
                margin: 60px 10%;
                display: flex;
                flex-direction: column;
                align-items: center;
            }
            textarea {
                width: 500px;
                font-size: 20px;
                height: 100px;
            }
            `}</style>
        </MainLayout>
    )
}
