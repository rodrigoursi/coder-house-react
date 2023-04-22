import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import "./dataGrid.css";


const columns = [
  { field: 'id', headerName: 'ID', width: 200 },
  { field: 'titulo', headerName: 'Producto', width: 225 },
  {
    field: 'precio',
    headerName: 'Precio unit',
    type: 'number',
    width: 80,
  },
  {
    field: 'cantidad',
    headerName: 'Cantidad',
    type: 'number',
    width: 70,
  },
  {
    field: 'total',
    headerName: 'Precio total',
    type: 'number',
    width: 90,
  },
];

const rows = [
  { id: 1, item: 'mario', pUnit: 400, cantidad: 2, total:800},
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
];

export default function DataTable(props) {
  const handleRowClick = (params) => {
    console.log('Row data:', params.row.id);
    props.enviarId(params.row.id);
  };
  return (
    <div style={{ height: 400}}>
      <DataGrid
        rows={props.array}
        columns={columns}
        pageSize={2}
        rowsPerPageOptions={[2]}
        onRowClick={handleRowClick}
        //checkboxSelection
      />
    </div>
  );
}