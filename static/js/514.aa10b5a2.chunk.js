"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[514],{8514:function(e,t,n){n.r(t),n.d(t,{default:function(){return g}});var s="Contacts_contacts__oHtMx",r=n(2791),c=n(9434),a=n(5034),o=n(3661),l=n(6895),i="Card_contacts__item__9DfVu",u="Card_user__number__2vsct",d="Card_iconMoon__PIfaO",_="Card_contacts__btn__Zo1Nf",f=n(828),h=n(184),m=function(e){var t=e.filteredContacts,n=e.handleDeleteContact;return t.map((function(e){var t=e.name,s=e.id,r=e.number;return(0,h.jsxs)("li",{className:i,id:s,children:[(0,h.jsxs)("p",{children:["name: ",t]}),(0,h.jsxs)("p",{className:u,children:[(0,h.jsx)(f.MdO,{className:d}),r,(0,h.jsx)(f.sQZ,{type:"button",className:_,onClick:function(){return n(s)}})]})]},t)}))},x={filterInput:"Filter_filterInput__1Cysk",userForm__label:"Filter_userForm__label__CI043"},C=function(){var e=(0,c.I0)(),t=(0,c.v9)(l.B8);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)("h2",{children:"Contacts"}),(0,h.jsxs)("div",{className:x.filter,children:[(0,h.jsx)("label",{htmlFor:"filter",className:x.userForm__label,children:"Find contacts by name"}),(0,h.jsx)("input",{type:"text",id:"filter",placeholder:"Search...",className:x.filterInput,onChange:function(t){return e((0,l.KJ)(t.target.value))},value:t})]})]})},j=n(6565),p=n(1087),N="NotFound_picture__FhKXF",b="NotFound_imageNotFound__TOh5Y",F=function(){return(0,h.jsxs)("picture",{className:N,children:[(0,h.jsx)("img",{className:b,src:j,alt:"Not found",width:250,height:250}),(0,h.jsxs)("b",{children:["Phonebook is empty! You can add your contacts ",(0,h.jsx)(p.rU,{to:"/",children:"here"}),"."]})]})},v=n(1328),k=n(5264),g=function(){var e=(0,c.I0)(),t=(0,c.v9)(l.DH),n=(0,c.v9)(o.$k),i=(0,c.v9)(l.B8);(0,r.useEffect)((function(){e((0,a.yF)())}),[e]);var u=t.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())})),d=t.length>0;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(C,{}),n?(0,h.jsx)("p",{children:"Loading..."}):d&&(0,h.jsx)("ul",{className:s,children:(0,h.jsx)(m,{handleDeleteContact:function(t){v.Confirm.show("Deleteing Confirm","This contact will be deleted!","Yes","No",(function(){e((0,a.GK)(t)),k.Notify.success("The contact has been deleted!",{clickToClose:!0})}),(function(){k.Notify.info("Deletion canceled!",{clickToClose:!0})}))},filteredContacts:u})}),!n&&!d&&(0,h.jsx)(F,{})]})}}}]);
//# sourceMappingURL=514.aa10b5a2.chunk.js.map