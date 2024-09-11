import { IdResponse } from './id-response.interface';

export interface AffectOneItemResponse extends IdResponse {
  id: string;
  count: number;
  message: string;
}
