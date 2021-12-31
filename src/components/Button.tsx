import styled from 'styled-components';

type Props = {
  name: string
  className:string
}
const Button = (props: Props) => {
  return (
    <Btn className={props.className}>{props.name}</Btn>
  );
};

const Btn = styled.div`
  text-align: center;
  margin: 64px 18px 64px 18px;
  padding: 9px 18px;
  border-radius: 8px;
  color: #fff;
  letter-spacing: 6px;
`;
export {Button};