import React from 'react';
import { MdAdd } from 'react-icons/md';
import Card from '../Card';

import { Container } from './styles';

export default function List({ data, index: listIndex }) {
  return (
    <>
      <Container done={data.done}>
        <header>
          <h2>{data.title}</h2>
          {data.creatable && (
            <button type="button">
              <MdAdd size={24} color="#fff" title="Criar nova" />
            </button>
          )}
        </header>

        <ul>
          {data.cards.map((card, index) => (
            <Card
              key={card.id}
              data={card}
              index={index}
              listIndex={listIndex}
            />
          ))}
        </ul>

        <span className="phrase">{data.phrase}</span>
      </Container>
    </>
  );
}
