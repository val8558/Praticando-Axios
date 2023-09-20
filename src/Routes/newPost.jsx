import React from 'react'
import './newPost.css'

const NewPost = () => {
    return (
        <div className='new-post'>
            <h2>Inserir novo post</h2>
            <form>
                <div className='form-control'>
                    <label htmlFor="title">Título</label>
                    <input 
                    type="text"
                    name='title'
                    id='title'
                    placeholder='"Digite o Titulo'/>
                </div>
                <div className='form-control'>
                    <label htmlFor="body">Título</label>
                    <textarea 
                    name='body'
                    id='body'
                    placeholder='Digite o conteúdo'
                    ></textarea>
                </div>
                <input type="submit" value="criar post" className='btn'/>
            </form>
        </div>
    )
}

export default NewPost