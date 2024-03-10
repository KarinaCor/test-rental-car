import{s as t,r as P,j as e,b as E,d as R,g as B,h as D}from"./index-d26798a6.js";const ke=n=>n.cars.itemsCars,O=n=>n.cars.favoriteCars,Ae=n=>n.cars.isLoading,ze=n=>n.cars.error,Fe=n=>n.filters.carBrand,N=t.div`
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
  color: #3470FF;
`,J=t.span`
  padding-top:0;
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
  margin-bottom:0;
`,s=t.span`
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
`,V=t.button`
  cursor: pointer;

  width: 100%;
  max-width: 274px;
  height: 44px;
  // padding: 12px 99px;
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
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 4px -1px,
    rgba(0, 0, 0, 0.14) 0px 4px 5px 0px, rgba(0, 0, 0, 0.12) 0px 1px 10px 0px;

  margin-top: 28px;
  &:hover,
  &:focus {
    background-color: #0b44cd;
  }
`,Z="/test-rental-car/assets/sprite-icons-c6e42e19.svg",M=n=>n.address.split(",")[1],$=n=>n.address.split(",")[2],_=n=>{const i=n.rentalConditions.split(`
`),[c,o]=i[0].split(": ");return{key:c,value:o}},ee=n=>n.rentalConditions.split(`
`)[1],te=n=>n.rentalConditions.split(`
`)[2],ne=n=>n.mileage.toString().replace(/\B(?=(\d{3})+(?!\d))/g,","),oe=n=>{if(!n||typeof n.rentalPrice!="string"||n.rentalPrice.length<2)return null;const i=n.rentalPrice.charAt(0);return`${n.rentalPrice.slice(1)}${i}`},ie=t.div`
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
`,se=t.div`
  position: absolute;
  top: 18px;
  right: 18px;
  background-color: #12141780;
`,ce=t.div`
  padding: 40px;
`,de=t.button`
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
  // fill: currentColor;
`;const le=t.div`
  width: 461px;
  height: 248px;
  margin: 0 auto;
  border-radius: 14px;
  overflow: hidden;
`,ae=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,pe=t.div`
  font-size: 18px;
  font-weight: 500;
  /* line-height: 24px; */
  margin-top: 14px;
`,xe=t.span`
  color: #3470ff;
`,I=t.p`
  /* margin-top: 8px; */
  margin-bottom: 0;
`,he=t.p`
  margin-top: 4px;
`,r=t.span`
  /* background-color: #363535;
  border-radius: 35px;
  padding: 7px 14px; */
  /* line-height: 18px; */
  margin-bottom:0;
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
  /* border-radius: 35px;
  padding: 7px 14px;  */
  /* line-height: 18px; */
  font-size: 12px;
  color: #363535;
  /* &:not(:last-child):after {
    color: grey;
    content: '|';
    padding: 0 3px;
  } */
`,ge=t.p`
  font-size: 14px;
  font-weight: 400;
  /* line-height: 20px; */

  margin-top: 14px;
`,fe=t.p`
  /* margin-top: 8px; */
  margin-bottom: 0;
`,ue=t.p`
  font-size: 14px;
  font-weight: 500;
  /* line-height: 20px;  */

  /* margin-top: 24px; */
`,me=t.p`
  font-size: 14px;
  font-weight: 500;
  /* line-height: 20px; */

  margin-top: 24px;
`,je=t.button`
  cursor: pointer;

  width: 100%;
  max-width: 168px;
  height: 44px;
  // padding: 12px 50px;

  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
background-color: blue;

  font-size: 14px;
  font-weight: 600;
  /* line-height: 20px; */

  border-radius: 12px;
  border: none;

  margin-top: 24px;

`,be=t.div`
  display: flex;
  gap: 8px;

  /* margin-top: 15px; */
`,ye=t.div`
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
  /* line-height: 18px; */
  letter-spacing: -0.24px;
`;const S=t.span`
  font-weight: 600;
  color: #3470ff;
`,ve=t.a`
  color: white;
`,we=({children:n,isOpen:i,closeFnc:c,car:o})=>{const d=P.useCallback(()=>{i&&c()},[i,c]);P.useEffect(()=>{const h=W=>{W.code==="Escape"&&d()};return i?(document.body.classList.add("body-modal-open"),window.addEventListener("keydown",h)):document.body.classList.remove("body-modal-open"),()=>{window.removeEventListener("keydown",h),document.body.classList.remove("body-modal-open")}},[i,d]);const f=h=>{h.target===h.currentTarget&&d()},{id:b,year:u,make:m,model:y,type:v,img:w,description:j,accessories:l,fuelConsumption:C,engineSize:k,functionalities:a}=o,p=M(o),A=$(o),x=_(o),z=ee(o),F=te(o),T=ne(o),L=oe(o);return e.jsx(e.Fragment,{children:e.jsx(ie,{onClick:f,children:e.jsxs(re,{onClick:f,children:[e.jsxs(se,{children:[n,e.jsx(de,{onClick:d,children:"X"})]}),e.jsxs(ce,{children:[e.jsx(le,{children:e.jsx(ae,{src:w,alt:j})}),e.jsxs(pe,{children:[m," ",e.jsx(xe,{children:y}),", ",u]}),e.jsxs(I,{children:[e.jsx(r,{children:p}),e.jsx(r,{children:A}),e.jsxs(r,{children:["Id: ",b]}),e.jsxs(r,{children:["Year: ",u]}),e.jsxs(r,{children:["Type: ",v]})]}),e.jsxs(I,{children:[e.jsxs(r,{children:["Fuel Consumption: ",C]}),e.jsxs(r,{children:["Engine Size: ",k]})]}),e.jsx(ge,{children:j}),e.jsx(ue,{children:"Accessories and functionalities:"}),e.jsxs(fe,{children:[e.jsx(r,{children:l[0]}),e.jsx(r,{children:l[1]}),e.jsx(r,{children:l[2]})]}),e.jsxs(he,{children:[e.jsx(r,{children:a[0]}),e.jsx(r,{children:a[1]}),e.jsx(r,{children:a[2]})]}),e.jsx(me,{children:"Rental Conditions:"}),e.jsxs(be,{children:[e.jsxs(g,{children:[x.key,": ",e.jsx(S,{children:x.value})]}),e.jsx(g,{children:z})]}),e.jsxs(ye,{children:[e.jsx(g,{children:F}),e.jsxs(g,{children:["Mileage: ",e.jsx(S,{children:T})]}),e.jsxs(g,{children:["Price: ",e.jsx(S,{children:L})]})]}),e.jsx(je,{type:"button",children:e.jsx(ve,{href:"tel:+380730000000",children:"Rental car"})})]})]})})})},Se=({car:n})=>{const i=E(),c=R(O),[o,d]=P.useState(!1),{id:f,year:b,make:u,model:m,type:y,img:v,description:w,rentalPrice:j,rentalCompany:l,accessories:C}=n,k=M(n),a=$(n),p=c.some(F=>F.id===n.id),A=()=>{i(p?B(n):D(n))},x=()=>{d(!o)},z=p?"heart-active":"heart-normal";return e.jsxs(e.Fragment,{children:[e.jsxs(N,{children:[e.jsxs(Q,{children:[e.jsx(X,{src:v,alt:w}),e.jsx(Y,{type:"button",onClick:A,"aria-label":p?"Remove from favorites":"Add to favorites",children:e.jsx(q,{width:"14",height:"14",children:e.jsx("use",{href:`${Z}#${z}`})})})]}),e.jsxs(G,{children:[e.jsxs("div",{children:[u," ",e.jsx(H,{children:m}),", ",b]}),e.jsx(J,{children:j})]}),e.jsxs(K,{children:[e.jsx(s,{children:k}),e.jsx(s,{children:a}),e.jsx(s,{children:l}),e.jsx(s,{children:"Premium"})]}),e.jsxs(U,{children:[e.jsx(s,{children:y}),e.jsx(s,{children:m}),e.jsx(s,{children:f}),e.jsx(s,{children:C[0]})]}),e.jsx(V,{type:"button",onClick:x,children:"Learn more"})]}),o&&e.jsx(we,{car:n,isOpen:o,closeFnc:x})]})};export{Se as C,Fe as a,ze as b,Ae as c,O as d,ke as s};
