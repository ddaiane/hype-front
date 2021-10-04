import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import Carousel from 'react-bootstrap/Carousel';

function SlidesImagens() {

    function abrePredio(sigla) {
        alert(sigla);
    }

    return(
<Carousel>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 slide"
      src="https://hypeempreendimentos.com.br/wp/wp-content/uploads/2019/10/1.-Fachada-1_Easy-Resize.com_.jpg"
      alt="Imagem prédio Move City Habitat"
    />
    <Carousel.Caption>
        <article className="captionCarousel" onClick={() => abrePredio("MOVE")}>
            <h1>Move City Habitat</h1>
        </article>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 slide"
      src="https://hypeempreendimentos.com.br/wp/wp-content/uploads/2021/02/Fachada-Noturna.jpg"
      alt="Second slide"
    />
    <Carousel.Caption>
        <article className="captionCarousel" onClick={() => abrePredio("KEEP")}>
            <h1>Keep Urban Habitat</h1>
        </article>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item interval={3000}>
    <img
      className="d-block w-100 slide"
      src="https://hypeempreendimentos.com.br/wp/wp-content/uploads/2019/06/1.jpg"
      alt="Third slide"
    />
    <Carousel.Caption>
        <article className="captionCarousel" onClick={() => abrePredio("KLEE")}>
            <h1>Klee Urban Habitat</h1>
        </article>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>)
}

export default SlidesImagens;

