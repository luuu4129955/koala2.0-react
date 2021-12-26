import Board from 'components/Money/Board';
import FormItem from 'components/Money/FormItem';
import Tabs from 'components/Money/Tabs';
import Tags from 'components/Money/Tags';
import styled from 'styled-components';

function Money() {
  return (
    <>
      <Tags></Tags>
      <FormItem></FormItem>
      <Tabs></Tabs>
      <Board></Board>
    </>
  );
}

export default Money;