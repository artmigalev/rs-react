import React, { Component, type ReactNode } from 'react';
import ErrorCard, { type PropsErrorCard } from './error-card/ErrorCard';

type State = {
  error: Error | null;
  errorInfo: React.ErrorInfo | null;
};

export class ErrorHandling extends Component<Record<string, ReactNode>, State> {
  constructor(props: Record<string, never>) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.errorInfo && this.state.error) {
      const info = {
        title: this.state.error?.name,
        subtitle: this.state.error?.message,
        'error-code': '404',
      } satisfies PropsErrorCard;

      return <ErrorCard {...info} />;
    }
    return this.props.children;
  }
}

export default ErrorHandling;
