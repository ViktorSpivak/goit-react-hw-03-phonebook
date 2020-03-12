(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{21:function(e,t,n){e.exports=n(34)},34:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(15),c=n.n(o),l=n(19),i=n(4),u=n(5),s=n(7),m=n(6),d=n(8),h=n(16),b=n(1),f=n.n(b),p=n(9),v=n.n(p),C=n(38),F=n(18),S=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={name:"",number:""},n.nameFormId=Object(C.a)(),n.numberFormId=Object(C.a)(),n.handleChange=function(e){var t=e.target,a=t.name,r=t.value;n.setState(Object(h.a)({},a,r))},n.handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.name,r=t.number;if(n.props.onFindOverlap(a))return alert("".concat(a," is already in contacts")),void n.clearSetState();if(!Object(F.a)(r))return alert("Wrong number, use format +12133734253 (11 numbers"),void n.clearSetState();var o={id:Object(C.a)(),name:a,number:r};n.props.onCheckIn(o),n.clearSetState()},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"clearSetState",value:function(){this.setState({name:"",number:""})}},{key:"render",value:function(){var e=this.state,t=e.name,n=e.number;return r.a.createElement("form",{onSubmit:this.handleSubmit,className:v.a.phonebookForm},r.a.createElement("label",{htmlFor:this.nameFormId,className:v.a.labelStyle},"Name",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:t,onChange:this.handleChange,name:"name",id:this.nameFormId})),r.a.createElement("label",{htmlFor:this.numberFormId,className:v.a.labelStyle},"Number",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:n,onChange:this.handleChange,name:"number",id:this.numberFormId})),r.a.createElement("button",{type:"submit"},"Add contact"))}}]),t}(a.Component);S.protoTypes={onFindOverlap:f.a.func.isRequired,onCheckIn:f.a.func.isRequired};var y=S,O=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={filter:""},n.findFormId=Object(C.a)(),n.handleChangeFilter=function(e){n.setState({filter:e.target.value}),n.props.onFindContact(e.target.value)},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this.state.filter;return r.a.createElement("label",{htmlFor:this.findFormId,className:v.a.labelStyle},"Find contacts by name",r.a.createElement("br",null),r.a.createElement("input",{type:"text",value:e,onChange:this.handleChangeFilter,id:this.findFormId}))}}]),t}(a.Component);O.protoTypes={onFindContact:f.a.func.isRequired};var g=function(e){var t=e.onShowFindRes,n=e.onDelete;return r.a.createElement("div",null,r.a.createElement("ul",null,t.map((function(e){var t=e.name,a=e.number,o=e.id;return r.a.createElement("li",{key:o},t,":",a,r.a.createElement("button",{id:o,onClick:n},"Delete"))}))))};g.protoTypes={onShowFindRes:f.a.func.isRequired,onDelete:f.a.func.isRequired};var k=g,E=function(e){function t(){var e,n;Object(i.a)(this,t);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(n=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={contacts:[{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"},{id:"id-5",name:"ennie kopeland",number:"227-91-26"}],filter:""},n.handleFindOverlap=function(e){return n.state.contacts.some((function(t){return t.name.toLowerCase().split(" ").some((function(t){return t===e.toLowerCase()}))}))},n.handleChangeFilter=function(e){n.setState({filter:e})},n.handleFindContacts=function(){return n.state.contacts.filter((function(e){return e.name.toLowerCase().split(" ").some((function(e){return e.startsWith(n.state.filter.toLowerCase())}))}))},n.handleDeleteContact=function(e){e.persist(),n.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e.target.id}))}}))},n.handleCheckIn=function(e){n.setState((function(t){return{contacts:[].concat(Object(l.a)(t.contacts),[e])}}))},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentDidUpdate",value:function(){localStorage.setItem("contacts","".concat(JSON.stringify(this.state.contacts)))}},{key:"componentDidMount",value:function(){var e=JSON.parse(localStorage.getItem("contacts"));e&&this.setState({contacts:e})}},{key:"componentWillUnmount",value:function(){localStorage.clear()}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Phonebook"),r.a.createElement(y,{onCheckIn:this.handleCheckIn,onFindOverlap:this.handleFindOverlap}),r.a.createElement("h2",null,"Contacts"),r.a.createElement(O,{onFindContact:this.handleChangeFilter}),r.a.createElement(k,{onShowFindRes:this.handleFindContacts(),onDelete:this.handleDeleteContact}))}}]),t}(a.Component);c.a.render(r.a.createElement(E,null),document.getElementById("root"))},9:function(e,t,n){e.exports={phonebookForm:"contactform_phonebookForm__LBykv",labelStyle:"contactform_labelStyle__2ZDfI"}}},[[21,1,2]]]);
//# sourceMappingURL=main.07171cb3.chunk.js.map