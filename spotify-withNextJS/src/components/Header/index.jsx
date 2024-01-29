import Image from "next/image";
import smallRight from "../../assets/icons/small-right.png";
import smallLeft from "../../assets/icons/small-left.png";
import iconSearch from "../../assets/icons/search.png";


export default function Header(){
    return(
        <nav className="header__navigation">
            <div className="navigation">
              <button className="arrow-left">
                <Image
                  src={smallLeft}
                  alt="seta esquerda"
                  
                />
              </button>
              <button className="arrow-right">
                <Image
                  src={smallRight}
                  alt="seta direita"
                />
              </button>

              <form className="header__search">
                <Image src={iconSearch} alt=""/>
                <input
                  type="text"
                  id="search__input"
                  maxLength={800}
                  placeholder="O que você que ouvir?"
                />
              </form>
            </div>
            <div className="header__login">
              <button className="subscribe">Inscreva-se</button>
              <button className="login">Entrar</button>
            </div>
          </nav>
    )
}