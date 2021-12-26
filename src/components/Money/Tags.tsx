import Icon from "components/Icon";
import styled from "styled-components";

const Tags=()=>{
  return(
    <TagsSection>
        <ul>
          <li><Icon name="clothes"/><span>衣</span></li>
          <li><Icon name="foods"/><span>食</span></li>
        </ul>
    </TagsSection>
  )
}
export default Tags

const TagsSection = styled.section`
    flex-grow: 1;
    overflow: auto;
    background-color: #fff;
    padding: 4px;
    li {
      display: inline-flex;
      flex-direction: column;
      width: 56px;
      margin: 1px;
      .icon {
        padding: 8px;
        margin: 0 auto;
        fill: #888;
      }
      span {
        color: #888;
        height: 24px;
        line-height: 24px;
        font-size: 12px;
        text-align: center;
      }
      &.selected {
        border-radius: 50%;
        background-color: #eeffed;
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

