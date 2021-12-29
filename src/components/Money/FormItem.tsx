import {useRef, useState} from 'react';
import styled from 'styled-components';

type Props = {
  text: string,
} & React.InputHTMLAttributes<HTMLInputElement>

const FormItem: React.FC<Props> = (props) => {
  const {text, value, onChange, ...rest} = props;
  const refInput = useRef<HTMLInputElement>(null);
   return (
    <FormItemSection>
      {text}
      <input {...rest} ref={refInput} />
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