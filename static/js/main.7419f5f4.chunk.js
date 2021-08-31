(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{22:function(t,e,n){},23:function(t,e,n){},28:function(t,e,n){"use strict";n.r(e);var a,c,r,i,s,o,l,u,b=n(2),h=n.n(b),d=n(11),j=n.n(d),f=(n(22),n(9)),p=n(16),m=n(5),O=n(6),x=n(8),v=n(7),g=n(30),y=(n(23),n(3)),S=n(4),C=S.a.form(a||(a=Object(y.a)(["\n  width: 70%;\n  margin-bottom: 50px;\n"]))),k=S.a.label(c||(c=Object(y.a)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 10px;\n\n  font-size: 18px;\n"]))),w=n(1),D=function(t){Object(x.a)(n,t);var e=Object(v.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:"",filter:""},t.onChange=function(e){var n=e.currentTarget,a=n.value,c=n.name;t.setState(Object(f.a)({},c,a))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.resetInput()},t.resetInput=function(){t.setState({name:"",number:""})},t}return Object(O.a)(n,[{key:"render",value:function(){return Object(w.jsxs)(C,{onSubmit:this.handleSubmit,children:[Object(w.jsxs)(k,{children:["Name",Object(w.jsx)("input",{onChange:this.onChange,value:this.state.name,type:"text",name:"name",pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0})]}),Object(w.jsxs)(k,{children:["Number",Object(w.jsx)("input",{onChange:this.onChange,type:"tel",name:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0})]}),Object(w.jsx)("button",{type:"submit",children:"Add contact"})]})}}]),n}(b.Component),A=n(13),F=n(14),B=S.a.button(r||(r=Object(y.a)(["\n  width: 80px;\n\n  transition: all 250ms ease;\n  &:hover,\n  :focus {\n    background-color: skyblue;\n  }\n"]))),L=S.a.li(i||(i=Object(y.a)(["\n  height: 30px;\n  display: flex;\n  justify-content: space-between;\n"]))),z=S.a.div(s||(s=Object(y.a)(["\n  display: flex;\n  gap: 5px;\n  align-items: center;\n"]))),I=function(t){var e=t.elData,n=t.deleteBtn;return Object(w.jsxs)(L,{children:[Object(w.jsxs)(z,{children:[Object(w.jsx)(A.a,{}),e.name,": ",e.number]}),Object(w.jsx)(B,{type:"button","data-id":e.id,onClick:function(t){n(e.id)},children:Object(w.jsx)(F.a,{})})]})},R=S.a.ul(o||(o=Object(y.a)(["\n  list-style: none;\n  padding: 0;\n\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n"]))),E=function(t){var e=t.contactsList,n=t.searchResult,a=t.btnDelete,c=0===e.length,r=0===n.length;return Object(w.jsxs)("div",{children:[c&&Object(w.jsx)("p",{children:"Your contacts List is still empty."}),Object(w.jsx)(R,{children:r?e.map((function(t){return Object(w.jsx)(I,{elData:t,deleteBtn:a},t.id)})):n.map((function(t){return Object(w.jsx)(I,{elData:t},t.id)}))})]})},J=n(15),T=S.a.label(l||(l=Object(y.a)(["\n  display: flex;\n  align-items: center;\n  gap: 5px;\n"]))),N=function(t){Object(x.a)(n,t);var e=Object(v.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={filter:""},t.handleQuery=function(e){var n=e.currentTarget.value;t.setState({filter:e.currentTarget.value}),t.props.onChange(n)},t}return Object(O.a)(n,[{key:"render",value:function(){return Object(w.jsxs)("div",{children:[Object(w.jsx)("h3",{children:"Find contacts by name"}),Object(w.jsxs)(T,{children:[Object(w.jsx)("input",{type:"text",name:"filter",onChange:this.handleQuery,value:this.state.filter}),Object(w.jsx)(J.a,{size:"18"})]})]})}}]),n}(b.Component),Q=S.a.div(u||(u=Object(y.a)(["\n  width: 25%;\n  padding-left: 30px;\n"]))),M=function(t){Object(x.a)(n,t);var e=Object(v.a)(n);function n(){var t;Object(m.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:"",searchResult:[]},t.handleFormSubmit=function(e){var n=e.name,a=e.number;t.checkForDouble(n)||t.setState((function(t){return{contacts:[].concat(Object(p.a)(t.contacts),[{name:n,number:a,id:Object(g.a)()}])}}))},t.searchContacts=function(e){var n=e.trim().toLowerCase();return t.state.contacts.filter((function(t){return t.name.toLowerCase().indexOf(n)>-1}))},t.handleQuery=function(e){if(""===e.trim())return t.updateStateEl("filter",""),void t.updateStateEl("searchResult",[]);t.setState({filter:e});var n=t.searchContacts(e);t.setState({searchResult:n})},t.updateStateEl=function(e,n){t.setState(Object(f.a)({},e,n))},t.checkForDouble=function(e){var n=t.state.contacts.find((function(t){return t.name===e}));return n&&alert("".concat(e," is already in contacts")),n},t.onDeleteBtn=function(e){var n=t.state.contacts.filter((function(t){return t.id!==e}));t.updateStateEl("contacts",n)},t}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);if(null===e)return this.setState({contacts:[]});this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){if(this.state!==e){var n=this.state.contacts;localStorage.setItem("contacts",JSON.stringify(n))}}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.searchResult;return Object(w.jsxs)(Q,{children:[Object(w.jsx)("h1",{children:"Phonebook"}),Object(w.jsx)(D,{onSubmit:this.handleFormSubmit}),Object(w.jsx)("h2",{children:"Contacts"}),Object(w.jsx)(N,{onChange:this.handleQuery}),Object(w.jsx)(E,{searchResult:n,contactsList:e,btnDelete:this.onDeleteBtn})]})}}]),n}(b.Component),P=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,31)).then((function(e){var n=e.getCLS,a=e.getFID,c=e.getFCP,r=e.getLCP,i=e.getTTFB;n(t),a(t),c(t),r(t),i(t)}))};j.a.render(Object(w.jsx)(h.a.StrictMode,{children:Object(w.jsx)(M,{})}),document.getElementById("root")),P()}},[[28,1,2]]]);
//# sourceMappingURL=main.7419f5f4.chunk.js.map