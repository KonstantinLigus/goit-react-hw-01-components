import { Profile } from './Profile/Profile';
import user from '../sources/user';
export const App = () => {
  return <Profile username={user.username} avatar={user.avatar} />;
};
