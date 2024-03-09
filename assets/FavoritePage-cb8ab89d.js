import{s as o,c as i,j as t}from"./index-a7980c7a.js";import{c as a,C as s}from"./CarList-128d3eea.js";const c=o.div`
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 70px;
 
  padding-left:128px;
  padding-right:128px;
padding-bottom:150px;
  text-align: center;

 
`,l=o.p`
  font-size: 18px;
  font-weight: 600;
  line-height: 24px;
`,p=o.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 50px;
  column-gap: 29px;
  padding: 0;
  list-style: none;
`;o.button`
  cursor: pointer;

  margin: 100px auto 0;
  display: block;

  color: var(--accent-color);
  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  text-decoration-line: underline;
  border: none;

  transition: color var(--transition);

  &:hover,
  &:focus {
    color: var(--accent-hover-color);
  }
`;const g=()=>{const e=i(a),n=e.length>0;return t.jsx("section",{children:t.jsxs(c,{children:[!n&&t.jsx(l,{children:"There are no favorite cars"}),n&&t.jsx(p,{children:e.map(r=>t.jsx("li",{children:t.jsx(s,{car:r})},r.id))})]})})};export{g as default};
