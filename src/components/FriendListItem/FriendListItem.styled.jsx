import styled from 'styled-components';

export const Item = styled.div`
  display: flex;
  padding: ${p => p.theme.space[3]}px;
  align-items: center;
  border: ${p => p.theme.borders.easy};
  box-shadow: ${p => p.theme.shadows.normal};

  :not(:first-child) {
    margin-top: ${p => p.theme.space[3]}px;
  }
`;

export const FriendStatus = styled.span`
  width: 16px;
  height: 16px;
  border-radius: ${p => p.theme.radii.md};
  background-color: ${p =>
    p.status ? p.theme.colors.online : p.theme.colors.offline}; ;
`;

export const FriendImage = styled.img`
  width: 80px;
  margin-left: ${p => p.theme.space[3]}px;
  border: ${p => p.theme.borders.easy};
  border-radius: ${p => p.theme.radii.md};
`;

export const Text = styled.p`
  margin-left: ${p => p.theme.space[3]}px;
  font-size: ${p => p.theme.fontSizes.m};
  font-weight: ${p => p.theme.fontWeights.bold};
`;
