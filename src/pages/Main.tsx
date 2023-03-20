import { useEffect, useState } from 'react';
import { getTableDataApi } from '../apis/getTableDataApi';
import { MainTable } from '../components/table/MainTable';
import { ITableData } from '../types/ITableData';

export const MainPage = () => {
  const [tableData, setTableData] = useState<ITableData[]>([]);
  const todayDate = '2023-03-08';

  useEffect(() => {
    getTableData();
  }, []);

  async function getTableData() {
    const tableResData = await getTableDataApi(todayDate);
    tableResData && setTableData(tableResData);
  }
  return (
    <>
      <MainTable tableData={tableData} />
    </>
  );
};
