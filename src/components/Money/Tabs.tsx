import styled from "styled-components";

const Tabs = () => {
  return (
    <>
      <TabsSection>
          <ul>
            <li className="selected">支出</li>
            <li>收入</li>
          </ul>
      </TabsSection>
    </>
  );
};

export default Tabs

const TabsSection=styled.section`
  ul {
    display: flex;
    flex-direction: row;
    justify-content: space-around;

    > li {
      width: 100%;
      padding: 12px 0;
      text-align: center;
      background-color: #a2dd9e;
      color: #fff;
      font-size: 20px;
      position: relative;

      &.selected::after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 4px;
        background: #6e72a4;
      }
    }
  }
`
