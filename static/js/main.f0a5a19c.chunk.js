(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{57:function(e,t,n){"use strict";(function(e){n.d(t,"a",(function(){return u}));var r=100,o=5,i=4,a=6,s=11,c=6,l=6;function u(t){var n=[],u=function(e){return e.replace(/_/g,"+").replace(/\./g,"/").replace(/-/g,"=")}(t),h=e.from(u,"base64");if(h.length<2)throw new Error("No content");var d=0,f=0,b=h.readUInt16BE(d);d+=2;var j=h.readUInt16BE(d);d+=2,f+=j;for(var p=new Date(864e5*j),g=0;d<h.length;){var v=void 0,m=void 0,y=void 0,x=void 0;if(128&h.readUIntBE(d,1)){v=3;var O=h.readUIntBE(d,v);m=O>>c+l&(1<<s)-1,y=O>>l&(1<<c)-1,x=O&(1<<l)-1&(1<<l)-1,f+=O}else{v=2;var w=h.readUIntBE(d,v);m=w>>i+a&(1<<o)-1,y=w>>a&(1<<i)-1,x=w&(1<<a)-1&(1<<a)-1,f+=w}var C={start:g+m*r,duration:y*r,pitch:x};n.push(C),g=C.start+C.duration,d+=v}if((65535&f)!==b)throw new Error("Corrupted data: invalid checksum");return{created:p,notes:n}}}).call(this,n(90).Buffer)},67:function(e,t,n){},69:function(e,t,n){},88:function(e,t){},94:function(e,t,n){},96:function(e,t,n){"use strict";n.r(t);var r=n(1),o=n(0),i=n.n(o),a=n(12),s=n.n(a),c=(n(67),n(7)),l=n.n(c),u=n(10),h=n(17),d=n(113),f=n(112),b=n(110),j=n(32),p=n(14),g=n(21),v=n(47),m=["F","F\u266f","G","G\u266f","A","A\u266f","B","C","C\u266f","D","D\u266f","E"];function y(e,t){return Math.floor(1200*Math.log(e/function(e){return 440*Math.pow(2,(e-69)/12)}(t))/Math.log(2))}var x=0,O=function(){function e(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:15e3;Object(p.a)(this,e),this.frequencies=[],this.melodyNotes=[],this.introStateListeners=[],this.background="#efefef",this.highlight="#888888",this.container=t,this.container.style.position="relative";var r="position: absolute; width: 100%; height: 100%;";this.bgCanvas=document.createElement("canvas"),this.bgCanvas.setAttribute("style",r),this.bgContext=this.bgCanvas.getContext("2d"),this.melodyCanvas=document.createElement("canvas"),this.melodyCanvas.setAttribute("style",r),this.melodyContext=this.melodyCanvas.getContext("2d"),this.noteCanvas=document.createElement("canvas"),this.noteCanvas.setAttribute("style",r),this.noteContext=this.noteCanvas.getContext("2d"),this.container.appendChild(this.bgCanvas),this.container.appendChild(this.melodyCanvas),this.container.appendChild(this.noteCanvas),this.timeSpan=n,this.lastSongPos=0,this.speedChanged=void 0,this.playingSpeed=0,this.melodyStart=0,this.inIntro=!1,this.resize()}return Object(g.a)(e,[{key:"subscribeToIntroState",value:function(e){var t=this;return this.introStateListeners.push(e),function(){for(var n=0;n<t.introStateListeners.length;n++)if(t.introStateListeners[n]===e)return void t.introStateListeners.splice(n,1)}}},{key:"resize",value:function(){var e=this.container.clientWidth,t=this.container.clientHeight;this.bgCanvas.width=e,this.bgCanvas.height=t,this.melodyCanvas.width=e,this.melodyCanvas.height=t,this.noteCanvas.width=e,this.noteCanvas.height=t,this.scaleX=Object(v.a)().domain([-this.timeSpan/2,this.timeSpan/2]).range([0,e]);var n=t/(m.length+4);this.scaleY=Object(v.a)().domain([0,2*m.length-1]).range([t-n,n]),this.render()}},{key:"getNearestMelodyNote",value:function(e){if(this.melodyNotes.length)for(var t=this.calculateSongPos(e),n=0;n<this.melodyNotes.length;n++){var r=this.melodyNotes[n],o=0;if(n>0){var i=this.melodyNotes[n-1];o=(i.start+i.duration+r.start)/2}var a=1/0;if(n<this.melodyNotes.length-1){var s=this.melodyNotes[n+1];a=(r.start+r.duration+s.start)/2}if(t>=o&&t<a)return r}}},{key:"pushFrequency",value:function(e){x<10&&console.log("pushFrequency",e.frequency),x++;var t,n=e.frequency,r=function(e){var t=Math.log(e/440)/Math.log(2)*12;return Math.round(t)+69}(n),o=r+y(n,r)/100,i=this.getNearestMelodyNote(e.time);if(i){var a=(o-i.pitch)%12;a>6?a-=12:a<-6&&(a+=12),t=i.pitch+a}this.frequencies.push(Object.assign(Object.assign({},e),{pitch:o,melodyPitch:t}))}},{key:"cleanupFrequencies",value:function(){var e=this;this.frequencies=this.frequencies.filter((function(t){return e.now-t.time<e.timeSpan/2}))}},{key:"setMelodyNotes",value:function(e){this.melodyNotes=e,this.melodyStart=e.length?e[0].start:0}},{key:"playSong",value:function(){this.changePlayingSpeed(1)}},{key:"fastForwardSong",value:function(){this.changePlayingSpeed(3)}},{key:"pauseSong",value:function(){this.changePlayingSpeed(0)}},{key:"calculateSongPos",value:function(e){return this.lastSongPos+this.playingSpeed*(e-this.speedChanged)}},{key:"changePlayingSpeed",value:function(e){var t=(new Date).getTime();void 0===this.speedChanged&&(this.speedChanged=t),this.lastSongPos=this.calculateSongPos(t),this.playingSpeed=e,this.speedChanged=t}},{key:"seekToFirstNote",value:function(){this.changePlayingSpeed(0),this.lastSongPos=this.melodyStart}},{key:"render",value:function(){var e=!(arguments.length>0&&void 0!==arguments[0])||arguments[0];this.now=(new Date).getTime();var t=this.calculateSongPos(this.now);this.cleanupFrequencies(),e&&this.drawBackground(),this.drawMelody(t),this.drawNotes(),this.checkIntroState(t)}},{key:"checkIntroState",value:function(e){var t=e<this.melodyStart;if(t!==this.inIntro){this.inIntro=t;for(var n=0;n<this.introStateListeners.length;n++)this.introStateListeners[n](t)}}},{key:"setBackgroundColor",value:function(e){this.background=e,this.drawBackground()}},{key:"setHighlightColor",value:function(e){this.highlight=e,this.drawBackground()}},{key:"drawBackground",value:function(){var e=this.bgCanvas.width,t=this.bgCanvas.height;this.bgContext.fillStyle=this.background,this.bgContext.clearRect(0,0,e,t),this.bgContext.fillRect(0,0,e,t);for(var n=0;n<2*m.length;++n){var r=this.scaleY(n);this.bgContext.fillStyle=this.highlight+"55",this.bgContext.fillRect(0,r,e,1),this.bgContext.fillStyle=this.highlight,this.bgContext.font="14px Sans",this.bgContext.fillText(m[n%m.length],this.scaleX(0)+20,r-2)}this.bgContext.fillStyle=this.highlight+"55",this.bgContext.fillRect(this.scaleX(0),0,1,t)}},{key:"drawNotes",value:function(){var e=this.noteCanvas.width,t=this.noteCanvas.height;this.noteContext.clearRect(0,0,e,t),this.noteContext.beginPath(),this.noteContext.strokeStyle="rgba(0, 0, 0, 0.1)";var n,r=[],o=Object(j.a)(this.frequencies);try{for(o.s();!(n=o.n()).done;){var i=n.value,a=i.time,s=i.clarity,c=this.scaleX(a-this.now),l=i.melodyPitch?i.melodyPitch:i.pitch,u=this.scaleY((l+7)%24);r.push({time:a,x:c,y:u,clarity:s,color:[254,74,73]})}}catch(w){o.e(w)}finally{o.f()}this.noteContext.beginPath();for(var h=1;h<r.length;++h){var d=r[h],f=d.x,b=d.y;d.time-r[h-1].time>500?(this.noteContext.stroke(),this.noteContext.beginPath(),this.noteContext.moveTo(f,b)):this.noteContext.lineTo(f,b)}this.noteContext.stroke();for(var p=0,g=r;p<g.length;p++){var v=g[p],m=v.x,y=v.y,x=v.clarity,O=v.color;this.noteContext.fillStyle="rgba(".concat(O[0],", ").concat(O[1],", ").concat(O[2],", ").concat(.5*x,")"),this.noteContext.beginPath(),this.noteContext.arc(m,y,5,0,2*Math.PI),this.noteContext.fill()}}},{key:"drawMelody",value:function(e){var t=this.melodyCanvas.width,n=this.melodyCanvas.height,r=this.melodyContext;r.clearRect(0,0,t,n),r.strokeStyle="rgba(32, 164, 243, 0.8)",r.lineWidth=n/36,r.lineCap="round";var o,i=Object(j.a)(this.melodyNotes);try{for(i.s();!(o=i.n()).done;){var a=o.value,s=a.start,c=a.duration,l=a.pitch,u=this.scaleX(s-e),h=this.scaleX(s-e+c),d=this.scaleY((l+7)%24);r.beginPath(),r.moveTo(u+r.lineWidth/2,d),r.lineTo(h-r.lineWidth/2,d),r.stroke()}}catch(f){i.e(f)}finally{i.f()}}}]),e}(),w=n(23),C=n(102),k=n(103),S=n(104),N=n(105),T=n(106);n(69);function P(e){var t=e.color,n=e.colorPressed,i=e.className,a=e.Icon,s=e.onCancel,c=e.onPress,l=e.onRelease,u=e.size,d=Object(o.useState)(!1),f=Object(h.a)(d,2),b=f[0],j=f[1],p=function(){j(!0),c&&c()},g=function(){j(!1),l&&l()},v=function(){j(!1),s&&s()};return Object(r.jsx)("div",{className:"ctrl-btn ".concat(b?"ctrl-btn-pressed":""," ").concat(i),onMouseDown:p,onMouseUp:g,onMouseLeave:v,onTouchStart:p,onTouchEnd:g,onTouchCancel:v,children:Object(r.jsx)(a,{color:b?n:t,size:u})})}var E=function(e){return Object(r.jsx)(P,Object(w.a)({Icon:C.a},e))},I=function(e){return Object(r.jsx)(P,Object(w.a)({Icon:k.a},e))},F=function(e){return Object(r.jsx)(P,Object(w.a)({Icon:S.a},e))},z=function(e){return Object(r.jsx)(P,Object(w.a)({Icon:e.inIntro?N.a:T.a},e))},M="#e8eaec",A=n(8),L=n(48),R=Object(A.createStore)({windowSize:2048,detectorName:"mcleod",clarityThreshold:.7,enabled:!1,loading:!1,loaded:!1,stream:null,audioOptions:{audio:{echoCancellation:!0,autoGainControl:!0}},workerConnection:null,melody:{},error:null,setWindowSize:Object(A.action)((function(e,t){e.windowSize=t})),setDetectorName:Object(A.action)((function(e,t){e.detectorName=t})),setClarityThreshold:Object(A.action)((function(e,t){e.clarityThreshold=t})),setEnabled:Object(A.action)((function(e,t){e.enabled=t})),setStream:Object(A.action)((function(e,t){e.stream=t})),setLoading:Object(A.action)((function(e,t){e.loading=t})),setLoaded:Object(A.action)((function(e,t){e.loaded=t})),setWorkerConnection:Object(A.action)((function(e,t){e.workerConnection=t})),setError:Object(A.action)((function(e,t){e.error=t})),checkAudioContextSupport:Object(A.thunk)((function(e,t,n){n.getState;void 0===(window.AudioContext||window.webkitAudioContext)&&(e.setError("audio-context"),console.error("Browser does not have window.AudioContext support"))})),initializeStream:Object(A.thunk)(function(){var e=Object(u.a)(l.a.mark((function e(t,n,r){var o,i,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=r.getState,i=o(),a=i.audioOptions,t.setLoading(!0),e.prev=4,e.next=7,navigator.mediaDevices.getUserMedia(a);case 7:s=e.sent,t.setStream(s),t.setLoading(!1),t.setLoaded(!0),e.next=20;break;case 13:e.prev=13,e.t0=e.catch(4),t.setError("mic-stream"),console.error(e.t0),t.setStream(null),t.setLoading(!1),t.setLoaded(!1);case 20:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(t,n,r){return e.apply(this,arguments)}}()),stopStream:Object(A.thunk)(function(){var e=Object(u.a)(l.a.mark((function e(t,n,r){var o,i,a,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o=r.getState,i=o().stream){a=Object(j.a)(i.getTracks());try{for(a.s();!(s=a.n()).done;)s.value.stop()}catch(n){a.e(n)}finally{a.f()}}t.setStream(null),t.setLoading(!1),t.setLoaded(!1);case 6:case"end":return e.stop()}}),e)})));return function(t,n,r){return e.apply(this,arguments)}}()),initializeWorker:Object(A.thunk)(function(){var e=Object(u.a)(l.a.mark((function e(t){var n,r,o;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=new Worker("".concat("/app","/pitch-detection/worker.js")),r=new L.b({worker:n}),e.prev=2,e.next=5,Object(L.a)(r,{},5,1e3);case 5:o=e.sent,t.setWorkerConnection(o),e.next=14;break;case 9:e.prev=9,e.t0=e.catch(2),t.setError("worker"),console.error("Failed to connect to worker",e.t0),t.setWorkerConnection(null);case 14:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}()),setMelodyNotes:Object(A.action)((function(e,t){e.melody.notes=t}))}),q=Object(A.createTypedHooks)(),B=q.useStoreActions,W=(q.useStoreDispatch,q.useStoreState);var D=function(e){var t=e.freq,n=e.clarity,a=Object(o.useRef)(),s=Object(o.useState)(!1),c=Object(h.a)(s,2),j=c[0],p=c[1],g=Object(o.useCallback)((function(){if(a.current){if(t&&t>0){var e=(new Date).getTime();a.current.pushFrequency({frequency:t,clarity:n||0,time:e})}a.current.render(!1)}}),[n,t]);t&&t>0&&requestAnimationFrame((function(e){return g(e)})),function(e){var t=Object(o.useRef)();Object(o.useEffect)((function(){return t.current=requestAnimationFrame((function n(r){e(r),t.current=requestAnimationFrame(n)})),function(){cancelAnimationFrame(t.current)}}),[])}(g),Object(o.useEffect)((function(){var e=function(){a.current&&a.current.resize()};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]);var v=W((function(e){return e.melody.notes}));Object(o.useEffect)((function(){a.current&&v&&v.notes&&a.current.setMelodyNotes(v.notes)}),[v]);var m=B((function(e){return e})),y=m.stopStream,x=m.setEnabled,w=M,C="#a6a8aa",k=Object(o.useCallback)((function(e){e&&!a.current&&(a.current=new O(e,6e3),a.current.setBackgroundColor(M),v&&a.current.setMelodyNotes(v),a.current.playSong())}),[v]);Object(o.useEffect)((function(){if(a.current)return a.current.subscribeToIntroState((function(e){return p(e)}))}),[]);var S=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return x(!1),e.next=3,y();case 3:console.log("Stream Stopped");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),N=Object(r.jsxs)(d.a,{id:"popover-skip-intro",children:[Object(r.jsx)(d.a.Title,{as:"h3",children:"Skip intro"}),Object(r.jsx)(d.a.Content,{children:"Press and hold until you start singing."})]});return Object(r.jsxs)(i.a.Fragment,{children:[Object(r.jsx)("div",{className:"full",style:{position:"relative",width:"100%",height:"500px"},ref:k}),Object(r.jsxs)(f.a,{fixed:"bottom",bg:"dark",className:"justify-content-center",children:[Object(r.jsx)(b.a,{show:j,placement:"top",overlay:N,children:Object(r.jsx)(z,{onPress:function(){return a.current.seekToFirstNote()},onRelease:function(){return a.current.playSong()},onCancel:function(){return a.current.playSong()},className:"btn-skip-start",size:50,color:w,colorPressed:C,inIntro:j})}),Object(r.jsx)(I,{onPress:function(){return a.current.pauseSong()},onRelease:function(){return a.current.playSong()},onCancel:function(){return a.current.playSong()},className:"btn-pause",size:50,color:w,colorPressed:C}),Object(r.jsx)(F,{onRelease:S,className:"btn-stop",size:50,color:w,colorPressed:C}),Object(r.jsx)(E,{onPress:function(){return a.current.fastForwardSong()},onRelease:function(){return a.current.playSong()},className:"btn-forward",size:50,color:w,colorPressed:C})]})]})};function H(e){var t=e.stream,n=e.detectorName,o=e.workerConnection,a=e.windowSize,s=e.powerThreshold,c=e.clarityThreshold,d=e.enabled,f=e.pitchRenderer,b=i.a.useState(null),j=Object(h.a)(b,2),p=j[0],g=j[1],v=i.a.useState(null),m=Object(h.a)(v,2),y=m[0],x=m[1],O=i.a.useRef(!1),w=i.a.useRef({}),C=i.a.useCallback(Object(u.a)(l.a.mark((function e(){var r,i,s;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.remoteHandle().call("createDetector",n,a,a/2);case 2:(r=w.current).buffer=new Float32Array(a),i=window.AudioContext||window.webkitAudioContext,r.audioContext=new i,s=r.audioContext.createMediaStreamSource(t),r.analyser=r.audioContext.createAnalyser(),r.analyser.fftSize=a,s.connect(r.analyser);case 10:case"end":return e.stop()}}),e)}))),[w,a,n,t,o]),k=i.a.useCallback(Object(u.a)(l.a.mark((function e(){var t,n,r,i,a,u,h;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(O.current){e.next=15;break}if(O.current=!0,t=w.current,n=t.analyser,r=t.buffer,i=t.audioContext,n&&r&&i){e.next=7;break}return console.warn("Trying to update the pitch, but missing an analyser/buffer/audioContext"),e.abrupt("return");case 7:return n.getFloatTimeDomainData(r),e.next=10,o.remoteHandle().call("getPitch",r,i.sampleRate,s,c);case 10:a=e.sent,u=a[0],h=a[1],u>0?(g(u),x(h)):(g(null),x(null)),O.current=!1;case 15:case"end":return e.stop()}}),e)}))),[O,w,g,x,s,c,o]);i.a.useEffect((function(){if(d){console.log("Starting audio monitoring.");var e={cancelRender:!1};return Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,C();case 2:t();case 3:case"end":return e.stop()}}),e)})))(),function(){console.log("Stopping audio monitoring."),e.cancelRender=!0}}function t(){e.cancelRender||(requestAnimationFrame(t),k())}}),[C,k,d]);var S=f;return Object(r.jsx)(S,{freq:p,clarity:y})}var U=n(40),Y=n.n(U),G=n(57);function X(e){var t=e.children,n=B((function(e){return e})).setMelodyNotes;return Object(o.useEffect)((function(){var e=function(){var e=Y.a.parse(window.location.search.substr(1));if(e.s1)try{return Object(G.a)(e.s1)}catch(t){alert(t.toString())}}();e&&n(e)}),[n]),Object(r.jsx)(i.a.Fragment,{children:Object(r.jsx)("div",{className:"main-container",children:Object(r.jsx)("main",{role:"main",children:t})})})}var _=n(114),J=n(56),K=n(107),V=n(108),Q=n(109),Z=n(111);function $(e){var t=e.error,n=e.show,o=e.onClose,i="Oh no! Some error happened. Try using Google Chrome browser.";return"mic-stream"===t?i=Object(r.jsxs)("div",{children:["Oh no! This app cannot use your mic. Try to:",Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:"make sure you have the microphone connected"}),Object(r.jsx)("li",{children:"make sure you allowed this site to use your mic"}),Object(r.jsx)("li",{children:"use Google Chrome"})]})]}):"audio-context"===t&&(i=Object(r.jsx)("div",{children:"Yikes! It seems that this app does not work on this device and/or browser. iPhones and iPads are not yet supporting the required technology. You can run this app on other devices meanwhile."})),Object(r.jsxs)(Z.a,{show:n,onHide:o,backdrop:"static",keyboard:!1,children:[Object(r.jsx)(Z.a.Header,{closeButton:!0,children:Object(r.jsx)(Z.a.Title,{children:"Error \ud83d\ude30"})}),Object(r.jsx)(Z.a.Body,{children:i}),Object(r.jsx)(Z.a.Footer,{children:Object(r.jsx)(_.a,{variant:"secondary",onClick:o,children:"OK"})})]})}n(94);function ee(){var e=B((function(e){return e})),t=e.initializeStream,n=e.setEnabled,o=function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t();case 2:n(!0),console.log("Stream Initialized");case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.jsx)(_.a,{className:"btn-start",variant:"primary",onClick:o,children:Object(r.jsxs)("div",{className:"btn-start-content",children:[Object(r.jsx)("div",{className:"btn-start-text",children:"START"}),Object(r.jsx)(K.a,{size:40,color:"white"})]})})}function te(){return Object(r.jsxs)("div",{className:"heading",children:[Object(r.jsx)("h1",{children:"VOCALOUS"}),Object(r.jsx)("p",{children:"Practice singing for free"})]})}function ne(e){var t=e.link,n=e.target;return Object(r.jsx)("a",{href:t,target:n||"_blank",rel:"noreferrer",children:t})}function re(){var e=Y.a.parse(window.location.search.substr(1)),t=e.lyrics,n=e.music,o=e.title;return W((function(e){return e.melody.notes}))?Object(r.jsx)("div",{className:"song-info",children:Object(r.jsxs)("div",{className:"container",children:[Object(r.jsx)("h3",{children:"This link contains notes:"}),Object(r.jsxs)("div",{className:"song-info-details",children:[Object(r.jsx)("div",{children:Object(r.jsx)("strong",{children:o||"Untitled"})}),n&&Object(r.jsxs)("div",{children:["Music: ",Object(r.jsx)(ne,{link:n,target:"music--page"})]}),t&&Object(r.jsxs)("div",{children:["Lyrics: ",Object(r.jsx)(ne,{link:t,target:"lyrics--page"})]})]}),Object(r.jsx)("h5",{children:"Sing it!"}),Object(r.jsxs)("ol",{children:[Object(r.jsx)("li",{children:"Grab your headphones"}),n&&Object(r.jsx)("li",{children:"Start playing the music from the link"}),Object(r.jsx)("li",{children:"Press START from the bottom of this page and allow using your mic"})]})]})}):null}function oe(){var e=Object(o.useState)(!1),t=Object(h.a)(e,2),n=t[0],i=t[1],a={size:25,color:"black"},s=n?Object(r.jsx)(V.a,Object(w.a)({},a)):Object(r.jsx)(Q.a,Object(w.a)({},a));return Object(r.jsxs)("div",{className:"container container-about",children:[Object(r.jsxs)("h3",{onClick:function(){return i(!n)},className:"about-toggler",children:[Object(r.jsx)("span",{className:"toggler-caret",children:s}),"About"]}),Object(r.jsx)(J.a,{in:n,children:Object(r.jsxs)("div",{id:"about-data",children:[Object(r.jsx)("h5",{children:"How does this app work?"}),Object(r.jsx)("p",{children:"If you opened this by a link that contains a melody, you can see the information about it. By pressing start you can practice singing the melody using your microphone."}),Object(r.jsx)("p",{children:"If you can't see any song information above, you can still practice singing without notes by pressing start."}),Object(r.jsx)("h5",{children:"Why doesn't this app work?"}),Object(r.jsx)("p",{children:"Make sure that you have allowed this site to use your microphone. It's also possible that your browser does not support the technology that this app uses. Try the latest Google Chrome browser. iPhone and iPad users might have to wait until the technology is supported on their platform."}),Object(r.jsx)("h5",{children:"How does this app handle my voice?"}),Object(r.jsx)("p",{children:"The app respects your privacy. Your voice is not stored and is not sent out from your browser. The app uses your mic only to detect the pitch from your singing."}),Object(r.jsx)("h5",{children:"Where is the music?"}),Object(r.jsx)("p",{children:"This service does not contain any music for copyright reasons. Links can be provided to play the music and to read the lyrics from other services."}),Object(r.jsx)("h5",{children:"How can I create notes to a song?"}),Object(r.jsx)("p",{children:"This feature will be added in the future."}),Object(r.jsx)("h5",{children:"Will this app be always free?"}),Object(r.jsx)("p",{children:"Yes. This is an open source project."}),Object(r.jsx)("h5",{children:"Source"}),Object(r.jsx)("p",{children:Object(r.jsx)("a",{href:"https://github.com/vocalous/app",target:"_blank",rel:"noreferrer",children:"https://github.com/vocalous/app"})})]})})]})}function ie(){var e=W((function(e){return e.error})),t=B((function(e){return e.setError}));return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(te,{}),Object(r.jsx)(re,{}),Object(r.jsx)(oe,{}),Object(r.jsx)(f.a,{fixed:"bottom",bg:"dark",className:"justify-content-center ",children:Object(r.jsx)(ee,{})}),Object(r.jsx)($,{show:!!e,onClose:function(){return t(null)},error:e})]})}var ae=function(){var e=W((function(e){return e.detectorName})),t=W((function(e){return e.windowSize})),n=W((function(e){return e.clarityThreshold})),o=W((function(e){return e.enabled})),a=W((function(e){return{loaded:e.loaded,loading:e.loading,stream:e.stream,workerConnection:e.workerConnection}})),s=a.loaded,c=a.stream,h=a.workerConnection,d=B((function(e){return e})),f=d.checkAudioContextSupport,b=d.initializeWorker;i.a.useEffect((function(){Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b();case 2:return console.log("Worker initialized"),e.next=5,f();case 5:case"end":return e.stop()}}),e)})))()}),[f,b]);var j=Object(r.jsx)(ie,{});if(s&&c&&h){var p=D;j=Object(r.jsx)(H,{stream:c,detectorName:e,workerConnection:h,windowSize:t,powerThreshold:.15,clarityThreshold:n,enabled:o,pitchRenderer:p})}return Object(r.jsx)(X,{children:j})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,115)).then((function(t){var n=t.getCLS,r=t.getFID,o=t.getFCP,i=t.getLCP,a=t.getTTFB;n(e),r(e),o(e),i(e),a(e)}))};n(95);s.a.render(Object(r.jsx)(i.a.StrictMode,{children:Object(r.jsx)(A.StoreProvider,{store:R,children:Object(r.jsx)(ae,{})})}),document.getElementById("root")),se()}},[[96,1,2]]]);
//# sourceMappingURL=main.f0a5a19c.chunk.js.map