import { useMemo } from 'react';
import {
  useFilters,
  useGlobalFilter,
  usePagination,
  useSortBy,
  useTable,
} from 'react-table';

import { ITableData } from '../../types/ITableData';
import { StyledMainTable } from './units/MainTable.styles';
import { mainTableColums } from './units/MainTableColumns';
import { Pagination } from './units/pagination';

interface TableProps {
  tableData: ITableData[];
}

export const MainTable = ({ tableData }: TableProps) => {
  const data = useMemo(() => tableData, [tableData]);
  const columns = useMemo(() => mainTableColums, []);

  function DefaultColumnFilter({ column: { filterValue, setFilter } }: any) {
    return (
      <input
        value={filterValue || ''}
        onChange={(e) => {
          setFilter(e.target.value || undefined);
        }}
        placeholder='고객 이름을 검색하세요'
      />
    );
  }

  const defaultColumn = useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const tableInstance = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0, pageSize: 50 },
      defaultColumn,
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    state: { pageIndex, pageSize },
  } = tableInstance;

  const rowCnt = pageSize;
  const pageRows = rows.slice(
    pageIndex * rowCnt,
    pageIndex * rowCnt + pageSize
  );

  return (
    <StyledMainTable>
      <Pagination
        tableInstance={tableInstance}
        pageIndex={pageIndex}
        pageSize={pageSize}
      />
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={headerGroup.id}>
              {headerGroup.headers.map((column) => {
                return (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    key={column.id}
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                    <div>
                      {column.Header === '고객이름'
                        ? column.render('Filter')
                        : null}
                    </div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {pageRows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={row.id}>
                {row.cells.map((cell) => {
                  return (
                    <td {...cell.getCellProps()} key={cell.value}>
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </StyledMainTable>
  );
};
