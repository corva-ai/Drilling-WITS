import { AppHeader } from '@corva/ui/components';
import PropTypes from 'prop-types';
import { DATASETS } from './constants';
import { useState } from 'react';

import { useWITSSummaryData} from './effects'

import styles from './App.css';

function App(props) {
  const { well: { asset_id: assetId }, appHeaderProps } = props;

  const [ dataset, setDataset ] = useState(DATASETS[0])

  const { witsSummaryData, loading } = useWITSSummaryData({ assetId, dataset})

  return (
    <div className={styles.container}>
      <AppHeader {...appHeaderProps} />
      <div className={styles.content}>
        
        {/*Show loading indicator while data is loading*/}
        {loading && <LoadingIndicator />}
        {!loading && (
        <WITSSummaryChart data={witsSummaryData} dataset={dataset}/>
        )}
      </div>
    </div>
  );
}

App.propTypes = {
  isExampleCheckboxChecked: PropTypes.bool,
  appHeaderProps: PropTypes.shape({}).isRequired,
};

App.defaultProps = {
  ...DEFAULT_SETTINGS,
};

// Important: Do not change root component default export (App.js). Use it as container
//  for your App. It's required to make build and zip scripts work as expected;
export default App;
