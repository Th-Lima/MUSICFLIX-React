import styled from 'styled-components';

const Loading = styled.div`
  height: 60px;
  width: 60px;
  border: 8px solid rgba(0, 0, 0, .1);
  border-left-color:var(--primary);
  border-radius: 50%;
  animation: spinner  1s linear infinite;
  @keyframes spinner{
    to { transform: rotate(360deg); }
  }
`;

export default Loading;
