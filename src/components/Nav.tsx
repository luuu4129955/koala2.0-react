import {Link} from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';

const NavWrapper = styled.div`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;
      padding: 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      
      > .icon {
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <Icon name="label"/>
          <Link to="/labels">标签</Link></li>
        <li>
          <Icon name="money"/>
          <Link to="/money">记账</Link></li>
        <li>
          <Icon name="statistics"/>
          <Link to="/statistics">统计</Link></li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;