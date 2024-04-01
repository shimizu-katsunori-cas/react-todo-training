import { FC, useState } from 'react';

import { Todo } from './TodoType';
import { Specification } from './components/Specification';

// TODOリストの初期データ
const INITIAL_TODO_LIST: Todo[] = [
  {
    id: crypto.randomUUID(),
    name: 'タスク',
    createdAt: new Date('2024/01/01'),
  },
  {
    id: crypto.randomUUID(),
    name: '締切タスク',
    deadline: new Date('2024/04/30'),
    createdAt: new Date('2024/01/01'),
  },
  {
    id: crypto.randomUUID(),
    name: '完了したタスク',
    isDone: true,
    createdAt: new Date('2024/01/01'),
  },
];

const App: FC = () => {
  const [todoList, setTodoList] = useState(INITIAL_TODO_LIST);

  return (
    <div>
      <h3 style={{ margin: 0 }}>TODOリスト</h3>
      <Specification />
      <hr />
      <div style={{ border: 'solid 1px #ccc' }}>
        {todoList.map((todo, index) => {
          return (
            <div
              key={todo.id}
              style={{
                borderTop: index > 0 ? 'solid 1px #ccc' : undefined,
              }}
            >
              {JSON.stringify(todo)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
