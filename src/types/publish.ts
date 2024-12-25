import { StrategyType, PublishType, ContentType } from '../constants/strategy';

export interface PublishStrategy {
  strategy_id: number;
  name: string;
  strategy_type: StrategyType;
  publish_type: PublishType;
  interval: number;
  quantity: number;
  content_type: ContentType;
  layout_id: number;
  image_type: string;
  created_at?: string;
  user_id?: number;
}

export interface PublishStrategyFormData {
  name: string;
  strategy_type: StrategyType;
  publish_type: PublishType;
  interval: number;
  quantity: number;
  content_type: ContentType;
  layout_id: number;
  image_type: string;
}

export interface ListParams {
  page?: number;
  limit?: number;
  search?: string;
}

export interface ListResponse<T> {
  items: T[];
  total: number;
  page: number;
  pages: number;
}