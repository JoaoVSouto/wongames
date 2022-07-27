import type { BannerProps } from 'components/Banner'
import type { GameCardProps } from 'components/GameCard'
import type { HighlightProps } from 'components/Highlight'

import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { Menu } from 'components/Menu'
import { BannerSlider } from 'components/BannerSlider'
import { Showcase } from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

export const Home = ({
  banners,
  freeGames,
  freeHighlight,
  mostPopularGames,
  mostPopularHighlight,
  newGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames
}: HomeTemplateProps) => (
  <section>
    <Container>
      <Menu />

      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase
        title="News"
        games={newGames}
        gameCardSliderChevronColor="black"
      />
    </S.SectionNews>

    <Showcase
      title="Most Popular"
      games={mostPopularGames}
      highlight={mostPopularHighlight}
    />

    <S.SectionUpcoming>
      <Showcase title="Upcoming" games={upcomingGames} />
      <Showcase highlight={upcomingHighlight} games={upcomingMoreGames} />
    </S.SectionUpcoming>

    <Showcase title="Free Games" highlight={freeHighlight} games={freeGames} />

    <S.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </S.SectionFooter>
  </section>
)
