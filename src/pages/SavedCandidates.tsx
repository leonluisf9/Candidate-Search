import { useState, useEffect } from 'react';
import Candidate from '../interfaces/Candidate.interface';
import { FaMinusCircle } from 'react-icons/fa';

const SavedCandidates = () => {
  const [candidatesList, setcandidatesList] = useState<Candidate[]>([]);


  useEffect(() => {
    const candidates = JSON.parse(localStorage.getItem('savedCandidates') || '[]');
    setcandidatesList(candidates);
  }, []);

    const RejectCandidate = (login: string) => {
    const updatedList = candidatesList.filter(candidate => candidate.login !== login);
    setcandidatesList(updatedList);
    localStorage.setItem('savedCandidates', JSON.stringify(updatedList));
  };

  if (candidatesList.length === 0) {
    return <h2>There are no candidates available.</h2>;
  }

  return (
    <div>
      <h1>Potential Candidates</h1>
      <table>
        <thead>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Location</th>
            <th>Email</th>
            <th>Company</th>
            <th>Bio</th>
            <th>Reject</th>
          </tr>
        </thead>
        <tbody>
          {candidatesList.map((candidate) => (
            <tr key={candidate.id}>
              <td><img src={candidate.avatar_url} alt={candidate.login} style={{ width: '50px' }} /></td>
              <td>{candidate.name || 'N/A'}</td>
              <td>{candidate.location || 'N/A'}</td>
              <td>{candidate.email || 'N/A'}</td>
              <td>{candidate.company || 'N/A'}</td>
              <td>{candidate.bio || 'N/A'}</td>
              <td>
                <FaMinusCircle 
                 style={{ 
                 fontSize: '30px', 
                 color: 'red', 
                 }} 
                 onClick={() => {
                     RejectCandidate(candidate.login);
                 }}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavedCandidates;