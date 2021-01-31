export interface ActionReturn<T> {
  type: string;
  payload?: T;
}

export function createAction<T>(
  type: string
): (payload?: T) => ActionReturn<T> {
  return function actionCreator(payload?: T): ActionReturn<T> {
    return payload ? { type, payload } : { type };
  };
}
