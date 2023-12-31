'use client';

import styled from 'styled-components';
import { useState } from 'react';
import { device } from '@/styles/mixin';
import { config } from '@/styles/config';

type Props = {
  setSearchKeyword: (value: string) => void;
};

function CommonSearch({ setSearchKeyword }: Props) {
  const [value, setValue] = useState('');

  const submitKeyword = () => {
    setSearchKeyword(value.trim());
    window.scrollTo({
      top: 0,
    });
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleOnKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      submitKeyword();
    }
  };

  return (
    <StyledCommonSearch>
      <input
        type="search"
        value={value}
        onChange={handleOnChange}
        onKeyDown={handleOnKeyDown}
      />
      <button type="button" onClick={submitKeyword}>
        Search
      </button>
    </StyledCommonSearch>
  );
}

const StyledCommonSearch = styled.div`
  background-color: ${config.primaryBg};
  border: 1px solid ${config.primaryLine};
  padding: 12px;
  display: flex;
  column-gap: 12px;
  input {
    border: 1px solid ${config.primaryLine};
  }
  button {
    background-color: #fff;
    padding-inline: 24px;
    border: 1px solid ${config.primaryLine};
    &:hover {
      background-color: ${config.secondaryBg};
    }
  }
  @media ${device.mobile} {
    padding: 9px;
    column-gap: 9px;
    input {
      height: 30px;
    }
    button {
      font-size: 14px;
    }
  }
`;

export default CommonSearch;
