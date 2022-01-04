import {Button} from 'components/Button';
import Icon from 'components/Icon';
import FormItem from 'components/Money/FormItem';
import {useRef} from 'react';
import {Link, Params, useNavigate, useParams} from 'react-router-dom';
import styled from 'styled-components';
import {useTags} from 'useTags';

const EditTags: React.FC = () => {
  const {myTags,setMyTags, findTag, updateTag, deleteTag} = useTags();
  const refInput = useRef<HTMLInputElement>(null);
  const navigate=useNavigate()
  let {id} = useParams<Params>();
  let currentName:string|undefined;
  if (id) {
    currentName = findTag(id)?.name;
  }
  const changeTagName = () => {
    if (refInput.current !== null) {
      updateTag(id,{name:refInput.current.value})
    }
  };
  const x = () => {
    deleteTag(id)
  }
  return (
    <EditTagsSection>
      <div className="topNav">
        <Link to="/tags">
          <Icon name="leftArrow"></Icon>
        </Link>
        <span>编辑标签</span>
        <span></span>
      </div>
      <Wrapper>
        <span>标签名</span>
        <input type="text" ref={refInput} placeholder={currentName}></input>
      </Wrapper>
      <Button className="confirm" name="确认修改" onClick={changeTagName}></Button>
      <Button className="delete" name="删除标签" onClick={x}></Button>
    </EditTagsSection>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  padding: 10px 10px;
  display: flex;
  align-items: center;

  input {
    font-size: inherit;
    padding-left: 16px;
  }
`;

const EditTagsSection = styled.section`
  .confirm {
    background-color: #a2dd9e;
  }

  .delete {

    background-color: #f76361;
    margin-top: -50px;
  }

  .topNav {
    display: flex;
    justify-content: space-between;
    background-color: #a2dd9e;
    font-size: 18px;
    color: #fff;
    padding: 20px 18px;

    .icon {
      width: 20px;
      height: 20px;
      fill: #fff;
    }
  }

`;
export {EditTags};