(this["webpackJsonpcs4550-client-su20-project-group17"]=this["webpackJsonpcs4550-client-su20-project-group17"]||[]).push([[0],{13:function(e,t,a){e.exports=a.p+"static/media/logo.89c5be5c.svg"},21:function(e,t,a){e.exports=a(32)},26:function(e,t,a){},32:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(19),c=a.n(l),o=(a(26),a(13)),s=a.n(o),u=a(1),i=a(4),m=a(3),p=a(2),h=a(6),d=a(5),f=function(){return fetch("http://localhost:8080/api/profile",{method:"GET",credentials:"include"}).then((function(e){return e.json()}))},E=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={currentUser:{username:""}},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().catch((function(e){})).then((function(t){t&&e.setState({currentUser:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h5",null,"Designed by Group 17"),this.state.currentUser.username&&r.a.createElement("h3",null,"Welcome ",this.state.currentUser.username),r.a.createElement("div",{className:"list-group"},r.a.createElement(h.b,{className:"list-group-item",to:"/search"},"Search products on Amazon/Google"),r.a.createElement(h.b,{className:"list-group-item",to:"/products"},"Product List"),!this.state.currentUser.username&&r.a.createElement(h.b,{className:"list-group-item",to:"/login"},"Login"),!this.state.currentUser.username&&r.a.createElement(h.b,{className:"list-group-item",to:"/register"},"Registration"),this.state.currentUser.username&&r.a.createElement(h.b,{className:"list-group-item",to:"/profile/".concat(this.state.currentUser.id)},"Profile")))}}]),a}(r.a.Component),b=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",type:"",error:null},e.login=function(){fetch("http://localhost:8080/api/login",{body:JSON.stringify({username:e.state.username,password:e.state.password,type:e.state.type}),headers:{"content-type":"application/json"},method:"POST",credentials:"include"}).then((function(e){return e.json()})).catch((function(t){e.setState({error:"Oops, that's not a match."})})).then((function(t){t&&e.props.history.push("/profile/".concat(t.id))}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Login"),this.state.error&&r.a.createElement("div",{className:"alert alert-danger"},this.state.error),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{htmlFor:"username",className:"col-sm-1 col-form-label"},"Username: "),r.a.createElement("div",{className:"col-sm-11"},r.a.createElement("input",{onChange:function(t){return e.setState({username:t.target.value})},className:"form-control",id:"username",placeholder:"Alice"}))),r.a.createElement("div",{className:"form-group row"},r.a.createElement("label",{className:"col-sm-1 col-form-label",htmlFor:"password"},"Password: "),r.a.createElement("div",{className:"col-sm-11"},r.a.createElement("input",{onChange:function(t){return e.setState({password:t.target.value})},className:"form-control",id:"password",placeholder:"123qwe#$%"}))),r.a.createElement("button",{onClick:this.login,className:"btn btn-primary"},"Login"),r.a.createElement(h.b,{to:"/register"},r.a.createElement("button",{className:"btn btn-primary"},"Sign up")))}}]),a}(r.a.Component),v=function(){return fetch("http://localhost:8080/api/products").then((function(e){return e.json()}))},y=function(e){return fetch("http://localhost:8080/api/products/"+e,{method:"DELETE"}).then((function(e){return e.json()}))},g=function(e,t){return fetch("http://localhost:8080/api/users/"+e,{method:"POST",body:JSON.stringify(t),headers:{"content-type":"application/json"}}).then((function(e){return e.json()}))},j=function(e){return fetch("http://localhost:8080/api/users/"+e+"/products").then((function(e){return e.json()}))},w=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={product:e.props.product},e.render=function(){return r.a.createElement("tr",null,console.log(e.state.product),r.a.createElement("td",null,r.a.createElement(h.b,{to:"/details/".concat(e.state.product.id)},e.state.product.productName)),r.a.createElement("td",null,e.state.product.price),r.a.createElement("td",null,e.state.product.id),r.a.createElement("td",null,r.a.createElement("button",{onClick:function(){y(e.state.product.id)}},"delete")))},e}return a}(r.a.Component),O=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={products:[]},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Poster"))),r.a.createElement("tbody",null,this.props.products.map((function(e){return r.a.createElement(w,{key:e.id,product:e})})))))}}]),a}(r.a.Component),N=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={productList:[],currentUser:{username:""},username:"",password:"",type:"",productName:"",productPrice:"",productDetail:"",birthday:"",email:"default@gmail.com"},e.findAllProductByUserId=function(){return j(e.props.match.params.uid).then((function(t){return e.setState({productList:t})}))},e.logout=function(){fetch("http://localhost:8080/api/logout",{method:"POST",credentials:"include"}).then((function(t){return e.props.history.push("/")}))},e.update=function(){fetch("http://localhost:8080/api/profile/".concat(e.props.match.params.uid),{method:"PUT",body:JSON.stringify({username:e.state.username,email:e.state.email,birthday:e.state.birthday,password:e.state.password,type:e.state.type}),headers:{"content-type":"application/json"},credentials:"include"}).then((function(e){return e.json()}))},e.addProduct=function(t){return g(e.props.match.params.uid,{productName:e.state.productName,price:e.state.productPrice,details:e.state.productDetail})},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;f().catch((function(t){e.props.history.push("/profile/".concat(e.props.match.params.uid))})).then((function(t){t&&(t.id!=e.props.match.params.uid?e.setState({currentUser:{username:""}}):e.setState({currentUser:t,username:t.username,password:t.password,type:t.type,email:t.email,birthday:t.birthday}))}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,!this.state.currentUser.username&&r.a.createElement("div",null,r.a.createElement("h3",null,"need sign in"),r.a.createElement("button",{onClick:function(){return e.findAllProductByUserId()}},"show his/her on-sell products"),r.a.createElement("div",null,r.a.createElement(O,{products:this.state.productList}))),"seller"===this.state.type&&r.a.createElement("div",null,r.a.createElement("h2",null,"Username"),r.a.createElement("input",{value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})},className:"form-control"}),r.a.createElement("br",null),r.a.createElement("h2",null,"User Password"),r.a.createElement("input",{value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},className:"form-control"}),r.a.createElement("br",null),r.a.createElement("h2",null,"User Email"),r.a.createElement("input",{type:"email",className:"form-control",value:this.state.email,placeholder:"li.tianq@husky.neu.edu",title:"The email address you use",onChange:function(t){return e.setState({email:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("h2",null,"User Birthday"),r.a.createElement("input",{type:"date",className:"form-control",value:this.state.birthday,title:"The Date of birth for you",onChange:function(t){return e.setState({birthday:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("h3",null,this.state.type),r.a.createElement("button",{onClick:this.update,className:"btn btn-primary"},"Update"),r.a.createElement("button",{className:"btn btn-danger",onClick:this.logout},"Sign out"),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("h2",null," Sell your product here! "),r.a.createElement("input",{onChange:function(t){return e.setState({productName:t.target.value})},value:this.state.productName,placeholder:"Product Name"}),r.a.createElement("input",{onChange:function(t){return e.setState({productPrice:t.target.value})},value:this.state.productPrice,placeholder:"Product Price"}),r.a.createElement("input",{onChange:function(t){return e.setState({productDetail:t.target.value})},value:this.state.productDetail,placeholder:"Product Detail"}),r.a.createElement("button",{onClick:function(){return e.addProduct()}},"Add Product"),r.a.createElement("button",{onClick:function(){return e.findAllProductByUserId()}},"show your on-sell products"),r.a.createElement("div",null,r.a.createElement(O,{products:this.state.productList}))),"buyer"===this.state.type&&r.a.createElement("div",null,r.a.createElement("h2",null,"Username"),r.a.createElement("input",{value:this.state.username,onChange:function(t){return e.setState({username:t.target.value})},className:"form-control"}),r.a.createElement("br",null),r.a.createElement("h2",null,"User Password"),r.a.createElement("input",{value:this.state.password,onChange:function(t){return e.setState({password:t.target.value})},className:"form-control"}),r.a.createElement("br",null),r.a.createElement("h2",null,"User Email"),r.a.createElement("input",{type:"email",className:"form-control",placeholder:"li.tianq@husky.neu.edu",title:"The email address you use",onChange:function(t){return e.setState({email:t.target.value})},value:this.state.email}),r.a.createElement("br",null),r.a.createElement("h2",null,"User Birthday"),r.a.createElement("input",{type:"date",className:"form-control",value:this.state.birthday,title:"The Date of birth for you",onChange:function(t){return e.setState({birthday:t.target.value})}}),r.a.createElement("br",null),r.a.createElement("h3",null,this.state.type),r.a.createElement("button",{onClick:this.update,className:"btn btn-primary"},"Update"),r.a.createElement("button",{className:"btn btn-danger",onClick:this.logout},"Sign out")))}}]),a}(r.a.Component),S=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(e=t.call.apply(t,[this].concat(l))).state={product:e.props.product},e.render=function(){return r.a.createElement("tr",null,console.log(e.state.product),r.a.createElement("td",null,r.a.createElement(h.b,{to:"/details/".concat(e.state.product.asin)},e.state.product.title)),r.a.createElement("td",null,e.state.product.price),r.a.createElement("td",null,r.a.createElement("img",{src:e.state.product.thumbnail})))},e}return a}(r.a.Component),k=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={products:[]},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("br",null),r.a.createElement("table",{className:"table"},r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Title"),r.a.createElement("th",null,"Price"),r.a.createElement("th",null,"Poster"))),r.a.createElement("tbody",null,this.props.products.map((function(e){return r.a.createElement(S,{key:e.asin,product:e})})))))}}]),a}(r.a.Component),A=function(e){return fetch("https://amazon-product-reviews-keywords.p.rapidapi.com/product/search?country=US&keyword=iphone".replace("iphone",e),{method:"GET",headers:{"x-rapidapi-host":"amazon-product-reviews-keywords.p.rapidapi.com","x-rapidapi-key":"d84db33b52msh35262445c420772p1ec9bfjsn0aa4c6bef814"}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},C=function(e){return fetch("https://amazon-product-reviews-keywords.p.rapidapi.com/product/details?country=US&asin=B01LWAM0V1".replace("B01LWAM0V1",e),{method:"GET",headers:{"x-rapidapi-host":"amazon-product-reviews-keywords.p.rapidapi.com","x-rapidapi-key":"d84db33b52msh35262445c420772p1ec9bfjsn0aa4c6bef814"}}).then((function(e){return e.json()})).catch((function(e){console.log(e)}))},P=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={searchTitle:e.props.match.params.title,products:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;void 0!==this.state.searchTitle&&A(this.state.searchTitle).then((function(t){return e.setState({products:t.products})}))}},{key:"componentDidUpdate",value:function(e,t,a){var n=this;e.match.params.title!==this.props.match.params.title&&A(this.state.searchTitle).then((function(e){return n.setState({products:e.products})}))}},{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h2",null,"Search Products on Amazon"),r.a.createElement("input",{onChange:function(t){return e.setState({searchTitle:t.target.value})},placeholder:"Input Product Title"}),r.a.createElement("button",null,r.a.createElement(h.b,{to:"/search/".concat(this.state.searchTitle)},"Search")),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(k,{products:this.state.products})))}}]),a}(r.a.Component),U=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={username:"",password:"",type:"seller",error:null},e.register=function(){fetch("http://localhost:8080/api/register",{body:JSON.stringify({username:e.state.username,password:e.state.password,type:e.state.type}),headers:{"content-type":"application/json"},method:"POST",credentials:"include"}).then((function(e){return e.json()})).catch((function(t){e.setState({error:"Unable to register"})})).then((function(t){t&&e.props.history.push("/profile/".concat(t.id))}))},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("h1",null,"Register"),this.state.error&&r.a.createElement("div",{className:"alert alert-danger"},this.state.error),r.a.createElement("input",{onChange:function(t){return e.setState({username:t.target.value})},className:"form-control"}),r.a.createElement("input",{onChange:function(t){return e.setState({password:t.target.value})},className:"form-control"}),r.a.createElement("select",{onChange:function(t){return e.setState({type:t.target.value})}},r.a.createElement("option",{value:"seller"},"seller"),r.a.createElement("option",{value:"buyer"},"buyer")),r.a.createElement("br",null),r.a.createElement("button",{onClick:this.register,className:"btn btn-primary"},"Register"),r.a.createElement(h.b,{to:"/login"},"Sign in"))}}]),a}(r.a.Component),z=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={products:[],newProductTitle:""},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;v().then((function(t){return e.setState({products:t})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Product List"),r.a.createElement(O,{products:this.state.products}))}}]),a}(r.a.Component),T=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={detailFromAmazon:e.props.detailFromAmazon,reviews:e.props.detailFromAmazon.reviews},e}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,console.log(this.props.detailFromAmazon),r.a.createElement("h4",null,"Title: "),r.a.createElement("h5",null,this.state.detailFromAmazon.title),r.a.createElement("br",null),r.a.createElement("h4",null,"Brand: "),r.a.createElement("h5",null,this.state.detailFromAmazon.brand),r.a.createElement("br",null),r.a.createElement("h4",null,"FulfilledBy: "),r.a.createElement("h5",null,this.state.detailFromAmazon.fulfilledBy),r.a.createElement("br",null),r.a.createElement("h4",null,"Url: "),r.a.createElement("h5",null,this.state.detailFromAmazon.url),r.a.createElement("br",null),r.a.createElement("h4",null,"Price Details: "),r.a.createElement("h5",null,JSON.stringify(this.state.detailFromAmazon.price)),r.a.createElement("br",null),r.a.createElement("h4",null,"StoreID: "),r.a.createElement("h5",null,this.state.detailFromAmazon.storeID),r.a.createElement("br",null),r.a.createElement("h4",null,"Review: "),r.a.createElement("h5",null,JSON.stringify(this.state.detailFromAmazon.reviews)),console.log(this.state.detailFromAmazon))}}]),a}(r.a.Component),F=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={detailFromAmazon:[],reviewFromUsers:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;C(this.props.match.params.did).then((function(t){return e.setState({detailFromAmazon:t.product})}))}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Details on Amazon"),r.a.createElement("br",null),r.a.createElement("div",null,r.a.createElement(T,{key:this.state.detailFromAmazon.url,detailFromAmazon:this.state.detailFromAmazon})))}}]),a}(r.a.Component),D=function(e){Object(m.a)(a,e);var t=Object(p.a)(a);function a(){return Object(u.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return r.a.createElement(h.a,null,r.a.createElement("div",{className:"container"},r.a.createElement("div",null,r.a.createElement(h.b,{to:"/home"},r.a.createElement("img",{src:s.a,className:"App-logo float-md-none",alt:"logo",width:"300"})),r.a.createElement("br",null),r.a.createElement("br",null)),r.a.createElement(d.a,{path:["/","/home"],exact:!0,component:E}),r.a.createElement(d.a,{path:"/details/:did",exact:!0,component:F}),r.a.createElement(d.a,{path:"/login",exact:!0,component:b}),r.a.createElement(d.a,{path:["/search","/search/:title"],exact:!0,component:P}),r.a.createElement(d.a,{path:"/products",exact:!0,component:z}),r.a.createElement(d.a,{path:"/register",exact:!0,component:U}),r.a.createElement(d.a,{path:["/profile","/profile/:uid"],exact:!0,component:N})))}}]),a}(r.a.Component);var x=function(){return r.a.createElement("div",{className:"container"},r.a.createElement(D,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(x,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.a57ec58b.chunk.js.map