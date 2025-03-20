import { Link, useLocation } from 'react-router-dom';

const Nav = () => {
  const currentPage = useLocation().pathname;

  return (
    <nav style={{ margin: 0 }}>
      <ul className='nav nav-tabs'>
        <li className='nav-item'>
          <h2 style={{ textAlign: 'left', margin: 0 }}>
            <Link
              to='/'
              className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </h2>
        </li>
        <li className='nav-item'>
          <h2 style={{ textAlign: 'left', margin: 0 }}>
            <Link
              to='/WatchList'
              className={
                currentPage === '/CandidateList' ? 'nav-link active' : 'nav-link'
              }
            >
              Potential Candidate
            </Link>
          </h2>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
