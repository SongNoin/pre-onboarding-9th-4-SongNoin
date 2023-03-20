export const mainTableColums = [
  {
    Header: '주문번호',
    accessor: 'id' as const,
  },
  {
    Header: '거래시간',
    accessor: 'transaction_time' as const,
  },
  {
    Header: '주문처리상태',
    accessor: 'statusText' as const,
  },
  {
    Header: '고객번호',
    accessor: 'customer_id' as const,
  },
  {
    Header: '고객이름',
    accessor: 'customer_name' as const,
  },
  {
    Header: '가격',
    accessor: 'currency' as const,
  },
];
