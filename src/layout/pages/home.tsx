import Result from '@/components/result/Result';
import Search from '@/components/search/Search';
import React, { useEffect, useState } from 'react';
import styles from './home.module.css';
import { ReceiveService } from '@/api/services/receive.service';
import type { IPeople } from '@/types/people.interface';
import ErrorHandling from '@/components/error-handling/ErrorHandling';
import { useLocalStorage } from '@uidotdev/usehooks';

export const Home = () => {
  const receiverService = ReceiveService.getInstance();
  const [localState, handleSetState] = useLocalStorage('searchValue', '');

  const [results, setResults] = useState<IPeople[] | null>([]);

  useEffect(() => {
    const loadData = async () => {
      setResults(null);

      const newResults = await receiverService.getPeopleBySearchValue(localState);

      setResults(newResults);
    };

    loadData();
  }, [localState, receiverService]);

  const changedStorage = async (v: string) => {
    handleSetState(v);

    setResults(null);

    const newResults = await receiverService.getPeopleBySearchValue(v);
    setResults(newResults);
  };

  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ErrorHandling>
          <Search
            value={localState}
            onChange={(v: string) => {
              changedStorage(v);
            }}
          />
          <Result results={results} />
        </ErrorHandling>
      </div>
    </div>
  );
};
