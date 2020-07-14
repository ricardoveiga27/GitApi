import React from 'react';
import { useRouteMatch, Link } from 'react-router-dom';
import { FiChevronsLeft, FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Header, RepositoryInfo, Issues } from './styles';

interface RepositoryParams {
  repository: string;
}

const Repository: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();

  return (
    <>
      <Header>
        <img src={logoImg} alt="github explorer" />
        <Link to="/dashboard">
          voltar
          <FiChevronsLeft size={16} />
        </Link>
      </Header>
      <RepositoryInfo>
        <header>
          <img
            src="https://avatars0.githubusercontent.com/u/36867823?s=400&u=247143eb1bccd7a98f86439d4b25da2917062153&v=4"
            alt="teste"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>descrição do repositório</p>
          </div>
        </header>
        <ul>
          <li>
            <strong>1808</strong>
            <span>stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>stars</span>
          </li>
          <li>
            <strong>1808</strong>
            <span>stars</span>
          </li>
        </ul>
      </RepositoryInfo>
      <Issues>
        <Link to="sfsdfsd">
          <div>
            <strong>lksdjflkdsjflksd</strong>
            <p>klhslkdj;lkjv;lkdjjlkxjc;ljkxc</p>
          </div>
          <FiChevronRight size={20} />
        </Link>
      </Issues>
    </>
  );
};

export default Repository;
