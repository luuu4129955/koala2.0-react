import {useState} from 'react';
import styled from 'styled-components';

const Board: React.FC = () => {
  const [output, setOutput] = useState<string>('0');
  const x = (e: React.MouseEvent) => {
    const text = (e.target as HTMLButtonElement).textContent;
    console.log(text);
    if (text === null) return;
    switch (text) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
        if (output === '0') {
          setOutput(text);
        } else {
          setOutput(output + text);
        }
        break;
      case '删除':
        console.log('删除');
        break;
      case '清空':
        console.log('清空');
        break;
      case 'OK':
        console.log('确认');
        break;

    }
  };
  return (
    <>
      <BoardSection>
        <div className="board-output">{output}</div>
        <div className="board-input">
          <div className="numbers" onClick={x}>
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
            <button className="clear">清空</button>
            <button className="back">删除</button>
            <button className="ok">OK</button>
          </div>
        </div>
      </BoardSection>
    </>
  );
};

export default Board;

const BoardSection = styled.section`
  display: flex;
  flex-direction: column;
  background-color: #fff;

  .board-output {
    text-align: right;
    padding: 16px 18px;
    font-size: 24px;
    height: 62px;
    font-family: Consolas, monospace;
    box-shadow: inset 0px -1px #d6d6d6;
  }

  .board-input {
    display: flex;
    flex-direction: row;

    .numbers {
      display: grid;
      width: 80%;
      grid-template-columns: repeat(3, 33.3333%);
      grid-template-rows: repeat(5, 25%);

      .zero {
        grid-column-start: 2;
        grid-column-end: 4;
        background-color: #b8b8b8;
      }

      button {
        padding: 16px 32px;

        &:nth-child(1) {
          background: #f5f5f5;
        }

        &:nth-child(2), &:nth-child(4) {
          background: #ebebeb;
        }

        &:nth-child(3), &:nth-child(5), &:nth-child(7) {
          background: #e1e1e1;
        }

        &:nth-child(6), &:nth-child(8), &:nth-child(10) {
          background: #d6d6d6;
        }

        &:nth-child(9) {
          background: #c2c2c2;
        }
      }
    }

    .result {
      width: 20%;
      display: grid;
      grid-template-rows: 25% 25% 50%;

      button {color: #fff}

      .clear {background-color: #f76361;}

      .back {background-color: #ffb850;

        .icon {
          fill: #fff;
        }
      }

      .ok {background-color: #a2dd9e;}
    }
  }
`;
