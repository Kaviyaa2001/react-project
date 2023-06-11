import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

const List = ({ title, items }) => {
  return (
    <div className="list-container">
      <h3>{title}</h3>
      <Droppable droppableId={title}>
        {(provided) => (
          <ul {...provided.droppableProps} ref={provided.innerRef}>
            {items.map((item, index) => (
              <Draggable key={item.id} draggableId={item.id} index={index}>
                {(provided) => (
                  <li
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}
                    ref={provided.innerRef}
                  >
                    {item.content}
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </div>
  );
};

const OutputView = () => {
  const [items, setItems] = useState([
    { id: 'item1', content: 'Cat' },
    { id: 'item2', content: 'Dog' },
    { id: 'item3', content: 'cow' },
  ]);
  const [items1] = useState([
    { id: 'item1', content: 'Car' },
    { id: 'item2', content: 'Item 2' },
    { id: 'item3', content: 'Item 3' },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return; // Dropped outside the list

    const updatedItems = [...items];
    const [movedItem] = updatedItems.splice(result.source.index, 1);
    updatedItems.splice(result.destination.index, 0, movedItem);

    setItems(updatedItems);
  };

  return (
    <div>
      <h1>Drag and Drop Lists</h1>
      <div className="lists-container">
        <DragDropContext onDragEnd={handleDragEnd}>
          <List title="List 1" items={items} />
          <List title="List 2" items={items1} />
        </DragDropContext>
      </div>
    </div>
  );
};

export default OutputView;