import { useState, useEffect } from 'react';
import { searchGithub, searchGithubUser } from '../api/API';
import type Candidate from '../interfaces/Candidate.interface';
import { IoAddCircle } from 'react-icons/io5';
import { FaMinusCircle } from 'react-icons/fa';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    id: '',
    login: '',
    location: '',
    email: '',
    company: '',
    bio: '',
    avatar_url: '',
    html_url: '',
  });

  const [load, setLoad] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const searchForCandidate = async () => {
    setLoad(true);
    setError(null);
    try {
      const candidates = await searchGithub();
      if (candidates.length > 0){
        const candidateData = await searchGithubUser(candidates[0].login);
        setCurrentCandidate(candidateData);
      } else {
        setCurrentCandidate({
          id: '',
          login: '',
          location: '',
          email: '',
          company: '',
          bio: '',
          avatar_url: '',
          html_url: '',
        });
      }
      } catch (err) {
        setError('Failed searching candidate data.');
      } finally {
        setLoad(false);
      }
  };

  const saveCandidate = () => {
    if (currentCandidate) {
      const storeCandidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
      localStorage.setItem('savedCandidates', JSON.stringify([...storeCandidates, currentCandidate]));
      searchForCandidate();
    }
  };

  const rejectCandidate = () => {
    searchForCandidate();
  };

  useEffect(() => {
    searchForCandidate();
  }, []);

  if (load) return <h1>Loading...</h1>;
  if (error) return <h1>{error}</h1>;
  if (!currentCandidate) return <h1>There are no additional candidates for review!</h1>;

  return (
    <div>
    <h1>Candidate Search</h1>
    <div>
      <img src={currentCandidate.avatar_url} alt={currentCandidate.login} style={{ width: '150px' }} />
      <h2>{currentCandidate.name || 'Anonymous'} ({currentCandidate.login})</h2>
      {currentCandidate.location && <p>Location: {currentCandidate.location}</p>}
      {currentCandidate.email && <p>Email: {currentCandidate.email}</p>}
      {currentCandidate.company && <p>Company: {currentCandidate.company}</p>}
      {currentCandidate.bio && <p>Company: {currentCandidate.bio}</p>}
      <a href={currentCandidate.html_url} target="_blank" rel="noopener noreferrer">GitHub Profile</a>
      <div>
      <FaMinusCircle 
         style={{ 
         fontSize: '70px', 
         color: 'red', 
         }} 
         onClick={() => {
         rejectCandidate();
         }}
      />
      <IoAddCircle 
         style={{ 
         fontSize: '80px', 
         color: 'green', 
         marginRight: '1rem'
        }} 
        onClick={() => {
          saveCandidate();
        }}
      />
      </div>
    </div>
  </div> 
  );
};

export default CandidateSearch;
