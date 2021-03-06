import styled from 'styled-components'

const Paragraph = styled.p`
  font-size: ${({theme}) => theme.fontSize.s};
  font-weight: ${({theme}) => theme.fontWeight.regular};
  color: ${({theme}) => theme.colors.blue_dark};
  margin: ${({marginTop}) => marginTop || 0} 0 0;
  margin-left: ${({marginLeft}) => marginLeft || 0};
`;

export default Paragraph;
