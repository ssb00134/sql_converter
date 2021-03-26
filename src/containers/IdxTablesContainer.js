import React from "react";
import { useSelector } from "react-redux";
import { changeInput, insert, toggle, remove } from "../modules/IdxTables";
import IdxTables from "../components/IdxTables";
import useActions from "../lib/useActions";

const IdxTablesContainer = () => {
  const { input, IdxTables } = useSelector(({ IdxTables }) => ({
    input: IdxTables.input,
    IdxTables: IdxTables.IdxTables,
  }));

  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );

  return (
    <IdxTables
      input={input}
      IdxTables={IdxTables}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default React.memo(IdxTablesContainer);
