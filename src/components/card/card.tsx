import React, { FC } from 'react';
import './card.styl';

interface CardProps {}

const Card: FC<CardProps> = () => (
  <div className="card" data-testid="Card">
    Card Component
  </div>
);

export default Card;
