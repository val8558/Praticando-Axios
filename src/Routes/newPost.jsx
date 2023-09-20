import blogfetch from '../axios/config'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import React from 'react'
import './newPost.css'

const NewPost = () => {
    const navigate = useNavigate()

    const [title, setTilte] =useState()
    const [body, setBody] =useState()

    const createPost = async (e) => {
        e.preventDefault();

        const post = { title, body, userId: 1};

        await blogfetch.post("/posts", {
            body: post
        });
        
        navigate("/")
    }
    
    return (
        <div className='new-post'>
            <h2>Inserir novo post</h2>
            <form onSubmit={(e)=>createPost()}>
                <div className='form-control'>
                    <label htmlFor="title">Título</label>
                    <input 
                    type="text"
                    name='title'
                    id='title'
                    placeholder='"Digite o Titulo'
                    onChange={(e) => setTilte(e.target.value)}/>
                </div>
                <div className='form-control'>
                    <label htmlFor="body">Título</label>
                    <textarea 
                    name='body'
                    id='body'
                    placeholder='Digite o conteúdo'
                    onChange={(e) => setBody(e.target.value)}
                    ></textarea>
                </div>
                <input type="submit" value="criar post" className='btn'/>
            </form>
        </div>
    )
}

export default NewPost