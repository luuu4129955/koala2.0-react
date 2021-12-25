import { Link } from "react-router-dom";
import styled from "styled-components";
require('assets/icons/money.svg')

const NavWrapper = styled.div`
  line-height: 24px;
  box-shadow: 0 0 3px rgba(0, 0,0, 0.25);

  > ul {
    display: flex;

    > li {
      width: 33.3333%;
      text-align: center;
      padding: 16px;
    }
  }
`;

const Nav=()=>{
  return(
    <NavWrapper>
    <ul>
      <li>
        <svg>
          <use xlinkHref="#money"></use>
        </svg>
        <Link to="/labels">标签</Link></li>
      <li><Link to="/money">记账</Link></li>
      <li><Link to="/statistics">统计</Link></li>
    </ul>
    </NavWrapper>
  )
}
export default Nav