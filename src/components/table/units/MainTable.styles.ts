import styled from 'styled-components';

export const StyledMainTable = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 5px solid black;
    text-align: center;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    th,
    td {
      margin: 0;
      padding: 1rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }

  .pagination {
    padding: 1rem;
  }
`;
