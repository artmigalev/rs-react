import Result from '@/components/result/Result';
import Search from '@/components/search/Search';
import React, { useState } from 'react';
import styles from './home.module.css';
import { ReceiveService } from '@/api/services/receive.service';
import type { IPeople } from '@/types/people.interface';
import ErrorHandling from '@/components/error-handling/ErrorHandling';
import { useLocalStorage } from '@uidotdev/usehooks';

type State = {
  value: string;
  results: IPeople[];
};

export const Home = () => {
  const receiverService = ReceiveService.getInstance();
  const [localState, handleSetState] = useLocalStorage('searchValue', '');

  const [state, setState] = useState<State>({
    value: localState,
    results: receiverService.getPeopleBySearchValue(localState) || [],
  });

  const changedStorage = (v: string) => {
    handleSetState(v);

    setState((state) => ({
      ...state,
      value: v.trim(),
      results: receiverService.getPeopleBySearchValue(v),
    }));
  };

  return (
    <div className={styles.home}>
      <div className={styles.wrapper}>
        <ErrorHandling>
          <Search
            value={state.value}
            onChange={(v: string) => {
              changedStorage(v);
            }}
          />
          <Result results={state.results || []} />
        </ErrorHandling>
      </div>
    </div>
  );
};
