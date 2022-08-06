import { Img } from 'components/Profile/Profile.styled';
import PropTypes from 'prop-types';
import { Box } from '../Box';

export const FriendList = ({ friends }) => (
  <ul>
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id}>
        <span>{isOnline}</span>
        <img src={avatar} alt={name} />
        <p>{name}</p>
      </li>
    ))}
  </ul>
);

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
