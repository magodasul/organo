import { useState } from "react";
import Banner from "./componentes/Banner";
import Formulario from "./componentes/Formulario";
import Rodape from "./componentes/Rodape";
import Time from "./componentes/Time";
import { v4 as uuidv4 } from 'uuid';


function App() {

  const [times, setTimes] = useState([
    {
      id: uuidv4(),
      nome: 'Futebol',
      cor: '#57C278'
    },
    {
      id: uuidv4(),
      nome: 'Jogos De Aposta',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Magos Da Programação',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Musicos lendarios',
      cor: '#E06B69'
    },
    
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Tsubasa',
      membro: 'atacante',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIK5kh2ywVg-yc6djRG0gbT_Pdpo4SIJafRj286K55BCPEfy3P-qhE_LXRrAKPV1VjGCw&amp;usqp=CAU',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'o crack',
      membro: 'Volante ',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQObJLzkB060E7G1MNisy2gooG7yQYUmov35g&usqp=CAU',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'GUILHERME',
      membro: 'Meio Campo',
      imagem: '	https://e0.pxfuel.com/wallpapers/54/102/desktop-wallpaper-blue-lock-manga-anime-foot.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      nome: 'PAULO ',
      membro: 'defensor',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8OPQErQgxP81g4nw6vk9QOolCDhS4Mw6Gqg&usqp=CAU',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'JULIANO',
      membro: 'O ultimo sobrevivente',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYiW-OClTl0oYuwdbemlD2EwAv0QNsw6f2w&usqp=CAU',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      nome: 'DANIELA',
      membro: 'rainha da aposta',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDqLoL5Ax3o7XV7_aIo4BodqcUy2ZZ31Yz0g&usqp=CAU',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'AKITA',
      membro: 'AS das apostas',
      imagem: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKgZnz_WZYiu0dYZjN1l-ViTMPKgl-LdEEQ&usqp=CAU',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'PAULO ',
      membro: 'Jogador do alem',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXseTmjpcC5BZ78fyIO6MWA_O1B9ntJEI3fQ&usqp=CAU',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'BABBAGE',
      membro: 'Desenvolvedora raiz',
      imagem: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Charles_Babbage_-_1860.jpg/200px-Charles_Babbage_-_1860.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'VON NEUMANN',
      membro: 'Engenheiro ',
      imagem: 'https://www.thenation.com/wp-content/uploads/2022/11/Qian-Nirenberg-John_von_Neumann-illo.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ALAN TURING',
      membro: 'Desenvolvedor ',
      imagem: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTIJRW86y4SlB7-VZkPu6A-oyYfYDdA5OCkbfMe6y62pMuzOlJGRwD2AIG7cbAEsIbeQk&usqp=CAU',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'ADA LOVELACE',
      membro: 'A PROGRAMADORA PICA',
      imagem: 'https://s2.glbimg.com/paF5KTEVGzMU-ZcZa2mjYicNDjM=/e.glbimg.com/og/ed/f/original/2015/03/09/ada.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      nome: 'MANO BROWM',
      membro: 'Gueto Original',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStNvqxgiO9G4vt8iyT2uv3NC-5DxiurWx_dA&usqp=CAUg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'NINA SIMONE',
      membro: 'A Voz Do Blues',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCiLOcZHOeZKLQ0j7mDtYbC1t3U9Smsvsk5guV7qWKZM9lNGMfOsFNSGFbz6haczmZMQs&usqp=CAU',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'CARTOLA',
      membro: 'O Mago',
      imagem: '	https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAllbRQlTRF_a9nZ7XB4-7K_8NskZZn2ledQ&usqp=CAU',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      nome: 'TUPAC SHAKUR',
      membro: 'gangstar',
      imagem: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgPS7IJeYuihwlx1hK2yxJBk5AkoNcXGjtCw&usqp=CAU',
      time: times[3].nome
    },
    
  ]

  const [colaboradores, setColaboradores] = useState(inicial)

  function deletarColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  function mudarCor(cor, id) {
    setTimes(times.map(time => {
      if(time.id === id) {
        time.cor = cor;
      }
      return time;
    }));
  }

  function cadastrarTime({ nome, cor }) {
    setTimes([...times, { nome, cor, id: uuidv4() }])
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if(colaborador.id === id) colaborador.favorito = !colaborador.favorito;
      return colaborador;
    }))
  }


  return (
    <div>
      <Banner />
      <Formulario aoCriarTime={cadastrarTime} times={times.map(time => time.nome)} aoCadastrar={colaborador => setColaboradores([...colaboradores, colaborador])} />
      <section className="times">
        <h1>Minha organização</h1>
        {times.map((time, indice) => <Time mudarCor={mudarCor} key={indice} time={time} colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)} aoDeletar={deletarColaborador} aoFavoritar={resolverFavorito} />)}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
