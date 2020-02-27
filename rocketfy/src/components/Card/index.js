import React, { useRef, useContext } from 'react';
import { useDrag, useDrop } from 'react-dnd';

import BoardContext from '../Board/context';

import { Container, Label } from './styles';

export default function Card({ data, index, listIndex }) {
  const ref = useRef();
  const { move } = useContext(BoardContext);

  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'CARD', index, listIndex },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor) {
      const draggedListIndex = item.listIndex;
      const targetListIndex = listIndex;

      // what's the index of the card being dragged
      const draggedIndex = item.index;

      // what's the target of being dragged
      const targetIndex = index;

      // if the card is foing over itself, there'll be no action
      if (
        draggedIndex === targetIndex &&
        draggedListIndex === targetListIndex
      ) {
        return;
      }

      // Is the width of the element
      const targetSize = ref.current.getBoundingClientRect();

      const targetCenter = (targetSize.bottom - targetSize.top) / 2;

      // return how much of the item has been dragged
      const draggedOffset = monitor.getClientOffset();

      // return the distance that the item entered within another item
      const draggedTop = draggedOffset.y - targetSize.top;

      // avoiding calculations when the item should not be dragged
      if (draggedIndex < targetIndex && draggedTop < targetCenter) {
        return;
      }

      if (draggedIndex > targetIndex && draggedTop > targetCenter) {
        return;
      }

      move(draggedListIndex, targetListIndex, draggedIndex, targetIndex);

      item.index = targetIndex;
      item.listIndex = targetListIndex;
    }
  });

  dragRef(dropRef(ref));

  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map(label => (
          <Label color={label} key={label} />
        ))}
      </header>
      <p>{data.content}</p>
      {data.user && <img src={data.user} alt="Avatar do usuário logado" />}
    </Container>
  );
}
