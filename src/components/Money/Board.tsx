import styled from 'styled-components';

const Board = () => {
  return (
    <>
      <BoardSection>
        <div className="board-output">100</div>
        <div className="board-input">
          <div className="numbers">
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
      $bg:red
      .zero{
        grid-column-start: 2;
        grid-column-end: 4;
      }
      button {
        padding: 16px 32px;
        &:nth-child(1) {
          background: $bg;
        }
        &:nth-child(2), &:nth-child(5) {
          background: darken($bg, 4%);
        }
        &:nth-child(3), &:nth-child(6), &:nth-child(9) {
          background: darken($bg, 4%*2);
        }
        &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
          background: darken($bg, 4%*3);
        }
        &:nth-child(8), &:nth-child(11), &:nth-child(14) {
          background: darken($bg, 4%*4);
        }
        &:nth-child(12), &:nth-child(15) {
          background: darken($bg, 4%*5);
        }
        &:nth-child(16) {
          background: darken($bg, 4%*6);
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
        .icon{
          fill: #fff;
        }
      }
      .ok {background-color: #a2dd9e;}
    }
  }
`;
