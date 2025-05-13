import React from 'react';
import { useTarot } from '../context/TarotContext';
import HomePage from './HomePage';
import TarotDeck from './TarotDeck';
import RevealedCard from './RevealedCard';
import ReadingResult from './ReadingResult';
import StarryBackground from './StarryBackground';

const Layout: React.FC = () => {
  const { readingStep, selectedCards } = useTarot();

  return (
    <div className="layout">
      <StarryBackground />
      <div className="content">
        {readingStep === 'initial' && <HomePage />}
        {['first', 'second', 'third'].includes(readingStep) && !selectedCards?.length && <TarotDeck />}
        {['first', 'second', 'third'].includes(readingStep) && selectedCards?.length > 0 && <RevealedCard />}
        {readingStep === 'result' && <ReadingResult />}
      </div>
    </div>
  );
};

export default Layout;