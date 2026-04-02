import PeopleService from '@/api/services/people.service';
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

  const [isLoad, setIsLoad] = useState(true);
  const [results, setResults] = useState<IPeople[]>([]);
  const [searchParams, setSearchParams] = useSearchParams({
    page: '1',
    search: '',
  });
  const [countsPages, setCountsPages] = useState<number[]>([]);
  const page = useMemo(() => searchParams.get('page'), [searchParams]);
  const searchValue = useMemo(() => searchParams.get('search'), [searchParams]);

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

      if (searchValue && searchValue.length > 0) {
        const data = await servicePeople.getDataBySearchValue(searchValue);
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
  }, [searchValue, searchParams, servicePeople]);

  return { results, page, countsPages, isLoad, setSearchParams, searchValue };
};
