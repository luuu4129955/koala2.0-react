import Icon from 'components/Icon';
import React, {useRef} from 'react';
import styled from 'styled-components';

type Props = {
  value: string,
  onChange: (value: string) => void
}

const Note: React.FC<Props> = (props) => {
  const {onChange} = props;
  const refInput = useRef<HTMLInputElement>(null);
  const inputChanged = () => {
    if (refInput.current !== null) {
      onChange(refInput.current.value);
    }
  };
  return (
    <Wrapper>
      <Icon name="notes"/>
      <input type="text" placeholder="添加备注~"
             ref={refInput} onBlur={inputChanged}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px 10px;
  display: flex;
  align-items: center;

  input {
    font-size: inherit;
    padding-left: 16px;
  }`;
export {Note};