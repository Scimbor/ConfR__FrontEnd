import React from 'react'
import { StyledDiv } from './Typography.style'

export default function Typography() {
  return (
    <StyledDiv className="Typography">
      <div>
        <p>
          <b>font-family:</b> font-family: 'Roboto', sans-serif
        </p>
        <p>
          <b>Document/Markdown text size:</b> 14px
        </p>
      </div>
      <div>
        <h1>H1 h1 96px heading</h1>
        <h2>H2 h2 60px heading</h2>
        <h3>H3 h3 48px heading</h3>
        <h4>H4 h4 34px heading</h4>
        <h5>H5 h5 24px heading</h5>
        <h6>H6 h6 20px heading</h6>
      </div>
      <div>
        <p>
          P p: 14px "Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
          enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum."t
        </p>
      </div>
    </StyledDiv>
  )
}
