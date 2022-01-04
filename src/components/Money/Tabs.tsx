import styled from 'styled-components';
type Props={
  value:string,
  onChange:(value:'-'|'+')=>void
}

const Tabs: React.FC<Props> = (props) => {
  const tabTextMap = {'-': '支出', '+': '收入'};
  type keys=keyof typeof tabTextMap
  const tabTextList:keys[] = ['-', '+'];
  // const [tabText, setTabText] = useState('-');

  return (
    <>
      <TabsSection>
        <ul>
          {tabTextList.map(t =>
            <li key={t} className={props.value === t ? 'selected' : ''}
                onClick={() => props.onChange(t)}
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
      
      font-size: 20px;
      position: relative;
      
    }
  }
`;


