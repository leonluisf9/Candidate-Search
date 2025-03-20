import { useState } from 'react';
import { searchGithubUser } from '../api/API';
import CandidateCard from '../components/Candidate.Card';
import type Candidate from '../interfaces/Candidate.interface';


const CandidateSearch = () => {
  const [currentCandidate, setCurrentCandidate] = useState<Candidate | null>(null);
  const [searchInput, setSearchInput] = useState<string>('');

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
        <button type='submit' id='searchBtn'>
          Search
        </button>
      </form>
    </section>
    <CandidateCard
      currentCandidate={currentCandidate}
      // addToWatchList={addToWatchList}
    />
  </>
  )
};

export default CandidateSearch;
