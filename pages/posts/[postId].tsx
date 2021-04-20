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
                        <p>Comments:</p>
                        {post.comments.map(comment => {
                            return (<div key={comment.id}>{comment.body}</div>)
                        })}
                    </div>
                    <form>
                        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
                        <button onClick={handleButtonClick}>Send</button>
                    </form>
                </div>
            )}

            
            <style jsx>{`
            .postWrapper{
                text-align: center;
                margin: 2rem;
            }
            h3{
                margin: 2rem;
            }
            .commentsWraper div{
                margin: 1rem;
            }

            `}</style>
        </MainLayout>
    )
}
