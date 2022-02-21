import React, { FC } from 'react';
import { Global, css, SerializedStyles } from '@emotion/react';

const defaultStyle = css`
  @import url('https://fonts.googleapis.com/css2?family=Black+Han+Sans&family=Roboto:wght@100;300;400;500;700;900&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  body {
    overflow-x: hidden;
  }

  html,
  body,
  #___gatsby {
    height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }

  ol,
  ul {
    list-style: none;
    margin: 0px;
    padding: 0px;
  }
`;

export const brandColor = () => css`
  color: #453a33;
`;

export const whiteColor = () => css`
  color: #fff;
`;
export const orangeColor = () => css`
  color: #f4623a;
`;

export const mobile = () => `@media screen and (max-width: 500px)`;
export const tab = () => `@media screen and (max-width: 768px)`;
export const maxTab = () => `@media screen and (max-width: 992px)`;
export const pc = () => `@media screen and (max-width: 1200px)`;

export const hoverPositionDown = () => css`
  transition: transform 0.25s ease-in;
  :hover {
    transform: translateY(10px);
  }
`;

export const minWidth = () => css`
  min-width: 375px;
`;

export const hoverTextUnderline = () => css`
  :hover {
    color: #f4623a;
    text-decoration: underline;
  }
`;

type FlexOptions = 'center' | 'space-between';
type FlexJustifyAlign = (
  justify: FlexOptions,
  align: FlexOptions,
) => SerializedStyles;

export const flexJustifyAlign: FlexJustifyAlign = (justify, align) => css`
  display: flex;
  justify-content: ${justify};
  align-items: ${align};
`;

const GlobalStyle: FC = () => <Global styles={defaultStyle} />;

export default GlobalStyle;
