import styled from 'styled-components';

export const StatisticsItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80px;
  width: 80px;
  background-color: ${p => p.backgroundColor};
  & span {
    display: block;
  }
`;
