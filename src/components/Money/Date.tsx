import Icon from 'components/Icon';
import styled from 'styled-components';
import day from 'dayjs';
import React, {useEffect, useState} from 'react';

type Props = {
  value: string
  onChange: (value: string) => void
}
const DateInput: React.FC<Props> = (props) => {
  const {value, onChange} = props;
  const [date, setDate] = useState(value);
  useEffect(()=>{onChange(date)},[date])
  return (
    <Wrapper>
      <Icon name="date"/>
      <input type="date" id="start" name="trip-start"
             value={day(date).format('YYYY-MM-DD')}
             max={day(new Date().toString()).format('YYYY-MM-DD')}
             onChange={(e)=>{setDate(e.target.value)}}
      />
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
export {DateInput};