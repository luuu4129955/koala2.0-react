import {MouseEventHandler} from 'react';
import styled from 'styled-components';

type Props = {
  name: string
  className: string
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button: React.FC<Props> = (props) => {
  const {name, className, children, ...rest} = props;
  return (
    <ButtonWrapper className={className}>
      <button  {...rest}>{name}</ button>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.div`
  text-align: center;
  margin: 64px 18px 64px 18px;
  border-radius: 8px;

  button {
    font-size: 16px;
    padding: 9px 18px;
    color: #fff;
    letter-spacing: 6px;
  }
`;
export {Button};