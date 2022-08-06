import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import user from '../sources/user';
import data from '../sources/data';

export const App = () => {
  const { username, tag, location, avatar, stats } = user;
  const { id, label, percentage } = data;
  return (
    <>
      <Profile
        username={username}
        tag={tag}
        location={location}
        avatar={avatar}
        stats={stats}
      />
      <Statistics title="Upload stats" stats={data} />
    </>
  );
};
