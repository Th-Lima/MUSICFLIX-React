import React, { useEffect, useState } from 'react';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import PageDefault from '../../components/PageDefault';
import categoriasRepository from '../../repositories/categorias';
import Loading from '../../components/Loading';

export default function Home() {
  // eslint-disable-next-line no-shadow
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository.getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <PageDefault paddingAll={0}>
      {dadosIniciais.length === 0 && (<Loading />)}

      {dadosIniciais.map((categoria, indice) => {
        if (indice === 0) {
          return (
            <div key={categoria.id}>
              <BannerMain
                videoTitle={dadosIniciais[0].videos[0].titulo}
                url={dadosIniciais[0].videos[0].url}
                videoDescription='O documentário "Ensaio sobre a Música",
                produzido em parceria entre o Reverb e o Rock in Rio com a produtora La Casa de la Madre,
                procura refletir sobre os significados da música para cada pessoa. O filme, que tem direção e roteiro de André Castilho e Pedro Miguel Oliveira,
                apresenta o poder de transformação da música visto por diferentes espectros sociais e reflete sobre uma questão: quais sensações essa arte traz para as nossas vidas?'
              />
              <h2>Aprenda a tocar seu instrumento favorito!</h2>
              <Carousel
                ignoreFirstVideo
                category={dadosIniciais[0]}
              />
            </div>
          );
        }

        return (
          <Carousel
            key={categoria.id}
            category={categoria}
          />
        );
      })}
    </PageDefault>
  );
}
