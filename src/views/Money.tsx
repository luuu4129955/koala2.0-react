import Board from 'components/Money/Board';
import {Note} from 'components/Money/Note';
import Tabs from 'components/Money/Tabs';
import Tags from 'components/Money/Tags';
import {useState} from 'react';
import {useRecords} from 'hooks/useRecords';

type Category = '-' | '+'

function Money() {
  const [record, setRecord] = useState({
    tag: {id: 'foods', name: '餐饮'},
    note: '',
    category: '-' as Category,
    amount: '0',
    createdAt:new Date().toISOString()//ISO 8601
  });
  const {records, addRecord} = useRecords();
  const onChange = (obj: Partial<typeof record>) => {
    setRecord({...record, ...obj});
  };
  const submit = () => {
    addRecord(record);
    window.alert('保存成功！')
  };
  return (
    <>
      <Tags value={record.tag} onChange={tag => onChange({tag})}></Tags>
      <Note value={record.note} onChange={note => onChange({note})}></Note>
      <Tabs value={record.category} onChange={category => onChange({category})}></Tabs>
      <Board value={record.amount} onChange={amount => onChange({amount})}
             onOk={submit}
      ></Board>
    </>
  );
}

export default Money;