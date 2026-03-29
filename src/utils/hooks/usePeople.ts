import PeopleService from '@/api/services/people.service';
import { useLocalStorage } from '@uidotdev/usehooks';
import { useEffect, useMemo, useState } from 'react';
import type { IPeople } from 'swapi-ts';
import { getCounts } from '../funcs/countsCreated';

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
  const [currentPage, setCurrentPage] = useState(1);
  const [countsPages, setCountsPages] = useState<number[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoad(true);
      const data = await servicePeople.getPage(currentPage);
      setResults(data.results);
      setCountsPages(getCounts(data.count));
      setIsLoad(false);
    };
    loadData();
  }, [currentPage, servicePeople]);

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

  return { results, currentPage, countsPages, isLoad, setCurrentPage, localState, handleSetState };
};
