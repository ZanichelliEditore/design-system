import styled from 'styled-stencils';

export const Wrap = styled.footer`
  display: grid;
  grid-template-rows: 450px 112px;
  width: 100vw;
  max-width: 976px;
  height: 562px;
  background-color: rgb(51, 51, 51);

  font-family: 'Proxima Nova Rg';

  & > section {
    display: grid;
    height: 100%;
    padding: 0 36px;

    &.top {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: 1fr;
      height: 100%;
    }

    &.bottom {
      grid-row: 2;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;
      border-top: 2px solid #666666;
    }
  }

  & > section.top > .column > nav {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 32px 0 0 0;
    grid-row: 1;

    & > h2 {
      width: 138px;
      font-size: 16px;
      line-height: 1;
      font-weight: 600;
      color: #f7f7f7;
      border-bottom: 2px solid #666666;

      padding: 0 0 8px;
      margin: 0;
    }

    & > ul {
      display: flex;
      flex-direction: column;
      padding: 0;
      margin: 0;
      list-style: none;

      & > li > a {
        color: #f7f7f7;
        letter-spacing: 0.2px;
        padding: 10px 0;
        text-decoration: underline;
        font-weight: 300;
        font-size: 14px;
        line-height: 2;
      }
    }
  }

  & > section.bottom {
    & > img {
      width: 236px;
    }

    & > p {
      text-align: right;
      margin: 0;
      color: #ffffff;
      font-size: 12px;
    }
  }
`;
