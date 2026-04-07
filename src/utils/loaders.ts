import PeopleService from '@/api/services/people.service';
import type { DataLoaderCards } from '@/routes';
import type { RouteMatch } from 'react-router';
import { getCounts } from './funcs/countsCreated';

export const loaderCards = async ({
  params,
  request,
}: {
  params: RouteMatch['params'];
  request: Request;
}): Promise<DataLoaderCards> => {
  const { page } = params;

  const url = new URL(request.url);
  const searchTerm = url.searchParams.get('search') || '';
  await new Promise((res) => setTimeout(res, 1000));

  const service = new PeopleService();

  const data = await service.getPage(page, searchTerm);

  const counts = getCounts(data.count);
  console.log();

  return {
    data,
    counts,
  };
};
export const loaderDetailCard = async ({ params }: { params: RouteMatch['params'] }) => {
  const service = new PeopleService();

  await new Promise((res) => setTimeout(res, 1000));
  const { detailsId } = params;

  if (detailsId) {
    const card = await service.getDataBySearchValue(detailsId);
    return card;
  }
};

loaderDetailCard.hydrate = true;
loaderCards.hydrate = true;
