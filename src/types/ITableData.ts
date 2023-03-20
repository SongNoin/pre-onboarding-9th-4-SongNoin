export interface ITableData {
  id: number;
  transaction_time: string;
  status: boolean;
  statusText?: '완료' | '미완료';
  customer_id: number;
  customer_name: number;
  currency: string;
}
