import React from 'react';
import CharacterCounter from './CharacterCounter'
import {
  RecoilRoot,
  atom,
  seletor,
  useRecoilState,
  useRecoilValue
} from 'recoil'


function App() {
  return (
    <RecoilRoot>
      <CharacterCounter/>
    </RecoilRoot>
  );
}

export default App;
