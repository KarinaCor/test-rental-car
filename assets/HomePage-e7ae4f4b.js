import{s as t,L as n,j as e}from"./index-9af0a66a.js";const o=t.div`
  width: 100%;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
  flex-direction: column;
`,r=t.span`
  font-size: 25px;
  font-weight: 600;
  color: white;
  margin-top: 40px;
`,i=t.span`
  color: red;
`,a=t(n)`
  cursor: pointer;

  width: 100%;
  max-width: 274px;
  height: 44px;

  display: flex;
  justify-content: center;
  align-items: center;

  text-decoration: none;

  color: white;

  font-size: 25px;
  font-weight: 600;
  line-height: 20px;
  padding: 10px;
  border-radius: 12px;
  border: none;
  background-color: #3470ff;
  margin-top: 36px;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`,c="/test-rental-car/assets/2024-elantra-open-graph-bc8e03d4.webp",s={HeroImg:c},d=()=>e.jsx(e.Fragment,{children:e.jsxs(o,{style:{backgroundImage:`url(${s.HeroImg})`},children:[e.jsxs(r,{children:["Welcome to ",e.jsx(i,{children:"RentalCar"})," Service!"]}),e.jsx(a,{to:"/catalog",children:"Car rental CATALOG"})]})});export{d as default};
