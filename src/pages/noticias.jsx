import React from 'react'
import Layout from '../components/Layout'
import '../styles/noticias.css'
import { Link } from 'gatsby'

export default function noticias() {
    return (
        <Layout>
            <section className="page-noticias-section">
                <div className="container-lg">
                    <h2>NOTÍCIAS</h2>
                    <div className="row my-md-4 gx-4">
                        <div className="col-md-6 my-2 my-md-0 noticias-col">
                            <Link to="/"><img src="pachecovit/images/noticia.png" alt="" /></Link>
                        </div>
                        <div className="col-md-6 my-2 my-md-0 noticias-col">
                            <Link to="/"><img src="pachecovit/images/noticia.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className="row my-md-4 gx-4">
                        <div className="col-md-6 my-2 my-md-0 noticias-col">
                            <Link to="/"><img src="pachecovit/images/noticia.png" alt="" /></Link>
                        </div>
                        <div className="col-md-6 my-2 my-md-0 noticias-col">
                            <Link to="/"><img src="pachecovit/images/noticia.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className="row my-md-4 gx-4">
                        <div className="col-md-6 my-2 my-md-0 noticias-col">
                            <Link to="/"><img src="pachecovit/images/noticia.png" alt="" /></Link>
                        </div>
                        <div className="col-md-6 my-2 my-md-0 noticias-col">
                            <Link to="/"><img src="pachecovit/images/noticia.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className="row my-md-4 gx-4">
                        <div className="col-md-6 my-2 my-md-0 noticias-col">
                            <Link to="/"><img src="pachecovit/images/noticia.png" alt="" /></Link>
                        </div>
                        <div className="col-md-6 my-2 my-md-0 noticias-col">
                            <Link to="/"><img src="pachecovit/images/noticia.png" alt="" /></Link>
                        </div>
                    </div>
                    <div className="row my-md-4 gx-4">
                        <div className="col-md-6 my-2 my-md-0 noticias-col">
                            <Link to="/"><img src="pachecovit/images/noticia.png" alt="" /></Link>
                        </div>
                        <div className="col-md-6 mt-2 mb-4 my-md-0 noticias-col">
                            <Link to="/"><img src="pachecovit/images/noticia.png" alt="" /></Link>
                        </div>
                    </div>
                    <Link className="ver-button" to="/noticias">CARREGAR MAIS</Link>
                </div>
            </section>
        </Layout>
    )
}
