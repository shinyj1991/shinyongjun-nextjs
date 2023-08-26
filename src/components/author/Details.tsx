'use client';

import styled from 'styled-components';
import { SiTypescript } from '@react-icons/all-files/si/SiTypescript';
import { SiSass } from '@react-icons/all-files/si/SiSass';
import { SiReact } from '@react-icons/all-files/si/SiReact';
import { SiNextDotJs } from '@react-icons/all-files/si/SiNextDotJs';
import { SiNodeDotJs } from '@react-icons/all-files/si/SiNodeDotJs';
import { SiGit } from '@react-icons/all-files/si/SiGit';
import { SiJquery } from '@react-icons/all-files/si/SiJquery';
import { SiNotion } from '@react-icons/all-files/si/SiNotion';
import { SiJira } from '@react-icons/all-files/si/SiJira';
import { SiConfluence } from '@react-icons/all-files/si/SiConfluence';
import { SiAzuredevops } from '@react-icons/all-files/si/SiAzuredevops';
import { SiRedux } from '@react-icons/all-files/si/SiRedux';
import { ImNpm } from '@react-icons/all-files/im/ImNpm';
import { device } from '@/styles/mixin';
import PageLink from '../page/Link';
import { roboto } from '@/styles/fonts';
import { config } from '@/styles/config';

function AuthorDetails() {
  return (
    <StyledAuthorDetails>
      <section>
        <h3 className="section-title">Stacks</h3>
        <div className="item-list">
          <div className="item">
            <img src="/icons/html.svg" alt="" />
            HTML
          </div>
          <div className="item">
            <img src="/icons/css.svg" alt="" />
            CSS
          </div>
          <div className="item">
            <SiSass style={{ color: '#C66394' }} />
            SASS
          </div>
          <div className="item">
            <img src="/icons/javascript.svg" alt="" />
            Javascript
          </div>
          <div className="item">
            <SiTypescript style={{ color: '#2F74C0' }} />
            Typescript
          </div>
          <div className="item">
            <SiNodeDotJs style={{ color: '#87BF00' }} />
            Node.js
          </div>
          <div className="item">
            <SiGit style={{ color: '#E84D31' }} />
            Git
          </div>
          <div className="item">
            <SiReact style={{ color: '#5ED3F3' }} />
            React
          </div>
          <div className="item">
            <SiRedux style={{ color: '#593D88' }} />
            Redux
          </div>
          <div className="item">
            <SiNextDotJs style={{ color: '#000000' }} />
            Next.js
          </div>
          <div className="item">
            <img src="/icons/vue.svg" alt="" />
            Vue.js
          </div>
          <div className="item">
            <img src="/icons/nuxt.svg" alt="" />
            Nuxt.js
          </div>
          <div className="item">
            <SiJquery style={{ color: '#1066A9' }} />
            JQuery
          </div>
        </div>
      </section>
      <section>
        <h3 className="section-title">Tools</h3>
        <div className="item-list">
          <div className="item">
            <img src="/icons/vscode.svg" alt="" />
            VSCode
          </div>
          <div className="item">
            <img src="/icons/figma.svg" alt="" />
            Figma
          </div>
          <div className="item">
            <img src="/icons/photoshop.svg" alt="" />
            Photoshop
          </div>
          <div className="item">
            <img src="/icons/zeplin.svg" alt="" />
            Zeplin
          </div>
          <div className="item">
            <SiNotion style={{ color: '#000000' }} />
            Notion
          </div>
          <div className="item">
            <SiJira style={{ color: '#2580F7' }} />
            Jira
          </div>
          <div className="item">
            <SiConfluence style={{ color: '#2684FF' }} />
            Confluence
          </div>
          <div className="item">
            <SiAzuredevops style={{ color: '#0078D4' }} />
            Azure DevOps
          </div>
        </div>
      </section>
      <section>
        <h3 className="section-title">Packages</h3>
        <div className="package-list">
          <div className="package">
            <a
              href="https://www.npmjs.com/package/@shinyongjun/react-fullpage"
              target="_blank"
            >
              <ImNpm style={{ color: '#CB0303' }} />
              @shinyongjun/react-fullpage (2023)
            </a>
          </div>
        </div>
      </section>
      <section>
        <h3 className="section-title">Plugins</h3>
        <div className="package-list">
          <div className="package">
            <a href="https://shinyj1991.github.io/eclipse" target="_blank">
              <SiJquery style={{ color: '#1066A9' }} />
              Carousel - jQuery Plugin (2017)
            </a>
          </div>
          <div className="package">
            <a href="https://shinyj1991.github.io/kronos" target="_blank">
              <SiJquery style={{ color: '#1066A9' }} />
              Datepicker - jQuery Plugin (2016)
            </a>
          </div>
        </div>
      </section>
      <section>
        <h3 className="section-title">Contact</h3>
        <div className="item-list">
          <div className="item">
            <img src="/icons/gmail.svg" alt="" />
            <a href="mailto:shinyj1991@gmail.com">shinyj1991@gmail.com</a>
          </div>
        </div>
      </section>
      <section>
        <h3 className="section-title">History</h3>
        <PageLink href="/history">Go to History</PageLink>
      </section>
    </StyledAuthorDetails>
  );
}

const StyledAuthorDetails = styled.div`
  > section {
    margin-top: 60px;
    font-family: ${roboto.style.fontFamily};
  }
  .section-title {
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 12px;
  }
  .item-list {
    display: flex;
    flex-wrap: wrap;
    column-gap: 24px;
    row-gap: 18px;
    max-width: 600px;
    .item {
      display: flex;
      align-items: center;
      column-gap: 6px;
      font-size: 14px;
      img,
      svg {
        min-width: 18px;
        height: 18px;
      }
      a {
        &:hover {
          color: ${config.hoverText};
          text-decoration: underline;
        }
      }
    }
  }
  .package-list {
    display: grid;
    row-gap: 12px;
    max-width: 600px;
    .package {
      a {
        display: inline-flex;
        align-items: center;
        column-gap: 6px;
        font-size: 14px;
        img,
        svg {
          min-width: 18px;
          height: 18px;
        }
        &:hover {
          color: ${config.hoverText};
          text-decoration: underline;
        }
      }
    }
  }
  .page-link {
    margin: 0;
  }
  @media ${device.mobile} {
    .section-title {
      font-size: 18px;
    }
  }
`;

export default AuthorDetails;
