import Icon from 'components/Icon';
import { useState} from 'react';
import styled from 'styled-components';
import 'lib/constant';
import defaultTags from 'lib/constant';
import { useTags } from 'useTags';

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
  const {myTags, addTag} = useTags()
  const onSelectTag = (tag: Tag) => {
    props.onChange(tag);
  };
  return (
    <TagsWraper>
      <ul>
        {tags.map(tag =>
          <li key={tag.id} onClick={() => onSelectTag(tag)}
              className={tag.name === props.value.name ? 'selected' : ''}
          >
            <Icon name={tag.id}/>
            <span>{tag.name}</span>
          </li>)}
        {myTags.map(tag =>
          <li key={tag.id} onClick={() => onSelectTag(tag)}
              className={tag.name === props.value.name ? 'selected' : ''}
          >
            <Icon name="myCreate"/>
            <span>{tag.name}</span>
          </li>
        )}
        <li onClick={addTag}><Icon name="add"/><span>自定义</span></li>
      </ul>
    </TagsWraper>
  );
};
export default Tags;

const TagsWraper = styled.section`
  flex-grow: 1;overflow: auto;background-color: #fff;padding: 4px;

  li {
    display: inline-flex;flex-direction: column;
    width: 56px;margin: 1px;

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

    &.selected {
      border-radius: 50%;background-color: #eeffed;

      &:active {
        transform: translateY(4px);
        box-shadow: 0 2px #a2dd9e;
      }

      .icon {
        fill: #a2dd9e;
      }

      span {
        color: #a2dd9e;
      }
    }
  }
`;

