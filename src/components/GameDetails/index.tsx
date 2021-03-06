import * as React from 'react'
import { Apple, Linux, Windows } from '@styled-icons/fa-brands'

import { Heading } from 'components/Heading'
import { MediaMatch } from 'components/MediaMatch'

import * as S from './styles'

type Platform = 'windows' | 'linux' | 'mac'

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  developer: string
  releaseDate: string
  publisher: string
  rating: Rating
  platforms: Platform[]
  genres: string[]
}

const platformIcons: Record<Platform, React.ReactNode> = {
  linux: <Linux title="Linux" size={18} />,
  mac: <Apple title="Mac" size={18} />,
  windows: <Windows title="Windows" size={18} />
}

export const GameDetails = ({
  developer,
  releaseDate,
  publisher,
  rating,
  platforms,
  genres
}: GameDetailsProps) => (
  <S.Wrapper>
    <MediaMatch greaterThan="small">
      <Heading lineLeft lineColor="secondary">
        Game Details
      </Heading>
    </MediaMatch>

    <S.Content>
      <S.Block>
        <S.Label>Developer</S.Label>
        <S.Description>{developer}</S.Description>
      </S.Block>

      <S.Block>
        <S.Label>Release Date</S.Label>
        <S.Description>
          {new Intl.DateTimeFormat('en-US', {
            day: 'numeric',
            month: 'short',
            year: 'numeric'
          }).format(new Date(releaseDate))}
        </S.Description>
      </S.Block>

      <S.Block>
        <S.Label>Platforms</S.Label>
        <S.IconsWrapper>
          {platforms.map(platform => (
            <S.Icon key={platform}>{platformIcons[platform]}</S.Icon>
          ))}
        </S.IconsWrapper>
      </S.Block>

      <S.Block>
        <S.Label>Publisher</S.Label>
        <S.Description>{publisher}</S.Description>
      </S.Block>

      <S.Block>
        <S.Label>Rating</S.Label>
        <S.Description>
          {rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}
        </S.Description>
      </S.Block>

      <S.Block>
        <S.Label>Genres</S.Label>
        <S.Description>{genres.join(' / ')}</S.Description>
      </S.Block>
    </S.Content>
  </S.Wrapper>
)
