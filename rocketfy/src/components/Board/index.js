import React, { useState } from 'react';
import produce from 'immer';
import { MdAdd } from 'react-icons/md';
import { loadLists } from '../../services/api';
import BoardContext from './context';

import List from '../List';
import { Container, Button, WrapperButton } from './styles';

const data = loadLists();

export default function Board() {
  const [lists, setLists] = useState(data);

  function move(fromList, toList, from, to) {
    setLists(
      produce(lists, draft => {
        const dragged = draft[fromList].cards[from];

        draft[fromList].cards.splice(from, 1);
        draft[toList].cards.splice(to, 0, dragged);
      })
    );
  }

  return (
    <BoardContext.Provider value={{ lists, move }}>
      <Container>
        {lists.map((list, index) => (
          <List key={list.title} data={list} index={index} />
        ))}
      </Container>
      <WrapperButton>
        <Button type="button" title="Criar nova">
          <MdAdd size={24} color="#fff" title="Criar nova" />
        </Button>
      </WrapperButton>
    </BoardContext.Provider>
  );
}
