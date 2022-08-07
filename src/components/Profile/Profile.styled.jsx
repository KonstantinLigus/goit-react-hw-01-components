import styled from 'styled-components';

export const ProfileStyled = styled.div`
  width: 300px;
  margin-left: auto;
  margin-right: auto;
  padding-top: ${p => p.theme.space[5]}px;
  border: ${p => p.theme.borders.easy};
  border-radius: ${p => p.theme.radii.md};
  box-shadow: ${p => p.theme.shadows.normal};
`;

export const Description = styled.div`
  margin-top: ${p => p.theme.space[5]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const ProfileImgStyled = styled.img`
  margin: 0 auto;
  width: 100px;
  border-radius: 50%;
`;
export const Stats = styled.ul`
  display: flex;
  margin-top: ${p => p.theme.space[5]}px;
  justify-content: space-around;
  font-size: ${p => p.theme.fontSizes.m};
  background-color: ${p => p.theme.colors.muted};
`;
export const StatsText = styled.li`
  display: flex;
  width: 100px;
  gap: ${p => p.theme.space[2]}px;
  flex-direction: column;
  align-items: center;
  padding-top: ${p => p.theme.space[4]}px;
  padding-bottom: ${p => p.theme.space[4]}px;

  :nth-child(2) {
    border-left: ${p => p.theme.borders.easy};
    border-right: ${p => p.theme.borders.easy};
  }
`;
export const Text = styled.p`
  font-weight: ${({ bold = false, theme }) =>
    bold ? theme.fontWeights.bold : theme.fontWeights.normal};
  font-size: ${({ bold = false, theme }) =>
    bold ? theme.fontSizes.l : theme.fontSizes.m};
`;
