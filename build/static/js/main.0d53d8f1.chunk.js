(this.webpackJsonpphonebook=this.webpackJsonpphonebook||[]).push([[0],{39:function(e,n,t){},40:function(e,n,t){"use strict";t.r(n);var c=t(15),a=t.n(c),r=t(6),u=t(3),o=t(1),i=t(0),s=function(e){var n=e.filterName,t=e.handleFilterChange;return Object(i.jsxs)("div",{children:["filter shown with",Object(i.jsx)("input",{value:n,onChange:t})]})},l=function(e){return Object(i.jsxs)("form",{onSubmit:e.addContact,children:[Object(i.jsxs)("div",{children:["name:",Object(i.jsx)("input",{value:e.newName,onChange:e.handleNameChange})]}),Object(i.jsxs)("div",{children:["number:",Object(i.jsx)("input",{value:e.newNumber,onChange:e.handleNumberChange})]}),Object(i.jsx)("div",{children:Object(i.jsx)("button",{type:"submit",children:"add"})})]})},d=function(e){var n=e.contact,t=e.deleteContact;return Object(i.jsxs)("li",{children:[n.name," ",n.number,Object(i.jsx)("button",{onClick:t,children:"delete"})]})},j=function(e){var n=e.contactsToShow,t=e.deleteContact;return Object(i.jsx)("ul",{children:n.map((function(e){return Object(i.jsx)(d,{contact:e,deleteContact:function(){return t(e.id,e.name)}},e.name)}))})},b=t(4),h=t.n(b),f="/api/persons",m=function(){return h.a.get(f).then((function(e){return e.data}))},O=function(e){return h.a.post(f,e).then((function(e){return e.data}))},v=function(e,n){return h.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},x=function(e){return h.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},p=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"notification",children:n})},w=function(e){var n=e.message;return null===n?null:Object(i.jsx)("div",{className:"error",children:n})},g=(t(39),function(){var e=Object(o.useState)([]),n=Object(u.a)(e,2),t=n[0],c=n[1],a=Object(o.useState)(""),d=Object(u.a)(a,2),b=d[0],h=d[1],f=Object(o.useState)(""),g=Object(u.a)(f,2),C=g[0],N=g[1],S=Object(o.useState)(""),k=Object(u.a)(S,2),T=k[0],y=k[1],A=Object(o.useState)(null),D=Object(u.a)(A,2),E=D[0],F=D[1],J=Object(o.useState)(null),L=Object(u.a)(J,2),B=L[0],I=L[1],P=t.filter((function(e){return e.name.toLowerCase().includes(T.toLowerCase())}));return Object(o.useEffect)((function(){m().then((function(e){c(e)}))}),[]),Object(i.jsxs)("div",{children:[Object(i.jsx)("h2",{children:"Phonebook"}),Object(i.jsx)(p,{message:E}),Object(i.jsx)(w,{message:B}),Object(i.jsx)(s,{filterName:T,handleFilterChange:function(e){return y(e.target.value)}}),Object(i.jsx)("h3",{children:"Add contact"}),Object(i.jsx)(l,{newName:b,newNumber:C,handleNameChange:function(e){return h(e.target.value)},handleNumberChange:function(e){return N(e.target.value)},addContact:function(e){e.preventDefault();var n=t.find((function(e){return e.name===b}));n?window.confirm("".concat(b," is already added to phonebook, replace the old number with a new one?"))&&function(e,n){var a=Object(r.a)(Object(r.a)({},e),{},{number:n});v(e.id,a).then((function(n){c(t.map((function(t){return t.id!==e.id?t:n}))),h(""),N(""),F("Updated ".concat(n.name)),setTimeout((function(){F(null)}),5e3)})).catch((function(e){I("".concat(a.name," was already removed from server")),setTimeout((function(){I(null)}),5e3)}))}(n,C):O({name:b,number:C}).then((function(e){c(t.concat(e)),h(""),N(""),F("Added ".concat(e.name)),setTimeout((function(){F(null)}),5e3)}))}}),Object(i.jsx)("h3",{children:"Numbers"}),Object(i.jsx)(j,{contactsToShow:P,deleteContact:function(e,n){window.confirm("Delete ".concat(n,"?"))&&x(e).then(c(t.filter((function(n){return n.id!==e}))))}})]})});a.a.render(Object(i.jsx)(g,{}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.0d53d8f1.chunk.js.map