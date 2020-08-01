import styled from 'styled-components';

const Loading = styled.div`
  height: 40px;
  width: 40px;
  border: 8px solid rgba(255, 255, 255, .3);
  border-left-color:var(--primary);
  border-radius: 50%;
  animation: spinner  1s linear infinite;
  @keyframes spinner{
    to { transform: rotate(360deg); }
  }
`;

export default Loading;
