import {useState} from 'react';
import createId from 'lib/createdId';


type Tag = {
  id: string,
  name: string
}
const useTags = () => {
  const [myTags, setMyTags] = useState<Tag[]>([]);
  const id = createId().toString();
  const onFetchTags = () => {
    return window.localStorage.getItem('tagList');
  };
  const onSaveTag = () => {
    window.localStorage.setItem('tagList', JSON.stringify(myTags));
  };
  const onRemoveTag = () => {

  };
  const onAddTag = () => {
    let myNewTag: Tag = {id: '', name: ''};
    const text = window.prompt('请输入标签名：');
    if (text !== null) {
      myNewTag.name = text;
      myNewTag.id = id;
    }
    ;
    console.log(myNewTag);
    if (!myNewTag) {
      return window.prompt('标签名不能为空！');
    } else if (myNewTag.name.length > 4) {
      return window.prompt('标签名最长4个字符');
    }
    setMyTags([...myTags, {id, name: myNewTag.name}]);
    onSaveTag();
    console.log(myTags);
  };
  return {myTags, setMyTags, onFetchTags, onAddTag, onSaveTag, onRemoveTag};
};
export {useTags};