import Component from 'components/component';
import React from 'react';
import PropTypes from 'prop-types';
import {dataConnect} from 'relate-js';

import Pages from './pages';

@dataConnect(
  () => ({
    fragments: Pages.fragments
  })
)
export default class MenuBuilderContainer extends Component {
  static propTypes = {
    pages: PropTypes.array
  };

  static defaultProps = {
    pages: []
  };

  render () {
    return (
      <Pages {...this.props} />
    );
  }
}
