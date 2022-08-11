import { Item, FriendStatus, FriendImage, Text } from './FriendListItem.styled';

export const FriendListItem = ({ avatar, name, isOnline }) => (
  <Item>
    <FriendStatus status={isOnline}></FriendStatus>
    <FriendImage src={avatar} alt={name} />
    <Text>{name}</Text>
  </Item>
);
