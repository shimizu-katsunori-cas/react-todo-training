/** TODO項目 */
export type Todo = {
  /** ID */
  id: string;
  /** TODO名 */
  name: string;
  /** 完了したか */
  isDone?: boolean;
  /** 締切 */
  deadline?: Date;
  /** 作成日 */
  createdAt: Date;
};
