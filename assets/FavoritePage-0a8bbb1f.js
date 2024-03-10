import{s as e,b as r,j as t}from"./index-de1927f1.js";import{d as a,C as s}from"./CarList-6ce1908e.js";const p=e.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 70px;
  padding-left: 128px;
  padding-right: 128px;
  padding-bottom: 150px;
  text-align: center;
  min-height: 66vh;
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
`;const g=()=>{const n=r(a),i=n.length>0;return t.jsx("section",{children:t.jsxs(p,{children:[!i&&t.jsx(l,{children:"There are no favorite cars yet"}),i&&t.jsx(x,{children:n.map(o=>t.jsx("li",{children:t.jsx(s,{car:o})},o.id))})]})})};export{g as default};
