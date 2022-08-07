import PropTypes from 'prop-types';
import {
  ProfileStyled,
  ProfileImgStyled,
  Text,
  Description,
  Stats,
  StatsText,
} from './Profile.styled';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => (
  <ProfileStyled>
    <ProfileImgStyled src={avatar} alt="User avatar" />
    <Description>
      <Text bold>{username}</Text>
      <Text>@{tag}</Text>
      <Text>{location}</Text>
    </Description>
    <Stats>
      <StatsText>
        <span>Followers</span>
        <span>{followers}</span>
      </StatsText>
      <StatsText>
        <span>Views</span>
        <span>{views}</span>
      </StatsText>
      <StatsText>
        <span>Likes</span>
        <span>{likes}</span>
      </StatsText>
    </Stats>
  </ProfileStyled>
);
Profile.propTypes = {
  username: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};
