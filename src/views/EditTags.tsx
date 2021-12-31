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
        <Button className='confirm' name="确认修改"></Button>
        <Button className='delete' name="删除标签"></Button>
    </EditTagsSection>
  );
};

const FormItemWrapper = styled.div`
  background-color: #fff;
`;

const EditTagsSection = styled.section`
  .confirm{
    background-color:#a2dd9e ;
  }
  .delete{
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