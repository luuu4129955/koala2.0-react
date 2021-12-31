import {useState} from 'react';
import createId from 'lib/createdId';


type Tag = {
  id: string,
  name: string
}
const useTags = () => {
  const [myTags, setMyTags] = useState<Tag[]>([{id: '111', name: '测试1'}, {id: '222', name: '测试2'}, {
    id: '333',
    name: '测试3'
  }]);
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
  const onFetchTags = () => {
    return window.localStorage.getItem('tagList');
  };
  const onSaveTag = () => {
    window.localStorage.setItem('tagList', JSON.stringify(myTags));
  };
  const deleteTag = () => {
  };
  const onUpdateTag = (id: string, obj: { name: string }) => {
    const index = findTagIndex(id);
    const myTagsClone = JSON.parse(JSON.stringify(myTags));
    myTagsClone.splice(index,1,{id:id,name:obj.name})
    setMyTags(myTagsClone)
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
      return window.prompt('标签名最长4个字符!');
    }
    setMyTags([...myTags, {id, name: myNewTag.name}]);
    onSaveTag();
    console.log(myTags);
  };

  return {myTags, setMyTags, onFetchTags, onAddTag, onSaveTag, deleteTag, onUpdateTag};
};
export {useTags};