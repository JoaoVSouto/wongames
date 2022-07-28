import * as React from 'react'

import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { Menu } from 'components/Menu'

import * as S from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

export const Base = ({ children }: BaseTemplateProps) => (
  <section>
    <Container>
      <Menu />
    </Container>

    {children}

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)
