import { DetailReqRoot } from '../../interfaces/detail-req';

type RequestStatus = 'pending' | 'success' | 'error';

export interface DetailState {
  detail: DetailReqRoot | null;
  loadingDetailStatus: RequestStatus;
}

export const intialState: DetailState = {
  detail: null,
  loadingDetailStatus: 'pending',
};
