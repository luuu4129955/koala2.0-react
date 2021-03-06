import styled from "styled-components";

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

export {BoardSection}
