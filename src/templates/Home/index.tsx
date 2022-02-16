import type { BannerProps } from 'components/Banner'
import type { GameCardProps } from 'components/GameCard'

import { Container } from 'components/Container'
import { Footer } from 'components/Footer'
import { Heading } from 'components/Heading'
import { Highlight, HighlightProps } from 'components/Highlight'
import { Menu } from 'components/Menu'
import { BannerSlider } from 'components/BannerSlider'
import { GameCardSlider } from 'components/GameCardSlider'

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

      <BannerSlider items={banners} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary" color="black">
        News
      </Heading>

      <GameCardSlider items={newGames} />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Most Popular
      </Heading>

      <Highlight {...mostPopularHighlight} />
      <GameCardSlider items={mostPopularGames} color="white" />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Upcoming
      </Heading>

      <GameCardSlider items={upcomingGames} color="white" />
      <Highlight {...upcomingHighlight} />
      <GameCardSlider items={upcomingMoreGames} color="white" />
    </Container>

    <Container>
      <Heading lineLeft lineColor="secondary">
        Free Games
      </Heading>

      <Highlight {...freeHighlight} />
      <GameCardSlider items={freeGames} color="white" />
    </Container>

    <Container>
      <Footer />
    </Container>
  </section>
)
