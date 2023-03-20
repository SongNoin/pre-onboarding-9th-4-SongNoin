import { useEffect, useState } from 'react';
import { getTableDataApi } from '../apis/getTableDataApi';
import { ITableData } from '../types/ITableData';

export const MainPage = () => {
  const [tableData, setTableData] = useState<ITableData[]>();

  useEffect(() => {
    getTableData();
  }, []);

  async function getTableData() {
    const tableResData = await getTableDataApi();
    setTableData(tableResData);
  }
  console.log(tableData);
  return <></>;
};
