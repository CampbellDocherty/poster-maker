import { FC } from 'react';
import Canvas from './Canvas';
import { MainContainer, PosterMakerContainer } from './styles';

const App: FC = () => {
  return (
    <MainContainer>
      <PosterMakerContainer>
        <h1>Poster maker!</h1>
        <Canvas />
      </PosterMakerContainer>
    </MainContainer>
  );
};

export default App;
