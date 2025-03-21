import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav style={{ margin: 0 }}>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <h1 style={{ textAlign: 'left', margin: 0 }}>
            <Link
              to='/'
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </h1>
        </li>
        <li className='nav-item'>
          <h1 style={{ textAlign: 'left', margin: 0 }}>
            <Link
              to='/SavedCandidates'
              className={
                currentPage === '/SavedCandidates' ? 'nav-link active' : 'nav-link'
              }
            >
              Potential Candidate
            </Link>
          </h1>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
