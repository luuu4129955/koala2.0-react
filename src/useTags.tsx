import {useEffect, useRef, useState} from 'react';
import createId from 'lib/createdId';
import {useUpdate} from 'hooks/useUpdate';

type Tag = {
  id: string,
  name: string
}
const useTags = () => {
  const [myTags, setMyTags] = useState<Tag[]>([]);
  useEffect(() => {

    let localTags = JSON.parse(window.localStorage.getItem('tagsList') || '[]');
    setMyTags(localTags);
  }, []);//组件挂载后执行
  useUpdate(() => {
    window.localStorage.setItem('tagsList', JSON.stringify(myTags));
  }, [myTags]);
  const findTag = (id: string) => myTags.find(t => t.id === id);
  const findTagIndex = (id: string) => {
    let result = -1;
    for (let i = 0; i < myTags.length; i++) {
      if (myTags[i].id === id) {
        result = i;
        break;
      }
    }
  };

  const deleteTag = (id: string|undefined) => {
    setMyTags(myTags.filter(t=>t.id!==id))
  };
  const updateTag = (id: string|undefined, obj: { name: string }) => {
    if (obj.name===null){
      return window.alert('标签名不能为空！')
    }else if (obj.name.length>4){
      return window.alert('标签名最长4个字符！')
    }
    setMyTags(myTags.map(t=>t.id===id?{id,name:obj.name}:t))
  };
  const addTag = () => {
    let myNewTag: Tag = {id: '', name: ''};
    const text = window.prompt('请输入标签名：');
    if (text !== null) {
      myNewTag.name = text;
      myNewTag.id = createId().toString();
    }
    ;
    if (!myNewTag.name) {
      return window.prompt('标签名不能为空！');
    } else if (myTags.map(t => t.name).indexOf(myNewTag.name) >= 0) {
      return window.alert('标签名重复了');
    } else if (myNewTag.name.length > 4) {
      return window.prompt('标签名最长4个字符!');
    }
    setMyTags([...myTags, {id: myNewTag.id, name: myNewTag.name}]);
  };
  return {myTags, setMyTags,findTag, addTag, deleteTag, updateTag};
};
export {useTags};