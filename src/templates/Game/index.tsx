import { Base } from 'templates/Base'

import { GameDetails, GameDetailsProps } from 'components/GameDetails'
import { GameInfo, GameInfoProps } from 'components/GameInfo'
import { Gallery, GalleryImageProps } from 'components/Gallery'
import { TextContent } from 'components/TextContent'

import * as S from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
}

export const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details
}: GameTemplateProps) => (
  <Base>
    <S.Cover src={cover} role="image" aria-label="cover" />

    <S.Main>
      <S.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </S.SectionGameInfo>

      {gallery && (
        <S.SectionGallery>
          <Gallery items={gallery} />
        </S.SectionGallery>
      )}

      <S.SectionDescription>
        <TextContent title="Description" content={description} />
      </S.SectionDescription>

      <S.SectionGameDetails>
        <GameDetails {...details} />
      </S.SectionGameDetails>
    </S.Main>
  </Base>
)
