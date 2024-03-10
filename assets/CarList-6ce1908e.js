import{s as t,r as P,j as e,u as E,b as R,e as B,f as D}from"./index-de1927f1.js";const ze=n=>n.cars.itemsCars,O=n=>n.cars.favoriteCars,Ae=n=>n.cars.isLoading,Se=n=>n.cars.error,Fe=n=>n.filters.carBrand,N=t.div`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
`,Q=t.div`
  width: 274px;
  height: 268px;

  position: relative;

  display: flex;
  flex-shrink: 0;

  border-radius: 14px;

  overflow: hidden;
`,X=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,Y=t.button`
  position: absolute;
  top: 14px;
  right: 14px;

  cursor: pointer;

  width: 18px;
  height: 18px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: transparent;
  border: none;
`,q=t.svg`
  stroke: currentColor;
  fill: currentColor;
`,G=t.div`
  width: 274px;
  display: flex;
  justify-content: space-between;
  color: #121417;
  font-size: 16px;
  font-weight: 500;
  margin-top: 14px;
`,H=t.span`
  color: #3470ff;
`,J=t.span`
  padding-top: 0;
`,K=t.p`
  display: flex;
  width: 270px;
  margin-top: 8px;
  margin-bottom: 4px;
  line-height: 1.25rem;
`,U=t.p`
  display: flex;
  width: 270px;
  margin-top: 4px;
  margin-bottom: 0;
`,c=t.span`
  color: #12141780;

  font-size: 12px;
  white-space: nowrap;
 
  text-overflow: ellipsis;
  &:not(:last-child):after {
    color: grey;
    content: '|';
    padding: 0 3px;
  }
`,V=t.span`
  color: #12141780;

  font-size: 12px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  &:not(:last-child):after {
    color: grey;
    content: '|';
    padding: 0 3px;
  }
`,Z=t.button`
  cursor: pointer;

  width: 100%;
  max-width: 274px;
  height: 44px;

  color: #ffffff;
  background-color: #3470ff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  font-size: 14px;
  font-weight: 600;

  border-radius: 12px;
  border: none;
  box-shadow:
    rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px,
    rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

  margin-top: 28px;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`,_="/test-rental-car/assets/sprite-icons-c6e42e19.svg",M=n=>n.address.split(",")[1],$=n=>n.address.split(",")[2],ee=n=>{const s=n.rentalConditions.split(`
`),[r,o]=s[0].split(": ");return{key:r,value:o}},te=n=>n.rentalConditions.split(`
`)[1],ne=n=>n.rentalConditions.split(`
`)[2],oe=n=>n.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),se=n=>{if(!n||typeof n.rentalPrice!="string"||n.rentalPrice.length<2)return null;const s=n.rentalPrice.charAt(0);return`${n.rentalPrice.slice(1)}${s}`},ie=t.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: rgba(18, 20, 23, 0.5);
  overflow: auto;
  
`,re=t.div`
  width: 541px;
  max-height: 752px;
  position: fixed;
  z-index: 10000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: white;
  border-radius: 24px;
`,ce=t.div`
  position: absolute;
  top: 18px;
  right: 18px;
  background-color: #12141780;
`,ae=t.div`
  padding: 40px;
`,le=t.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
`;t.div`
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;t.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  min-height: 752px;
  max-width: 541px;
  width: 100%;
  padding: 40px;
  overflow-y: auto;
  border-radius: 24px;
`;t.button`
  position: absolute;
  top: 16px;
  right: 16px;

  cursor: pointer;

  width: 24px;
  height: 24px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  border-radius: 50%;
`;t.svg`
  stroke: currentColor;
`;const de=t.div`
  width: 461px;
  height: 248px;
  margin: 0 auto;
  border-radius: 14px;
  overflow: hidden;
`,pe=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,xe=t.div`
  font-size: 18px;
  font-weight: 500;

  margin-top: 14px;
`,he=t.span`
  color: #3470ff;
`,I=t.p`
  margin-bottom: 0;
`,ge=t.p`
  margin-top: 4px;
`,i=t.span`
  margin-bottom: 0;
  font-size: 12px;
  color: #12141780;
  &:not(:last-child):after {
    color: grey;
    content: '|';
    padding: 0 3px;
  }
`,g=t.span`
  background-color: #f9f9f9;
  padding: 7px 14px;
  border-radius: 9999px;

  font-size: 12px;
  color: #363535;
`,fe=t.p`
  font-size: 14px;
  font-weight: 400;
margin-bottom: 24px;
  margin-top: 14px;
`,me=t.p`
  margin-bottom: 0;
`,ue=t.p`
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 8px;
`,je=t.p`
  font-size: 14px;
  font-weight: 500;

  margin-top: 24px;
`,be=t.button`
  cursor: pointer;

  width: 100%;
  max-width: 168px;
  height: 44px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: blue;

  font-size: 14px;
  font-weight: 600;

  border-radius: 12px;
  border: none;

  margin-top: 24px;
`,ye=t.div`
  display: flex;
  gap: 8px;
`,ve=t.div`
  display: flex;
  gap: 10px;

  margin-top: 8px;
`;t.div`
  display: flex;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 2px;

  border-radius: 35px;
  font-size: 12px;
  font-weight: 400;

  letter-spacing: -0.24px;
`;const F=t.span`
  font-weight: 600;
  color: #3470ff;
`,we=t.a`
  color: white;
`,Ce=({children:n,isOpen:s,closeFnc:r,car:o})=>{const a=P.useCallback(()=>{s&&r()},[s,r]);P.useEffect(()=>{const h=W=>{W.code==="Escape"&&a()};return s?(document.body.classList.add("body-modal-open"),window.addEventListener("keydown",h)):document.body.classList.remove("body-modal-open"),()=>{window.removeEventListener("keydown",h),document.body.classList.remove("body-modal-open")}},[s,a]);const f=h=>{h.target===h.currentTarget&&a()},{id:b,year:m,make:u,model:y,type:v,img:w,description:j,accessories:l,fuelConsumption:C,engineSize:k,functionalities:d}=o,p=M(o),z=$(o),x=ee(o),A=te(o),S=ne(o),T=oe(o),L=se(o);return e.jsx(e.Fragment,{children:e.jsx(ie,{onClick:f,children:e.jsxs(re,{onClick:f,children:[e.jsxs(ce,{children:[n,e.jsx(le,{onClick:a,children:"X"})]}),e.jsxs(ae,{children:[e.jsx(de,{children:e.jsx(pe,{src:w,alt:j})}),e.jsxs(xe,{children:[u," ",e.jsx(he,{children:y}),", ",m]}),e.jsxs(I,{children:[e.jsx(i,{children:p}),e.jsx(i,{children:z}),e.jsxs(i,{children:["Id: ",b]}),e.jsxs(i,{children:["Year: ",m]}),e.jsxs(i,{children:["Type: ",v]})]}),e.jsxs(I,{children:[e.jsxs(i,{children:["Fuel Consumption: ",C]}),e.jsxs(i,{children:["Engine Size: ",k]})]}),e.jsx(fe,{children:j}),e.jsx(ue,{children:"Accessories and functionalities:"}),e.jsxs(me,{children:[e.jsx(i,{children:l[0]}),e.jsx(i,{children:l[1]}),e.jsx(i,{children:l[2]})]}),e.jsxs(ge,{children:[e.jsx(i,{children:d[0]}),e.jsx(i,{children:d[1]}),e.jsx(i,{children:d[2]})]}),e.jsx(je,{children:"Rental Conditions:"}),e.jsxs(ye,{children:[e.jsxs(g,{children:[x.key,": ",e.jsx(F,{children:x.value})]}),e.jsx(g,{children:A})]}),e.jsxs(ve,{children:[e.jsx(g,{children:S}),e.jsxs(g,{children:["Mileage: ",e.jsx(F,{children:T})]}),e.jsxs(g,{children:["Price: ",e.jsx(F,{children:L})]})]}),e.jsx(be,{type:"button",children:e.jsx(we,{href:"tel:+380730000000",children:"Rental car"})})]})]})})})},Pe=({car:n})=>{const s=E(),r=R(O),[o,a]=P.useState(!1),{id:f,year:b,make:m,model:u,type:y,img:v,description:w,rentalPrice:j,rentalCompany:l,accessories:C}=n,k=M(n),d=$(n),p=r.some(S=>S.id===n.id),z=()=>{s(p?B(n):D(n))},x=()=>{a(!o)},A=p?"heart-active":"heart-normal";return e.jsxs(e.Fragment,{children:[e.jsxs(N,{children:[e.jsxs(Q,{children:[e.jsx(X,{src:v,alt:w}),e.jsx(Y,{type:"button",onClick:z,"aria-label":p?"Remove from favorites":"Add to favorites",children:e.jsx(q,{width:"14",height:"14",children:e.jsx("use",{href:`${_}#${A}`})})})]}),e.jsxs(G,{children:[e.jsxs("div",{children:[m," ",e.jsx(H,{children:u}),", ",b]}),e.jsx(J,{children:j})]}),e.jsxs(K,{children:[e.jsx(c,{children:k}),e.jsx(c,{children:d}),e.jsx(c,{children:l}),e.jsx(c,{children:"Premium"})]}),e.jsxs(U,{children:[e.jsx(c,{children:y}),e.jsx(c,{children:u}),e.jsx(c,{children:f}),e.jsx(V,{children:C[0]})]}),e.jsx(Z,{type:"button",onClick:x,children:"Learn more"})]}),o&&e.jsx(Ce,{car:n,isOpen:o,closeFnc:x})]})};export{Pe as C,Fe as a,Se as b,Ae as c,O as d,ze as s};
