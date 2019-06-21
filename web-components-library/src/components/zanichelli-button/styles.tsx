import styled from 'styled-stencils';

import * as colors from '../../constants/colors.json';
import * as spacing from '../../constants/spacing.json';
import * as border from '../../constants/borderAndRadius.json';

interface WrapProps {
  isprimary: boolean;
}

export const Wrap = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  margin: ${spacing.base.x1};
  padding: ${spacing.half.x3} ${spacing.half.x5};

  font-family: 'Proxima Nova';
  font-weight: 600;
  text-transform: uppercase;
  font-size: 14px;
  border-radius: ${border.radius.base};
  border: ${border.border.base} solid ${colors.myZanichelli.blue};

  user-select: none;
  cursor: pointer;

  ${(props: WrapProps) =>
    props.isprimary
      ? `
    background: ${colors.myZanichelli.blue};
    color: ${colors.backgroud.artboardWhite};
  `
      : `
    background: ${colors.backgroud.artboardWhite};
    color: ${colors.myZanichelli.blue};
  `}

  &:active,
  &:focus {
    outline: none;
  }

  &:hover {
    filter: brightness(0.8);
  }

  & > icon {
    width: 16px;
    height: 16px;
    background: tomato;
    margin: 0 ${spacing.base.x2} 0 0;
  }
`;
