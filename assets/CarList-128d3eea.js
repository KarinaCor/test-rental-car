import{s as t,r as S,j as e,b as L,c as R,f as D,g as P}from"./index-a7980c7a.js";const be=n=>n.cars.itemsCars,O=n=>n.cars.favoriteCars,we=n=>n.cars.isLoading,Ce=n=>n.cars.error,B=t.div`
  display: flex;
  width: 274px;
  height: 426px;
  flex-direction: column;
  align-items: flex-start;
  flex-shrink: 0;
`,N=t.div`
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
`,Q=t.p`
  display: flex;
  width: 270px;
  margin-top: 4px;
  margin-bottom:0;
`,r=t.span`
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
`,U=t.button`
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
`,V="/test-rental-car/assets/sprite-icons-c6e42e19.svg",M=n=>n.address.split(",")[1],T=n=>n.address.split(",")[2],Z=n=>{const o=n.rentalConditions.split(`
`),[c,s]=o[0].split(": ");return{key:c,value:s}},_=n=>n.rentalConditions.split(`
`)[1],ee=n=>n.rentalConditions.split(`
`)[2],te=n=>n.mileage.toString().replace(","),ne=t.div`
  width: 541px;
  max-height: 752px;
  /* height: 770px; */
  position: fixed;
  /* top: 0;
  left: 0; */
  z-index: 1000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  background-color: white;
`,ie=t.div`
  position: absolute;
  top: 18px;
  right: 18px;
  background-color: white;
  
`,se=t.div`
  padding: 40px;
  /* padding-bottom: 60px; */
`,oe=t.button`
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
`;const re=t.div`
  width: 461px;
  height: 248px;
  margin: 0 auto;
  border-radius: 14px;
  overflow: hidden;
`,ce=t.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`,pe=t.div`
  font-size: 18px;
  font-weight: 500;
  /* line-height: 24px; */
  margin-top: 14px;
`,le=t.span`
  color: #3470ff;
`,I=t.p`
  margin-top: 8px;
`,de=t.p`
  margin-top: 4px;
`,i=t.span`
  /* background-color: #363535;
  border-radius: 35px;
  padding: 7px 14px; */
  /* line-height: 18px; */
  font-size: 12px;
  color: #12141780;
  &:not(:last-child):after {
    color: grey;
    content: '|';
    padding: 0 3px;
  }
`,ae=t.p`
  font-size: 14px;
  font-weight: 400;
  /* line-height: 20px; */

  margin-top: 14px;
`,xe=t.p`
  margin-top: 8px;
`,he=t.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px; 

  margin-top: 24px;
`,ge=t.p`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;

  margin-top: 24px;
`,fe=t.button`
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
  line-height: 20px;

  border-radius: 12px;
  border: none;

  margin-top: 24px;

`,ue=t.div`
  display: flex;
  gap: 8px;

  /* margin-top: 15px; */
`,me=t.div`
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
  line-height: 18px;
  letter-spacing: -0.24px;
`;const z=t.span`
  font-weight: 600;
  color: #3470ff;
`,je=t.a`
  color: white;
`,ve=({children:n,isOpen:o,closeFnc:c,car:s})=>{const p=S.useCallback(()=>{o&&c()},[o,c]);S.useEffect(()=>{const x=$=>{$.code==="Escape"&&p()};return window.addEventListener("keydown",x),()=>{window.removeEventListener("keydown",x)}},[p]);const j=x=>{x.target===x.currentTarget&&p()},{id:v,year:h,make:g,model:y,type:b,img:w,description:f,accessories:l,fuelConsumption:C,engineSize:k,functionalities:d,rentalPrice:a}=s,A=M(s),u=T(s),m=Z(s),F=_(s),W=ee(s),E=te(s);return e.jsx(e.Fragment,{children:e.jsx("div",{children:e.jsxs(ne,{onClick:j,children:[e.jsxs(ie,{children:[n,e.jsx(oe,{onClick:p,children:"X"})]}),e.jsxs(se,{children:[e.jsx(re,{children:e.jsx(ce,{src:w,alt:f})}),e.jsxs(pe,{children:[g," ",e.jsx(le,{children:y}),", ",h]}),e.jsxs(I,{children:[e.jsx(i,{children:A}),e.jsx(i,{children:u}),e.jsxs(i,{children:["Id: ",v]}),e.jsxs(i,{children:["Year: ",h]}),e.jsxs(i,{children:["Type: ",b]})]}),e.jsxs(I,{children:[e.jsxs(i,{children:["Fuel Consumption: ",C]}),e.jsxs(i,{children:["Engine Size: ",k]})]}),e.jsx(ae,{children:f}),e.jsx(he,{children:"Accessories and functionalities:"}),e.jsxs(xe,{children:[e.jsx(i,{children:l[0]}),e.jsx(i,{children:l[1]}),e.jsx(i,{children:l[2]})]}),e.jsxs(de,{children:[e.jsx(i,{children:d[0]}),e.jsx(i,{children:d[1]}),e.jsx(i,{children:d[2]})]}),e.jsx(ge,{children:"Rental Conditions:"}),e.jsxs(ue,{children:[e.jsxs(i,{children:[m.key,": ",e.jsx(z,{children:m.value})]}),e.jsx(i,{children:F})]}),e.jsxs(me,{children:[e.jsx(i,{children:W}),e.jsxs(i,{children:["Mileage: ",e.jsx(z,{children:E})]}),e.jsxs(i,{children:["Price: ",e.jsx(z,{children:a})]})]}),e.jsx(fe,{type:"button",children:e.jsx(je,{href:"tel:+30000000",children:"Rental car"})})]})]})})})},ke=({car:n})=>{const o=L(),c=R(O),[s,p]=S.useState(!1),{id:j,year:v,make:h,model:g,type:y,img:b,description:w,rentalPrice:f,rentalCompany:l,accessories:C}=n,k=M(n),d=T(n),a=c.some(F=>F.id===n.id),A=()=>{o(a?D(n):P(n))},u=()=>{p(!s)},m=a?"heart-active":"heart-normal";return e.jsxs(e.Fragment,{children:[e.jsxs(B,{children:[e.jsxs(N,{children:[e.jsx(X,{src:b,alt:w}),e.jsx(Y,{type:"button",onClick:A,"aria-label":a?"Remove from favorites":"Add to favorites",children:e.jsx(q,{width:"14",height:"14",children:e.jsx("use",{href:`${V}#${m}`})})})]}),e.jsxs(G,{children:[e.jsxs("div",{children:[h," ",e.jsx(H,{children:g}),", ",v]}),e.jsx(J,{children:f})]}),e.jsxs(K,{children:[e.jsx(r,{children:k}),e.jsx(r,{children:d}),e.jsx(r,{children:l})]}),e.jsxs(Q,{children:[e.jsx(r,{children:y}),e.jsx(r,{children:g}),e.jsx(r,{children:j}),e.jsx(r,{children:C[0]})]}),e.jsx(U,{type:"button",onClick:u,children:"Learn more"})]}),s&&e.jsx(ve,{car:n,isOpen:s,closeFnc:u})]})};export{ke as C,Ce as a,we as b,O as c,be as s};
