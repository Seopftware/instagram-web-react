import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const lightTheme = {
  accent: "#0095f6",
  bgColor: "#FAFAFA",
  fontColor: "rgb(38, 38, 38)",
  borderColor: "rgb(219, 219, 219)",
};

export const darkTheme = {
  fontColor: "white",
  bgColor: "#000",
};

/* 
- GlobalStyles를 사용해서 전체 스타일을 적용시킨다. ex) body, input, a tag
- box-sizing:border-box; // box의 크기에 집중(=>컨텐츠 크기의 영향을 받지 않음. 사이즈 예측이 가능)

참고링크:
https://www.npmjs.com/package/styled-components
https://www.npmjs.com/package/styled-reset
*/
export const GlobalStyles = createGlobalStyle`
    ${reset}
    input {
      all:unset;
    }
    * {
      box-sizing:border-box;
    }
    body {
        background-color:${(props) => props.theme.bgColor};
        font-size:14px;
        font-family:'Open Sans', sans-serif;
        color:${(props) => props.theme.fontColor};
    }
    a {
      text-decoration: none;
      color:inherit;
    }
`;
