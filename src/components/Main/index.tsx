import * as S from './styles'

const Main = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um atamo e React Avançado escrito ao lado."
    />
    <S.Title>React Avançado</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJs e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com código"
    />
  </S.Wrapper>
)

export default Main
