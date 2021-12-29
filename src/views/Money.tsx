import Board from 'components/Money/Board';
import {Note} from 'components/Money/Note';
import Tabs from 'components/Money/Tabs';
import Tags from 'components/Money/Tags';
import {useState} from 'react';

type Category = '-' | '+'

function Money() {
  const [record, setRecord] = useState({
    tag: {id: 'foods', name: '餐饮'},
    note: '',
    category: '-' as Category,
    amount: '0'
  });
  const onChange = (obj: Partial<typeof record>) => {
    setRecord({...record, ...obj});
  };
  return (
    <>
      <Tags value={record.tag} onChange={tag => onChange({tag})}></Tags>
      <Note value={record.note} onChange={note => onChange({note})}></Note>
      <Tabs value={record.category} onChange={category => onChange({category})}></Tabs>
      <Board value={record.amount} onChange={amount => onChange({amount})}></Board>
    </>
  );
}

export default Money;