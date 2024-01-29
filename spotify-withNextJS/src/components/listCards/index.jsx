import Cards from "../Cards";

import boasFestas from "../../assets/playlist/1.jpeg";
import feitoParaVoce from "../../assets/playlist/2.png";
import lancamentos from "../../assets/playlist/3.jpeg";
import creators from "../../assets/playlist/4.jpeg";
import paraTreinar from "../../assets/playlist/5.jpeg";
import podcasts from "../../assets/playlist/6.jpeg";
import sertanejo from "../../assets/playlist/7.jpeg";
import sambaPagode from "../../assets/playlist/8.jpeg";
import funk from "../../assets/playlist/9.jpeg";

import mpb from "../../assets/playlist/10.jpeg";
import rock from "../../assets/playlist/11.jpeg";
import hiphop from "../../assets/playlist/12.jpeg";
import indie from "../../assets/playlist/13.jpeg";
import relax from "../../assets/playlist/14.jpeg";
import musicalatina from "../../assets/playlist/15.jpeg";


export default function ListCards(){
    return(
        <section className="offer__list-item">
            <Cards imageSrc={boasFestas} titleCard="Boas Festas" className="card1" />
            <Cards imageSrc={feitoParaVoce} titleCard="Feito para voçê" className="card2"/>
            <Cards imageSrc={lancamentos} titleCard="Lançamentos" className="card3"/>
            <Cards imageSrc={creators} titleCard="Creators" className="card4"/>
            <Cards imageSrc={paraTreinar} titleCard="Para Treinar" className="card5"/>
            <Cards imageSrc={podcasts} titleCard="Podcasts" className="card6"/>
            <Cards imageSrc={sertanejo} titleCard="Sertanejo" className="card7"/>
            <Cards imageSrc={sambaPagode} titleCard="Samba e Pagode" className="card8"/>
            <Cards imageSrc={funk} titleCard="Funk" className="card9"/>
            <Cards imageSrc={mpb} titleCard="MPB" className="card10"/>
            <Cards imageSrc={rock} titleCard="Rock" className="card11"/>
            <Cards imageSrc={hiphop} titleCard="Hip Hop" className="card12"/>
            <Cards imageSrc={indie} titleCard="Indie" className="card13"/>
            <Cards imageSrc={relax} titleCard="Relax" className="card14"/>
            <Cards imageSrc={musicalatina} titleCard="Música Latina" className="card15"/>
        </ section>
    )
}