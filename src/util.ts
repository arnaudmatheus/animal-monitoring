/* eslint-disable no-param-reassign */
/* eslint-disable camelcase */

export const dateMask = (value: string) => {
  const v = value;
  if (v.match(/^\d{2}$/) !== null) {
    value = `${v}/`;
  } else if (v.match(/^\d{2}\/\d{2}$/) !== null) {
    value = `${v}/`;
  }
  return value;
};
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
      const date = new Date(item.created_at);
      return {
        animal: item.Animal,
        latitude: item.Latitude,
        longitude: item.Longitude,
        mordido: item.Mordido,
        velocidade: item.Velocidade,
        created_at: date.toLocaleDateString('pt-BR'),
        id: item.id,
      };
    },
  );
}
