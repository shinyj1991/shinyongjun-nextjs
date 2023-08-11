'use client';

import Link from 'next/link';
import styled from 'styled-components';

type Props = {
  category: string;
};

function CategoryItem({ category }: Props) {
  return (
    <StyledCategoryItem href={`/category/${category}`}>
      {category}
    </StyledCategoryItem>
  );
}

const StyledCategoryItem = styled(Link)`
  padding: 3px 12px;
  background-color: #ddd;
  color: #333;
  font-size: 14px;
  &:hover {
    background-color: #333;
    color: #ddd;
  }
`;

export default CategoryItem;