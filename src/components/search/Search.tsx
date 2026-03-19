import { type ChangeEvent } from 'react';
import styles from './Search.module.css';

type Props = {
  value: string;
  onChange: (v: string) => void;
};
export type State = { value: string };

const Search = (props: Props) => {
  const { value, onChange } = props;

  return (
    <section data-testid="section" className={styles['section-search']}>
      <form>
        <div className={styles['field-input']}>
          <input
            type="text"
            name="search-input"
            className="w-full p-2"
            placeholder="Search value"
            defaultValue={value}
            onChange={(event: ChangeEvent<HTMLInputElement>) => onChange(event.target.value)}
          />
        </div>
      </form>
    </section>
  );
};

export default Search;
