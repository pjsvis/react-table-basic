import { MRT_ColumnDef } from 'material-react-table';
import { Data } from './basic-data';

// nested data is ok, see accessorKeys in ColumnDef below
// but filtering and stuff does not work in the table
export const colDefs: MRT_ColumnDef<Data>[] = [
  {
    accessorKey: 'firstName', 
    header: 'First Name',
     filterVariant:'text'
  },
  {
    accessorKey: 'lastName',
    header: 'Last Name',
  },
  {
    accessorKey: 'address', 
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
