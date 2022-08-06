import styled from 'styled-components';

export const Description = styled.div`
  margin-top: ${p => p.theme.space[5]}px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const Img = styled.img`
  margin: 0 auto;
  width: 100px;
  border-radius: 50%;
`;
export const Stats = styled.ul`
  display: flex;
  margin-top: ${p => p.theme.space[5]}px;
  justify-content: space-around;
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
    border-left: ${p => p.theme.borders.grey};
    border-right: ${p => p.theme.borders.grey};
  }
`;
export const Text = styled.p`
  font-weight: ${({ bold = false, theme }) =>
    bold ? theme.fontWeights.bold : theme.fontWeights.normal};
`;
