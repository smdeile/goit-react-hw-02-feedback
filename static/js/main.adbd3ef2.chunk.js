(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{12:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(2),o=a.n(l),c=function(e){var t=e.title,a=e.children;return r.a.createElement("div",null,r.a.createElement("p",null,t),r.a.createElement("div",null,a))},u=a(3),d=a(4),i=a(5),s=a(6),b=function(e){var t=e.good,a=e.neutral,n=e.bad,l=e.total,o=e.positivePercentage;return r.a.createElement("div",null,r.a.createElement("p",null,"Good feedback: ",t),r.a.createElement("p",null,"Neutral feedback: ",a),r.a.createElement("p",null,"Bad feedback: ",n),r.a.createElement("p",null,"Total feedback: ",l),r.a.createElement("p",null,"Positive feedback: ",o,"%"))},p=function(e){var t=e.children,a=e.CounterFeedback;return r.a.createElement("button",{type:"button",onClick:a},t)},f=function(e){var t=e.message;return r.a.createElement("p",null,t)},m=function(e){Object(s.a)(a,e);var t=Object(i.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.handleButtonGood=function(){e.setState((function(t){return{good:t.good+e.props.step}}))},e.handleButtonNeutral=function(){e.setState((function(t){return{neutral:t.neutral+e.props.step}}))},e.handleButtonBad=function(){e.setState((function(t){return{bad:t.bad+e.props.step}}))},e.totalFeedback=function(){return e.state.good+e.state.neutral+e.state.bad},e.positivePercentage=function(){var t=e.state.good/Number(e.totalFeedback());return Math.round(100*t)},e}return Object(d.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(p,{CounterFeedback:this.handleButtonGood},"Good"),r.a.createElement(p,{CounterFeedback:this.handleButtonNeutral},"Neutral"),r.a.createElement(p,{CounterFeedback:this.handleButtonBad},"Bad"),0===this.totalFeedback()?r.a.createElement(f,{message:"No feedback given"}):r.a.createElement(b,{good:this.state.good,neutral:this.state.neutral,bad:this.state.bad,total:this.totalFeedback(),positivePercentage:this.positivePercentage()}))}}]),a}(n.Component);function h(){return r.a.createElement("div",null,r.a.createElement(c,{title:"Please live feedback"}),r.a.createElement(c,{title:"Statistics"},r.a.createElement(m,null)))}m.defaultProps={step:1},o.a.render(r.a.createElement(h,null),document.getElementById("root"))},7:function(e,t,a){e.exports=a(12)}},[[7,1,2]]]);
//# sourceMappingURL=main.adbd3ef2.chunk.js.map