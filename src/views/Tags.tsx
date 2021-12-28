import Icon from 'components/Icon';
import styled from 'styled-components';
import {useTags} from 'useTags';
import {Button} from 'components/Button'

function Tags() {
  //这里的myTags没有创建 因此为空 先把样式写死
  //等把数据存到localstorage再说
  const {myTags, setMyTags} = useTags();
  return (
    <TagsSection>
      <div className="topNav">我的自定义标签</div>
      <ul className="tag-list">
        {myTags.map(t => <li key={t.id}>{t.name}</li>)}
        <li className="tag">
          <span>奶茶</span>
        <Icon name="edit"></Icon>
        </li>
      </ul>
      <Button name="新增标签"></Button>
    </TagsSection>
  );
}

const TagsSection=styled.section`
  .btn{
    background-color: #ffb850;
  }
  .topNav {
    background-color: #a1dd9d;
    color: #fff;
    padding: 12px 0;
    font-size: 20px;
    text-align: center;
    position: fixed;
    top: 0;
    width: 100%;
  }
  .tag-list {
    background-color: #fff;
    margin-top: 50.4px;

    .tag {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #e0e0e0;
      margin: 0 16px;
      padding: 8px 16px;

      span {
        font-size: 16px;
        font-family: $font-family;
        color: #a1dd9d;
      }

      .icon {
        width: 16px;
        height: 16px;
        fill: #a1dd9d
      }
    }
    
  }
`

export default Tags;