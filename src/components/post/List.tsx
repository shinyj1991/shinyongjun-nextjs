'use client';

import Link from 'next/link';
import styled from 'styled-components';
import { getFormatDatetime } from '@/utils/datetime';
import { device } from '@/styles/mixin';
import CategoryItem from '../category/Item';
import { config } from '@/styles/config';
import { IPost } from '@/types/post';

type Props = {
  postList: IPost[];
};

function PostList({ postList }: Props) {
  return (
    <StyledPostList>
      {postList.map((post) => {
        return (
          <div key={post.slug} className="post-item">
            {post.series && <div className="series"># {post.series}</div>}
            <Link href={`/post/${post.slug}`} className="title">
              {post.title}
            </Link>
            <div className="date">
              {getFormatDatetime(post.date, 'YYYY-MM-DD')}
            </div>
            <div className="categories">
              {post.categories.map((category) => {
                return (
                  <CategoryItem
                    key={category}
                    category={category}
                    board="post"
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </StyledPostList>
  );
}

const StyledPostList = styled.div`
  display: grid;
  .post-item {
    padding: 30px 0;
    border-bottom: 1px solid #dddddd;
    &:first-child {
      border-top: 1px solid #dddddd;
    }
    .title {
      font-weight: 500;
      font-size: 20px;
      &:hover {
        text-decoration: underline;
        color: ${config.hoverText};
      }
    }
    .date {
      font-size: 14px;
      margin-top: 6px;
      color: ${config.secondaryText};
    }
    .categories {
      display: flex;
      column-gap: 12px;
      margin-top: 6px;
    }
  }
  @media ${device.mobile} {
    .post-item {
      padding: 24px 0;
      .series {
        font-size: 14px;
      }
      .title {
        font-size: 16px;
      }
      .date {
        margin-top: 4px;
        font-size: 12px;
      }
      .categories {
        margin-top: 4px;
        column-gap: 8px;
      }
    }
  }
`;

export default PostList;
