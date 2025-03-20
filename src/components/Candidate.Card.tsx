import React from 'react';
import type Candidate from '../interfaces/Candidate.interface';

interface CandidateCardProps {
  currentCandidate: Candidate | null;
}

const CandidateCard: React.FC<CandidateCardProps> = ({ currentCandidate }) => {
  if (!currentCandidate) return null;

  return (
    <div className="candidate-card">
      <img src={currentCandidate.avatar_url ?? undefined} />
      <h2>{currentCandidate.login}</h2>
      <h2>Location: {currentCandidate.location}</h2>
      <h2>Email: {currentCandidate.email}</h2>
      <h2>Company: {currentCandidate.company}</h2>
      <h2>Bio: {currentCandidate.bio}</h2>
    </div>
  );
};

export default CandidateCard;