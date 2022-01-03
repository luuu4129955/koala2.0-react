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
    console.log('didMount');
    let localTags = JSON.parse(window.localStorage.getItem('tagsList') || '[]');
    setMyTags(localTags);
  }, []);//组件挂载后执行
  useUpdate(() => {
    window.localStorage.setItem('tagsList', JSON.stringify(myTags));
  }, [myTags]);
  const id = createId().toString();
  const findTag = (id: string) => myTags.filter(t => t.id === id)[0];
  const findTagIndex = (id: string) => {
    let result = -1;
    for (let i = 0; i < myTags.length; i++) {
      if (myTags[i].id === id) {
        result = i;
        break;
      }
    }
  };

  const deleteTag = () => {
  };
  const updateTag = (id: string, obj: { name: string }) => {
    const index = findTagIndex(id);
    const myTagsClone = JSON.parse(JSON.stringify(myTags));
    myTagsClone.splice(index, 1, {id: id, name: obj.name});
    setMyTags(myTagsClone);
  };
  const addTag = () => {
    let myNewTag: Tag = {id: '', name: ''};
    const text = window.prompt('请输入标签名：');
    if (text !== null) {
      myNewTag.name = text;
      myNewTag.id = id;
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
  return {myTags, setMyTags, addTag, deleteTag, updateTag};
};
export {useTags};