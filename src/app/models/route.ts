import { Stop } from './stop';

export interface Route {
  circuit: string;
  description?: string;
  qrCodeUrl?: string;
  stops: Stop[];
}
