import { useMemo, useState, useRef } from 'react';
import MaterialReactTable, { MRT_TableInstance, MRT_Row, MaterialReactTableProps } from 'material-react-table';
import { data, Data } from './basic-data'
import { colDefs } from './coldefs'
import { useBasicData, BasicDataQuery } from './useBasicData'
import Button from '@mui/material/Button';

export const Basic = () => {
  const [tableData, setTableData] = useState<Data[]>(() => data);
  const [rowSelection, setRowSelection] = useState({})
  const tableInstanceRef = useRef<MRT_TableInstance<Data>>(null);

  const dataQuery: BasicDataQuery = {};
  const {
    isLoading: isLoadingData,
    error: errorData,
    data: dataData,
  }
    = useBasicData(dataQuery);

  const columns = useMemo(
    () => colDefs,
    [],
  );

  const onExport = () => {
    const rowSelection = tableInstanceRef?.current?.getState()?.rowSelection;
    console.log('rowSelection', rowSelection)
  }

  const handleSaveRow: MaterialReactTableProps<Data>['onEditingRowSave'] =
    async ({ exitEditingMode, row, values }) => {
      //if using flat data and simple accessorKeys/ids, you can just do a simple assignment here.
      tableData[row.index] = values;
      //send/receive api updates here
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode
    };

  return (<>


    <MaterialReactTable columns={columns} data={tableData ?? []}
      state={{
        isLoading: isLoadingData,
        rowSelection
      }}
      initialState={{ density: 'compact' }}
      enableColumnResizing
      enableRowSelection
      enableGrouping
      enableStickyHeader
      enableStickyFooter
      enableColumnFilters={true}
      enableFilterMatchHighlighting={true}
      positionPagination={'top'}
      enableSelectAll
      onRowSelectionChange={setRowSelection}
      renderTopToolbarCustomActions={() => (
        <Button variant="contained" onClick={onExport}>
          {'Export'}
        </Button>
      )}
      tableInstanceRef={tableInstanceRef}
      getRowId={(originalRow) => originalRow.city}
      enableEditing={true}
      editingMode={'row'}
      onEditingRowSave={handleSaveRow}
    />
    <div><pre>{JSON.stringify(rowSelection, null, 2)}</pre></div>
    <div>{isLoadingData}</div>
    {/**  <div><pre>{JSON.stringify(errorData, null, 2)}</pre></div> */}
    <div><pre>{JSON.stringify(dataData, null, 2)}</pre></div>
  </>)

};


