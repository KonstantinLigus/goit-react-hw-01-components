import PropTypes from 'prop-types';
import { FriendListItem } from '../FriendListItem/FriendListItem';
import { Box } from '../Box';
export const FriendList = ({ friends }) => (
  <Box width="300px" mx="auto" as="ul">
    {friends.map(({ avatar, name, isOnline, id }) => (
      <li key={id}>
        <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
      </li>
    ))}
  </Box>
);

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
