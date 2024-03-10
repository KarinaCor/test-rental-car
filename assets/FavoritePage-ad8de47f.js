import{s as e,d as r,j as t}from"./index-d26798a6.js";import{d as a,C as s}from"./CarList-a6bdff3e.js";const p=e.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 70px;
  padding-left: 128px;
  padding-right: 128px;
  padding-bottom: 150px;
  text-align: center;
`,l=e.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`,x=e.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 50px;
  column-gap: 29px;
  padding: 0;
  list-style: none;
`;e.button`
  cursor: pointer;
  margin: 100px auto 0;
  display: block;
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  text-decoration-line: underline;
  border: none;
`;const g=()=>{const n=r(a),o=n.length>0;return t.jsx("section",{children:t.jsxs(p,{children:[!o&&t.jsx(l,{children:"There are no favorite cars"}),o&&t.jsx(x,{children:n.map(i=>t.jsx("li",{children:t.jsx(s,{car:i})},i.id))})]})})};export{g as default};
