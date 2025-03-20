import { useState } from 'react';
import { searchGithubUser } from '../api/API';
import CandidateCard from '../components/Candidate.Card';
import type Candidate from '../interfaces/Candidate.interface';

const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate>({
    id: '',
    login: '',
    location: '',
    email: '',
    company: '',
    bio: '',
    avatar_url: '',
  });

  const [searchInput, setSearchInput] = useState<string>('');

  const addToCandidateList = () => {
    let parsedCandidatesToWatch: Candidate[] = [];
    const storedCandidatesToWatch = localStorage.getItem('candidatesToWatch');
    if (typeof storedCandidatesToWatch === 'string') {
      parsedCandidatesToWatch = JSON.parse(storedCandidatesToWatch);
    }
    parsedCandidatesToWatch.push(currentCandidate);
    localStorage.setItem('candidateToWatch', JSON.stringify(parsedCandidatesToWatch));
  };

  const searchForCandidateByusername = async (event: React.FormEvent<HTMLFormElement>, Candidate_username:string) => {
    event.preventDefault();
    const data: Candidate = await searchGithubUser(Candidate_username);
    setCurrentCandidate(data);
  };

  return (
    <>
      <h1>CandidateSearch</h1>
      <section id='searchSection'>
        <form
          onSubmit={(event) => searchForCandidateByusername(event, searchInput)}
        >
          <input
            type='text'
            name=''
            id=''
            placeholder='Enter a Candidate'
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button type='submit' name='searchBtn'>
            Search
          </button>
        </form>
      </section>
      <CandidateCard
        currentCandidate={currentCandidate}
        addToCandidateList={addToCandidateList}
      />
    </>
  );
};

export default CandidateSearch;
