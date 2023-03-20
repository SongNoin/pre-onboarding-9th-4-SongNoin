import axios from 'axios';
import { ITableData } from '../types/ITableData';

export const getTableDataApi = async (date?: string) => {
  try {
    const chartRes = await axios.get('data/table_data.json');
    if (chartRes.statusText === 'OK') {
      let tableData: ITableData[] = chartRes.data;
      if (date) {
        tableData = tableData.filter(
          (el) => el.transaction_time.split(' ')[0] === date
        );
      }

      for (let i = 0; i < tableData.length; i++) {
        tableData[i].status
          ? (tableData[i].statusText = '완료')
          : (tableData[i].statusText = '미완료');
      }

      return tableData;
    }
  } catch (error) {
    console.log(error);
  }
};
