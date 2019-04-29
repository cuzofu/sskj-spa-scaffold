import React, { Component, Fragment } from 'react';
import { connect } from 'dva';

import styles from './Analysis.less';

@connect(({ analysis, loading }) => ({
  analysis,
}))
class Analysis extends Component {
  state = {
  };

  componentDidMount() {
  }

  componentWillUnmount() {
    const { dispatch } = this.props;
    dispatch({
      type: 'analysis/clear',
    });
  }

  render() {
    return (
      <Fragment>
      </Fragment>
    );
  }
}

export default Analysis;
