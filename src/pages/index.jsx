import * as React from "react"
import '../styles/global.css'
import '../styles/home.css'
import Layout from "../components/Layout";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Link } from "gatsby";

export default function Home() {
  return (
    <Layout>
      <section className="header">
        <img src="/images/Halo-Infinite-Logo.svg" alt="" />
      </section>

      <section className="gameplays-section">
        <div className="container-lg">
          <h1>ÚLTIMAS GAMEPLAYS</h1>
          <div className="row gx-4 my-md-4">
            <div className="col-md-4 my-2 my-md-0 gameplay-col">
              <Link to="/"><img src="/images/gameplay.png" alt="" /></Link>
            </div>
            <div className="col-md-4 my-2 my-md-0 gameplay-col">
              <Link to="/"><img src="/images/gameplay.png" alt="" /></Link>
            </div>
            <div className="col-md-4 my-2 my-md-0 gameplay-col">
              <Link to="/"><img src="/images/gameplay.png" alt="" /></Link>
            </div>
          </div>
          <div className="row gx-4 my-md-4">
            <div className="col-md-4 my-2 my-md-0 gameplay-col">
              <Link to="/"><img src="/images/gameplay.png" alt="" /></Link>
            </div>
            <div className="col-md-4 my-2 my-md-0 gameplay-col">
              <Link to="/"><img src="/images/gameplay.png" alt="" /></Link>
            </div>
            <div className="col-md-4 my-2 my-md-0 gameplay-col">
              <Link to="/"><img src="/images/gameplay.png" alt="" /></Link>
            </div>
          </div>
          <div className="row gx-4 my-md-4">
            <div className="col-md-4 my-2 my-md-0 gameplay-col">
              <Link to="/"><img src="/images/gameplay.png" alt="" /></Link>
            </div>
            <div className="col-md-4 my-2 my-md-0 gameplay-col">
              <Link to="/"><img src="/images/gameplay.png" alt="" /></Link>
            </div>
            <div className="col-md-4 my-2 my-md-0 gameplay-col">
              <Link to="/"><img src="/images/gameplay.png" alt="" /></Link>
            </div>
          </div>
          <div className="row gx-4 my-md-4">
            <div className="col-md-4 my-2 my-md-0 gameplay-col">
              <Link to="/"><img src="/images/gameplay.png" alt="" /></Link>
            </div>
            <div className="col-md-4 my-2 my-md-0 gameplay-col">
              <Link to="/"><img src="/images/gameplay.png" alt="" /></Link>
            </div>
            <div className="col-md-4 my-2 my-md-0 gameplay-col">
              <Link to="/"><img src="/images/gameplay.png" alt="" /></Link>
            </div>
          </div>
          <Link className="ver-button" to="/noticias">VER TODOS</Link>
        </div>
      </section>

      <section className="noticias-section">
        <div className="container-lg">
          <h2>NOTÍCIAS</h2>
          <div className="row my-md-4 gx-4">
            <div className="col-md-6 my-2 my-md-0 noticias-col">
              <Link to="/"><img src="/images/noticia.png" alt="" /></Link>
            </div>
            <div className="col-md-6 my-2 my-md-0 noticias-col">
              <Link to="/"><img src="/images/noticia.png" alt="" /></Link>
            </div>
          </div>
          <div className="row my-md-4 gx-4">
            <div className="col-md-6 my-2 my-md-0 noticias-col">
              <Link to="/"><img src="/images/noticia.png" alt="" /></Link>
            </div>
            <div className="col-md-6 mt-2 mb-4 my-md-0 noticias-col">
              <Link to="/"><img src="/images/noticia.png" alt="" /></Link>
            </div>
          </div>
          <Link className="ver-button" to="/noticias">VER MAIS</Link>
        </div>
      </section>

    </Layout>
  );
}
