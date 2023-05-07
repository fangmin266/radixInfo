## tab방식으로 분류 / 중요부분 주석처리 설명 / 추가부분 코드 수정(ex.체크박스다중선택 등 기능 추가)

# Radix 사용방법

1. 개요

- 다른 css 라이브러리와의 차이점 :
  WAI_ARIA에 의해문서화 되어 접근성, 사용자 정의 및 개발자 경험에 우수하다 / 측면,정렬, 오프셋등 사용자지정가능 / 레이어링 동작 사용자정의가능
  -CSS-in-JS (styled-components)로 스타일 지정 가능하다.
- asChild로 렌더링 요소 제어
- 라이브러리 기능별 증번 다운로드 가능

```
npm install @radix-ui/react-dialog
npm install @radix-ui/react-dropdown-menu
npm install @radix-ui/react-tooltip
```

2. 시작하기

- 설치

```
npm install @radix-ui/[원하는라이브러리명]@latest -E
```

- 컴퍼넌트 가져오기
  보통 Root, Trigger, Portal, Content로 이루어져 있음

3. 스타일링

- 상태 스타일링
  data-state
  (솏성 대상으로 지정하여 상태 스타일링 가능)

```
.AccordionItem {
  border-bottom: 1px solid gainsboro;
}

.AccordionItem[data-state='open'] {
  border-bottom-width: 2px;
}
```

- Stitches / Css-in-JS 사용 가능

```
import * as React from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import styled from 'styled-components';

const StyledItem = styled(Accordion.Item)`
  background-color: red;

`;

const AccordionDemo = () => (
 <Accordion.Root>
   <StyledItem value="item-1" />
   {/* ... */}
 </Accordion.Root>
);

export default AccordionDemo;
```

- primitive 확장
  (react 구성요소 확장, 접근성 및 기타 복잡한 기능 캡슐화)

* ...props 사용하는 이유
  (select, input등 다양한 컴포넌트의 동적속성을 전달시 사용, 예를 들면 disabled = true )

```
<SelectItem value="pork" {...props}>Pork</SelectItem>
```

- forwardedRef사용하는 이유
  React에서 HTML요소 사용시 DOM 노드를 직접 조작하기 위해 ref 사용

```
const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
    [...]
  )
}
[...]
```

- asChild
  (dom 요소 렌더링시 자신의 요소에 접근성 및 기능요구사항 첨부시 유용)

4. 접근성

- 기본적 접근성 디자인 패턴 사용 , 키보드 탐색 과 레이블 지정 포커스 관리

5. 초기 설치
   : styled-components, css color, icons

```
npm i styled-components --legacy-peer-deps
npm i @radix-ui/colors
@radix-ui/react-icons
```
