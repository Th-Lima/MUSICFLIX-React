import styled from 'styled-components'


export const Page404Base = styled.div`
h1,h3, h2 {
  color: var(--white);
}
span,h3,h2{
  animation: animate 6s infinite;
}
@keyframes animate {
  0%{
    transform: translateY(0);
  }
  25%{
    color: var(--primary);
    transform: translateY(0);
  }
  100%{
    transform: translateY(0);
  }
}
#notfound {
  position: relative;
   height: 100vh; 
  padding: 0;
  margin: 0; 
}

#notfound .notfound {
  position: absolute;
  left: 50%;
  top: 50%;
   -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
} 
.notfound {
  max-width: 520px;
  width: 100%;
  line-height: 1.4;
  text-align: center;
}

.notfound .notfound-404 {
  position: relative;
  height: 240px;
}

.notfound .notfound-404 h1 {
  font-family: 'Montserrat', sans-serif;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  font-size: 252px;
  font-weight: 900;
  margin: 0px; 
  text-transform: uppercase;
  letter-spacing: -40px;
  margin-left: -20px;
}

.notfound .notfound-404 h1>span {
  text-shadow: -8px 0px 0px var(--primary);
}

.notfound .notfound-404 h3 {
  font-family: 'Cabin', sans-serif;
  position: relative;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 3px;
  padding-left: 6px;
}

.notfound h2 {
  font-family: 'Cabin', sans-serif;
  font-size: 20px;
  font-weight: 400;
  text-transform: uppercase;
}
`;

export default Page404Base;