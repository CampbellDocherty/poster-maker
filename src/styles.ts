import styled from 'styled-components/macro';
import { CANVAS_HEIGHT, CANVAS_WIDTH } from './constants';

export const MainContainer = styled.div`
  display: flex;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const PosterMakerContainer = styled.div`
  max-width: 1000px;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CanvasContainer = styled.div`
  width: ${CANVAS_WIDTH};
  height: ${CANVAS_HEIGHT};
  box-shadow: inset -1px -1px #0a0a0a, inset 1px 1px grey,
    inset -2px -2px #dfdfdf, inset 2px 2px #0a0a0a;
`;
