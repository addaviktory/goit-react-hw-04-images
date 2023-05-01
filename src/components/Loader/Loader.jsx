import PropTypes from 'prop-types';
import { Oval } from 'react-loader-spinner';

export const Loader = ({ size }) => {
  return <Oval visible={true} height={size} width={size} />;
};

Loader.propTypes = {
  size: PropTypes.number.isRequired,
};


