import "./Banner.css";

interface BannerProps {
  enderecoImagem: string
  textoAlternativo?: string // ?opcional
}


// ------- Component ------
const Banner = ({ enderecoImagem, textoAlternativo } :BannerProps) => {
  // JSX
  return (
    <header className="banner">
      {/* <img src="/img/banner.png" alt="Banner principal da página do Organo" /> */}
      <img src={enderecoImagem} alt={textoAlternativo} />
    </header>
  );
}

export default Banner;
