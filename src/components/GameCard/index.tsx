import * as React from 'react'
import {
  AddShoppingCart as AddShoppingCartIcon,
  Favorite as FavoriteIcon,
  FavoriteBorder as FavoriteBorderIcon
} from '@styled-icons/material-outlined'

import { Button } from 'components/Button'
import { Ribbon, RibbonColors, RibbonSizes } from 'components/Ribbon'

import * as S from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  onFavorite?: () => void
}

export const GameCard = ({
  developer,
  img,
  price,
  title,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor,
  ribbonSize,
  onFavorite
}: GameCardProps) => (
  <S.Wrapper>
    {ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <S.ImageBox>
      <img src={img} alt={title} />
    </S.ImageBox>

    <S.Content>
      <S.Info>
        <S.Title>{title}</S.Title>
        <S.Developer>{developer}</S.Developer>
      </S.Info>

      <S.FavButton role="button" onClick={onFavorite}>
        {favorite ? (
          <FavoriteIcon aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorderIcon aria-label="Add to wishlist" />
        )}
      </S.FavButton>

      <S.BuyBox>
        {promotionalPrice && <S.Price isPromotional>{price}</S.Price>}

        <S.Price>{promotionalPrice || price}</S.Price>

        <Button icon={<AddShoppingCartIcon />} size="small" />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)
