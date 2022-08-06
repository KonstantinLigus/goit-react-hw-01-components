import PropTypes from 'prop-types';
import { StatisticsItem } from './Statistics.styled';
import { Box } from '../Box';
import { backgroundColorRender } from '../../functions/backgroundColorRender';

export const Statistics = props => (
  <Box width={400} mx="auto">
    <Box width={200} mx="auto" textAlign="center" as="h2">
      {props.title && props.title}
    </Box>
    <Box display="flex" as="ul">
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
