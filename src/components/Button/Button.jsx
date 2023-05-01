import PropTypes from 'prop-types';
import { Button } from './Button.styled';

const ButtonMore = ({ loadMore }) => {
return <Button onClick={loadMore}>Load more</Button>;
};

ButtonMore.propTypes = {
loadMore: PropTypes.func.isRequired,
};

export default ButtonMore;