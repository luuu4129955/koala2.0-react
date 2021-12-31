import Icon from 'components/Icon';
import styled from 'styled-components';
import {useTags} from 'useTags';
import {Button} from 'components/Button';
import { Link } from 'react-router-dom';

function Tags() {
  const {myTags} = useTags();
  return (
    <TagsSection>
      <div className="topNav">我的自定义标签</div>
      <ul className="tag-list">
        {myTags.map(t => <li key={t.id}>{t.name}</li>)}
        <Link to="naicha"><li className="tag">
          <span>奶茶</span>
          <Icon name="edit"></Icon>
        </li>
        </Link>
      </ul>
      <Button className="add" name="新增标签"></Button>
    </TagsSection>
  );
}

const TagsSection = styled.section`
  
  .topNav {
    background-color: #a1dd9d;
    color: #fff;
    padding: 21.6px 18px;
    font-size: 18px;
    text-align: center;
    position: fixed;
    top: 0;
    width: 100%;
  }

  .tag-list {
    background-color: #fff;
    margin-top: 64.8px;

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
  .add{
    background-color: #ffb850;
  }
`;

export default Tags;