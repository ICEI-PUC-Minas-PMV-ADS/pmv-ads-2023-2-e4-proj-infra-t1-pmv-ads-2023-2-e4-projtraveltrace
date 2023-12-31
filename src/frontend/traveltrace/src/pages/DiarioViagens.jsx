import React, { useState, useEffect } from 'react';
import banner from '../assets/blog-viagem.jpg';
import './DiarioViagens.css';
import axios from 'axios';

function Blog() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [isPublished, setIsPublished] = useState(false);
    const [token, setToken] = useState("");

    useEffect(() => {
        const storedToken = localStorage.getItem('token');
        if (storedToken) {
            setToken(storedToken);
        }
    }, []);

    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    };

    const handleDescriptionChange = (e) => {
        setDescription(e.target.value);
    };

    const handlePublish = async (e) => {
        e.preventDefault();
        if (title && description) {
            try {
                const newViagem = {
                    titulo: title,
                    conteudo: description
                };
                const config = {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                };

                await axios.post('http://127.0.0.1:8000/posts/', newViagem, config);

                setIsPublished(true);
            } catch (error) {
                console.error("Erro ao publicar:", error);
                console.log("Detalhes do erro:", error.response.data);
            }
        }
    };

    return (
        <div className="container">
            <div className="banner-container">
                <img src={banner} alt="Banner de Viagem" className="banner" />
            </div>

            <div className="wrap-blog">
                <form className="blog-form">
                    <div className="blog-form-title">Comente aqui sobre sua experiência!</div>

                    <div className='wrap-input'>
                        <label className="input-label bold-label" htmlFor="title">Título</label>
                        <input
                            className="input"
                            type='text'
                            id="title"
                            value={title}
                            onChange={handleTitleChange}
                        />
                    </div>

                    <div className="wrap-input">
                        <label className="input-label bold-label" htmlFor="description">Descrição da viagem</label>
                        <textarea
                            className="input"
                            id="description"
                            value={description}
                            onChange={handleDescriptionChange}
                            rows="6"
                        ></textarea>
                    </div>

                    <div className='container-blog-form-btn'>
                        <button className={`blog-form-btn ${(!title || !description) ? 'disabled' : ''}`} onClick={handlePublish} disabled={!title || !description}>
                            Publicar
                        </button>
                    </div>

                    {isPublished && <div className="success-message">Conteúdo publicado com sucesso!</div>}
                </form>
            </div>
        </div>
    );
}

export default Blog;
