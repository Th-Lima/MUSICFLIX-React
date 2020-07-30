import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  border: 2px solid;
  border-radius: 4px;
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 250px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  padding: 16px;
  transition: opacity .3s;
  
  &:hover,
  &:focus {
     filter: brightness(100%); 
    -webkit-transform: scale(1.3);
        -ms-transform: scale(1.3);
        transform: scale(1.3);
        border: none;
        transition: 0.5s;
        margin-left: 50px;
        margin-right: 50px;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }
`;
