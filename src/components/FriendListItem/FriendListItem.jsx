import PropTypes from 'prop-types';
import { Item, FriendStatus, FriendImage, Text } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item>
    <FriendStatus status={isOnline}></FriendStatus>
    <FriendImage src={avatar} alt={name} />
    <Text>{name}</Text>
  </Item>
);

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ),
};
