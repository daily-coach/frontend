export interface ResponseUtil<T> {
  status: number;
  description: string;
  response: T;
}

