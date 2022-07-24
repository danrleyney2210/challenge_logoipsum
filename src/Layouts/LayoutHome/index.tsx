import Footer from 'components/Footer'
import Header from 'components/Header'
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
