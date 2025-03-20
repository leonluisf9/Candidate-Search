import React, { useState, useEffect } from 'react';
import type Candidate from '../interfaces/Candidate.interface';
import { IoAddCircle } from 'react-icons/io5';
import { FaMinusCircle } from 'react-icons/fa';

type CandidateCardProps = {
  currentCandidate: Candidate;
  addToCandidateList?: (() => void | null);
  onCandidateList?: boolean | null;
  removeFromStorage?:     
  | ((
      e: React.MouseEvent<SVGSVGElement, MouseEvent>,
      currentlyOnCandidateList: boolean | null | undefined,
      login: string | null
    ) => void)
  | null;
};

const CandidateCard = ({ 
  currentCandidate,
  addToCandidateList,
  onCandidateList,
  removeFromStorage,
 }: CandidateCardProps) => {

  const handleAddToCandidateList = () => {
    addToCandidateList?.();
  };
  return (
    <>
      {currentCandidate?.login ? (
        <section className='CandidateCard'>       
          <article className='details'>
           {<>
            <img src={currentCandidate.avatar_url ?? undefined} />
            <h2>{currentCandidate.login}</h2>
            <h2>Location: {currentCandidate.location}</h2>
            <h2>Email: {currentCandidate.email}</h2>
            <h2>Company: {currentCandidate.company}</h2>
            <h2>Bio: {currentCandidate.bio}</h2>
          </>}
          </article>
          <aside className='icons'>

  {/* REMOVE button */}
      <FaMinusCircle 
         style={{ 
         fontSize: '80px', 
         color: onCandidateList ? 'red' : 'gray', 
        //  cursor: onCandidateList ? 'pointer' : 'not-allowed'
         }} 
         onClick={(e: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
            if (onCandidateList) {
              removeFromStorage?.(e, onCandidateList, currentCandidate.login);
            }
         }}
      />
    {/* ADD button */}
      <IoAddCircle 
         style={{ 
         fontSize: '80px', 
         color: onCandidateList ? 'gray' : 'green', 
         cursor: onCandidateList ? 'not-allowed' : 'pointer',
         marginRight: '1rem'
        }} 
        onClick={() => {
        if (!onCandidateList) {
           handleAddToCandidateList();
        }
      }}
  />
</aside>

        </section>
      ) : (
        <h1 style={{ margin: '16px 0' }}>Please search for a Candidate.</h1>
      )}
    </>
  );
};

export default CandidateCard;
