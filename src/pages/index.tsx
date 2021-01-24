import { GetStaticProps } from 'next';
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
