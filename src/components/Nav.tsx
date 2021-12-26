import {NavLink} from 'react-router-dom';
import styled from 'styled-components';
import Icon from './Icon';

const NavWrapper = styled.div`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.25);
  background-color: #fff;
  > ul {
    display: flex;
    color: #888888;

    > li {
      width: 33.3333%;
      text-align: center;

      a {
        padding: 4px;
        display: flex;
        flex-direction: column;
        align-items: center;

        &.active {
          color: #a4de9f;

          .icon {
            fill: #a4de9f;
          }
        }
      }

      .icon {
        fill: #888888;
        width: 24px;
        height: 24px;
      }
    }
  }
`;

const Nav = () => {
  return (
    <NavWrapper>
      <ul>
        <li>
          <NavLink to="/labels">
            <Icon name="label"/>
            标签</NavLink>
        </li>
        <li>
          <NavLink to="/money">
            <Icon name="money"/>
            记账</NavLink>
        </li>
        <li>
          <NavLink to="/statistics">
            <Icon name="statistics"/>
            统计</NavLink>
        </li>
      </ul>
    </NavWrapper>
  );
};
export default Nav;