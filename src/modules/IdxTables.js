import { createAction, handleActions } from "redux-actions";
import produce from "immer";

const CHANGE_INPUT = "IdIdxTables/CHANGE_INPUT"; // 인풋 값을 변경함
const INSERT = "IdIdxTables/INSERT"; // 새로운 todo 를 등록함
const TOGGLE = "IdIdxTables/TOGGLE"; // todo 를 체크/체크해제 함
const REMOVE = "IdIdxTables/REMOVE"; // todo 를 제거함

export const changeInput = createAction(CHANGE_INPUT, (input) => input);

let id = 3; // insert 가 호출 될 때마다 1씩 더해집니다.
export const insert = createAction(INSERT, (text) => ({
  id: id++,
  text,
  done: false,
}));

export const toggle = createAction(TOGGLE, (id) => id);
export const remove = createAction(REMOVE, (id) => id);

const initialState = {
  input: "",
  IdIdxTables: [
    {
      id: 1,
      text: "리덕스 기초 배우기",
      done: true,
    },
    {
      id: 2,
      text: "리액트와 리덕스 사용하기",
      done: false,
    },
  ],
};

const IdIdxTables = handleActions(
  {
    [CHANGE_INPUT]: (state, { payload: input }) =>
      produce(state, (draft) => {
        draft.input = input;
      }),
    [INSERT]: (state, { payload: todo }) =>
      produce(state, (draft) => {
        draft.IdIdxTables.push(todo);
      }),
    [TOGGLE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const todo = draft.IdIdxTables.find((todo) => todo.id === id);
        todo.done = !todo.done;
      }),
    [REMOVE]: (state, { payload: id }) =>
      produce(state, (draft) => {
        const index = draft.IdIdxTables.findIndex((todo) => todo.id === id);
        draft.IdIdxTables.splice(index, 1);
      }),
  },
  initialState
);

export default IdIdxTables;