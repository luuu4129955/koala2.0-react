import { ChangeEventHandler } from 'react';
import styled from 'styled-components';
import FormItem from './FormItem';

type Props={
  value: string,
  onChange:(value: string)=>void
}

const Note: React.FC<Props> = (props) => {
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    props.onChange(e.target.value);
  };
  return (
    <>
      <FormItem type="text" text="备注" placeholder="在这里添加备注" onChange={onChange}></FormItem>
    </>
  );
};

const Wrapper = styled.section`
  padding: 10px 10px;
  display: flex;
  align-items: center;
`;
export {Note};