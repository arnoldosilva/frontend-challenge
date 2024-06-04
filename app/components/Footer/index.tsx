import * as S from "./styles";
const year = new Date().getFullYear();

const Footer = () => {
  return (
    <S.Container>
      <span>Teste frontend</span>
      <p>
        <span>Desenvolvido por </span>
        <a
          href="https://www.arnoldosilva.com.br"
          target="_blank"
          rel="noreferrer"
        >
          Arnoldo Silva
        </a>
      </p>
      <p>
        <span>{` © ${year} - Livre uso sobre licensa `}</span>
        <a href="https://mit-license.org/" target="_blank" rel="noreferrer">
          MIT
        </a>
      </p>
    </S.Container>
  );
};

export default Footer;
