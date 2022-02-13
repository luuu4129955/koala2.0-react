import Board from 'components/Money/Board';
import {Note} from 'components/Money/Note';
import Tabs from 'components/Money/Tabs';
import Tags from 'components/Money/Tags';
import {useState} from 'react';
import {useRecords} from 'hooks/useRecords';
import styled from 'styled-components';
import createId from 'lib/createdId';
import {DateInput} from 'components/Money/Date';
import day from 'dayjs';

type Category = '-' | '+'

function Money() {
  const [record, setRecord] = useState({
    id: window.localStorage.getItem('_idMax') || '0',
    tag: {id: 'foods', name: '餐饮'},
    note: '',
    category: '-' as Category,
    amount: '0',
    createdAt: day(new Date().toISOString()).format('YYYY-MM-DD')//ISO 8601
  });
  const {addRecord} = useRecords();
  const onChange = (obj: Partial<typeof record>) => {
    setRecord({...record, ...obj});
  };
  const submit = () => {
    if (record.amount === '0') {
      return window.alert('金额不能为0哦！');
    }
    addRecord(record);
    window.alert('成功保存一笔记账哦~');
    setRecord({...record, id: createId().toString(), amount: '0'});
  };
  return (
    <>
      <Tags value={record.tag} onChange={tag => onChange({tag})}/>
      <InputWrapper>
        <DateInput value={record.createdAt} onChange={createdAt => onChange({createdAt})}/>
        <Note value={record.note} onChange={note => onChange({note})}/>
      </InputWrapper>
      <TabsWrapper>
        <Tabs value={record.category} onChange={category => onChange({category})}/></TabsWrapper>
      <Board value={record.amount} onChange={amount => onChange({amount})} onOk={submit}/>
    </>
  );
}

const TabsWrapper = styled.div`
  li {
    background-color: #a2dd9e;
    color: #fff;

    &.selected::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 4px;
      background: #6e72a4;
    }
  }
`;
const InputWrapper=styled.div`
display: flex;
`
export default Money;