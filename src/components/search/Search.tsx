import { Component, type ChangeEvent } from 'react';
import styles from './Search.module.css';

type Props = {
  value?: string | null;
  onChange: (v: string) => void;
};
export type State = { value: string };

export class Search extends Component<Props, State> {
  #change: Props['onChange'];
  constructor(props: Props) {
    super(props);
    this.state = { value: props.value || '' };
    this.#change = props.onChange;
  }

  render = () => {
    return (
      <section className={styles['section-search']}>
        <form>
          <div className={styles['field-input']}>
            <input
              type="text"
              name="search-input"
              className="w-full p-2"
              placeholder="Search value"
              defaultValue={this.state.value || ''}
              onChange={(event: ChangeEvent<HTMLInputElement>) => this.#change(event.target.value)}
            />
          </div>
        </form>
      </section>
    );
  };
}

export default Search;
