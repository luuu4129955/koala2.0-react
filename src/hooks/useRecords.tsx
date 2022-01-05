import {useEffect, useState} from 'react';
import {useUpdate} from './useUpdate';

export type RecordItem = {
  id:string
  tag: { id: string, name: string }
  note: string,
  category: string,
  amount: string,
  createdAt: string
}
export const useRecords = () => {
  const [records, setRecords] = useState<RecordItem[]>([]);
  useEffect(()=>{
    let localRecords = JSON.parse(window.localStorage.getItem('recordsList') || '[]');
    setRecords(localRecords);
  },[])
  useUpdate(() => {
    window.localStorage.setItem('recordsList', JSON.stringify(records));
  }, [records]);
  const addRecord = (record: RecordItem) => {
      setRecords([...records, record]);
  };
  const deleteRecord = (id:string) => {
    setRecords(records.filter(r=>r.id!==id))
  }
  return {records, addRecord,deleteRecord};
};
