import React, { useCallback, useEffect } from 'react';
import { supabase } from '../../services/client';
import { useState } from 'react';
import { DataGrid, GridColDef } from '@material-ui/data-grid';
import { MapperAnimal } from '../../util';

interface IAnimalData {
  animal: string;
  latitude: number;
  longitude: number;
  mordido: boolean;
  velocidade: number;
  created_at: string;
  id: number;
}
const columns: GridColDef[] = [
  {
    field: 'animal',
    headerName: 'Animal',
    minWidth: 150,
    align: 'left',
    disableExport: true,
    disableColumnMenu: true,
  },
  {
    field: 'latitude',
    headerName: 'latitude',
    minWidth: 150,
    align: 'left',
    disableColumnMenu: true,
    disableExport: true,
  },
  {
    field: 'longitude',
    headerName: 'longitude',
    minWidth: 200,
    flex: 1,
    align: 'left',
    disableColumnMenu: true,
    disableExport: true,
  },
  {
    field: 'mordido',
    headerName: 'Mordido',
    width: 150,
    align: 'left',
    disableColumnMenu: true,
    disableExport: true,
  },
  {
    field: 'created_at',
    headerName: 'Created_at',
    width: 150,
    align: 'left',
    disableColumnMenu: true,
    disableExport: true,
  },
  {
    field: 'id',
    headerName: 'Id',
    width: 150,
    align: 'left',
    disableColumnMenu: true,
    disableExport: true,
  },
];
function LandingPage() {
  const [animals, setAnimals] = useState<any[] | null>([]);
  const getInfo = useCallback(async () => {
    const { data } = await supabase.from('Dados').select('*');
    await setAnimals(MapperAnimal(data));
    const teste = MapperAnimal(data);
    setAnimals(teste);
    console.log(data);
  }, []);

  useEffect(() => {
    getInfo();
  }, [getInfo]);

  return (
    <div className="App">
      <div style={{ height: 500, width: '100%' }}>
        <DataGrid
          rows={animals || []}
          columns={columns}
          pageSize={7}
          rowsPerPageOptions={[7]}
          disableSelectionOnClick
        />
      </div>
    </div>
  );
}

export default LandingPage;
