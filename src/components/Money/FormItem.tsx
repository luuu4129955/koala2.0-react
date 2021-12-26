import styled from 'styled-components';

const FormItem = () => {
  return (
    <FormItemSection>
      备注：<input/>
    </FormItemSection>
  );
};
export default FormItem;

const FormItemSection = styled.section`
    padding: 10px 10px;
    display: flex;
    align-items: center;
    input {
      font-size: inherit;
      padding-left: 16px;
    }
`;