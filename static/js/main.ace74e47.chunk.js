(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{11:function(t,e,n){t.exports={title:"App_title__1TR0X"}},12:function(t,e,n){t.exports={label:"Filter_label__BW1gn",input:"Filter_input__13dvE"}},2:function(t,e,n){t.exports={form:"ContactForm_form__1wQfb",label:"ContactForm_label__3PR0F",input:"ContactForm_input__4jHmP",button:"ContactForm_button__PUio9"}},21:function(t,e,n){},31:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),s=n(13),r=n.n(s),o=(n(20),n(21),n(15)),i=n(5),l=n(6),u=n(8),m=n(7),b=n(3),h=n.n(b),f=n(11),d=n.n(f),j=n(14),p=n(2),O=n.n(p),_=n(0),v=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.nameInputId=h.a.generate(),t.numberInputId=h.a.generate(),t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.handleSubmit=function(e){e.preventDefault(),t.props.onSubmit(t.state),t.reset()},t.reset=function(){t.setState({name:"",number:""})},t}return Object(l.a)(n,[{key:"render",value:function(){return Object(_.jsxs)("form",{className:O.a.form,onSubmit:this.handleSubmit,children:[Object(_.jsxs)("label",{className:O.a.label,htmlFor:this.nameInputId,children:["Name",Object(_.jsx)("input",{className:O.a.input,type:"text",name:"name",value:this.state.name,onChange:this.handleChange,id:this.nameInputId})]}),Object(_.jsxs)("label",{className:O.a.label,htmlFor:this.numberInputId,children:["Number",Object(_.jsx)("input",{className:O.a.input,type:"text",name:"number",value:this.state.number,onChange:this.handleChange,id:this.numberInputId})]}),Object(_.jsx)("button",{className:O.a.button,type:"submit",children:"Add contact"})]})}}]),n}(a.Component),C=n(12),g=n.n(C),x=function(t){var e=t.value,n=t.onChange;return Object(_.jsxs)("label",{className:g.a.label,children:["Find contacts by name",Object(_.jsx)("input",{className:g.a.input,type:"text",value:e,onChange:n})]})},S=n(9),N=n.n(S),y=function(t){var e=t.contacts,n=t.onDeleteContact;return Object(_.jsx)("ul",{className:N.a.list,children:e.map((function(t){var e=t.id,a=t.name,c=t.number;return Object(_.jsxs)("li",{className:N.a.item,children:[a,": ",c,Object(_.jsx)("button",{className:N.a.button,onClick:function(){return n(e)},children:"Delete"})]},e)}))})},I=function(t){Object(u.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.formSubmitHandler=function(e){if(t.state.contacts.find((function(t){return e.name.toLowerCase()===t.name.toLowerCase()})))alert("".concat(e.name," is already in contacts"));else{var n={id:h.a.generate(),name:e.name,number:e.number};t.setState((function(t){var e=t.contacts;return{contacts:[n].concat(Object(o.a)(e))}}))}},t.changeFilter=function(e){t.setState({filter:e.currentTarget.value})},t.getVisibleContacts=function(){var e=t.state,n=e.filter,a=e.contacts,c=n.toLowerCase();return a.filter((function(t){return t.name.toLowerCase().includes(c)}))},t.deleteContact=function(e){t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state.filter,e=this.getVisibleContacts();return Object(_.jsxs)("main",{children:[Object(_.jsx)("h1",{className:d.a.title,children:"Phonebook"}),Object(_.jsx)(v,{onSubmit:this.formSubmitHandler}),Object(_.jsx)("h2",{className:d.a.title,children:"Contacts"}),Object(_.jsx)(x,{value:t,onChange:this.changeFilter}),Object(_.jsx)(y,{contacts:e,onDeleteContact:this.deleteContact})]})}}]),n}(a.Component);r.a.render(Object(_.jsx)(c.a.StrictMode,{children:Object(_.jsx)(I,{})}),document.getElementById("root"))},9:function(t,e,n){t.exports={list:"ContactList_list__Io7ew",item:"ContactList_item__1DzSj",button:"ContactList_button__12eVx"}}},[[31,1,2]]]);
//# sourceMappingURL=main.ace74e47.chunk.js.map