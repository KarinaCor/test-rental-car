import{s as t,u as j,r as c,j as e,a as v,b as u,c as w,d as C}from"./index-9af0a66a.js";import{s as k,a as P,b as F,c as S,C as B}from"./CarList-40f152f4.js";const L=t.div`
  max-width: 1440px;
  margin: 0 auto;
  margin-top: 70px;
  padding-left: 128px;
  padding-right: 128px;
  padding-bottom: 150px;
`,M=t.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  row-gap: 50px;
  column-gap: 29px;
  padding: 0;
  list-style: none;
`,z=t.button`
  cursor: pointer;

  margin: 100px auto 0;
  display: block;
  color: #3470ff;

  background-color: transparent;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;

  text-decoration-line: underline;
  border: none;

  &:hover,
  &:focus {
    color: #0b44cd;
  }
`,E=["Buick","Volvo","HUMMER","Subaru","Mitsubishi","Nissan","Lincoln","GMC","Hyundai","MINI","Bentley","Mercedes-Benz","Aston Martin","Pontiac","Lamborghini","Audi","BMW","Chevrolet","Mercedes-Benz","Chrysler","Kia","Land"],R=[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150],A="useandom-26T198340PX75pxJACKVERYMINDBUSHWOLF_GQZbfghjklqvwyzrict";let m=(i=21)=>{let n="",r=crypto.getRandomValues(new Uint8Array(i));for(;i--;)n+=A[r[i]&63];return n};const N=t.form`
  display: flex;
  gap: 18px;
  margin-bottom: 50px;
  justify-content: center;
  flex-direction: row;
`,I=t.label`
  position: relative;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 500;
  line-height: 1.29;
`,T=t.select`
  align-items: center;
  cursor: pointer;
  display: flex;
  border-radius: 14px;
  box-sizing: border-box;
  background: #f7f7fb;
  padding-left: 18px;
  height: 48px;
  border: none;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  width: 224px;
  
`,D=t.select`
  width: 125px;
  height: 48px;
  align-items: center;
  cursor: pointer;
  display: flex;
  border-radius: 14px;
  box-sizing: border-box;
  background: #f7f7fb;
  border: none;
  padding-left: 18px;
  font-size: 18px;
  font-weight: 500;
`;t.option`
  background-color: red;
`;t.div`
  padding: 50px;

  display: flex;
  flex-direction: row;
  gap: 18px;
  align-items: center;
  justify-content: center;
`;t.div`
  display: flex;
  flex-direction: column;
  font-size: 14px;
`;t.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
`;t.p``;t.div`
  display: flex;
  align-items: flex-end;
`;t.input`
  width: 160px;
  height: 48px;
  margin-top: 8px;
  border: none;
  color: transparent;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
`;t.div`
  display: flex;
  position: absolute;
  bottom: 14px;
  font-size: 18px;
  font-weight: 500;
`;t.div`
  margin-left: 1px;
  display: inline-block;
  width: 1px;
  height: 18px;
  background-color: black;
`;t.div`
  position: relative;
`;const V=t.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  margin-top: 20px;
`,b=t.button`
  display: flex;
  width: 136px;
  height: 48px;
  align-items: center;
  justify-content: center;
  margin-bottom: 1px;

  font-weight: 600;
  font-size: 14px;
  color: #ffffff;
  background-color: #3470ff;
  border-radius: 12px;
  border: none;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`,H=(i,n,r,a)=>{i.preventDefault(),n(r(a))},U=i=>{i({make:"",rentalPrice:""})},W=()=>{const i=j(),[n,r]=c.useState({make:"",rentalPrice:""}),[a,d]=c.useState(null),[f,p]=c.useState(null),x=(o,s)=>{const{name:h,value:g}=o.target;r({...n,[h]:g}),s(!1)};return e.jsxs(N,{$priceFocus:f,$brandFocus:a,onSubmit:o=>H(o,i,v,n),children:[e.jsxs("div",{children:[e.jsx(I,{htmlFor:"make",children:"Car brand"}),e.jsxs(T,{onFocus:()=>d(!0),onBlur:()=>d(!1),onChange:o=>x(o,d),name:"make",id:"brand",value:n.make,required:!0,children:[e.jsx("option",{value:"defaultPrice",defaultValue:!0,children:"Enter the text"},"default"),E.map(o=>{const s=m();return e.jsx("option",{value:o,children:o},s)})]})]}),e.jsxs("div",{children:[e.jsx("label",{htmlFor:"rentPrice",children:"Price/ 1hour"}),e.jsxs(D,{onFocus:()=>p(!0),onBlur:()=>p(!1),name:"rentalPrice",onChange:o=>x(o,p),id:"price",value:n.rentalPrice,required:!0,children:[e.jsx("option",{value:"defaultPrice",defaultValue:!0,className:"first-option ",children:"To $"}),R.map(o=>{const s=m();return e.jsx("option",{value:o,children:o},s)})]}),e.jsx("div",{className:"arrow-container"})]}),e.jsxs(V,{className:"btn-container",children:[e.jsx(b,{className:"accept-btn",type:"submit",children:"Search"}),e.jsx(b,{className:"reset-btn",onClick:()=>U(r),type:"button",children:"Reset"})]})]})},K=()=>{const i=j(),n=u(k),r=u(P),a=u(F),d=u(S),[f,p]=c.useState(2),[x,o]=c.useState([]);c.useEffect(()=>{i(w())},[i]),c.useEffect(()=>{o(n)},[n]);const s=()=>{i(C(f)),p(l=>l+1)},h=n.length>0,g=n.length>0&&!d&&!(x.length%12),y=()=>r.make!==void 0&&r.make!=="Enter the text"&&r.rentalPrice!=="To $"&&r.rentalPrice!==void 0&&r.make.length>0&&r.rentalPrice.length>0?n&&n.filter(l=>l.make===r.make&&l.rentalPrice<=r.rentalPrice):n;return e.jsx("section",{children:e.jsxs(L,{children:[e.jsx(W,{}),h&&e.jsx(M,{children:y().map(l=>e.jsx("li",{children:e.jsx(B,{car:l})},l.id))}),g&&e.jsx(z,{type:"button",onClick:s,children:"Load more"}),d&&!a&&e.jsx("div",{style:{textAlign:"center",fontSize:"16px",fontWeight:500,color:"#3470ff",margin:"100px auto 0"},children:"Loading"}),a&&a]})})};export{K as default};
