import Board from 'components/Money/Board';
import {Note} from 'components/Money/Note';
import Tabs from 'components/Money/Tabs';
import Tags from 'components/Money/Tags';
import {useState} from 'react';
import {useRecords} from 'hooks/useRecords';
import styled from 'styled-components';
import createId from 'lib/createdId';

type Category = '-' | '+'

function Money() {
  const [record, setRecord] = useState({
    id: '',
    tag: {id: 'foods', name: '餐饮'},
    note: '',
    category: '-' as Category,
    amount: '0',
    createdAt: new Date().toISOString()//ISO 8601
  });
  const {records, addRecord} = useRecords();
  const onChange = (obj: Partial<typeof record>) => {
    setRecord({...record, ...obj});
  };
  const submit = () => {
    if (record.amount === '0') {
      return window.alert('金额不能为0哦！');
    }
    addRecord(record);
    window.alert('成功保存一笔记账哦~');
    setRecord({...record, id:createId().toString(),amount: '0'});
  };
  return (
    <>
      <Tags value={record.tag} onChange={tag => onChange({tag})}></Tags>
      <Note value={record.note} onChange={note => onChange({note})}></Note>
      <TabsWrapper><Tabs value={record.category} onChange={category => onChange({category})}></Tabs></TabsWrapper>
      <Board value={record.amount} onChange={amount => onChange({amount})}
             onOk={submit}
      ></Board>
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

export default Money;