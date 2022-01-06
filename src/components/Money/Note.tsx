import Icon from 'components/Icon';
import { useRef } from 'react';
import styled from 'styled-components';

type Props = {
  value: string,
  onChange:(value:string)=>void
}

const Note: React.FC<Props> = (props) => {
  const {value, onChange, ...rest} = props;
  const refInput = useRef<HTMLInputElement>(null);
  const inputChanged = () => {
    if (refInput.current!==null){
      onChange(refInput.current.value)
    }
  }
  return (
    <Wrapper>
      <Icon name="notes"></Icon>
      <input type="text"  placeholder="在这里添加备注"
                ref={refInput} onBlur={inputChanged}></input>
    </Wrapper>
  );
};

const Wrapper=styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: center;

  input {
    font-size: inherit;
    padding-left: 16px;
  }`
export {Note};