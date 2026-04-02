import PeopleService from '@/api/services/people.service';
import { useLocalStorage } from '@uidotdev/usehooks';
import { useEffect, useMemo, useState } from 'react';
import type { IPeople } from 'swapi-ts';
import { getCounts } from '../funcs/countsCreated';
import { useSearchParams } from 'react-router';

export type DataState = {
  results: IPeople[];
  isLoad: boolean;
  countsPages: number[];
};

export const usePeople = () => {
  const servicePeople = useMemo(() => new PeopleService(), []); //new PeopleService();
  const [localState, handleSetState] = useLocalStorage('searchValue', '');

  const [isLoad, setIsLoad] = useState(true);
  const [results, setResults] = useState<IPeople[]>([]);
  const [searchParams, setSearchParams] = useSearchParams({ page: '1' });
  const [countsPages, setCountsPages] = useState<number[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoad(true);
      const data = await servicePeople.getPage(
        searchParams.get('page') ? Number(searchParams.get('page')) : 1
      );
      setResults(data.results);
      setCountsPages(getCounts(data.count));
      setIsLoad(false);
    };
    loadData();
  }, [searchParams, servicePeople]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoad(true);

      if (localState.length > 0) {
        const data = await servicePeople.getDataBySearchValue(localState);
        setResults(data);
        setCountsPages(getCounts(data.length));
        setIsLoad(false);
      } else {
        const data = await servicePeople.getPage();
        setResults(data.results);
        setCountsPages(getCounts(data.count));
        setIsLoad(false);
      }
    };
    loadData();
  }, [localState, servicePeople]);

  const page = useMemo(() => searchParams.get('page'), [searchParams]);
  return { results, page, countsPages, isLoad, setSearchParams, localState, handleSetState };
};
