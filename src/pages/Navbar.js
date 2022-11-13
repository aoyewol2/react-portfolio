import Term from '../components/Home';

// navbar section -- fixed on page
export default function NavBar() {
  return (
    <div className='reveal-opacity'>
      <Term/>

      <div className="navbar reveal-opacity">
          <a href="#contact">Contact</a>
        </div>
    </div>
  )
}