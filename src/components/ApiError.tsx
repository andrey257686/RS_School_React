import { Component } from 'react';
import styles from './ApiError.module.scss';

class ApiError extends Component {
  render() {
    return (
      <div className={styles.apierror}>
        <h2>Ooops...</h2>
        <p>Something went wrong. Please try again later.</p>
      </div>
    );
  }
}

export default ApiError;
