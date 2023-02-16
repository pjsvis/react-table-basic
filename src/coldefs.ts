import { MRT_ColumnDef } from 'material-react-table';
import { Data } from './basic-data';

//nested data is ok, see accessorKeys in ColumnDef below
export const colDefs: MRT_ColumnDef<Data>[] = [
  {
    accessorKey: 'firstName', //access nested data with dot notation
    header: 'First Name',
     filterVariant:'text'
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'address', //normal accessorKey
    header: 'Address',
  },
  {
    accessorKey: 'city',
    header: 'City',
  },
  {
    accessorKey: 'state',
    header: 'State',
  },]
