import React, { useCallback, useState } from "react";

const SqlInsert = ({ onInsert }) => {
  const [value, setvalue] = useState("");
  const onChange = useCallback((e) => setvalue(e.target.value));
};

const onSubmit = useCallback(
  (e) => {
    onInsert(value);
    setvalue("");
    e.preventDefault();
  },
  [onsubmit, value]
);

function TableIndex() {
  return (
    <form className="TableIndex" onsubmit={onSubmit}>
      <h1>기준이 될 테이블을 입력해주세요</h1>
      <textarea
        placeholder="테이블"
        value={value}
        onChange={onChange}
      ></textarea>
    </form>
  );
}

export default TableIndex;
