import {api} from './api';

export type WebsiteItem = {
  name: string;
  url: string;
};

type WebsitesApiService = {
  getList: () => Promise<WebsiteItem[]>;
};

export const websitesAPI: WebsitesApiService = {
  getList: () =>
    api
      .get<WebsiteItem[]>('external-verification/websites')
      .then(res => res.data),
};
