
import PropTypes from 'prop-types'
import Button from './button'

const Header = ({title}) => {
  const onClick = () => {
    console.log('click')
  }
  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button onClick={onClick} color='green' text='Add' />
      
    </header>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

Header.defaultProps = {
  title: "Task Tracker from default prop"
}

// // CSS IN JS
// const headingStyle = {
//   color: 'red', 
//   backgroundColor: 'black'
// }

export default Header