import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import React, { FC, useEffect, useMemo, useRef, useState } from 'react';
import {
  flexJustifyAlign,
  minWidth,
  orangeColor,
  tab,
  whiteColor,
} from './GlobalStyle';
import useDebounce from 'hooks/useDebounce';
import pageUp from 'images/header/page-up.svg';
import hamburger from 'images/header/hamburger.svg';

const HeaderWrapper = styled.header<{ isTop: boolean }>`
  background-color: #77675a;
  position: sticky;
  top: 0;
  ${minWidth}
  ${whiteColor}
  ${({ isTop }) =>
    isTop ||
    css`
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      color: #453a33;
      background-color: #fff;
    `}

    ${tab} {
    color: #453a33;
    background-color: #fff;
  }
  z-index: 10;
`;

const HeaderContentsWrapper = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 32px;
  ${flexJustifyAlign('space-between', 'center')}
  ${tab} {
    flex-wrap: wrap;
  }
`;

const HeaderHover = (isColor: boolean) => css`
  cursor: pointer;
  transition: opacity, color 0.25s ease-in;
  opacity: 0.8;
  :hover {
    opacity: 1;
    ${isColor || orangeColor()}
  }
`;

const HeaderTitle = styled.h2<{ isTop: boolean }>`
  font-weight: bold;
  ${({ isTop }) => HeaderHover(isTop)}
`;
const HeaderMenus = styled.ul`
  display: flex;
  ${tab} {
    display: none;
  }
`;
const HamburgerMenus = styled.ul<{ isMenuopen: boolean }>`
  display: none;
  padding-left: 32px;
  ${tab} {
    height: 0;
    overflow: hidden;
    display: flex;
    transition: height 0.25s ease-in;
    flex-direction: column;
    ${({ isMenuopen }) =>
      isMenuopen &&
      css`
        height: 208px;
      `}
  }
`;

const MenuItem = styled.li<{ isTop: boolean }>`
  padding: 0 1rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 2rem;
  ${({ isTop }) => HeaderHover(isTop)}
  ${tab} {
    display: table;
    padding: 0.75rem 0;
    font-weight: 700;
    font-size: 1rem;
    color: #6c757d;
    line-height: 1.25rem;
    cursor: pointer;
    &:nth-of-type(1) {
      margin-top: 1rem;
    }
    &:last-child {
      margin-bottom: 1rem;
    }
  }
`;
const floating = keyframes`
    0% {
        transform: translateY(0);    
    }
    50% {
        transform: translateY(-15px);
    }
    100% {
        transform: translateY(0);
    }
`;

const HanbugerWrapper = styled.div`
  display: none;
  ${tab} {
    display: inline-block;
    box-sizing: border-box;
    width: 3.5rem;
    height: 3rem;
    padding: 0.5rem 0;
    margin-top: -0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 0.25rem;
    text-align: center;
    cursor: pointer;
  }
`;

const PageTopButtonWrapper = styled.div<{ isTop: boolean }>`
  position: fixed;
  right: 1.5rem;
  bottom: 1.5rem;
  width: 3rem;
  height: 3rem;
  border-radius: 0.5rem;
  background-color: #fff;
  cursor: pointer;
  opacity: 0.5;
  bottom: 5%;
  animation: ${floating} 3s ease infinite;
  transform: translateX(-100px);
  transition: right 0.5s ease;
  right: 5%;

  ${({ isTop }) =>
    isTop &&
    css`
      right: -100px;
    `}
`;

const Link = styled.a`
  display: block;
`;

const PageTopButton = styled.img`
  width: 100%;
`;

type MenuType = {
  id: number;
  isTop: boolean;
  text: string;
  path: Types;
};

type HeaderProps = {
  handleTopFocuse: (type: Types) => () => void;
};

const Header: FC<HeaderProps> = ({ handleTopFocuse }) => {
  const [isTop, setIsTop] = useState(true);
  const el = useRef<HTMLUListElement>(null);
  const { debounce } = useDebounce();
  const [isMenuopen, setIsMenuopen] = useState(false);

  const menus: MenuType[] = [
    {
      id: 1,
      isTop,
      text: 'About me',
      path: 'about',
    },
    {
      id: 2,
      isTop,
      text: 'Skills',
      path: 'skills',
    },
    {
      id: 3,
      isTop,
      text: 'Archiving',
      path: 'archiving',
    },
    {
      id: 4,
      isTop,
      text: 'Projects',
      path: 'projects',
    },
  ];

  const menusRender = useMemo(
    () =>
      menus.map(({ isTop, text, path, id }) => (
        <MenuItem key={id} isTop={isTop} onClick={handleTopFocuse(path)}>
          <Link>{text}</Link>
        </MenuItem>
      )),
    [],
  );

  const handleCloseHamburger = (e: Event) => {
    if (el.current === null) return;
    const target = e.target as Node;
    if (isMenuopen && !el.current.contains(target)) setIsMenuopen(false);
  };

  const handleOnClick = () => setIsMenuopen(prev => !prev);
  const isCurrentScrollTop = () => (window.scrollY > 0 ? false : true);
  const scrollMove = (idx: number, MOVE_Y_PX = 50) => {
    if (idx < 0) return;
    window.scrollTo({ behavior: 'smooth', top: MOVE_Y_PX * idx });
    scrollMove(idx - 1);
  };

  const handleScrollTop = () => {
    const idx = Math.floor(window.scrollY / 50);
    scrollMove(idx);
  };

  useEffect(() => {
    const scrollEvent = () => {
      if (debounce.current) clearTimeout(debounce.current);
      debounce.current = setTimeout(() => setIsTop(isCurrentScrollTop), 100);
    };

    window.addEventListener('scroll', scrollEvent);
    return () => window.removeEventListener('scroll', scrollEvent);
  }, []);

  useEffect(() => {
    setIsTop(isCurrentScrollTop);
  }, []);

  useEffect(() => {
    window.addEventListener('click', handleCloseHamburger);
    return () => {
      window.removeEventListener('click', handleCloseHamburger);
    };
  }, [handleCloseHamburger]);

  return (
    <HeaderWrapper isTop={isTop}>
      <HeaderContentsWrapper>
        <HeaderTitle isTop={isTop} onClick={handleScrollTop}>
          LMW` Portfolio
        </HeaderTitle>
        <HeaderMenus>{menusRender}</HeaderMenus>
        <HanbugerWrapper onClick={handleOnClick}>
          <img src={hamburger} alt="hamburger" />
        </HanbugerWrapper>
      </HeaderContentsWrapper>
      <HamburgerMenus isMenuopen={isMenuopen} ref={el}>
        {menusRender}
      </HamburgerMenus>
      <PageTopButtonWrapper isTop={isTop}>
        <PageTopButton src={pageUp} alt="pageUp" onClick={handleScrollTop} />
      </PageTopButtonWrapper>
    </HeaderWrapper>
  );
};

export default Header;
