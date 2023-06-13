export type Location = {
  lat: number;
  lng: number;
  address?: string;
};

export type GeocodeResponse = {
  results: Array<{ formatted_address: string }>;
  status: string;
};
