import PropTypes from 'prop-types';
import { FriendListItem, FriendStatus, FriendImage } from './FriendList.styled';
import { Box } from '../Box';
export const FriendList = ({ friends }) => (
  <Box width="300px" mx="auto" as="ul">
    {friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem key={id}>
        <FriendStatus status={isOnline}></FriendStatus>
        <FriendImage src={avatar} alt={name} />
        <Box ml={3} fontSize="m" fontWeight="bold" as="p">
          {name}
        </Box>
      </FriendListItem>
    ))}
  </Box>
);

FriendList.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
  id: PropTypes.number,
};
