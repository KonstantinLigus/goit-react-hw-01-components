import PropTypes from 'prop-types';
import { Box } from '../Box';
export const Statistics = props => (
  <Box>
    <h2>{props.title && props.title}</h2>
    <ul>
      {props.stats.map(({ id, label, percentage }) => (
        <li key={id}>
          <span>{label}</span>
          <span>{percentage}</span>
        </li>
      ))}
    </ul>
  </Box>
);

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
