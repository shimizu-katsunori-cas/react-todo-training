import { FC } from 'react';

export const Specification: FC = () => {
  return (
    <details style={{ padding: '5px 0' }}>
      <summary>仕様</summary>
      <ul style={{ margin: 0 }}>
        <li>TODO名(必須)、締切日(任意)のフォームからTODOを作成できる</li>
        <li>
          TODO一覧を表示できるが、フィルタの設定で未完了のTODOだけに絞り込むことができる
        </li>
        <li>TODOは完了・削除を行うことができる</li>
      </ul>
    </details>
  );
};
