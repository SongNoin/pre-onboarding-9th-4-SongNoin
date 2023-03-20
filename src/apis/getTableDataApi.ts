import axios from 'axios';

export const getTableDataApi = async () => {
  try {
    const chartRes = await axios.get('/data/table_data.json');
    if (chartRes.statusText === 'OK') {
      const tableData = chartRes.data;

      return tableData;
    }
  } catch (error) {
    console.log(error);
  }
};
