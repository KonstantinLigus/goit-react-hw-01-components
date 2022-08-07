import styled from 'styled-components';

export const TableStyled = styled.table`
  table-layout: fixed;
  margin: 0 auto;
  max-width: 800px;
  text-align: center;
  border-collapse: collapse;
  border: ${p => p.theme.borders.easy};
  box-shadow: ${p => p.theme.shadows.normal};

  th {
    width: calc(900px / 3);
  }
  th,
  td {
    padding: ${p => p.theme.space[4]}px;
    border-left: ${p => p.theme.borders.easy};
    border-right: ${p => p.theme.borders.easy};
  }
  thead tr {
    background-color: ${p => p.theme.colors.primary};
  }
  tbody tr:nth-child(odd) {
    background-color: ${p => p.theme.colors.background};
  }
  tbody tr:nth-child(even) {
    background-color: ${p => p.theme.colors.muted};
  }
`;
