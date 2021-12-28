import { Menu2 as MenuIcon } from '@styled-icons/remix-line/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'

import { Logo } from 'components/Logo'

import * as S from './styles'

export const Menu = () => (
  <S.Wrapper>
    <S.IconWrapper>
      <MenuIcon aria-label="Open menu" />
    </S.IconWrapper>
    <S.LogoWrapper>
      <Logo hideOnMobile />
    </S.LogoWrapper>
    <S.MenuGroup>
      <S.IconWrapper>
        <SearchIcon aria-label="Search games" />
      </S.IconWrapper>
      <S.IconWrapper>
        <ShoppingCartIcon aria-label="Open shopping cart" />
      </S.IconWrapper>
    </S.MenuGroup>
  </S.Wrapper>
)
