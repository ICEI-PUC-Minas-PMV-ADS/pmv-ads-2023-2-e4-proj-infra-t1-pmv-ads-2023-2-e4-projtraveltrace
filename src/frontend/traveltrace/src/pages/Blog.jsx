import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/traveltrace.svg'
import banner from '../assets/blog-viagem.jpg'
import './Blog.css'

function Blog() {
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")

    return (
        <div className="container">
            <div className="banner-container">
                <img src={banner} alt="Banner de Viagem" className="banner" />
            </div>

            <div className="wrap-blog">
                        <form className="blog-form">
                            <span className="blog-form-title">
                                <img src={logo} alt="Travel Trace" />
                            </span>
                            <span className="blog-form-title">Comente aqui sobre sua experiência!</span>

                            <div className='wrap-input'>
                                <input className={name !== "" ? 'has-val input' : 'input'}
                                    type='text' value={name} onChange={e => setName(e.target.value)} />
                                <span className='focus-input' data-placeholder='Nome'></span>
                            </div>

                            <div className="wrap-input">
                                <textarea
                                    className={description !== "" ? 'has-val input' : 'input'}
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                    placeholder="Descrição"
                                    rows="6"
                                ></textarea>
                            </div>

                            <div className='wrap-input'>
                                <input type="file" id="fileInput" accept="image/*" />
                            </div>

                            <div className='container-blog-form-btn'>
                                <button className='blog-form-btn'>Publicar</button>
                            </div>
                        </form>
                    </div>
                </div>
    );
}

export default Blog;