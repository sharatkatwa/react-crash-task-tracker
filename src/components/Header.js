import PropTypes from 'prop-types';
import Button from './Button';

const Header = ({ title, onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button
        onClick={onAdd}
        color={showAdd ? 'darkred' : 'green'}
        text={showAdd ? 'Close' : 'Add'}
      />
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
