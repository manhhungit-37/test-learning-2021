import React, { useState } from 'react';

function Active() {
  const [active, setActive] = useState({
    obj: [
      {
        id: 1,
        item: "item1",
      },
      {
        id: 2,
        item: "item2",
      },
      {
        id: 3,
        item: "item3",
      },
      {
        id: 4,
        item: "item4",
      }
    ],
    activeObj: 1
  });

  function handleClick(index) {
    setActive({...active, activeObj: active.obj[index].id})
  }

  return (
    <div>
      <div className="flex">
        {active.obj.map((element, index) => (
          <div key={index} className={`item ${active.activeObj === element.id ? "active" : ""}`} onClick={() => handleClick(index)}>{element.item}</div>
        ))}
      </div>
    </div>
  );
}

export default Active; 