import {useState} from 'react';

type Tag = {
  id: string,
  name: string
}
const useTags = () => {
  const [myTags, setMyTags] = useState<Tag[]>([{id: '', name: ''}]);
  return {myTags, setMyTags};
};
export {useTags};