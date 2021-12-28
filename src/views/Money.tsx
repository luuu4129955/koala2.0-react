import Board from 'components/Money/Board';
import FormItem from 'components/Money/FormItem';
import Tabs from 'components/Money/Tabs';
import Tags from 'components/Money/Tags';
import { useState } from 'react';

type Category='-'|'+'

function Money() {
  const [record,setRecord]=useState({
    tag:{id:"foods",name:"餐饮"} ,
    note:'',
    category:'-' as Category,
    amount:'0'
  })
  return (
    <>
      {record.tag.name}
      {record.note}
      {record.category}
      {record.amount}
      <Tags value={record.tag} onChange={(tag)=>setRecord({...record,tag})}></Tags>
      <FormItem value={record.note} onChange={(note)=>setRecord({...record,note})}></FormItem>
      <Tabs value={record.category} onChange={(category)=>setRecord({...record,category})}></Tabs>
      <Board value={record.amount} onChange={(amount)=>setRecord({...record,amount})}></Board>
    </>
  );
}

export default Money;