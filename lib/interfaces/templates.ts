export interface ITemplate {
  id: number;
  title: string;
  created_at: string;
  updated_at: string;
}

export interface IListTemplatesResponse {
  data: ITemplate[];
  total: number;
}
