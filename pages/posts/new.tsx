import MainLayout from '../../components/MainLayout'
import { useDispatch } from 'react-redux';
import React, { useState} from 'react';
import {sendPostRequest} from '../../redux/actions/postAction'

export default function New() {
    const dispatch = useDispatch();
    const [postTitle, setPostTitle] = useState('');
    const [postBody, setPostBody] = useState('');
    
    const handleButtonClick = (e) => {
        e.preventDefault();
        if (!!postTitle == false || !!postBody == false) return alert('Заполните оба поля')
        dispatch(sendPostRequest(postTitle as string, postBody as string));
        setPostTitle('');
        setPostBody('');

    };


    return (
        <MainLayout page={"New post"}>
            <form>
                <h3> Post`s subject</h3> 
                <textarea  value={postTitle} onChange={(e) => setPostTitle(e.target.value)} className='postTitle' />
                <h3> Text </h3>
                <textarea  value={postBody} onChange={(e) => setPostBody(e.target.value)} className='postBody' />
                <button onClick={handleButtonClick}>Send</button>
            </form>
            <style jsx>{`
                form {
                    margin: 60px 10%;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                }
                textarea {
                    width: 500px;
                    font-size: 15px;
                }
                .postTitle{ 
                    height: 80px;
                }
                .postBody{ 
                    height: 150px;
                }

    
            `}
            </style>
        </MainLayout>
    )
}

