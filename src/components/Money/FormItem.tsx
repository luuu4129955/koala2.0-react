import {useRef, useState} from 'react';
import styled from 'styled-components';

type Props = {
  value: string,
  onChange: (value:string) => void
}
const FormItem: React.FC<Props> = (props) => {
  const note=props.value
  const refInput = useRef<HTMLInputElement>(null);
  const onBlur = () => {
    if (refInput.current !== null) {
      props.onChange(refInput.current.value);
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