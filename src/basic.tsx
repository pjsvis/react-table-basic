import { useMemo, useState, useRef } from 'react';
import MaterialReactTable, { MRT_TableInstance } from 'material-react-table';
import { data, Data } from './basic-data'
import { colDefs } from './coldefs'
import { useBasicData, BasicDataQuery } from './useBasicData'
import Button from '@mui/material/Button';

export const Basic = () => {
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

  const someEventHandler = () => {
    const rowSelection = tableInstanceRef?.current?.getState()?.rowSelection;
    console.log('rowSelection', rowSelection)
  }

  return (<>


    <MaterialReactTable columns={columns} data={data ?? []}
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
        <Button variant="contained" onClick={someEventHandler}>
          {'Export'}
        </Button>
      )}
      tableInstanceRef={tableInstanceRef}
      getRowId={(originalRow) => originalRow.city}
    />
    <div><pre>{JSON.stringify(rowSelection, null, 2)}</pre></div>
    <div>{isLoadingData}</div>
    {/**  <div><pre>{JSON.stringify(errorData, null, 2)}</pre></div> */}
    <div><pre>{JSON.stringify(dataData, null, 2)}</pre></div>
  </>)

};


