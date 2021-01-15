import React from 'react';

import Botao from '../components/botao';

function InitialLoad() {
    return (
        <div>
            <Botao text='Pressione este botão para popular a tabela "album".' table='album'></Botao>
        </div>
    )
}

export default InitialLoad;