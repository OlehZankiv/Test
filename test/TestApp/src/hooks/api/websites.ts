import {useQuery} from 'react-query';
import {websitesAPI} from '../../api';

const QUERY_KEY = 'websites';

export const useWebsites = () => {
  const {data: webpages = [], isLoading} = useQuery(
    [QUERY_KEY],
    websitesAPI.getList,
  );

  return {isLoading, webpages};
};
