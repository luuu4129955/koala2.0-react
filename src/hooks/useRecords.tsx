import {useState} from 'react';
import { useUpdate } from './useUpdate';

type RecordItem = {
  tag: {id:string,name:string}
  note: string,
  category: string,
  amount: string,
  createdAt:string
}
export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useUpdate(()=>{
    window.localStorage.setItem('recordsList', JSON.stringify(records));
  },[records])
  const addRecord = (record:RecordItem) => {
    setRecords([...records,record])
  }
  return {records,addRecord};
};
