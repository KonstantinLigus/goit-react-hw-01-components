import PropTypes from 'prop-types';
import { StatisticsItem } from './Statistics.styled';
import { Box } from '../Box';
import { backgroundColorRender } from '../../functions/backgroundColorRender';

export const Statistics = props => (
  <Box display="flex" flexDirection="column" alignItems="center">
    <Box width="200" mx="auto" textAlign="center" p={5} as="h2">
      {props.title && props.title.toUpperCase()}
    </Box>
    <Box display="flex" fontSize="m" as="ul">
      {props.stats.map(({ id, label, percentage }) => (
        <StatisticsItem key={id} backgroundColor={backgroundColorRender()}>
          <span>{label}</span>
          <span>{percentage}%</span>
        </StatisticsItem>
      ))}
    </Box>
  </Box>
);

Statistics.propTypes = {
  id: PropTypes.string,
  label: PropTypes.string,
  percentage: PropTypes.number,
};
