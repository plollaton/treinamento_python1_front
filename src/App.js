import logo from './logo.svg';
import './App.css';
import Button from '@material-ui/core/Button';

import Botao from './botao';


function App() {
  return (
    <div>
      <Botao text='Pressione este botão para popular a tabela "album".' table='album'></Botao>
      <Botao text='Pressione este botão para popular a tabela "photos".' table='photos'></Botao>
    </div>
  );
}

export default App;
