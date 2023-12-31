import { createGlobalStyle } from 'styled-components';
import { reset } from '@/styles/mixin';
import { roboto, pretendard } from './fonts';

export const GlobalStyle = createGlobalStyle`
  *,
  :before,
  :after {
    ${reset};
  }
  html {
    // scroll-behavior: smooth;
    scroll-behavior: auto;
  }
  body {
    font-family: ${pretendard.style.fontFamily}, ${roboto.style.fontFamily};
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: #000;
    background: #fff;
    -webkit-text-size-adjust: 100%;
    min-width: 320px;
    &.is-mobile {
      font-size: 12px;
    }
    &.is-scroll-lock {
      overflow: hidden;
    }
  }
  ol,
  ul {
    list-style: none;
  }
  table {
    width: 100%;
    border-spacing: 0;
    table-layout: fixed;
  }
  th,
  td {
    text-align: center;
    vertical-align: middle;
  }
  a {
    text-decoration: none;
  }
  button,
  input[type='file'],
  input[type='image'],
  input[type='reset'],
  input[type='button'],
  input[type='submit'] {
    border: none;
    border-radius: 0;
    background: none;
    appearance: none;
    cursor: pointer;
  }
  input:not([type]),
  input[type='date'],
  input[type='datetime-local'],
  input[type='email'],
  input[type='month'],
  input[type='number'],
  input[type='password'],
  input[type='search'],
  input[type='tel'],
  input[type='text'],
  input[type='time'],
  input[type='url'],
  input[type='week'],
  textarea,
  select {
    display: inline-block;
    width: 100%;
    height: 40px;
    font-size: 16px;
    line-height: 38px;
    color: #000;
    padding: 0 10px;
    border: 1px solid #ccc;
    background: #fff;
    box-shadow: none;

    &:disabled {
      background: #f7f7f7;
    }
    &::placeholder {
      color: #999;
    }
  }
  textarea {
    height: 300px;
    padding: 10px;
    line-height: 1.5;
  }
  input[type='number'] {
    &::-webkit-outer-spin-button,
    ::-webkit-inner-spin-button {
      appearance: none;
    }
  }
`;
