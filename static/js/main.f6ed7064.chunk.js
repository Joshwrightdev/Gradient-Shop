(this["webpackJsonpstripe-sys"]=this["webpackJsonpstripe-sys"]||[]).push([[0],{43:function(e,t,c){},44:function(e,t,c){},60:function(e,t,c){},61:function(e,t,c){},62:function(e,t,c){},69:function(e,t,c){},70:function(e,t,c){},71:function(e,t,c){},72:function(e,t,c){},73:function(e,t,c){},74:function(e,t,c){},75:function(e,t,c){},76:function(e,t,c){},77:function(e,t,c){"use strict";c.r(t);var n=c(2),r=c(45),a=c.n(r),i=c(10),s=(c(55),c(14)),o=[{id:1,title:"SUMMER21/ 01//DIGITAL DOWNLOAD",description:"colors--color1,color2",imageUrl:"https://i.ibb.co/G0L2kkF/1-2.png",price:.5},{id:2,title:"SUMMER21/ 02 //DIGITAL DOWNLOAD",description:"colors--color1,color2",imageUrl:"https://i.ibb.co/6Xk5KD6/1-3.png",price:.5},{id:3,title:"SUMMER21/ 03/DIGITAL DOWNLOAD",description:"colors--color1,color2",imageUrl:"https://i.ibb.co/QFdJ0Tp/1-5.png",price:.5},{id:4,title:"SUMMER21/ 04//DIGITAL DOWNLOAD",description:"colors--color1,color2",imageUrl:"https://i.ibb.co/bRrxtFN/1-7.png",price:.5},{id:5,title:"OG--001",description:"colors--color1,color2",imageUrl:"https://i.ibb.co/pPp4t6G/8.png",price:.5},{id:6,title:"OG--002",description:"colors--color1,color2",imageUrl:"https://i.ibb.co/f9ZYfqY/28.png",price:.5},{id:7,title:"OG--003",description:"colors--color1,color2",imageUrl:"https://i.ibb.co/NTFH0Rd/38.png",price:.5},{id:8,title:"OG--004",description:"colors--color1,color2",imageUrl:"https://i.ibb.co/RBc1XhS/46.png",price:.5}],l=c(1),u=Object(n.createContext)(),d=function(e){var t=e.children,c=Object(n.useState)(o),r=Object(s.a)(c,1)[0];return Object(l.jsx)(u.Provider,{value:{products:r},children:t})},j=c(6),b=c(29),m=function(e){return function(e){var t=e.length>0?e:[];localStorage.setItem("cart",JSON.stringify(t))}(e),{itemCount:e.reduce((function(e,t){return e+t.quantity}),0),total:e.reduce((function(e,t){return e+t.price*t.quantity}),0)}},h=function(e,t){switch(t.type){case"ADD_ITEM":return e.cartItems.find((function(e){return e.id===t.payload.id}))||e.cartItems.push(Object(j.a)(Object(j.a)({},t.payload),{},{quantity:1})),Object(j.a)(Object(j.a)({},e),{},{cartItems:Object(b.a)(e.cartItems)},m(e.cartItems));case"INCREASE":var c=e.cartItems.findIndex((function(e){return e.id===t.payload.id}));return e.cartItems[c].quantity++,Object(j.a)(Object(j.a)({},e),{},{cartItems:Object(b.a)(e.cartItems)},m(e.cartItems));case"DECREASE":var n=e.cartItems.findIndex((function(e){return e.id===t.payload.id})),r=e.cartItems[n];return r.quantity>1&&r.quantity--,Object(j.a)(Object(j.a)({},e),{},{cartItems:Object(b.a)(e.cartItems)},m(e.cartItems));case"REMOVE_ITEM":var a=e.cartItems.filter((function(e){return e.id!==t.payload.id}));return Object(j.a)(Object(j.a)({},e),{},{cartItems:Object(b.a)(a)},m(a));case"CLEAR":return localStorage.removeItem("cart"),{cartItems:[],itemCount:0,total:0};default:return e}},p=Object(n.createContext)(),O=localStorage.getItem("cart")?JSON.parse(localStorage.getItem("cart")):[],x=Object(j.a)({cartItems:O},m(O)),f=function(e){var t=e.children,c=Object(n.useReducer)(h,x),r=Object(s.a)(c,2),a=r[0],i=r[1],o=Object(j.a)(Object(j.a)({},a),{},{addProduct:function(e){return i({type:"ADD_ITEM",payload:e})},increase:function(e){return i({type:"INCREASE",payload:e})},decrease:function(e){return i({type:"DECREASE",payload:e})},removeProduct:function(e){return i({type:"REMOVE_ITEM",payload:e})},clearCart:function(){return i({type:"CLEAR"})}});return Object(l.jsx)(p.Provider,{value:o,children:t})},v=c(12),g=c.n(v),N=c(19),y=c(35);c(78),c(58);y.a.initializeApp({apiKey:"AIzaSyAJswjAEcvRvIjGoBk37eOGdYq092-1Myw",authDomain:"gradient-store-39289.firebaseapp.com",projectId:"gradient-store-39289",storageBucket:"gradient-store-39289.appspot.com",messagingSenderId:"19606332144",appId:"1:19606332144:web:cba48998986c44c665d835",measurementId:"G-09DWB0BN1B"});var C=y.a.firestore(),w=y.a.auth(),k=function(){var e=Object(N.a)(g.a.mark((function e(t,c){var n,r,a,i;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return");case 2:return n=C.doc("users/".concat(t.uid)),e.next=5,n.get();case 5:if(e.sent.exists){e.next=17;break}return r=t.displayName,a=t.email,i=new Date,e.prev=9,e.next=12,n.set(Object(j.a)({displayName:r,email:a,createdAt:i},c));case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(9),console.log("error creating user",e.t0.message);case 17:return e.abrupt("return",n);case 18:case"end":return e.stop()}}),e,null,[[9,14]])})));return function(t,c){return e.apply(this,arguments)}}(),I=Object(n.createContext)(),S=function(e){var t=e.children,c=Object(n.useState)(null),r=Object(s.a)(c,2),a=r[0],i=r[1],o=Object(n.useState)(!0),u=Object(s.a)(o,2),d=u[0],b=u[1];Object(n.useEffect)((function(){var e=w.onAuthStateChanged(function(){var e=Object(N.a)(g.a.mark((function e(t){return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!t){e.next=7;break}return e.next=3,k(t);case 3:e.sent.onSnapshot((function(e){i(Object(j.a)({id:e.id},e.data())),b(!1)})),e.next=9;break;case 7:i(t),b(!1);case 9:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}());return function(){return e()}}),[]);var m={user:a,loading:d};return d?Object(l.jsx)("div",{children:"Loading..."}):Object(l.jsx)(I.Provider,{value:m,children:t})},E=c(31),A=c(46),D=(c(60),c(7)),R=(c(61),c(62),c(47)),T=c(48),_=Object(D.f)((function(e){var t=e.history,c=Object(n.useContext)(p),r=c.itemCount,a=c.cartItems;return console.log("CartItems:",a),Object(l.jsxs)("div",{className:"cart-container",onClick:function(){return t.push("/cart")},children:[Object(l.jsx)(R.a,{className:"cart__icon",alt:"shopping-cart-icon",icon:T.a}),r>0?Object(l.jsx)("span",{className:"cart-count",children:r}):null]})})),U=function(){var e=Object(n.useContext)(I).user;return console.log("user",e),Object(l.jsxs)("nav",{className:"nav-menu container",children:[Object(l.jsx)("div",{className:"logo",children:Object(l.jsx)(i.b,{to:"/",children:" STORE"})}),Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/",children:"Home"})}),Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/shop",children:"Shop"})}),!e&&Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/sign-in",children:"Sign In"})}),e&&Object(l.jsx)("li",{onClick:function(){return w.signOut()},children:"Sign Out"}),!e&&Object(l.jsx)("li",{children:Object(l.jsx)(i.b,{to:"/sign-up",children:"Sign Up"})})]}),Object(l.jsx)(_,{})]})},M=(c(69),function(){var e=(new Date).getFullYear;return Object(l.jsxs)("div",{className:"footer",children:[e," \xa9 gradient.store"]})}),P=function(e){var t=e.children;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(U,{}),Object(l.jsx)("main",{children:t}),Object(l.jsx)(M,{})]})},q=(c(70),function(){return Object(l.jsx)("section",{className:"hero is-large is-info hero-image",children:Object(l.jsxs)("div",{className:"hero-body",children:[Object(l.jsx)("p",{className:"hero__title",children:"gradients.shop"}),Object(l.jsx)("div",{className:"shop-now-btn",children:Object(l.jsx)("button",{className:"button is-black",id:"shop-now",children:"Shop All"})})]})})}),G=c.p+"static/media/banner.27369cae.PNG",L=(c(71),Object(D.f)((function(){return Object(l.jsx)("div",{className:"main-container",children:Object(l.jsx)("div",{className:"main-middle",children:Object(l.jsxs)("div",{className:"main-m-image",children:[Object(l.jsx)("img",{className:"grad__bundle",src:G}),Object(l.jsxs)("div",{className:"main-m-description",children:[Object(l.jsx)("h2",{className:"sale__text",children:"Gradient Bundle Pack (95% OFF)"}),Object(l.jsx)("button",{className:"button is-bulma description__btn",id:"shop-now",children:"BUY NOW"})]})]})})})}))),B=function(e,t){return t.find((function(t){return t.id===e.id}))},F="http://localhost:8080";function z(e,t){return H.apply(this,arguments)}function H(){return(H=Object(N.a)(g.a.mark((function e(t,c){var n,r,a,i,s,o;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=Object(j.a)({method:"POST",body:null},c),r=n.method,a=n.body,i=w.currentUser,e.t0=i,!e.t0){e.next=7;break}return e.next=6,i.getIdToken();case 6:e.t0=e.sent;case 7:return s=e.t0,e.next=10,fetch("".concat(F,"/").concat(t),Object(j.a)(Object(j.a)({method:r},a&&{body:JSON.stringify(a)}),{},{headers:{"Content-Type":"application/json",Authorization:"Bearer ".concat(s)}}));case 10:if(200!==(o=e.sent).status){e.next=15;break}return e.abrupt("return",o.json());case 15:throw new Error(o.statusText);case 16:case"end":return e.stop()}}),e)})))).apply(this,arguments)}c(72);var W=Object(D.f)((function(e){var t=e.title,c=e.imageUrl,r=e.price,a=e.history,i=e.id,s=e.description,o={title:t,imageUrl:c,price:r,id:i,description:s},u=Object(n.useContext)(p),d=u.addProduct,j=u.cartItems,b=u.increase,m=B(o,j);return Object(l.jsxs)("div",{className:"featured",children:[Object(l.jsx)("div",{className:"featured-image",onClick:function(){return a.push("/product/".concat(i))},children:Object(l.jsx)("img",{className:"feat__img",src:c})}),Object(l.jsxs)("div",{className:"name-price",children:[Object(l.jsx)("h3",{children:t}),Object(l.jsxs)("p",{children:["$",r]}),!m&&Object(l.jsx)("button",{className:"button is-black nomad-btn",onClick:function(){return d(o)},children:"ADD TO CART"}),m&&Object(l.jsx)("button",{className:"button is-white nomad-btn",id:"btn-white-outline",onClick:function(){return b(o)},children:"ADD MORE"})]})]})})),J=function(){var e=Object(n.useContext)(u).products.filter((function(e,t){return t<4})).map((function(e){return Object(n.createElement)(W,Object(j.a)(Object(j.a)({},e),{},{key:e.id}))}));return Object(l.jsxs)("div",{className:"featured-collection container",children:[Object(l.jsx)("h2",{className:"featured-section-title",children:"New Arrivals"}),Object(l.jsx)("div",{className:"products",children:e})]})},V=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)(P,{children:[Object(l.jsx)(q,{}),Object(l.jsx)(L,{}),Object(l.jsx)(J,{})]})})},Y=(c(73),function(){var e=Object(n.useState)(""),t=Object(s.a)(e,2),c=t[0],r=t[1],a=Object(n.useContext)(p).cartItems,i=Object(E.useStripe)(),o=function(){var e=Object(N.a)(g.a.mark((function e(t){var n,r,s,o,l;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.map((function(e){return{quantity:e.quantity,price_data:{currency:"usd",unit_amount:100*e.price,product_data:{name:e.title,description:e.description,images:[e.imageUrl]}}}})),e.next=4,z("create-checkout-session",{body:{line_items:n,customer_email:c}});case 4:return r=e.sent,s=r.sessionId,e.next=8,i.redirectToCheckout({sessionId:s});case 8:o=e.sent,(l=o.error)&&console.log(l);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(l.jsxs)("form",{onSubmit:o,children:[Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"email",onChange:function(e){return r(e.target.value)},placeholder:"Email",value:c,className:"nomad-input"})}),Object(l.jsx)("div",{className:"submit-btn",children:Object(l.jsx)("button",{type:"submit",className:"button is-black nomad-btn submit",children:"Checkout"})})]})}),Z=(c(74),function(){var e=Object(n.useContext)(p),t=e.itemCount,c=e.total;return Object(l.jsx)(P,{children:Object(l.jsxs)("div",{className:"checkout",children:[Object(l.jsx)("h2",{children:"Checkout Summary"}),Object(l.jsx)("h3",{children:"Total Items: ".concat(t)}),Object(l.jsx)("h4",{children:"Amount to Pay: $".concat(c)}),Object(l.jsx)(Y,{})]})})}),$=(c(75),function(){var e=Object(n.useContext)(u).products.map((function(e){return Object(n.createElement)(W,Object(j.a)(Object(j.a)({},e),{},{key:e.id}))}));return Object(l.jsx)(P,{children:Object(l.jsxs)("div",{className:"product-list-container",children:[Object(l.jsx)("h2",{className:"product-list-title",children:"Shop"}),Object(l.jsx)("div",{className:"product-list",children:e})]})})}),K=(c(43),function(e){var t=e.width;return Object(l.jsx)("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20",children:Object(l.jsx)("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zM7 9a1 1 0 000 2h6a1 1 0 100-2H7z",clipRule:"evenodd",fillRule:"evenodd"})})}),Q=function(e){var t=e.width;return Object(l.jsx)("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20",children:Object(l.jsx)("path",{d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z",clipRule:"evenodd",fillRule:"evenodd"})})},X=function(e){var t=e.width;return Object(l.jsx)("svg",{width:t,fill:"currentColor",viewBox:"0 0 20 20",children:Object(l.jsx)("path",{d:"M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z",clipRule:"evenodd",fillRule:"evenodd"})})},ee=function(e){var t=e.title,c=e.imageUrl,n=e.price,r=e.quantity,a=e.id,i=e.description,s=e.increase,o=e.decrease,u=e.removeProduct,d={title:t,imageUrl:c,price:n,quantity:r,id:a,description:i};return Object(l.jsxs)("div",{className:"cart-item",children:[Object(l.jsx)("div",{className:"item-image",children:Object(l.jsx)("img",{src:c,alt:"product"})}),Object(l.jsxs)("div",{className:"name-price",children:[Object(l.jsx)("h4",{children:t}),Object(l.jsxs)("p",{children:["$",n]})]}),Object(l.jsx)("div",{className:"quantity",children:Object(l.jsx)("p",{children:"Quantity: ".concat(r)})}),Object(l.jsxs)("div",{className:"btns-container",children:[Object(l.jsx)("button",{className:"btn-increase",onClick:function(){return s(d)},children:Object(l.jsx)(Q,{width:"20px"})}),1===r&&Object(l.jsx)("button",{className:"btn-trash",onClick:function(){return u(d)},children:Object(l.jsx)(X,{width:"20px"})}),r>1&&Object(l.jsxs)("button",{className:"btn-decrease",onClick:function(){return o(d)},children:[" ",Object(l.jsx)(K,{width:"20px"})]})]})]})},te=Object(D.f)((function(e){var t=e.itemCount,c=e.total,n=e.history,r=e.clearCart;return Object(l.jsxs)("div",{className:"total-container",children:[Object(l.jsxs)("div",{className:"total",children:[Object(l.jsxs)("p",{children:["Total Items: ",t]}),Object(l.jsx)("p",{children:"Total: $".concat(c)})]}),Object(l.jsxs)("div",{className:"checkout",children:[Object(l.jsx)("button",{className:"button is-black",onClick:function(){return n.push("/checkout")},children:"CHECKOUT"}),Object(l.jsx)("button",{className:"button is-white",onClick:function(){return r()},children:"CLEAR"})]})]})})),ce=function(){var e=Object(n.useContext)(p),t=e.cartItems,c=e.itemCount,r=e.total,a=e.increase,i=e.decrease,s=e.removeProduct,o=e.clearCart,u={increase:a,decrease:i,removeProduct:s};return Object(l.jsx)(P,{children:Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("h1",{children:"Cart"}),0===t.length?Object(l.jsx)("div",{className:"empty-cart",children:"cart is empty"}):Object(l.jsx)(l.Fragment,{children:Object(l.jsxs)("div",{className:"cart-page",children:[Object(l.jsx)("div",{className:"cart-item-container",children:t.map((function(e){return Object(n.createElement)(ee,Object(j.a)(Object(j.a)({},e),{},{key:e.id},u))}))}),Object(l.jsx)(te,{itemCount:c,total:r,clearCart:o})]})})]})})},ne=(c(76),Object(D.f)((function(e){var t=e.match,c=e.history.push,r=Object(n.useContext)(u).products,a=Object(n.useContext)(p),o=a.addProduct,d=a.cartItems,j=a.increase,b=t.params.id,m=Object(n.useState)(null),h=Object(s.a)(m,2),O=h[0],x=h[1];if(Object(n.useEffect)((function(){var e=r.find((function(e){return Number(e.id)===Number(b)}));if(!e)return c("/shop");x(e)}),[b,O,c,r]),!O)return null;var f=O.imageUrl,v=O.title,g=O.price,N=O.description,y=B(O,d);return Object(l.jsx)(P,{children:Object(l.jsxs)("div",{className:"single-product-container",children:[Object(l.jsx)("div",{className:"product-image",children:Object(l.jsx)("img",{src:f,alt:"product"})}),Object(l.jsxs)("div",{className:"product-details",children:[Object(l.jsxs)("div",{className:"name-price",children:[Object(l.jsx)("h3",{children:v}),Object(l.jsx)("p",{children:g})]}),Object(l.jsxs)("div",{className:"add-to-cart-btns",children:[!y&&Object(l.jsx)("button",{className:"button is-white nomad-btn",id:"btn-white-outline",onClick:function(){return o(O)},children:"ADD TO CART"}),y&&Object(l.jsx)("button",{className:"button is-white nomad-btn",id:"btn-white-outline",onClick:function(){return j(O)},children:"ADD MORE"}),Object(l.jsx)(i.b,{to:"/cart",className:"button is-white nomad-btn __checkout",id:"btn-white-outline",children:"PROCEED TO CHECKOUT"})]}),Object(l.jsx)("div",{className:"product-description",children:Object(l.jsx)("p",{children:N})})]})]})})}))),re=Object(D.f)((function(e){var t=e.history,c=Object(n.useContext)(p),r=c.clearCart,a=c.cartItems;return Object(n.useEffect)((function(){0!==a.length&&r()}),[r,a]),Object(l.jsx)(P,{children:Object(l.jsxs)("div",{className:"checkout",children:[Object(l.jsx)("h1",{children:"Thank you for your order"}),Object(l.jsx)("p",{children:"We are currently processing your order and will send you a confirmation email shortly"}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"button is-black nomad-btn submit",onClick:function(){return t.push("/shop")},children:"Continue Shopping"})})]})})})),ae=Object(D.f)((function(e){var t=e.history;return Object(l.jsx)(P,{children:Object(l.jsxs)("div",{className:"checkout",children:[Object(l.jsx)("h1",{children:"Payment failed"}),Object(l.jsx)("p",{children:"Payment was not successful"}),Object(l.jsx)("div",{children:Object(l.jsx)("button",{className:"button is-black nomad-btn submit",onClick:function(){return t.push("/shop")},children:"Continue Shopping"})})]})})})),ie=c(34),se=(c(44),function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",e.firstname||(t.firstname="Required"),e.password||(t.password="Required"),t}),oe=Object(D.f)((function(e){var t=e.history.push,c=Object(n.useState)(null),r=Object(s.a)(c,2),a=r[0],i=r[1],o=function(){var e=Object(N.a)(g.a.mark((function e(c,n){var r,a,s,o,l,u;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setSubmitting,a=c.firstname,s=c.email,o=c.password,e.prev=2,e.next=5,w.createUserWithEmailAndPassword(s,o);case 5:return l=e.sent,u=l.user,e.next=9,k(u,{displayName:a});case 9:t("/shop"),r(!1),e.next=18;break;case 13:e.prev=13,e.t0=e.catch(2),console.log("error",e.t0),r(!1),i(e.t0);case 18:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(l.jsx)(P,{children:Object(l.jsxs)("div",{className:"sign-up",children:[Object(l.jsx)("h1",{children:"Sign Up"}),Object(l.jsx)("div",{className:"form-container",children:Object(l.jsx)(ie.a,{initialValues:{firstname:"",email:"",password:""},validate:se,onSubmit:o,children:function(e){var t=e.values,c=e.errors,n=e.handleChange,r=e.handleSubmit,i=e.isSubmitting,s=c.firstname,o=c.email,u=c.password;return Object(l.jsxs)("form",{onSubmit:r,children:[Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"text",name:"firstname",onChange:n,value:t.firstname,placeholder:"First Name",className:"nomad-input "+(s?"error":"")})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"email",name:"email",onChange:n,value:t.email,placeholder:"Email",className:"nomad-input "+(o?"error":"")})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"password",name:"password",onChange:n,value:t.password,placeholder:"Password",className:"nomad-input "+(u?"error":"")})}),Object(l.jsx)("div",{className:"submit-btn",children:Object(l.jsx)("button",{type:"submit",disabled:i,className:"button is-black nomad-btn submit",children:"Sign Up"})}),Object(l.jsx)("div",{className:"error-message",children:a&&Object(l.jsx)("p",{children:a.message})})]})}})})]})})})),le=function(e){var t={};return e.email?/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.email)||(t.email="Invalid email address"):t.email="Required",t},ue=Object(D.f)((function(e){var t=e.history.push,c=Object(n.useState)(null),r=Object(s.a)(c,2),a=r[0],i=r[1],o=function(){var e=Object(N.a)(g.a.mark((function e(c,n){var r,a,s;return g.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=n.setSubmitting,console.log("values",c),a=c.email,s=c.password,e.prev=3,e.next=6,w.signInWithEmailAndPassword(a,s);case 6:r(!1),t("/shop"),e.next=15;break;case 10:e.prev=10,e.t0=e.catch(3),console.log("error",e.t0),r(!1),i(e.t0);case 15:case"end":return e.stop()}}),e,null,[[3,10]])})));return function(t,c){return e.apply(this,arguments)}}();return Object(l.jsx)(P,{children:Object(l.jsxs)("div",{className:"sign-up",children:[Object(l.jsx)("h1",{children:"Sign In"}),Object(l.jsx)("div",{className:"form-container",children:Object(l.jsx)(ie.a,{initialValues:{email:"",password:""},validate:le,onSubmit:o,children:function(e){var t=e.values,c=e.errors,n=e.handleChange,r=e.handleSubmit,i=e.isSubmitting,s=c.email;return Object(l.jsxs)("form",{onSubmit:r,children:[Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"email",name:"email",onChange:n,value:t.email,placeholder:"Email",className:"nomad-input email "+(s?"error":"")})}),Object(l.jsx)("div",{children:Object(l.jsx)("input",{type:"password",name:"password",onChange:n,value:t.password,placeholder:"Password",className:"nomad-input password"})}),Object(l.jsx)("div",{className:"submit-btn",children:Object(l.jsx)("button",{type:"submit",disabled:i,className:"button is-black nomad-btn submit",children:"Submit"})}),Object(l.jsx)("div",{className:"error-message",children:a&&Object(l.jsx)("p",{children:a.message})})]})}})})]})})}));var de=function(){return Object(l.jsx)("div",{className:"App",children:Object(l.jsxs)(D.c,{children:[Object(l.jsx)(D.a,{exact:!0,path:"/",component:V}),Object(l.jsx)(D.a,{path:"/shop",component:$}),Object(l.jsx)(D.a,{path:"/product/:id",component:ne}),Object(l.jsx)(D.a,{path:"/cart",component:ce}),Object(l.jsx)(D.a,{path:"/checkout",component:Z}),Object(l.jsx)(D.a,{path:"/success",component:re}),Object(l.jsx)(D.a,{path:"/canceled",component:ae}),Object(l.jsx)(D.a,{path:"/sign-up",component:oe}),Object(l.jsx)(D.a,{path:"/sign-in",component:ue}),Object(l.jsx)(D.a,{path:"*",component:V})]})})},je=Object(A.a)("pk_test_51ItG8kJyXDkkLk357A23Knj9u6x5vzhdYF2Ck3z5HnfWtqdTRraACDVL1YH30wa1JZfmIiQsAwnNtuu1x7qsgNEY00p5qIb3cr");a.a.render(Object(l.jsx)(i.a,{children:Object(l.jsx)(d,{children:Object(l.jsx)(f,{children:Object(l.jsx)(E.Elements,{stripe:je,children:Object(l.jsx)(S,{children:Object(l.jsx)(de,{})})})})})}),document.getElementById("root"))}},[[77,1,2]]]);
//# sourceMappingURL=main.f6ed7064.chunk.js.map