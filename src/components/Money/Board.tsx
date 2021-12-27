import {useState} from 'react';
import {BoardSection} from './Board/BoardSection'
import {calculateOutput} from './Board/calculateOutput'

const Board: React.FC = () => {
  const [output, setOutput] = useState('0');
  const onClickNumber = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    if (text === null) return;
    else if(output.length>=16)return;
    setOutput(calculateOutput(text,output))
  };
  const backspace = () => {
    if (output.length === 1) {
      setOutput('0');
    } else {
      setOutput(output.slice(0, -1));
    }
  }
  const clear = () => {
    setOutput('0')
  }
  return (
    <>
      <BoardSection>
        <div className="board-output">{output}</div>
        <div className="board-input">
          <div className="numbers" onClick={onClickNumber}>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>.</button>
            <button className="zero">0</button>
          </div>
          <div className="result">
            <button className="clear" onClick={clear}>清空</button>
            <button className="back" onClick={backspace}>删除</button>
            <button className="ok">OK</button>
          </div>
        </div>
      </BoardSection>
    </>
  );
};

export default Board;

