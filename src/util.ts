export function MapperAnimal(data: any) {
  return data?.map(
    (item: {
      Animal: string;
      Latitude: number;
      Longitude: number;
      Mordido: boolean;
      Velocidade: number;
      created_at: string;
      id: number;
    }) => {
      return {
        animal: item.Animal,
        latitude: item.Latitude,
        longitude: item.Longitude,
        mordido: item.Mordido,
        velocidade: item.Velocidade,
        created_at: item.created_at,
        id: item.id,
      };
    },
  );
}
