import Image from "next/image";
import Header from "../src/components/Header";
import ListCards from "../src/components/listCards";

import logoSpotify from "../src/assets/icons/logo-spotify.png" 

export default function Page() {
  return (
    <>
      <aside className="sidebar">
        <nav className="sidebar__navigation">
          <div className="sidebar__logo">
            <a href="">
              <Image className="logo-spotify"
                width={80}
                src={logoSpotify}
                alt="logo Spotify"
              />
            </a>
          </div>
          <ul>
            <li>
              <a href="/">
                <span className="fa fa-home" />
                <span>Início</span>
              </a>
            </li>
            <li>
              <a href="/">
                <span className="fa fa-search" />
                <span>Buscar</span>
              </a>
            </li>
          </ul>
        </nav>
        <div className="sidebar__library">
          <header className="library__content">
            <button className="library__button">
              <span className="fa fas fa-book" />
              <span>Sua Biblioteca</span>
            </button>
            <button className="library__plus">
              <span className="fa fa-plus" />
            </button>
          </header>
          <section className="section-playlist">
            <div className="section-playlist__content">
              <h3 className="playlist__title">Crie sua primeira playlist</h3>
              <p className="playlist__text">É fácil, vamos te ajudar.</p>
              <button className="section-playlist__btn">Criar playlist</button>
            </div>
          </section>
          <div className="cookies">
            <a href="#">Cookies</a>
          </div>
          <div className="languages">
            <button className="languages__button">
              <span className="fa fa-globe" />
              <span>Português do Brasil</span>
            </button>
          </div>
        </div>
      </aside>
      <main>
        <div className="main__container">
          <Header />

          <div className="playlist__container">
            <div id="result-playlist">
              <div className="playlist">
                <h1 id="greeting">Boa Tarde</h1>
                <h2 className="session">Navegar por todas as seções</h2>
              </div>

              <div className="offer__scroll-container">
                <div className="offer_list">
                  <ListCards />
                </div>
              </div>
            </div>

            <div id="result-artist" className="hidden">
              <div className="grid-container">
                <div className="artist-card" id="">
                  <div className="card-img">
                    <img id="artist-img" className="artist-img" />
                    <div className="play">
                      <span className="fa fa-solid fa-play" />
                    </div>
                  </div>
                  <div className="card-text">
                    <a title="Foo Fighters" className="vst" href="" />
                    <span className="artist-name" id="artist-name" />
                    <span className="artist-categorie">Artista</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <footer>
        <div className="disclaimer-premium__container">
          <div className="disclaimer-premium__content">
            <h3 className="disclaimer-premium__title">
              Testar o premium de graça
            </h3>
            <p className="disclaimer-premium__text">
              Inscreva-se para curtir música ilimitada e podcasts só com alguns
              anúncios. Não precisa de cartão de crédito.
            </p>
          </div>
          <a
            href="https://www.spotify.com/br-pt/signup?forward_url=https%3A%2F%2Fopen.spotify.com%2Fintl-pt"
            className="disclaimer-premium__btn"
          >
            Inscreva-se grátis
          </a>
        </div>
      </footer>
    </>
  );
}
