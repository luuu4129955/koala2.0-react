import {useState} from 'react';
import styled from 'styled-components';

const Tabs: React.FC = () => {
  const tabTextMap = {'-': '支出', '+': '收入'};
  type keys=keyof typeof tabTextMap
  const [tabTextList] = useState<keys[]>(['-', '+']);
  const [tabText, setTabText] = useState('-');
  return (
    <>
      <TabsSection>
        <ul>
          {tabTextList.map(t =>
            <li key={t} className={tabText === t ? 'selected' : ''}
                onClick={() => setTabText(t)}
            >{tabTextMap[t]}
            </li>)}
        </ul>
      </TabsSection>
    </>
  );
};

export default Tabs;

const TabsSection = styled.section`
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
`;

function usaState(): [any, any] {
  throw new Error('Function not implemented.');
}

