const user = {
  user: {
    login: 'AndreAquilau',
    id: 58450868,
    node_id: 'MDQ6VXNlcjU4NDUwODY4',
    avatar_url: 'https://avatars.githubusercontent.com/u/58450868?v=4',
    gravatar_id: '',
    url: 'https://api.github.com/users/AndreAquilau',
    html_url: 'https://github.com/AndreAquilau',
    followers_url: 'https://api.github.com/users/AndreAquilau/followers',
    following_url:
      'https://api.github.com/users/AndreAquilau/following{/other_user}',
    gists_url: 'https://api.github.com/users/AndreAquilau/gists{/gist_id}',
    starred_url:
      'https://api.github.com/users/AndreAquilau/starred{/owner}{/repo}',
    subscriptions_url:
      'https://api.github.com/users/AndreAquilau/subscriptions',
    organizations_url: 'https://api.github.com/users/AndreAquilau/orgs',
    repos_url: 'https://api.github.com/users/AndreAquilau/repos',
    events_url: 'https://api.github.com/users/AndreAquilau/events{/privacy}',
    received_events_url:
      'https://api.github.com/users/AndreAquilau/received_events',
    type: 'User',
    site_admin: false,
    name: ' André Da Silva',
    company: 'SuperSys',
    blog: '',
    location: 'Cacoal-RO',
    email: null,
    hireable: null,
    bio: 'Developer Web \r\n',
    twitter_username: null,
    public_repos: 37,
    public_gists: 0,
    followers: 4,
    following: 7,
    created_at: '2019-12-03T00:55:30Z',
    updated_at: '2021-01-23T06:19:21Z',
  },
};

type UserGit = typeof user;

export default interface UserGitInterfaceProps extends UserGit {}
