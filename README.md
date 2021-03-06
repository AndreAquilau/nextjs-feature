## Feature Next.js

O NextJS possui quatro estrategias para pode gerar uma página.
* (Server)
  server-side renders at runtime (uses getInitialProps or getServerSideProps)
* (Static)
  automatically rendered as static HTML (uses no initial props)
* (SSG)
  automatically generated as static HTML + JSON (uses getStaticProps)
* (ISR)
  incremental static regeneration (uses revalidate in getStaticProps)

> index.tsx
```tsx
import { GetStaticProps } from 'next';
import { Head } from 'next/document';
import React from 'react';

import UserGitInterfaceProps from '../interface/UserGit';

const Home: React.FC<UserGitInterfaceProps> = (
  props: UserGitInterfaceProps,
): JSX.Element => {
  const { user } = props;

  return (
    <div>
      <h1>{user.login}</h1>
      <h3>{user.name}</h3>
      <h3>{user.url}</h3>
      <h3>{user.bio}</h3>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch('https://api.github.com/users/AndreAquilau');
  const data = await response.json();

  return {
    props: {
      user: data,
    },
    revalidate: 10,
  };
};

export default Home;
```
> pages/members/[login].tsx
```tsx
import React from 'react';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import UserGitInterfaceProps from '../../interface/UserGit';

// const { query } = useRouter();

const Members: React.FC<UserGitInterfaceProps> = (props): JSX.Element => {
  const { user } = props;

  console.log(user);

  const { isFallback } = useRouter();
  if (isFallback) {
    return (
      <div>
        <p>Carregando...</p>
      </div>
    );
  }
  return (
    <div>
      <img
        src={user.avatar_url}
        alt={user.name}
        width="80"
        style={{ borderRadius: 40 }}
      />
      <h1>{user.name}</h1>
      <p>{user.bio}</p>
    </div>
  );
};

// Quando a Rota Possui Parâmetro [login]
export const getStaticPaths: GetStaticPaths = async () => {
  const response = await fetch(
    `https://api.github.com/orgs/rocketseat/members`,
  );
  const data = await response.json();

  // const paths = [data].map(member => {
  //   return { params: { login: String(member.login) } };
  // });

  console.log(data);

  return {
    // 1 - caso use fallback: false use o paths
    // 2 - se existir muitas informações não use o paths e deixe fallback: true
    paths: [],
    // fallback: false, => Não Atualiza os components caso exista alguma alteração.
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async context => {
  const { login } = context.params;
  console.log(login);
  const response = await fetch(`https://api.github.com/users/${login}`);
  const data = response.json();
  return { props: { user: data }, revalidate: 10 };
};

export default Members;
```
