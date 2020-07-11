import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => (
  <>
    <img src={logoImg} alt="github explorer" />
    <Title>Explore repositórios no Github</Title>
    <Form>
      <input placeholder="Digite o nome do repositório" />
      <button type="submit">Pesquisar</button>
    </Form>
    <Repositories>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/48068247?s=460&u=dfb13f9207048643d2dc4d8e2a02ced8906378ff&v=4"
          alt="Ricardo Veiga"
        />
        <div>
          <strong>Ricardoveiga27</strong>
          <p>kldkfhsdjkhfsdjhfsdfjh</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/48068247?s=460&u=dfb13f9207048643d2dc4d8e2a02ced8906378ff&v=4"
          alt="Ricardo Veiga"
        />
        <div>
          <strong>Ricardoveiga27</strong>
          <p>kldkfhsdjkhfsdjhfsdfjh</p>
        </div>
        <FiChevronRight size={20} />
      </a>
      <a href="teste">
        <img
          src="https://avatars3.githubusercontent.com/u/48068247?s=460&u=dfb13f9207048643d2dc4d8e2a02ced8906378ff&v=4"
          alt="Ricardo Veiga"
        />
        <div>
          <strong>Ricardoveiga27</strong>
          <p>kldkfhsdjkhfsdjhfsdfjh</p>
        </div>
        <FiChevronRight size={20} />
      </a>
    </Repositories>
  </>
);

export default Dashboard;
