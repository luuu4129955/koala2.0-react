import {useState} from 'react';
import {BoardSection} from './Board/BoardSection';
import {calculateOutput} from './Board/calculateOutput';

type Props={
  value:string,
  onChange:(output:string)=>void
  onOk:()=>void
}

const Board: React.FC<Props> = (props) => {
  const numbersList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
  const output=props.value
  const onClickNumber = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) return;
    else if (output.length >= 16) return;
    props.onChange(calculateOutput(text, output));
  };
  const backspace = () => {
    if (output.length === 1) {
      props.onChange('0');
    } else {
      props.onChange(output.slice(0, -1));
    }
  };
  const clear = () => {
    props.onChange('0');
  };
  const x = () => {
    props.onOk()
  }
  return (
    <>
      <BoardSection>
        <div className="board-output">{output}</div>
        <div className="board-input">
          <div className="numbers" onClick={onClickNumber}>
            {numbersList.map(n => <button key={n}>{n}</button>)}
            <button className="zero">0</button>
          </div>
          <div className="result">
            <button className="clear" onClick={clear}>清空</button>
            <button className="back" onClick={backspace}>删除</button>
            <button className="ok" onClick={x}>OK</button>
          </div>
        </div>
      </BoardSection>
    </>
  );
};

export default Board;

