import Icon from 'components/Icon';
import Tabs from 'components/Money/Tabs';
import {RecordItem, useRecords} from 'hooks/useRecords';
import {useState} from 'react';
import styled from 'styled-components';
import day from 'dayjs';

function Statistics() {
  const [category, setCategory] = useState<'-' | '+'>('-');
  const {records,deleteRecord} = useRecords();
  const hash: { [K: string]: RecordItem[] } = {};
  const selectedRecords = records.filter(r => r.category === category);
  selectedRecords.map(r => {
    const key = day(r.createdAt).format('YYYY-MM-DD');
    if (!(key in hash)) {
      hash[key] = [];
    }
    hash[key].push(r);
  });

  const array = Object.entries(hash).sort((a, b) => {
    if (a[0] === b[0]) return 0;
    if (a[0] > b[0]) return -1;
    if (a[0] < b[0]) return 1;
    return 0;
  });
  console.log(array);

  return (
    <>
      <TabsWrapper>
        <Tabs value={category} onChange={value => setCategory(value)}></Tabs>
      </TabsWrapper>
      {array.map(([date, records]) => <div key={date}>
        <DateTitle>{date}</DateTitle>
        {records.map(r => {
          return <ListWrapper key={r.id}>
            <li>
              <Icon name={isNaN(parseInt(r.tag.id)) ? r.tag.id : 'myCreate'}></Icon>
              <span className="tag">{r.tag.name}</span>
              <span className="note">{r.note}</span>
              <span>￥{r.amount}</span>
              <span className="delete" onClick={()=>deleteRecord(r.id)}>删除</span>
            </li>
          </ListWrapper>;
        })}
      </div>)}
      <div>

      </div>
    </>
  );
}

const TabsWrapper = styled.div`
  li {background-color: #ccc;color: #fff;

    &.selected {background-color: #a4de9f;}
  }
`;
const DateTitle=styled.h3`
  color: #3C4469;
  background-color: #eeffed;
  padding: 2px 16px;
  padding: 8px 16px;
`
const ListWrapper = styled.ol`
   li {
    background-color: #fff;
    font-size: 14px;
    border-bottom: 1px solid #e3dfdf;
    color: #3C4469;
    padding: 8px 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    align-content: center;

    .tag {white-space: nowrap;width: 64px;font-weight: bold;}

    .notes {margin-right: auto; margin-left: 16px;}

    .icon {width: 20px;fill: #3C4469;margin-right: 16px;}

    .delete {color: red;}
  }
`;
export default Statistics;