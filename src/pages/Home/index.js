import React from 'react';
import Menu from '../../components/Menu';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Footer from '../../components/Footer';

function Home() {
  return (
    <div style={{background: '#141414' }}>
      <Menu />
      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription={
        `O documentário "Ensaio sobre a Música", 
        produzido em parceria entre o Reverb e o Rock in Rio com a produtora La Casa de la Madre, 
        procura refletir sobre os significados da música para cada pessoa. O filme, que tem direção e roteiro de André Castilho e Pedro Miguel Oliveira, 
        apresenta o poder de transformação da música visto por diferentes espectros sociais e reflete sobre uma questão: quais sensações essa arte traz para as nossas vidas?`
      }
      />
      <h2>Aprenda a tocar seu instrumento favorito!</h2>
      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />
      <Carousel
        category={dadosIniciais.categorias[1]}
      />
      <Carousel
        category={dadosIniciais.categorias[2]}
      />
      <Carousel
        category={dadosIniciais.categorias[3]}
      />
      <Carousel
        category={dadosIniciais.categorias[4]}
      />
      <Carousel
        category={dadosIniciais.categorias[5]}
      />
      <Footer />
    </div>
  );
}

export default Home;
