import Icon from 'components/Icon';
import {useState} from 'react';
import styled from 'styled-components';
import 'lib/constant';
import defaultTags from 'lib/constant';
import {useTags} from 'useTags';

type Tag = {
  id: string,
  name: string
}
type Props = {
  value: Tag,
  onChange: (value: Tag) => void
}
const Tags: React.FC<Props> = (props) => {
  const [tags] = useState<Tag[]>(defaultTags);
  const {myTags, addTag} = useTags();
  const onSelectTag = (tag: Tag) => {
    props.onChange(tag);
  };
  return (
    <TagsWrapper>
      <div className="tags-list">
        {tags.map(tag =>
          <div key={tag.id} onClick={() => onSelectTag(tag)}
               className={tag.name === props.value.name ? 'selected' : 'tag'}
          >
            <Icon name={tag.id}/>
            <span>{tag.name}</span>
          </div>)}
        {myTags.map(tag =>
          <div key={tag.id} onClick={() => onSelectTag(tag)}
               className={tag.name === props.value.name ? 'selected' : 'tag'}
          >
            <Icon name="myCreate"/>
            <span>{tag.name}</span>
          </div>
        )}
        <div className="tag" onClick={addTag}><Icon name="add"/><span>自定义</span></div>
      </div>
    </TagsWrapper>
  );
};
export default Tags;

const TagsWrapper = styled.section`
  flex-grow: 1;overflow: auto;background-color: #fff;

  .tags-list {
    max-width: 500px;
    display: flex;
    flex-wrap: wrap;
  }

  .tag {
    display: inline-flex;
    flex-direction: column;
    flex: 0 0 20%;
    height: 56px;

    .icon {
      width: 28px;
      height: 28px;
      padding: 8px;margin: 0 auto;fill: #888;
    }

    span {
      color: #888;
      height: 24px;line-height: 24px;
      font-size: 12px;text-align: center;
    }
  }

  div.selected {
    border-radius: 50%;background-color: #eeffed;
    display: inline-flex;
    flex-direction: column;
    flex: 0 0 20%;

    div:active {
      transform: translateY(4px);
      box-shadow: 0 2px #a2dd9e;
    }

    .icon {
      width: 28px;
      height: 28px;
      padding: 8px;margin: 0 auto;
      fill: #a2dd9e;
    }

    span {
      color: #a2dd9e;
      height: 24px;line-height: 24px;
      font-size: 12px;text-align: center;
    }
  }
`;

