import { useRef, useState } from 'react';
import styled from 'styled-components';

const FormItem: React.FC = () => {
  const [note,setNote]=useState('')
  const refInput=useRef<HTMLInputElement>(null)
  const onBlur = () => {
    if (refInput.current!==null){
      setNote(refInput.current.value)
    }
  };

  return (
    <FormItemSection>
      备注：<input type="text" placeholder="在这里添加备注~"
                ref={refInput} onBlur={onBlur}/>
    </FormItemSection>
  );
};
export default FormItem;

const FormItemSection = styled.section`
  padding: 10px 10px;
  display: flex;
  align-items: center;

  input {
    font-size: inherit;
    padding-left: 16px;
  }
`;