import {Button} from 'components/Button';
import Icon from 'components/Icon';
import FormItem from 'components/Money/FormItem';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const EditTags: React.FC = () => {
  return (
    <EditTagsSection>
      <div className="topNav">
        <Link to="/tags">
          <Icon name="leftArrow"></Icon>
        </Link>
        <span>编辑标签</span>
        <span></span>
      </div>
      <FormItemWrapper>
        <FormItem type="text" text="标签名" value="" placeholder="奶茶"></FormItem>
      </FormItemWrapper>
      <BtnWrapper>
        <Button name="确认修改"></Button>
        <Button name="删除标签"></Button>
      </BtnWrapper>
    </EditTagsSection>
  );
};

const FormItemWrapper = styled.div`
  background-color: #fff;
`;
const BtnWrapper=styled.div`
  background-color:#a2dd9e ;

`
const EditTagsSection = styled.section`
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