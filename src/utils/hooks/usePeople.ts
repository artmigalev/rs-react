import PeopleService from '@/api/services/people.service';
import { useLocalStorage } from '@uidotdev/usehooks';
import { useEffect, useState } from 'react';
import type { IPeople } from 'swapi-ts';

export type DataState = {
  results: IPeople[];
  isLoad: boolean;
  countsPages: number[];
};

export const usePeople = () => {
  const servicePeople = PeopleService.getInstance();
  const [localState, handleSetState] = useLocalStorage('searchValue', '');

  const [isLoad, setIsLoad] = useState(true);
  const [results, setResults] = useState<IPeople[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [countsPages, setCountsPages] = useState<number[]>([]);

  useEffect(() => {
    const loadData = async () => {
      setIsLoad(true);

      if (localState.length > 0) {
        const data = await servicePeople.getDataBySearchValue(localState);
        setResults(data);
        setCountsPages(servicePeople.getCounts(data.length));
        setIsLoad(false);
      } else {
        const data = await servicePeople.getPage<IPeople[]>(currentPage);
        setResults(data);
        setCurrentPage(servicePeople.getCurrentPage());
        setCountsPages(servicePeople.countsPages);
        setIsLoad(false);
      }
    };
    loadData();
  }, [localState, currentPage, servicePeople]);

  return { results, currentPage, countsPages, isLoad, setCurrentPage, localState, handleSetState };
};
