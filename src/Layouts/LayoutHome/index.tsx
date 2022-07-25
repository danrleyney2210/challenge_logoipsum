import Header from 'components/molecules/Header'
import Footer from 'components/organisms/Footer'
import * as S from './styles'

type Props = {
  children: React.ReactNode
}

export function LayoutHome({ children }: Props) {
  return (
    <S.Wrapper>
      <Header />
      <S.Content>{children}</S.Content>
      <Footer />
    </S.Wrapper>
  )
}
