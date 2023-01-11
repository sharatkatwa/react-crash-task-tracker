import PropTypes from 'prop-types';
import Button from './Button';
import { useLocation } from 'react-router-dom';

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className='header'>
      <h1>{title}</h1>
      {location.pathname === '/' && (
        <Button
          onClick={onAdd}
          color={showAdd ? 'darkred' : 'green'}
          text={showAdd ? 'Close' : 'Add'}
        />
      )}
    </header>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

Header.defaultProps = {
  title: 'Task Tracker from default prop',
};

// // CSS IN JS
// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header;
