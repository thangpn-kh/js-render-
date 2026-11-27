/* jsx-figure-v1.js: built by build.py from src/ (mechanics-layout.js + jsx-figure.js). Do not edit: edit src/ and run build.py. */
var JsxFigureMechanicsLayout=(()=>{var W=Object.defineProperty;var ln=Object.getOwnPropertyDescriptor;var bn=Object.getOwnPropertyNames;var mn=Object.prototype.hasOwnProperty;var fn=(t,r)=>{for(var s in r)W(t,s,{get:r[s],enumerable:!0})},xn=(t,r,s,u)=>{if(r&&typeof r=="object"||typeof r=="function")for(let a of bn(r))!mn.call(t,a)&&a!==s&&W(t,a,{get:()=>r[a],enumerable:!(u=ln(r,a))||u.enumerable});return t};var _n=t=>xn(W({},"__esModule",{value:!0}),t);var it={};fn(it,{ARROW_HEAD_SIZE:()=>F,arrowHeadSize:()=>on,haloShadow:()=>en,labelSizeFor:()=>an,layoutMechanics:()=>sn,nudgeLabels:()=>cn,readMechanicsFigures:()=>un});function G(t){return t===1||t===2||t===3?t:0}var nn="#111827",$="#6b7280",yn=1,Mn=1.2,gn=1.5,pn=2.5,q=10,j=.04,An=.2,kn=.015,En=.73,Pn=20,Sn=3,tn=.5,Ln=8,wn=.2,vn=.12,In=.03,U=10,V=1.6,Rn=4,Dn=160,Nn=25,Hn=/^\s*(?:[αβγδθφϕψω]|alpha|beta|gamma|theta|phi)\s*(?:_?\s*[0-9a-z]+)?\s*$|^\s*\d+(?:[.,]\d+)?\s*°\s*$/i;function J(t,r,s){let u=Math.min(t.start_deg,t.end_deg),a=Math.max(t.start_deg,t.end_deg),d=(h,m)=>Math.abs(h-m)<=U;for(let h of r){if(h===t||Math.hypot(h.center[0]-t.center[0],h.center[1]-t.center[1])>s)continue;let m=Math.min(h.start_deg,h.end_deg),l=Math.max(h.start_deg,h.end_deg);if(!(l-m>=a-u-U)){if(d(m,u)&&l<a)return(l+a)/2;if(d(l,a)&&m>u)return(u+m)/2}}return(u+a)/2}function Tn(t){return Hn.test(t)}var z=2.5,F=9,Bn=3,Fn=.7,Cn=40,Gn=.1,Z=16,On=.15,Wn=3,zn=13,Xn=.065,$n=.04;function en(t){let r=/^(#[0-9a-fA-F]{3,8}|rgba?\(\s*[\d.\s,%]+\))$/.test(t)?t:"#ffffff";return`text-shadow: ${[[-1,0],[1,0],[0,-1],[0,1],[-1,-1],[1,-1],[-1,1],[1,1]].map(([u,a])=>`${u}px ${a}px 0 ${r}`).join(", ")};`}function Un(t){let r=/^#([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/.exec(t);if(!r)return t;let[s,u,a]=r.slice(1).map(d=>parseInt(d,16));return Math.min(s,u,a)>200?$:t}function L(t,r=nn){return/^#[0-9a-fA-F]{6}$/.test(t)?t:r}function K(t){return'<span style="position:relative;display:inline-block;line-height:1">'+t+'<span style="position:absolute;left:0;right:0;top:-0.62em;text-align:center;font-size:0.8em;line-height:1">&rarr;</span></span>'}function Zn(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/vec\(([^()]*)\)/g,(s,u)=>K(u)).replace(/(\S)⃗/g,(s,u)=>K(u)).replace(/_([A-Za-z0-9]+)/g,"<sub>$1</sub>")}function qn(t,r,s){let u=s*Math.PI/180;return[t[0]+r*Math.sin(u),t[1]-r*Math.cos(u)]}function Y(t,r){let s=(l,[x,e])=>Math.hypot(x-l.x,e-l.y)<l.r,u=r.find(l=>s(l,t(0)));if(!u)return 0;let a=200,d=-1;for(let l=1;l<=a;l+=1)if(!s(u,t(l/a))){d=l/a;break}if(d<0)return 0;let h=d-1/a,m=d;for(let l=0;l<40;l+=1){let x=(h+m)/2;s(u,t(x))?h=x:m=x}return m}function jn(t,r,s){let u=(f,[_,M])=>Math.hypot(_-f.x,M-f.y)<f.r,a=s.find(f=>u(f,t)&&!u(f,r));if(!a)return t;let d=r[0]-t[0],h=r[1]-t[1],m=t[0]-a.x,l=t[1]-a.y,x=d*d+h*h,e=2*(d*m+h*l),b=m*m+l*l-a.r*a.r,c=(-e+Math.sqrt(Math.max(0,e*e-4*x*b)))/(2*x);return[t[0]+c*d,t[1]+c*h]}function rn(t,r,s,u){let a=Math.max(8,Math.ceil(Math.abs(u-s)/Sn)),d=[];for(let h=0;h<=a;h+=1){let m=(s+(u-s)*h/a)*Math.PI/180;d.push([t[0]+r*Math.sin(m),t[1]-r*Math.cos(m)])}return d}function Vn(t,r,s,u,a){let d=h=>rn(t,h,s,u).every(([m,l])=>a.every(x=>Math.hypot(m-x.x,l-x.y)>=x.r*1.3));if(d(r))return r;for(let h=1;h<=20;h+=1){let m=r*(1+h*.05);if(d(m))return m}return r}function B(t,r=gn){return Number.isFinite(t)?Math.min(Ln,Math.max(tn,t)):r}function on(t,r,s){let u=t*Fn/(s*Math.max(r,tn));return Number.isFinite(u)?Math.max(Bn,Math.min(F,Math.floor(u))):F}function Jn(t,r,s){let u=kn*t,a=j*t,d=h=>{let m=t-h-u,l=Math.min(En*(m/r),s);return{body:m,halfW:l,drift:m/(2*Math.PI*r)}};for(let h=0;h<4;h+=1){let{halfW:m,drift:l}=d(a),x=Math.PI-Math.asin(Math.min(1,l/m)),e=m*(1-Math.cos(x))-l*x;a=Math.min(Math.max(j*t,e),An*t)}return{lead:a,tail:u,...d(a)}}function Kn(t,r,s,u){let a=r[0]-t[0],d=r[1]-t[1],h=Math.hypot(a,d),m=a/h,l=d/h,{lead:x,halfW:e,drift:b}=Jn(h,s,u),c=2*Math.PI*s,f=s*Pn,_=[[t[0],t[1]]];for(let M=0;M<=f;M+=1){let g=c*M/f,w=Math.min(h,Math.max(0,x+b*g+e*(Math.cos(g)-1))),v=u*Math.sin(g);_.push([t[0]+m*w-l*v,t[1]+l*w+m*v])}return _.push([r[0],r[1]]),_}var X=(t,r,s,u)=>t*u-r*s;function Yn(t,r,s,u){let[a,d]=s,h=d[0]-a[0],m=d[1]-a[1],l=X(r[0],r[1],h,m);if(Math.abs(l)<1e-12)return null;let x=a[0]-t[0],e=a[1]-t[1],b=X(x,e,h,m)/l,c=X(x,e,r[0],r[1])/l;return b>1e-9&&b<=u&&c>=-1e-9&&c<=1+1e-9?b:null}function Qn(t,r){return t.map((s,u)=>{let a=Math.hypot(s.end[0]-s.start[0],s.end[1]-s.start[1]);if(!(a>0))return s;let d=(s.end[0]-s.start[0])/a,h=(s.end[1]-s.start[1])/a,m=t.filter((x,e)=>e!==u).map(x=>[x.start,x.end]),l=(x,e)=>{let b=m.map(f=>Yn(x,e,f,r)).filter(f=>f!==null);if(b.length===0)return x;let c=Math.min(...b);return[x[0]+e[0]*c,x[1]+e[1]*c]};return{...s,start:l(s.start,[-d,-h]),end:l(s.end,[d,h])}})}function nt(t,r,s){let u=r[0]-t[0],a=r[1]-t[1],d=Math.hypot(u,a),h=u/d,m=a/d,l=d/q,x=[];for(let e=0;e<=q;e+=1){let b=t[0]+h*l*e,c=t[1]+m*l*e;x.push([[b,c],[b+s[0]*l-h*.8*l,c+s[1]*l-m*.8*l]])}return x}function tt(t,r,s){let u=r[0]-t[0],a=r[1]-t[1],d=Math.hypot(u,a),h=[-a/d,u/d];if(s.length>0){let m=s.reduce((e,b)=>e+b[0],0)/s.length,l=s.reduce((e,b)=>e+b[1],0)/s.length;h[0]*((t[0]+r[0])/2-m)+h[1]*((t[1]+r[1])/2-l)<0&&(h=[-h[0],-h[1]])}return h}function et(t,r,s,u="a"){let[[a,d],[h,m]]=t,[[l,x],[e,b]]=r,c=h-a,f=m-d,_=e-l,M=b-x,g=c*M-f*_,w=Math.hypot(c,f)*Math.hypot(_,M);if(!w||Math.abs(g)<.05*w)return null;let v=((l-a)*M-(x-d)*_)/g,E=[a+v*c,d+v*f],D=o=>Math.hypot(o[0][0]-E[0],o[0][1]-E[1])>=Math.hypot(o[1][0]-E[0],o[1][1]-E[1])?o[0]:o[1],C=o=>Math.atan2(o[0]-E[0],-(o[1]-E[1]))*180/Math.PI,I=D(t),N=D(r),H=Math.min(Math.hypot(I[0]-E[0],I[1]-E[1]),Math.hypot(N[0]-E[0],N[1]-E[1]));if(!H)return null;let T=C(I),R=C(N),n=()=>{for(;R-T>180;)R-=360;for(;R-T<-180;)R+=360};return n(),Math.abs(R-T)>90&&(u==="a"?T+=180:R+=180,n()),{center:E,radius:Math.min(H/3,s),start_deg:T,end_deg:R}}function sn(t){let r=[],s=t.pendulums.map(n=>qn(n.pivot,n.length,n.angle_deg)),u=[...t.pendulums.map(n=>[n.pivot[0],n.pivot[1]]),...s,...t.springs.flatMap(n=>[[n.start[0],n.start[1]],[n.end[0],n.end[1]]]),...t.masses.map(n=>[n.center[0],n.center[1]])],[a,d,h,m]=t.board_config.boundingbox,l=Gn*Math.min(h-a,d-m);Qn(t.supports,l).forEach(n=>{let o=L(n.stroke_color);if(r.push({kind:"line",x1:n.start[0],y1:n.start[1],x2:n.end[0],y2:n.end[1],width:B(n.stroke_width),color:o,under:!0}),n.hatched){let i=tt(n.start,n.end,u);nt(n.start,n.end,i).forEach(([y,A])=>r.push({kind:"line",x1:y[0],y1:y[1],x2:A[0],y2:A[1],width:1,color:o,under:!0}))}});let x=[...t.pendulums.map((n,o)=>({x:s[o][0],y:s[o][1],r:n.bob_radius})),...t.masses.flatMap(n=>n.parts?.length?n.parts.filter(o=>o.kind==="circle").map(o=>({x:o.center[0],y:o.center[1],r:o.radius})):[{x:n.center[0],y:n.center[1],r:n.radius}])].filter(n=>n.r>0),e=n=>x.some(o=>{let i=n.end[0]-n.start[0],y=n.end[1]-n.start[1],A=i*i+y*y;if(!A)return!1;let k=Math.max(0,Math.min(1,((o.x-n.start[0])*i+(o.y-n.start[1])*y)/A));return Math.hypot(n.start[0]+k*i-o.x,n.start[1]+k*y-o.y)<=.3*o.r});t.guides.forEach(n=>r.push({kind:"line",x1:n.start[0],y1:n.start[1],x2:n.end[0],y2:n.end[1],width:yn,color:Un(L(n.stroke_color??$,$)),dash:G(n.dash),under:!e(n)})),t.arrows.forEach(n=>{let o=n.double_headed?n.start:jn(n.start,n.end,x);r.push({kind:"line",x1:o[0],y1:o[1],x2:n.end[0],y2:n.end[1],width:Math.min(B(n.stroke_width??Mn),z),color:L(n.stroke_color??nn),dash:G(n.dash),arrow:n.double_headed?"both":"end"})});let b=new Map;t.pendulums.forEach((n,o)=>b.set(n.id,[[n.pivot[0],n.pivot[1]],[s[o][0],s[o][1]]])),[...t.arrows,...t.guides].forEach(n=>b.set(n.id,[[n.start[0],n.start[1]],[n.end[0],n.end[1]]]));let c=new Set(t.pendulums.map(n=>n.id)),f=(t.angles??[]).flatMap(n=>{let o=b.get(n.line_a),i=b.get(n.line_b),y=o&&i?et(o,i,vn*Math.max(h-a,d-m),c.has(n.line_b)&&!c.has(n.line_a)?"b":"a"):null;return y?[{id:n.id,...y,arrow:"none",dash:0,stroke_color:n.stroke_color,stroke_width:1.5}]:[]}),_=.01*Math.max(h-a,d-m);f.forEach((n,o)=>{let i=f.slice(0,o).filter(y=>Math.hypot(y.center[0]-n.center[0],y.center[1]-n.center[1])<=_).length;n.radius*=1-wn*i});let M=In*Math.max(h-a,d-m),g=(n,o)=>Math.abs(((n-o)%360+540)%360-180)<=U;[...(t.arcs??[]).filter(n=>n.arrow!=="none"||!f.some(o=>Math.hypot(o.center[0]-n.center[0],o.center[1]-n.center[1])<=M&&(g(n.start_deg,o.start_deg)&&g(n.end_deg,o.end_deg)||g(n.start_deg,o.end_deg)&&g(n.end_deg,o.start_deg)))),...f].forEach(n=>{let o=t.pendulums.some(p=>Math.hypot(p.pivot[0]-n.center[0],p.pivot[1]-n.center[1])<.1),i=n.arrow==="none"&&!o?Vn(n.center,n.radius,n.start_deg,n.end_deg,x):n.radius,y=p=>{let P=p*Math.PI/180;return[n.center[0]+i*Math.sin(P),n.center[1]-i*Math.cos(P)]},A=n.start_deg,k=n.end_deg;if(n.arrow!=="none"){let p=k;k=p+(A-p)*Y(P=>y(p+(A-p)*P),x)}if(n.arrow==="both"){let p=A;A=p+(k-p)*Y(P=>y(p+(k-p)*P),x)}let S=rn(n.center,i,A,k);r.push({kind:"curve",xs:S.map(p=>p[0]),ys:S.map(p=>p[1]),width:Math.min(B(n.stroke_width),z),color:L(n.stroke_color),dash:G(n.dash),arrow:n.arrow==="none"?void 0:n.arrow})}),t.springs.forEach(n=>{let o=Kn(n.start,n.end,n.coils,n.radius);r.push({kind:"curve",xs:o.map(i=>i[0]),ys:o.map(i=>i[1]),width:B(n.stroke_width),color:L(n.stroke_color)})}),t.pendulums.forEach((n,o)=>{let[i,y]=s[o],A=L(n.stroke_color),k=(i-n.pivot[0])/n.length,S=(y-n.pivot[1])/n.length;r.push({kind:"line",x1:n.pivot[0],y1:n.pivot[1],x2:i-k*n.bob_radius,y2:y-S*n.bob_radius,width:Math.min(B(n.stroke_width??pn),z),color:A,dash:G(n.dash)}),n.bob_radius>0&&r.push({kind:"circle",x:i,y,r:n.bob_radius,width:1,stroke:A,fill:L(n.fill_color,"#8a8a8a")})}),t.masses.forEach(n=>{n.parts?.length?n.parts.forEach(o=>{if(o.kind==="polygon"&&o.vertices.length>=3){let i=[...o.vertices,o.vertices[0]];r.push({kind:"curve",xs:i.map(y=>y[0]),ys:i.map(y=>y[1]),width:1,color:L(o.stroke_color),fill:L(o.fill_color,"#8a8a8a")})}else o.kind==="circle"&&r.push({kind:"circle",x:o.center[0],y:o.center[1],r:o.radius,width:1,stroke:L(o.stroke_color),fill:L(o.fill_color,"#8a8a8a")})}):r.push({kind:"circle",x:n.center[0],y:n.center[1],r:n.radius,width:1,stroke:L(n.stroke_color),fill:L(n.fill_color,"#8a8a8a")})}),(t.points??[]).forEach(n=>r.push({kind:"dot",x:n.center[0],y:n.center[1],color:L(n.stroke_color)}));let v=Math.max(h-a,d-m),E=new Map(t.pendulums.map(n=>[n.id,n.pivot])),D=new Map,C=t.arrows.flatMap(n=>{let o=Math.hypot(n.end[0]-n.start[0],n.end[1]-n.start[1]);if(n.double_headed||!o)return[];let i=(n.end[0]-n.start[0])/o,y=(n.end[1]-n.start[1])/o,A=n.on_rod?E.get(n.on_rod):void 0;if(A&&i*(A[0]-n.end[0])+y*(A[1]-n.end[1])>0)return[];let k={x:n.end[0],y:n.end[1],dx:i,dy:y};return D.set(n.id,k),[k]}),I=new Map;t.labels.forEach((n,o)=>{let i=n.of_arrow?D.get(n.of_arrow):void 0;i&&![...I.values()].includes(i)&&I.set(o,i)}),t.labels.flatMap((n,o)=>/vec\(|⃗/.test(n.text)?C.map(i=>({index:o,tip:i,gap:Math.hypot(n.coords[0]-i.x,n.coords[1]-i.y)})):[]).filter(n=>n.gap<=On*v).sort((n,o)=>n.gap-o.gap).forEach(({index:n,tip:o})=>{!I.has(n)&&![...I.values()].includes(o)&&I.set(n,o)});let N=new Map,H=new Set,T=n=>{let o=J(n,f,M)*Math.PI/180,i=n.radius*V;return{at:[n.center[0]+i*Math.sin(o),n.center[1]-i*Math.cos(o)],ray:{dx:Math.sin(o),dy:-Math.cos(o)}}};t.labels.forEach((n,o)=>{let i=n.of_angle?f.find(y=>y.id===n.of_angle):void 0;!i||H.has(i.id)||(N.set(o,T(i)),H.add(i.id))}),t.labels.flatMap((n,o)=>Tn(n.text)?f.map(i=>{let y=J(i,f,M)*Math.PI/180,A=i.radius*V,k=[i.center[0]+A*Math.sin(y),i.center[1]-A*Math.cos(y)],S=Math.min(i.start_deg,i.end_deg),p=Math.max(i.start_deg,i.end_deg),P=Math.atan2(n.coords[0]-i.center[0],-(n.coords[1]-i.center[1]))*180/Math.PI;for(;P<(S+p)/2-180;)P+=360;for(;P>(S+p)/2+180;)P-=360;let hn=P<S?S-P:P>p?P-p:0,dn=Math.hypot(n.coords[0]-i.center[0],n.coords[1]-i.center[1]);return{index:o,id:i.id,at:k,ray:{dx:Math.sin(y),dy:-Math.cos(y)},outside:hn,span:p-S,near:dn<=Rn*i.radius}}):[]).filter(n=>n.near&&n.outside<=Nn).sort((n,o)=>n.outside-o.outside||n.span-o.span).forEach(({index:n,id:o,at:i,ray:y})=>{N.has(n)||H.has(o)||(N.set(n,{at:i,ray:y}),H.add(o))}),t.labels.forEach((n,o)=>{let i=/^\s*\(?\d+\)?\s*$/.test(n.text)?x.find(S=>Math.hypot(n.coords[0]-S.x,n.coords[1]-S.y)<S.r):void 0,y=i?void 0:N.get(o),[A,k]=i?[i.x,i.y]:y?.at??n.coords;r.push({kind:"text",x:A,y:k,html:Zn(n.text),size:Z,tip:i?void 0:I.get(o),onSolid:!!i,ray:y?.ray,halo:!i})});let R=Math.max(0,...t.pendulums.map(n=>n.bob_radius),...t.masses.flatMap(n=>n.parts?.length?n.parts.filter(o=>o.kind==="circle").map(o=>o.radius):[n.radius]));return{primitives:r,box:rt(t.board_config.boundingbox,r),maxScale:R>0?Cn/R:1/0}}function rt(t,r){let[s,u,a,d]=t,h=$n*Math.max(a-s,u-d),m=s,l=u,x=a,e=d,b=(c,f,_=0)=>{m=Math.min(m,c-_),x=Math.max(x,c+_),l=Math.max(l,f+_),e=Math.min(e,f-_)};return r.forEach(c=>{c.kind==="line"?(b(c.x1,c.y1),b(c.x2,c.y2)):c.kind==="curve"?c.xs.forEach((f,_)=>b(f,c.ys[_])):c.kind==="circle"?(b(c.x-c.r,c.y-c.r),b(c.x+c.r,c.y+c.r)):b(c.x,c.y,h)}),[m,l,x,e]}var O=3,ot=32,st=.55,Q=16;function at(t,r,s,u,a){let d=0,h=1,m=s-t,l=u-r,x=[[-m,t-a[0]],[m,a[2]-t],[-l,r-a[1]],[l,a[3]-r]];for(let[e,b]of x)if(e===0){if(b<0)return!1}else{let c=b/e;if(e<0?d=Math.max(d,c):h=Math.min(h,c),d>h)return!1}return!0}var ct=(t,r)=>t[0]<r[2]&&r[0]<t[2]&&t[1]<r[3]&&r[1]<t[3];function an(t){return!Number.isFinite(t)||t<=0?Z:Math.round(Math.min(Z,Math.max(zn,t*Xn)))}function cn(t,r,s){if(!(r>0))return t;let u=[];for(let e of t)if(e.kind==="line")u.push([e.x1,e.y1,e.x2,e.y2,!!e.dash]);else if(e.kind==="curve")for(let b=1;b<e.xs.length;b+=1)u.push([e.xs[b-1],e.ys[b-1],e.xs[b],e.ys[b],!!e.dash]);let a=(e,b,c)=>{let f=e.html.replace(/&rarr;/g,"").replace(/&[a-z0-9#]+;/gi,"x").replace(/<[^>]*>/g,""),_=Math.max(1,f.length)*st*e.size/2/r,M=e.size*(e.html.includes("<")?.9:.6)/r;return[b-_,c-M,b+_,c+M]},d=e=>!s||e[0]>=s[0]&&e[2]<=s[2]&&e[1]>=s[3]&&e[3]<=s[1],h=t.flatMap(e=>{if(e.kind==="circle")return[e];if(e.kind!=="line"||!e.arrow)return[];let b=Math.hypot(e.x2-e.x1,e.y2-e.y1);if(!b)return[];let c=e.width*F/r,f=(e.x2-e.x1)/b,_=(e.y2-e.y1)/b,M=[{x:e.x2-f*c/2,y:e.y2-_*c/2,r:c*.6}];return e.arrow==="both"&&M.push({x:e.x1+f*c/2,y:e.y1+_*c/2,r:c*.6}),M}),m=e=>h.some(b=>{let c=Math.min(Math.max(b.x,e[0]),e[2]),f=Math.min(Math.max(b.y,e[1]),e[3]);return Math.hypot(c-b.x,f-b.y)<b.r}),l=(e,b)=>u.some(([c,f,_,M,g])=>!(b&&g)&&at(c,f,_,M,e)),x=[];return t.map(e=>{if(e.kind!=="text")return e;let b=(_,M)=>{let g=a(e,_,M);return d(g)&&!l(g,!!e.tip)&&!m(g)&&!x.some(w=>ct(g,w))};if(e.onSolid)return x.push(a(e,e.x,e.y)),e;let[c,f]=[e.x,e.y];if(e.tip){let _=a(e,0,0),M=Math.abs(e.tip.dx)*_[2]+Math.abs(e.tip.dy)*_[3]+Wn/r;c=e.tip.x+e.tip.dx*M,f=e.tip.y+e.tip.dy*M}if(!b(c,f)&&e.ray)for(let _=O;_<=Dn;_+=O){let M=c+e.ray.dx*_/r,g=f+e.ray.dy*_/r;if(b(M,g)){[c,f]=[M,g];break}}if(!b(c,f)){let[_,M]=[c,f];n:for(let g=O;g<=ot;g+=O)for(let w=0;w<Q;w+=1){let v=2*Math.PI*w/Q,E=_+Math.cos(v)*g/r,D=M+Math.sin(v)*g/r;if(b(E,D)){[c,f]=[E,D];break n}}}if(s&&!d(a(e,c,f))){let _=a(e,c,f),M=(_[2]-_[0])/2,g=(_[3]-_[1])/2;c=Math.min(Math.max(c,s[0]+M),Math.max(s[2]-M,s[0]+M)),f=Math.min(Math.max(f,s[3]+g),Math.max(s[1]-g,s[3]+g))}return x.push(a(e,c,f)),c===e.x&&f===e.y?e:{...e,x:c,y:f}})}function un(t){let r=t;if(r?.schema_version==="mechanics-1.0")return{drawable:[{number:1,figure:r}],skipped:[]};let s={drawable:[],skipped:[]};return r?.schema_version!=="mechanics-set-1.0"||!Array.isArray(r.figures)||r.figures.forEach((u,a)=>{let d=a+1;u?.convertible?s.drawable.push({number:d,figure:u}):s.skipped.push({number:d,reason:u?.reason||"Kh\xF4ng ph\u1EA3i h\xECnh c\u01A1 h\u1ECDc."})}),s}return _n(it);})();

"use strict";var JsxFigureLabelLayout=(()=>{var f=Object.defineProperty;var g=Object.getOwnPropertyDescriptor;var L=Object.getOwnPropertyNames;var p=Object.prototype.hasOwnProperty;var T=(e,n)=>{for(var t in n)f(e,t,{get:n[t],enumerable:!0})},B=(e,n,t,r)=>{if(n&&typeof n=="object"||typeof n=="function")for(let o of L(n))!p.call(e,o)&&o!==t&&f(e,o,{get:()=>n[o],enumerable:!(r=g(n,o))||r.enumerable});return e};var N=e=>B(f({},"__esModule",{value:!0}),e);var F={};T(F,{pointLabelPosition:()=>C});var a,v=(e,n)=>{if(typeof document=="undefined"||(a===void 0&&(a=document.createElement("canvas").getContext("2d")),!a))return null;a.font=`${e.italic?"italic":"normal"} ${e.bold?700:400} ${n}px "Times New Roman", "STIX Two Text", serif`;let t=a.measureText(e.text),r=t.actualBoundingBoxAscent+t.actualBoundingBoxDescent;return Number.isFinite(r)&&r>0?r:null},C=(e,n,t,r=v)=>{let o={x:e.x,y:e.y},u=e.layout;if(!u||u.anchor.length!==2||u.source_bounds.length!==4)return o;let[b,i,m,c]=u.source_bounds,[x,d]=u.anchor;if(![b,i,m,c,x,d,n,t].every(Number.isFinite)||m<=b||c<=i||n<=0||t<=0)return o;let s=r(e,t);if(s===null||!Number.isFinite(s)||s<=0)return o;let l=s/((c-i)*n);if(l>=.95||l<.4)return o;let y=x+((b+m)/2-x)*l,h=d+((i+c)/2-d)*l;return Math.hypot(y-e.x,h-e.y)>c-i?o:{x:y,y:h}};return N(F);})();

// Generated from edmicro-cms/src/features/function-analysis/numericLabelFit.ts with esbuild.
"use strict";var JsxFigureNumericLabelFit=(()=>{var x=Object.defineProperty;var p=Object.getOwnPropertyDescriptor;var _=Object.getOwnPropertyNames;var d=Object.prototype.hasOwnProperty;var y=(s,n)=>{for(var a in n)x(s,a,{get:n[a],enumerable:!0})},N=(s,n,a,m)=>{if(n&&typeof n=="object"||typeof n=="function")for(let u of _(n))!d.call(s,u)&&u!==a&&x(s,u,{get:()=>n[u],enumerable:!(m=p(n,u))||m.enumerable});return s};var v=s=>N(x({},"__esModule",{value:!0}),s);var E={};y(E,{numericLabelFont:()=>I});var w=s=>/^(?:\d+(?:[.,]\d+)?|\?|\d*[xyz])(?:\s*\u00b0)?$/.test(s.trim()),g=s=>Array.from(s).reduce((n,a)=>n+(/\d/.test(a)?.56:.35),0);function F(s,n,a,m,u){let f=0,r=1;for(let t=0;t<2;t++){let o=(t?a.y:a.x)*u,c=m*(t?.48:g(a.text)*.48),i=s[t]*u,e=(n[t]-s[t])*u;if(Math.abs(e)<1e-8){if(i<o-c||i>o+c)return!1}else{let l=(o-c-i)/e,b=(o+c-i)/e;if(f=Math.max(f,Math.min(l,b)),r=Math.min(r,Math.max(l,b)),f>r)return!1}}return!0}function L(s){var r;let n=[];for(let t of s)if(!(t.label_decoration||t.symbol_vertex))for(let o=1;o<t.points.length;o++)n.push({a:t.points[o-1],b:t.points[o]});if(n.length<6)return new Set;let a=n.flatMap(t=>[t.a[0],t.b[0]]),m=n.flatMap(t=>[t.a[1],t.b[1]]),u=[Math.max(...a)-Math.min(...a),Math.max(...m)-Math.min(...m)],f=new Set;for(let t of[0,1]){let o=1-t,c=new Map;for(let e of n){let l=Math.abs(e.b[o]-e.a[o]);if(Math.abs(e.a[t]-e.b[t])>Math.max(1,.02*l))continue;let b=Math.round((e.a[t]+e.b[t])/2),h=(r=c.get(b))!=null?r:{length:0,items:[]};h.length+=l,h.items.push(e),c.set(b,h)}let i=[...c.values()].filter(e=>e.length>=.4*u[o]);i.length>=3&&i.forEach(e=>e.items.forEach(l=>f.add(l.a)))}return f}var A=11,M=10;function I(s,n,a){if(!w(s.text)||!Number.isFinite(n)||n<=0)return;let m=L(a.outlines||[]),u=(a.outlines||[]).filter(r=>!(r.label_decoration||r.symbol_vertex||r.points.length>1&&r.points.slice(1).every((t,o)=>m.has(r.points[o]))||r.color&&/^#[\da-f]{6}$/i.test(r.color)&&[1,3,5].every(t=>parseInt(r.color.slice(t,t+2),16)>=160))),f=a.labels.filter(r=>r.text.trim()===s.text.trim()&&Math.abs(r.font_px_ref-s.font_px_ref)<.01);return Math.min(...(f.length?f:[s]).map(r=>{let t=i=>i>A&&u.some(e=>e.points.some((l,b)=>b>0&&F(e.points[b-1],l,r,i,n)))?!1:!a.labels.some(e=>{if(e===r)return!1;let l=Math.max(M,Math.min(48,e.font_px_ref*n));return Math.abs(r.x-e.x)*n<(g(r.text)*i+g(e.text)*l)*.48&&Math.abs(r.y-e.y)*n<(i+l)*.48}),o=Math.max(M,Math.min(48,r.font_px_ref*n));if(t(o))return o;let c=Math.min(M,o);for(let i=0;i<12;i++){let e=(c+o)/2;t(e)?c=e:o=e}return c}))}return v(E);})();

"use strict";var JsxFigureSpatialSource=(()=>{var V=Object.defineProperty,q=Object.defineProperties,K=Object.getOwnPropertyDescriptor,Q=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertyNames,H=Object.getOwnPropertySymbols;var X=Object.prototype.hasOwnProperty,tt=Object.prototype.propertyIsEnumerable;var L=(o,e,r)=>e in o?V(o,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):o[e]=r,J=(o,e)=>{for(var r in e||(e={}))X.call(e,r)&&L(o,r,e[r]);if(H)for(var r of H(e))tt.call(e,r)&&L(o,r,e[r]);return o},N=(o,e)=>q(o,Q(e));var et=(o,e)=>{for(var r in e)V(o,r,{get:e[r],enumerable:!0})},ot=(o,e,r,n)=>{if(e&&typeof e=="object"||typeof e=="function")for(let a of Z(e))!X.call(o,a)&&a!==r&&V(o,a,{get:()=>e[a],enumerable:!(n=K(e,a))||n.enumerable});return o};var rt=o=>ot(V({},"__esModule",{value:!0}),o);var it={};et(it,{draw:()=>at});var v=(o,e)=>o.reduce((r,n,a)=>r+n*e[a],0),B=(o,e)=>o.map((r,n)=>r+e[n]),z=(o,e)=>o.map((r,n)=>r-e[n]),F=(o,e)=>o.map(r=>r*e),O=o=>F(o,1/Math.hypot(...o)),nt=(o,e)=>[o[1]*e[2]-o[2]*e[1],o[2]*e[0]-o[0]*e[2],o[0]*e[1]-o[1]*e[0]],st=(o,e)=>{let r=o.map((n,a)=>[...n,e[a]]);for(let n=0;n<3;n++){let a=n;for(let l=n+1;l<3;l++)Math.abs(r[l][n])>Math.abs(r[a][n])&&(a=l);if(Math.abs(r[a][n])<1e-9)throw new Error("Ch\u01B0a \u0111\u1EE7 \u0111\u1EC9nh \u0111\u1EC3 c\u0103n g\xF3c nh\xECn 3D.");[r[n],r[a]]=[r[a],r[n]];let c=r[n][n];r[n]=r[n].map(l=>l/c);for(let l=0;l<3;l++)if(l!==n){let y=r[l][n];r[l]=r[l].map((S,f)=>S-y*r[n][f])}}return r.map(n=>n[3])};function G(o){let e=o.source_view,r=new Map(o.elements.filter(t=>t.type==="point"&&t.coords.length===3).map(t=>[t.id,t.coords])),n=e.points.filter(t=>t.model_id&&r.has(t.model_id)).map(t=>({source:t,xyz:r.get(t.model_id)}));if(n.length<4||!n.every(t=>[...t.xyz,...t.source.position].every(Number.isFinite)))throw new Error("Ch\u01B0a \u0111\u1EE7 \u0111\u1EC9nh \u0111\u1EC3 c\u0103n g\xF3c nh\xECn 3D.");let a=[0,1,2].map(t=>n.reduce((p,d)=>p+d.xyz[t],0)/n.length),c=[0,1].map(t=>n.reduce((p,d)=>p+d.source.position[t],0)/n.length),l=Math.max(...n.map(t=>Math.hypot(...z(t.xyz,a))));if(!(l>1e-9))throw new Error("M\xF4 h\xECnh 3D kh\xF4ng c\xF3 k\xEDch th\u01B0\u1EDBc.");let y=n.map(t=>F(z(t.xyz,a),1/l)),S=[0,1,2].map(t=>[0,1,2].map(p=>y.reduce((d,h)=>d+h[t]*h[p],0))),f=[0,1].map(t=>F(st(S,[0,1,2].map(p=>y.reduce((d,h,b)=>d+h[p]*(n[b].source.position[t]-c[t]),0))),1/l)),g=t=>f.map((p,d)=>c[d]+v(p,z(t,a))),T=n.map(t=>Math.hypot(...g(t.xyz).map((p,d)=>p-t.source.position[d]))),$=Math.max(...T);if($>Math.max(2,Math.hypot(e.picture_width,e.picture_height)*.015))throw new Error("M\xF4 h\xECnh 3D ch\u01B0a kh\u1EDBp c\xE1c \u0111\u1EC9nh trong \u1EA3nh g\u1ED1c.");let P=O(f[0]),A=z(f[1],F(P,v(f[1],P)));if(Math.hypot(...A)<1e-9)throw new Error("H\xECnh chi\u1EBFu 3D b\u1ECB suy bi\u1EBFn.");let R=O(A),W=[P,R,nt(P,R)],s=v(f[0],f[0]),u=v(f[0],f[1]),m=v(f[1],f[1]),i=s*m-u*u;if(i<1e-12)throw new Error("H\xECnh chi\u1EBFu 3D b\u1ECB suy bi\u1EBFn.");let x=(t,p)=>{let d=n.reduce((w,k)=>Math.hypot(...C(w.source.position,t))<Math.hypot(...C(k.source.position,t))?w:k),h=p||d.xyz,b=C(t,g(h));return B(h,B(F(f[0],(m*b[0]-u*b[1])/i),F(f[1],(s*b[1]-u*b[0])/i)))},_=new Map(e.points.map(t=>[t.id,t.model_id&&r.has(t.model_id)?r.get(t.model_id):x(t.position)])),M=new Map(e.points.map(t=>[t.id,t]));return e.points.filter(t=>!t.model_id).forEach(t=>{let p=1.5;for(let d of e.segments){let h=M.get(d.a),b=M.get(d.b);if(!(h!=null&&h.model_id)||!(b!=null&&b.model_id))continue;let w=C(b.position,h.position),k=v(w,w);if(!k)continue;let D=v(C(t.position,h.position),w)/k,j=Math.hypot(...C(t.position,h.position.map((U,Y)=>U+D*w[Y])));D>=0&&D<=1&&j<p&&(_.set(t.id,B(_.get(h.id),F(z(_.get(b.id),_.get(h.id)),D))),p=j)}}),e.points.filter(t=>/^ra_.*_q$/.test(t.id)).forEach(t=>{let p=t.id.slice(0,-1),d=[...r.keys()].filter(k=>t.id.startsWith(`ra_${k}_`)).sort((k,D)=>D.length-k.length)[0],h=r.get(d),b=_.get(p+"p"),w=_.get(p+"r");h&&b&&w&&_.set(t.id,z(B(b,w),h))}),{center:a,imageCenter:c,axes:f,basis:W,extent:l,project:g,lift:x,points:_,maxError:$}}var C=(o,e)=>[o[0]-e[0],o[1]-e[1]];var E={indigo:"#2B4182",indigoDark:"#23366F",amber:"#FFB000",amberWash:"#FFF4D8",board:"#FFFEFA",border:"rgba(43, 65, 130, 0.22)"},ht={border:`1px solid ${E.border}`,borderRadius:12,background:E.board,boxShadow:"0 8px 24px rgba(43, 65, 130, 0.07)",WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"};function I(o,e,r){if(!e||r<=0||!Number.isFinite(r)||o.length<3)return o;let n=o.map(y=>y[0]),a=o.map(y=>y[1]),c=Math.max(Math.max(...n)-Math.min(...n),Math.max(...a)-Math.min(...a));if(c<=0||c*r>=10)return o;let l=Math.min(2.5,10/(c*r));return o.map(y=>y.map((S,f)=>e[f]+(S-e[f])*l))}function at(o,e,r,n){let a;try{let c=G(r),l=r.source_view,y=l.picture_width,S=l.picture_height;a=o.JSXGraph.initBoard(e.id,{boundingbox:[0,S,y,0],keepaspectratio:!0,axis:!1,grid:!1,showNavigation:!1,showCopyright:!1,pan:{enabled:!1},zoom:{enabled:!1}});let f=[0,1,2].map(s=>[c.center[s]-c.extent*1.4,c.center[s]+c.extent*1.4]),g=a.create("view3d",[[0,0],[y,S],f],{projection:"parallel",trackball:{enabled:!0},depthOrder:{enabled:!0},axesPosition:"none",xAxis:{visible:!1},yAxis:{visible:!1},zAxis:{visible:!1},xPlaneRear:{visible:!1},xPlaneFront:{visible:!1},yPlaneRear:{visible:!1},yPlaneFront:{visible:!1},zPlaneRear:{visible:!1},zPlaneFront:{visible:!1}}),T=[[1,0,0,0],...c.basis.map(s=>[0,...s])],$=g.update;g.update=function(){$.call(this);let s=this.matrix3DRot.slice(1).map(m=>m.slice(1)),u=c.axes.map(m=>[0,1,2].map(i=>[0,1,2].reduce((x,_)=>x+v(m,c.basis[_])*s[_][i],0)));return this.matrix3D=[[1,0,0,0],...u.map((m,i)=>[c.imageCenter[i]-v(m,c.center),...m])],this},(()=>{g.matrix3DRot=T.map(s=>[...s]),g.setAnglesFromRotation(),g._hasMoveTrackball=!1,g._hasMoveAz=!1,g._hasMoveEl=!1,a==null||a.setBoundingBox([0,S,y,0],!0),a==null||a.fullUpdate()})();let A=()=>Math.max(.4,(e.clientWidth||y)/y),R=new Map;l.points.forEach(s=>{let u=c.points.get(s.id);R.set(s.id,g.create("point3d",u,{fixed:!0,withLabel:!1,name:"",highlight:!1,size:()=>s.dot_radius>0?Math.max(.8,Math.min(2,s.dot_radius*A()*.6)):0,strokeWidth:0,fillColor:s.fill_color,strokeColor:s.fill_color,visible:s.dot_radius>0}))}),l.segments.forEach(s=>{let u=R.get(s.a),m=R.get(s.b);u&&m&&g.create("line3d",[u,m],{straightFirst:!1,straightLast:!1,strokeColor:s.stroke_color||E.indigo,strokeWidth:()=>Math.max(.6,Math.min(3,s.stroke_width*A())),dash:s.dash,highlight:!1,fixed:!0})}),n.outlines.filter(s=>/^source_(curve|angle)_/.test(s.id)).forEach(s=>{let u=I(s.points,s.symbol_vertex,A()),m=c.lift(u[0]),i=u.map(x=>c.lift(x,m));g.create("curve3d",[i.map(x=>x[0]),i.map(x=>x[1]),i.map(x=>x[2])],{strokeColor:s.color||E.indigo,strokeWidth:()=>Math.max(s.symbol_vertex?1.3:.6,Math.min(3,s.width_px*A())),layer:8,dash:s.line_style==="dashed"?2:0,firstArrow:!1,lastArrow:!1,highlight:!1,fixed:!0})}),(n.fills||[]).forEach(s=>{var _,M;if(s.points.length<3)return;let u=s.points[0],m=n.outlines.find(t=>{var p;return((p=t.id)==null?void 0:p.startsWith("source_curve_"))&&[t.points[0],t.points[t.points.length-1]].some(d=>Math.hypot(d[0]-u[0],d[1]-u[1])<.05)}),i=c.lift(m?m.points[0]:u),x=[...s.points,s.points[0]].map(t=>c.lift(t,i));g.create("curve3d",[x.map(t=>t[0]),x.map(t=>t[1]),x.map(t=>t[2])],{strokeColor:(_=s.color)!=null?_:E.indigo,strokeWidth:0,fillColor:(M=s.color)!=null?M:E.indigo,fillOpacity:1,firstArrow:!1,lastArrow:!1,highlight:!1,fixed:!0})});let W=[];return l.labels.forEach((s,u)=>{var d;let m=n.labels[u],i=m?N(J({},s),{position:[m.x,m.y]}):s,_=l.points.filter(h=>h.model_id).reduce((h,b)=>Math.hypot(h.position[0]-i.position[0],h.position[1]-i.position[1])<Math.hypot(b.position[0]-i.position[0],b.position[1]-i.position[1])?h:b),M=c.points.get(_.id),t=c.project(M),p=a.create("text",[()=>g.project3DTo2D(M)[1]+i.position[0]-t[0],()=>g.project3DTo2D(M)[2]+i.position[1]-t[1],i.text],{fixed:!0,highlight:!1,parse:!1,display:"internal",useMathJax:!1,anchorX:"middle",anchorY:"middle",fontSize:()=>Math.max(12,i.font_px*A()),rotate:(d=i.rotation_deg)!=null?d:0,strokeColor:i.color,cssStyle:`font-family:'Times New Roman',serif;font-style:${i.italic?"italic":"normal"};font-weight:${i.bold?700:400};paint-order:stroke;stroke:white;stroke-width:3px;`});W.push({text:p,xyz:M,offset:[i.position[0]-t[0],i.position[1]-t[1]]})}),a.on("update",()=>{W.forEach(({text:s,xyz:u,offset:m})=>{let i=g.project3DTo2D(u);s.coords.setCoordinates(o.COORDS_BY_USER,[i[1]+m[0],i[2]+m[1]]),s.needsUpdate=!0,s.updateRenderer()})}),a.fullUpdate(),a}catch(c){throw a&&o.JSXGraph.freeBoard(a),c}}return rt(it);})();

// Vẽ biểu đồ (geometryType "chart", pipeline chart_analysis) bằng SVG thuần, không cần JSXGraph.
// Dữ liệu: { chartType, title, xAxis, yAxis, categories, series: [{ id, name, kind, points: [{ x, y, size }] }] }.
// Chữ tính theo điểm ảnh thật của ô (vẽ lại khi đổi cỡ), nên đọc được cả trên điện thoại.
(function () {
  'use strict';
  var NS = 'http://www.w3.org/2000/svg';
  var COLORS = ['#2563eb', '#ea580c', '#16a34a', '#9333ea', '#dc2626', '#0891b2', '#ca8a04', '#db2777'];
  var INK = '#111827', MUTED = '#6b7280', GRID = '#e5e7eb';
  var FONTS = { sans: 'Arial,"Helvetica Neue",Helvetica,sans-serif', serif: '"Times New Roman",Tinos,"Liberation Serif",serif' };
  var BAND = { column: 1, bar: 1 };
  var KINDS = ['line', 'bar', 'column', 'pie', 'doughnut', 'area', 'scatter', 'bubble', 'radar', 'mixed'];

  function add(parent, name, attrs, text) {
    var el = document.createElementNS(NS, name);
    for (var k in attrs) if (attrs[k] !== undefined && attrs[k] !== null) el.setAttribute(k, attrs[k]);
    if (text !== undefined) {
      var parts = name === 'text' ? String(text).split(/_([A-Za-zÀ-ỹ0-9]{1,4})(?![A-Za-zÀ-ỹ0-9])/) : [text];
      if (parts.length === 1) el.textContent = text;
      else parts.forEach(function (part, i) {                 // phần lẻ là chỉ số dưới; phần sau nó trở lại dòng chữ
        var span = document.createElementNS(NS, 'tspan');
        span.textContent = part;
        if (i % 2) { span.setAttribute('font-size', '75%'); span.setAttribute('dy', '0.28em'); }
        else if (i) span.setAttribute('dy', '-0.21em');
        if (part) el.appendChild(span);
      });
    }
    parent.appendChild(el);
    return el;
  }
  function isNum(v) { return typeof v === 'number' && isFinite(v); }
  function fmt(v) { return String(+v.toPrecision(6)).replace('.', ','); } // số thập phân kiểu Việt Nam
  function textWidth(s, size) { return String(s).length * size * 0.58; }
  function clip(s, max) { s = String(s); return s.length > max ? s.slice(0, Math.max(1, max - 1)) + '…' : s; }
  function color(i) { return COLORS[i % COLORS.length]; }
  // Màu của chuỗi: màu AI đọc từ ảnh (#RRGGBB) nếu hợp lệ, không thì bảng màu mặc định.
  function seriesColor(c, i) { var v = c.series[i] && c.series[i].color; return typeof v === 'string' && /^#[0-9a-fA-F]{6}$/.test(v) ? v : color(i); }
  // Màu riêng của một cột/miếng và đúng chữ ảnh gốc ghi cạnh nó ("40%", "320 TRỨNG/NĂM"; "" = ảnh không ghi gì).
  // Dữ liệu cũ không có hai trường này: dùng màu mặc định và số của điểm.
  function pointColor(p, fallback) { return p && typeof p.color === 'string' && /^#[0-9a-fA-F]{6}$/.test(p.color) ? p.color : fallback; }
  function valueText(p, suffix) { return typeof p.label === 'string' ? p.label : fmt(p.y) + (suffix || ''); }
  function textOn(hex) { // chữ trắng trên nền đậm, chữ đen trên nền nhạt
    var n = parseInt(hex.slice(1), 16);
    return (n >> 16) * 0.299 + ((n >> 8) & 255) * 0.587 + (n & 255) * 0.114 < 165 ? '#fff' : INK;
  }
  function wrapText(s, max) {
    var lines = [], line = '';
    String(s).split(/\s+/).filter(Boolean).forEach(function (word) {
      if (line && (line + ' ' + word).length > max) { lines.push(line); line = word; } else line = line ? line + ' ' + word : word;
    });
    if (line) lines.push(line);
    return lines;
  }
  function colourOr(value, fallback) { return typeof value === 'string' && /^#[0-9a-fA-F]{6}$/.test(value) ? value : fallback; }
  function list(value) { return Array.isArray(value) ? value : []; }
  // đường cong trơn đi qua mọi điểm (Catmull-Rom đổi sang Bézier)
  function smoothPath(pts) {
    var d = 'M' + pts[0].cx + ' ' + pts[0].cy;
    for (var i = 0; i + 1 < pts.length; i++) {
      var a = pts[i - 1] || pts[i], b = pts[i], c = pts[i + 1], e = pts[i + 2] || c;
      d += 'C' + (b.cx + (c.cx - a.cx) / 6) + ' ' + (b.cy + (c.cy - a.cy) / 6) + ' ' + (c.cx - (e.cx - b.cx) / 6) + ' ' + (c.cy - (e.cy - b.cy) / 6) + ' ' + c.cx + ' ' + c.cy;
    }
    return d;
  }
  function groupShare(count) { return count === 1 ? 0.5 : count === 2 ? 0.64 : 0.8; }
  function axisTitle(a) { return a && (a.label || a.unit) ? (a.label || '') + (a.unit ? (a.label ? ' (' + a.unit + ')' : '(' + a.unit + ')') : '') : ''; }
  function title(parent, text) { add(parent, 'title', {}, text); }

  // Trục ghi rõ min/max (/step) như trong ảnh gốc (trục không bắt đầu từ 0 là có ý nghĩa với đề). Không dùng khi dữ liệu nằm ngoài
  // khoảng đó hoặc khai báo vô lý: khi đó tự chia như bình thường.
  function explicitTicks(axis, lo, hi) {
    if (!axis || !isNum(axis.min) || !isNum(axis.max) || !(axis.max > axis.min) || lo < axis.min - 1e-9 || hi > axis.max + 1e-9) return null;
    var span = axis.max - axis.min, step = isNum(axis.step) && axis.step > 0 ? axis.step : 0;
    if (!step || span / step > 60) { var auto = niceTicks(axis.min, axis.max, 6); step = auto.length > 1 ? auto[1] - auto[0] : span; }
    var ticks = [];
    for (var v = axis.min; v <= axis.max + step * 1e-9; v += step) ticks.push(+v.toFixed(12));
    if (ticks[ticks.length - 1] < axis.max - step * 1e-6) ticks.push(axis.max);
    return ticks;
  }
  function niceTicks(lo, hi, want) {
    if (!(hi > lo)) hi = lo + 1;
    var span = hi - lo, step = Math.pow(10, Math.floor(Math.log10(span / want))), err = span / want / step;
    step *= err >= 7.5 ? 10 : err >= 3.5 ? 5 : err >= 1.5 ? 2 : 1;
    var ticks = [];
    for (var v = Math.floor(lo / step + 1e-9) * step; v <= hi + step * 1e-9; v += step) ticks.push(+v.toFixed(12));
    if (ticks[ticks.length - 1] < hi) ticks.push(+(ticks[ticks.length - 1] + step).toFixed(12));
    return ticks;
  }
  function logTicks(lo, hi) {
    var a = Math.floor(Math.log10(lo)), b = Math.ceil(Math.log10(hi)), ticks = [];
    if (a === b) b = a + 1;
    for (var i = a; i <= b; i++) ticks.push(Math.pow(10, i));
    return ticks;
  }
  function scaler(lo, hi, log, p0, p1) {
    var a = log ? Math.log10(lo) : lo, b = log ? Math.log10(hi) : hi;
    return function (v) { return p0 + ((log ? Math.log10(Math.max(v, lo)) : v) - a) / (b - a) * (p1 - p0); };
  }

  function valid(c) {
    return !!c && Array.isArray(c.series) && c.series.length > 0 && c.series.every(function (s) {
      return s && Array.isArray(s.points) && s.points.length > 0 && s.points.every(function (p) { return p && isNum(p.y); });
    });
  }
  function kindOf(c) { return KINDS.indexOf(c.chartType) >= 0 ? c.chartType : (c.series[0].kind || 'line'); }

  function labelsOf(c) {
    var labels = (c.categories || []).map(String);
    c.series.forEach(function (s) { s.points.forEach(function (p) {
      if (typeof p.x === 'string' || labels.length) { var k = String(p.x); if (labels.indexOf(k) < 0) labels.push(k); }
    }); });
    return labels;
  }

  /** Tỉ lệ rộng/cao của ô vẽ. */
  function aspect(c) {
    var kind = kindOf(c), n = labelsOf(c).length || c.series[0].points.length;
    if ((kind === 'pie' || kind === 'doughnut') && c.namePlace === 'legend') return c.series.length > 1 ? 1.7 : 1.6;
    if (kind === 'pie' || kind === 'doughnut') return c.series.length > 1 ? Math.min(2.4, 0.55 * c.series.length + 0.5) : 1.6;
    if (kind === 'radar') return 1.1;
    if (c.series.every(function (s) { return s.kind === 'bar'; })) return 640 / Math.min(560, Math.max(280, 120 + n * c.series.length * 26));
    return 1.55;
  }

  function legendItems(c, kind) {
    if (kind === 'pie' || kind === 'doughnut') {
      var seen = {}, items = [];
      c.series.forEach(function (s) { s.points.forEach(function (p, i) {
        var name = String(p.x);
        if (name && !seen[name]) { seen[name] = 1; items.push({ name: name, color: pointColor(p, color(i)) }); }
      }); });
      return items;
    }
    var extra = list(c.bands).concat(list(c.lines)).filter(function (m) { return m && m.label; })
      .map(function (m) { return { name: m.label, color: colourOr(m.color, MUTED) }; });
    var named = c.series.length > 1 || extra.length ? c.series.map(function (s, i) { return { name: s.name || '', color: seriesColor(c, i), kind: s.kind }; })
      .filter(function (it) { return it.name; }) : [];
    var once = {};
    return named.concat(extra).filter(function (it) { var key = it.name + it.color; if (once[key]) return false; once[key] = 1; return true; });
  }
  function legendRows(items, W, fs) {
    var rows = [[]], used = 0, tall = false;
    items.forEach(function (it) {
      var w = fs + 14 + textWidth(it.name, fs);
      if (w > W - 24 && String(it.name).indexOf(' ') >= 0) {           // tên dài hơn cả khung: xuống dòng, không để bị cắt
        var lines = wrapText(it.name, Math.max(8, Math.floor((W - 24 - fs - 14) / (textWidth(it.name, fs) / String(it.name).length * 1.08))));
        var widest = fs + 14 + lines.reduce(function (m, l) { return Math.max(m, textWidth(l, fs)); }, 0);
        if (!rows[rows.length - 1].length) rows.pop();
        lines.forEach(function (line, n) { rows.push([{ item: { name: line, color: it.color }, w: widest, more: n > 0 }]); });
        rows.push([]); used = 0; tall = true;
        return;
      }
      if (used + w > W - 24 && rows[rows.length - 1].length) { rows.push([]); used = 0; }
      rows[rows.length - 1].push({ item: it, w: w }); used += w;
    });
    if (rows.length > 1 && !rows[rows.length - 1].length) rows.pop();
    rows.tall = tall;
    return rows[0].length ? rows : [];
  }
  function drawLegend(svg, rows, W, H, fs) {
    var rowH = fs + 9, y = H - rows.length * rowH + 2;
    rows.forEach(function (row, r) {
      var total = row.reduce(function (a, x) { return a + x.w; }, 0), x = Math.max(12, (W - total) / 2);
      row.forEach(function (cell) {
        var cy = y + r * rowH + rowH / 2;
        if (!cell.more) add(svg, 'rect', { x: x, y: cy - fs / 2 + 1, width: fs, height: fs - 2, rx: 2, fill: cell.item.color });
        add(svg, 'text', { x: x + fs + 5, y: cy + fs * 0.35, 'font-size': fs, 'font-weight': 600, fill: INK }, cell.item.name);
        x += cell.w;
      });
    });
  }

  // ------------------------------------------------------------------ biểu đồ có trục
  function cartesian(svg, c, box, fs) {
    var series = c.series, horizontal = series.every(function (s) { return s.kind === 'bar'; });
    var labels = labelsOf(c);
    // Cột/thanh luôn xếp theo danh mục, kể cả khi x là số (năm 2010, 2011…).
    if (!labels.length && (series.some(function (s) { return BAND[s.kind]; }) || (c.xAxis && c.xAxis.scale === 'category'))) {
      series.forEach(function (s) { s.points.forEach(function (p) { var k = String(p.x); if (labels.indexOf(k) < 0) labels.push(k); }); });
    }
    var categorical = labels.length > 0;
    // Trục phụ (chỉ áp dụng cho biểu đồ dọc): series.axis === 'secondary' dùng thang riêng (yAxis2), vẽ nhãn bên phải —
    // dành cho biểu đồ cột+đường có hai đơn vị khác hẳn nhau (ví dụ Triệu người và %).
    var secondary = !horizontal && c.yAxis2 ? series.filter(function (s) { return s.axis === 'secondary'; }) : [];
    var primarySeries = secondary.length ? series.filter(function (s) { return s.axis !== 'secondary'; }) : series;
    if (!primarySeries.length) { primarySeries = series; secondary = []; } // mọi series đều "secondary": coi như không có trục phụ
    var logY = c.yAxis && c.yAxis.scale === 'logarithmic', logX = !categorical && c.xAxis && c.xAxis.scale === 'logarithmic';
    // cột chồng; trục giá trị không in số; hai trục cắt nhau ở giữa hình (đồ thị tín hiệu)
    var stacked = !!c.stacked && categorical && series.every(function (s) { return BAND[s.kind]; });
    var numbered = c.showAxisNumbers !== false, yNamed = list(c.yTickLabels), xNamed = categorical ? [] : list(c.xTickLabels);
    var centred = !!c.axesAtZero && !categorical && !horizontal;
    var ys = [], xs = [], bandKinds = false, sizes = [];
    primarySeries.forEach(function (s) { s.points.forEach(function (p) {
      ys.push(p.y); if (isNum(p.x)) xs.push(p.x); if (isNum(p.size)) sizes.push(p.size);
    }); if (BAND[s.kind] || s.kind === 'area') bandKinds = true; });
    series.forEach(function (s) { if (secondary.indexOf(s) >= 0) s.points.forEach(function (p) { if (isNum(p.x)) xs.push(p.x); }); });
    if (stacked) labels.forEach(function (l) {
      var up = 0;
      primarySeries.forEach(function (s) { s.points.forEach(function (p) { if (String(p.x) === l && p.y > 0) up += p.y; }); });
      ys.push(up);
    });
    // dải màu, đường đánh dấu, chữ ghi trên hình và nhãn trục đều phải nằm trong khung
    list(c.bands).forEach(function (b) { if (b.axis === 'y') ys.push(b.from, b.to); else if (!categorical) xs.push(b.from, b.to); });
    list(c.lines).forEach(function (m) { if (m.axis === 'y') ys.push(m.value); else if (!categorical) xs.push(m.value); });
    list(c.annotations).forEach(function (a) { ys.push(a.y); if (!categorical && isNum(a.x)) xs.push(a.x); });
    yNamed.forEach(function (t) { ys.push(t.at); });
    xNamed.forEach(function (t) { xs.push(t.at); });
    var yLo = Math.min.apply(null, ys), yHi = Math.max.apply(null, ys);
    var explicitY = logY ? null : explicitTicks(c.yAxis, yLo, yHi);
    if (logY) { yLo = Math.min.apply(null, ys.filter(function (v) { return v > 0; })); }
    else if (bandKinds && !explicitY) { yLo = Math.min(0, yLo); yHi = Math.max(0, yHi); }
    // điểm/bong bóng không nằm sát mép trục: chừa đệm quanh miền giá trị
    var padded = primarySeries.some(function (s) { return s.kind === 'bubble' || s.kind === 'scatter'; });
    if (padded && !logY && !explicitY) { var padY = (yHi - yLo) * 0.12 || 1; yLo -= padY; yHi += padY; }
    var yTicks = logY ? logTicks(yLo, yHi) : explicitY || niceTicks(yLo, yHi, horizontal ? 5 : 6);
    yLo = yTicks[0]; yHi = yTicks[yTicks.length - 1];
    var logY2 = secondary.length && c.yAxis2.scale === 'logarithmic';
    var y2s = secondary.reduce(function (a, s) { return a.concat(s.points.map(function (p) { return p.y; })); }, []);
    var y2Lo, y2Hi, y2Ticks;
    if (secondary.length) {
      y2Lo = Math.min.apply(null, y2s); y2Hi = Math.max.apply(null, y2s);
      var explicitY2 = logY2 ? null : explicitTicks(c.yAxis2, y2Lo, y2Hi);
      if (logY2) y2Lo = Math.min.apply(null, y2s.filter(function (v) { return v > 0; }));
      else { y2Lo = Math.min(0, y2Lo); y2Hi = Math.max(0, y2Hi); }
      y2Ticks = logY2 ? logTicks(y2Lo, y2Hi) : explicitY2 || niceTicks(y2Lo, y2Hi, 6);
      y2Lo = y2Ticks[0]; y2Hi = y2Ticks[y2Ticks.length - 1];
    }
    var xTicks = null;
    if (!categorical) {
      var xLo = Math.min.apply(null, xs), xHi = Math.max.apply(null, xs);
      var explicitX = logX ? null : explicitTicks(c.xAxis, xLo, xHi);
      if (padded && !logX && !explicitX) { var padX = (xHi - xLo) * 0.12 || 1; xLo -= padX; xHi += padX; }
      xTicks = logX ? logTicks(xLo, xHi) : explicitX || niceTicks(xLo, xHi, 6);
    }
    var catTitle = axisTitle(c.xAxis), valTitle = axisTitle(c.yAxis), valTitle2 = secondary.length ? axisTitle(c.yAxis2) : '';
    var tickText = function (v) { return fmt(v); }, tickText2 = secondary.length ? function (v) { return fmt(v); } : null;
    var valueTicks = yNamed.length ? yNamed.map(function (t) { return { v: t.at, text: t.text }; })
      : numbered ? yTicks.map(function (v) { return { v: v, text: fmt(v) }; }) : [];
    // lề: nhãn trục dọc rộng bao nhiêu thì chừa bấy nhiêu (nhãn danh mục của biểu đồ ngang dài tối đa 38% bề rộng)
    var vertLabels = horizontal ? labels.map(function (l) { return clip(l, Math.max(6, Math.floor(box.w * 0.38 / (fs * 0.56)))); }) : valueTicks.map(function (t) { return t.text; });
    var left = box.x + Math.max.apply(null, vertLabels.map(function (l) { return textWidth(l, fs) * (horizontal ? 1.18 : 1); }).concat([10])) + 12 + ((horizontal ? catTitle : valTitle) ? fs + 8 : 0);
    var right = box.x + box.w - 14;
    if (secondary.length) {
      var right2Labels = y2Ticks.map(tickText2);
      right -= Math.max.apply(null, right2Labels.map(function (l) { return textWidth(l, fs); }).concat([10])) + 12 + (valTitle2 ? fs + 8 : 0);
    }
    // thanh ngang có chữ dài cạnh đầu thanh ("320 TRỨNG/NĂM"): chừa lề phải đủ chỗ
    if (horizontal && c.showDataLabels !== false) {
      var printed = [];
      series.forEach(function (s) { s.points.forEach(function (p) { if (typeof p.label === 'string') printed.push(textWidth(p.label, fs - 1)); }); });
      if (printed.length) right -= Math.min(box.w * 0.3, Math.max(0, Math.max.apply(null, printed) - 8));
    }
    var horizLabels = horizontal ? yTicks.map(tickText) : categorical ? labels : xNamed.length ? xNamed.map(function (t) { return t.text; }) : xTicks.map(tickText);
    // độ rộng chữ đo thật trên SVG (chữ có dấu rộng hơn ước lượng); không đo được thì dùng ước lượng
    var measure = function (text) {
      try { var t = add(svg, 'text', { 'font-size': fs, visibility: 'hidden' }, text), w = t.getBBox().width; svg.removeChild(t); return w || textWidth(text, fs); }
      catch (error) { return textWidth(text, fs); }
    };
    var shown = horizLabels.map(String);
    var band = categorical && !horizontal ? (right - left) / Math.max(1, labels.length) : 0;
    var wide = function (text) { return measure(text) * 1.06; };             // chữ đậm rộng hơn chữ thường đo được
    var wrapped = null, rotate = false;
    if (!horizontal && categorical && Math.max.apply(null, shown.map(wide)) > band * 0.94) {
      var perLine = Math.max(4, Math.floor(band * 0.96 / (fs * 0.55)));
      wrapped = shown.map(function (l) { return wrapText(l, perLine); });
      if (wrapped.some(function (lines) { return lines.length > 3 || lines.some(function (l) { return wide(l) > band; }); })) { wrapped = null; rotate = true; }
    }
    var longest = Math.min(170, Math.max.apply(null, shown.map(wide)));
    if (!horizontal && !categorical && shown.length) {
      right = Math.min(right, box.x + box.w - wide(shown[shown.length - 1]) / 2 - 4);
    }
    if (rotate) { // nhãn xoay -40° thò sang trái quá trục dọc: chừa lề để không bị cắt chữ đầu
      left = Math.max(left, box.x + wide(shown[0]) * 0.77 + fs * 0.64 - band / 2 + 6);
      band = (right - left) / Math.max(1, labels.length);
    }
    var lineCount = wrapped ? Math.max.apply(null, wrapped.map(function (lines) { return lines.length; })) : 1;
    var bottomPad = (rotate ? longest * 0.64 + fs + 6 : lineCount * (fs + 3) + 7) + ((horizontal ? valTitle : catTitle) ? fs + 8 : 0);
    var top = box.y + 6, bottom = box.y + box.h - bottomPad;
    // số trên cột đứng: vừa bề ngang cột thì viết ngang (thu nhỏ tối đa 10px), không thì viết đứng; chừa chỗ phía trên
    var barKinds = series.filter(function (s) { return BAND[s.kind]; }).length, valueSize = fs - 1, upright = false;
    if (stacked) barKinds = 1;
    if (!stacked && !horizontal && categorical && barKinds && c.showDataLabels !== false) {
      var barWidth = band * groupShare(barKinds) / barKinds, texts = [];
      series.forEach(function (s) { if (BAND[s.kind]) s.points.forEach(function (p) { texts.push(valueText(p)); }); });
      var chars = Math.max.apply(null, texts.map(function (t) { return t.length; }).concat([1]));
      var room = barWidth + (barKinds === 1 ? 6 : -1);
      while (valueSize > 10 && chars * valueSize * 0.55 > room) valueSize--;
      upright = chars * valueSize * 0.55 > room;
      if (upright) valueSize = Math.max(9, Math.min(fs - 2, Math.floor(barWidth + 2)));
      top += upright ? chars * valueSize * 0.58 + 6 : valueSize + 4;
    }
    if (bottom - top < 60 || right - left < 60) return false;

    // dịch chuyển: giá trị ↔ điểm ảnh
    var yPix = scaler(yLo, yHi, logY, bottom, top), xPix;
    var yPix2 = secondary.length ? scaler(y2Lo, y2Hi, logY2, bottom, top) : null;
    var catPix = function (i) { return left + (i + 0.5) * band; };
    if (horizontal) {
      var rowH = (bottom - top) / Math.max(1, labels.length);
      catPix = function (i) { return top + (i + 0.5) * rowH; };
      yPix = scaler(yLo, yHi, logY, left, right);
    } else if (!categorical) {
      xPix = scaler(xTicks[0], xTicks[xTicks.length - 1], logX, left, right);
    }
    if (secondary.length) {
      y2Ticks.forEach(function (v) {
        var y = yPix2(v);
        add(svg, 'text', { x: right + 6, y: y + fs * 0.35, 'text-anchor': 'start', 'font-size': fs, 'font-weight': 600, fill: INK }, tickText2(v));
      });
      if (valTitle2) {
        var tx = right + Math.max.apply(null, y2Ticks.map(function (v) { return textWidth(tickText2(v), fs); }).concat([10])) + fs + 10;
        add(svg, 'text', { x: tx, y: (top + bottom) / 2, 'text-anchor': 'middle', 'font-size': fs, 'font-weight': 700, fill: INK, transform: 'rotate(90 ' + tx + ' ' + (top + bottom) / 2 + ')' }, valTitle2);
      }
    }

    // lưới + trục
    var plotStyle = c.plotStyle;
    // Older records with a fully specified column scale predate the visual metadata.
    if (plotStyle === undefined && categorical && explicitY && !secondary.length &&
        series.every(function (s) { return s.kind === 'column'; })) plotStyle = 'boxed-grid';
    var boxed = plotStyle === 'boxed-grid' || plotStyle === 'boxed';
    var showGrid = plotStyle !== 'open' && plotStyle !== 'boxed';
    var frameStroke = '#626c78';
    function interiorTick(value) { return showGrid && numbered && (!boxed || (value !== yLo && value !== yHi)); }
    if (horizontal) {
      yTicks.forEach(function (v) {
        var x = yPix(v);
        if (interiorTick(v)) add(svg, 'line', { x1: x, y1: top, x2: x, y2: bottom, stroke: boxed ? frameStroke : GRID });
        add(svg, 'text', { x: x, y: bottom + fs + 4, 'text-anchor': 'middle', 'font-size': fs, 'font-weight': 600, fill: INK }, tickText(v));
      });
      labels.forEach(function (l, i) {
        add(svg, 'text', { x: left - 6, y: catPix(i) + fs * 0.35, 'text-anchor': 'end', 'font-size': fs, 'font-weight': 700, fill: INK }, clip(l, 40));
      });
    } else if (centred) {
      var zx = xPix(Math.max(xTicks[0], Math.min(xTicks[xTicks.length - 1], 0))), zy = yPix(Math.max(yLo, Math.min(yHi, 0)));
      if (showGrid) {
        if (numbered) yTicks.forEach(function (v) { add(svg, 'line', { x1: left, y1: yPix(v), x2: right, y2: yPix(v), stroke: GRID }); });
        xTicks.forEach(function (v) { add(svg, 'line', { x1: xPix(v), y1: top, x2: xPix(v), y2: bottom, stroke: GRID }); });
      }
      add(svg, 'path', { d: 'M' + left + ' ' + zy + 'H' + (right + 8) + 'M' + (right + 1) + ' ' + (zy - 4) + 'L' + (right + 9) + ' ' + zy + 'L' + (right + 1) + ' ' + (zy + 4)
        + 'M' + zx + ' ' + bottom + 'V' + (top - 6) + 'M' + (zx - 4) + ' ' + (top + 1) + 'L' + zx + ' ' + (top - 7) + 'L' + (zx + 4) + ' ' + (top + 1), fill: 'none', stroke: INK, 'stroke-width': 1.4 });
      valueTicks.forEach(function (t) {
        if (t.v !== 0) add(svg, 'text', { x: zx - 6, y: yPix(t.v) + fs * 0.35, 'text-anchor': 'end', 'font-size': fs - 1, 'font-weight': 600, fill: INK }, t.text);
      });
      (xNamed.length ? xNamed : numbered ? xTicks.map(function (v) { return { at: v, text: fmt(v) }; }) : []).forEach(function (t) {
        add(svg, 'text', { x: t.at === 0 ? zx - 6 : xPix(t.at), y: zy + fs + 3, 'text-anchor': t.at === 0 ? 'end' : 'middle', 'font-size': fs - 1, 'font-weight': 600, fill: INK }, t.text);
      });
      if (valTitle) add(svg, 'text', { x: zx - 9, y: top + 2, 'text-anchor': 'end', 'font-size': fs, 'font-weight': 700, fill: INK }, valTitle);
      if (catTitle) add(svg, 'text', { x: right + 9, y: zy - 8, 'text-anchor': 'end', 'font-size': fs, 'font-weight': 700, fill: INK }, catTitle);
      valTitle = ''; catTitle = '';
    } else {
      valueTicks.forEach(function (t) {
        var y = yPix(t.v);
        if (showGrid && (!boxed || (t.v !== yLo && t.v !== yHi))) add(svg, 'line', { x1: left, y1: y, x2: right, y2: y, stroke: boxed ? frameStroke : GRID });
        add(svg, 'text', { x: left - 6, y: y + fs * 0.35, 'text-anchor': 'end', 'font-size': fs, 'font-weight': 600, fill: INK }, t.text);
      });
      var xt = categorical ? labels.map(function (l, i) { return { v: l, x: catPix(i) }; })
        : xNamed.length ? xNamed.map(function (t) { return { v: t.text, x: xPix(t.at) }; })
        : xTicks.map(function (v) { return { v: tickText(v), x: xPix(v) }; });
      if (!categorical && showGrid && numbered) xTicks.forEach(function (v) {
        if (!boxed || (v !== xTicks[0] && v !== xTicks[xTicks.length - 1]))
          add(svg, 'line', { x1: xPix(v), y1: top, x2: xPix(v), y2: bottom, stroke: GRID });
      });
      xt.forEach(function (t, ti) {
        (wrapped ? wrapped[ti] : [String(t.v)]).forEach(function (line, n) {
          var a = { x: t.x, y: bottom + fs + 4 + n * (fs + 3), 'font-size': fs, 'font-weight': 700, fill: INK };
          if (rotate) { a['text-anchor'] = 'end'; a.transform = 'rotate(-40 ' + t.x + ' ' + (bottom + fs + 4) + ')'; } else a['text-anchor'] = 'middle';
          add(svg, 'text', a, line);
        });
      });
    }
    var zeroY = horizontal ? null : yPix(logY ? yLo : Math.max(yLo, Math.min(yHi, 0)));
    var zeroX = horizontal ? yPix(logY ? yLo : Math.max(yLo, Math.min(yHi, 0))) : null;
    if (centred) {
      // trục đã vẽ qua gốc ở trên
    } else if (boxed) {
      add(svg, 'line', { x1: left, y1: top, x2: right, y2: top, stroke: frameStroke });
      add(svg, 'line', { x1: left, y1: bottom, x2: right, y2: bottom, stroke: frameStroke });
      add(svg, 'line', { x1: left, y1: top, x2: left, y2: bottom, stroke: frameStroke });
      add(svg, 'line', { x1: right, y1: top, x2: right, y2: bottom, stroke: frameStroke });
    } else {
      add(svg, 'line', { x1: left, y1: bottom, x2: right, y2: bottom, stroke: MUTED });
      add(svg, 'line', { x1: left, y1: top, x2: left, y2: bottom, stroke: MUTED });
    }
    if (horizontal && zeroX > left + 1) add(svg, 'line', { x1: zeroX, y1: top, x2: zeroX, y2: bottom, stroke: MUTED });
    if (!centred && !horizontal && zeroY < bottom - 1) add(svg, 'line', { x1: left, y1: zeroY, x2: right, y2: zeroY, stroke: MUTED });
    if (valTitle) {
      if (horizontal) add(svg, 'text', { x: (left + right) / 2, y: box.y + box.h - 4, 'text-anchor': 'middle', 'font-size': fs, 'font-weight': 700, fill: INK }, valTitle);
      else add(svg, 'text', { x: box.x + fs + 2, y: (top + bottom) / 2, 'text-anchor': 'middle', 'font-size': fs, 'font-weight': 700, fill: INK, transform: 'rotate(-90 ' + (box.x + fs + 2) + ' ' + (top + bottom) / 2 + ')' }, valTitle);
    }
    if (catTitle) {
      if (horizontal) add(svg, 'text', { x: box.x + fs + 2, y: (top + bottom) / 2, 'text-anchor': 'middle', 'font-size': fs, 'font-weight': 700, fill: INK, transform: 'rotate(-90 ' + (box.x + fs + 2) + ' ' + (top + bottom) / 2 + ')' }, catTitle);
      else add(svg, 'text', { x: (left + right) / 2, y: box.y + box.h - 4, 'text-anchor': 'middle', 'font-size': fs, 'font-weight': 700, fill: INK }, catTitle);
    }

    // số dòng/cột theo nhóm
    var bars = series.filter(function (s) { return BAND[s.kind]; });
    var points = series.reduce(function (a, s) { return a + s.points.length; }, 0);
    // ảnh gốc không in số lên cột/điểm (showDataLabels=false) thì bản vẽ cũng không in: không để lộ đáp án của đề đọc số trên trục
    var showValues = points <= 30 && c.showDataLabels !== false;
    var maxSize = sizes.length ? Math.max.apply(null, sizes) : 1;
    var position = function (p, pick) {
      var i = categorical ? labels.indexOf(String(p.x)) : -1;
      return { cx: categorical ? catPix(i) : xPix(p.x), cy: (pick || yPix)(p.y) };
    };
    var along = function (v) { return categorical ? catPix(Math.max(0, labels.indexOf(String(v)))) : xPix(v); };
    list(c.bands).forEach(function (b) {                                   // dải màu nằm dưới đường
      var fill = colourOr(b.color, '#fde68a');
      if (b.axis === 'y') add(svg, 'rect', { x: left, y: Math.min(yPix(b.from), yPix(b.to)), width: right - left, height: Math.abs(yPix(b.from) - yPix(b.to)), fill: fill, 'fill-opacity': 0.35 });
      else add(svg, 'rect', { x: Math.min(along(b.from), along(b.to)), y: top, width: Math.abs(along(b.to) - along(b.from)), height: bottom - top, fill: fill, 'fill-opacity': 0.35 });
    });
    var below = {};                                                        // đỉnh đã chồng của mỗi danh mục
    // Vẽ trước cột: đường đi ngang qua cột khác thì bị cột che, như ảnh gốc.
    // đường dóng: nét (thường đứt) từ đỉnh một cột sang trục giá trị, như ảnh gốc vẽ để đọc số trên trục.
    // Cột đứng: ngang từ mép trái của cột sang trục dọc bên trái. Cột ngang: dọc từ mép dưới của cột xuống trục giá trị phía dưới.
    if (categorical && bars.length && Array.isArray(c.guides)) {
      var barSpan = (horizontal ? (bottom - top) / Math.max(1, labels.length) : band) * groupShare(bars.length);
      c.guides.forEach(function (gd) {
        var gi = labels.indexOf(String(gd && gd.category)), value = gd && Number(gd.value);
        if (gi < 0 || !isFinite(value)) return;
        var attrs = { stroke: gd.color || MUTED, 'stroke-width': 1.4 };
        if (gd.dash !== false) attrs['stroke-dasharray'] = '5 4';
        if (horizontal) {
          var gx = yPix(value), gy = catPix(gi) - barSpan / 2 + barSpan / bars.length;
          add(svg, 'line', Object.assign({ x1: gx, y1: gy, x2: gx, y2: bottom }, attrs));
        } else {
          var gy2 = yPix(value), gx2 = catPix(gi) - barSpan / 2;
          add(svg, 'line', Object.assign({ x1: gx2, y1: gy2, x2: left, y2: gy2 }, attrs));
        }
      });
    }
    // biểu đồ đường: đường dóng từ điểm xuống trục hoành; toAxis = 'both' thì dóng cả sang trục tung
    if (!bars.length && Array.isArray(c.guides)) {
      c.guides.forEach(function (gd) {
        var value = gd && Number(gd.value);
        if (!gd || !isFinite(value) || (categorical && labels.indexOf(String(gd.category)) < 0)) return;
        var x = along(categorical ? gd.category : Number(gd.category)), y = yPix(value), attrs = { stroke: gd.color || MUTED, 'stroke-width': 1.2 };
        if (!isFinite(x)) return;
        if (gd.dash !== false) attrs['stroke-dasharray'] = '5 4';
        add(svg, 'line', Object.assign({ x1: x, y1: y, x2: x, y2: bottom }, attrs));
        if (gd.toAxis === 'both') add(svg, 'line', Object.assign({ x1: left, y1: y, x2: x, y2: y }, attrs));
      });
    }
    series.forEach(function (s, si) {
      var col = seriesColor(c, si), g = add(svg, 'g', {}), pick = s.axis === 'secondary' && yPix2 ? yPix2 : yPix;
      if (BAND[s.kind]) {
        var gi = stacked ? 0 : bars.indexOf(s), k = stacked ? 1 : bars.length, span = (horizontal ? (bottom - top) / Math.max(1, labels.length) : band) * groupShare(k), w = span / k;
        s.points.forEach(function (p) {
          var i = labels.indexOf(String(p.x)), centre = catPix(i), start = centre - span / 2 + gi * w, r;
          if (stacked) {
            var from = below[i] || 0, to = from + Math.max(0, p.y), fill = pointColor(p, col), e0 = yPix(from), e1 = yPix(to), size = Math.abs(e1 - e0);
            below[i] = to;
            r = add(g, 'rect', horizontal ? { x: Math.min(e0, e1), y: start, width: size, height: Math.max(1, w - 1), fill: fill, stroke: INK, 'stroke-width': 1 }
              : { x: start, y: Math.min(e0, e1), width: Math.max(1, w - 1), height: size, fill: fill, stroke: INK, 'stroke-width': 1 });
            if (showValues && valueText(p) && size >= fs) add(g, 'text', { x: horizontal ? (e0 + e1) / 2 : start + w / 2, y: (horizontal ? start + w / 2 : (e0 + e1) / 2) + fs * 0.35,
              'text-anchor': 'middle', 'font-size': fs - 1, 'font-weight': 700, fill: textOn(fill) }, valueText(p));
          } else if (horizontal) {
            var x1 = yPix(p.y), x0 = zeroX;
            r = add(g, 'rect', { x: Math.min(x0, x1), y: start, width: Math.max(1, Math.abs(x1 - x0)), height: Math.max(1, w - 1), fill: pointColor(p, col), stroke: INK, 'stroke-width': 1 });
            if (showValues) add(g, 'text', { x: x1 >= x0 ? x1 + 4 : x1 - 4, y: start + w / 2 + fs * 0.35, 'text-anchor': x1 >= x0 ? 'start' : 'end', 'font-size': fs - 1, 'font-weight': 700, fill: INK }, valueText(p));
          } else {
            var y1 = yPix(p.y), y0 = zeroY;
            r = add(g, 'rect', { x: start, y: Math.min(y0, y1), width: Math.max(1, w - 1), height: Math.max(1, Math.abs(y0 - y1)), fill: pointColor(p, col), stroke: INK, 'stroke-width': 1 });
            if (showValues && valueText(p)) {
              var vx = start + w / 2, vy = y1 <= y0 ? y1 - 4 : y1 + valueSize, va = { x: vx, y: vy, 'text-anchor': 'middle', 'font-size': valueSize, 'font-weight': 700, fill: INK };
              if (upright) { va.x = vx + valueSize * 0.36; va['text-anchor'] = y1 <= y0 ? 'start' : 'end'; va.transform = 'rotate(-90 ' + va.x + ' ' + vy + ')'; }
              add(g, 'text', va, valueText(p));
            }
          }
          title(r, (s.name ? s.name + ': ' : '') + String(p.x) + ' = ' + fmt(p.y));
        });
        return;
      }
      var pts = s.points.map(function (p) { return position(p, pick); });
      if (s.kind === 'area') {
        var base = pick(pick === yPix2 ? (logY2 ? y2Lo : Math.max(y2Lo, Math.min(y2Hi, 0))) : (logY ? yLo : Math.max(yLo, Math.min(yHi, 0))));
        var edge = s.smooth && pts.length > 2 ? 'L' + smoothPath(pts).slice(1) : pts.map(function (q) { return 'L' + q.cx + ' ' + q.cy; }).join('');
        add(g, 'path', { d: 'M' + pts[0].cx + ' ' + base + edge + 'L' + pts[pts.length - 1].cx + ' ' + base + 'Z', fill: col, 'fill-opacity': 0.22 });
      }
      if (s.kind === 'line' || s.kind === 'area') {
        add(g, 'path', { d: s.smooth && pts.length > 2 ? smoothPath(pts) : pts.map(function (q, i) { return (i ? 'L' : 'M') + q.cx + ' ' + q.cy; }).join(''), fill: 'none', stroke: col, 'stroke-width': 2.2, 'stroke-linejoin': 'round' });
      }
      var dotted = !(s.kind === 'line' || s.kind === 'area') || (s.markers !== false && !s.smooth);
      s.points.forEach(function (p, i) {
        var q = pts[i], mark;
        if (!dotted) {
          if (showValues && p.label) add(g, 'text', { x: q.cx, y: q.cy - 8, 'text-anchor': 'middle', 'font-size': fs - 2, 'font-weight': 700, fill: INK }, p.label);
          return;
        }
        if (s.kind === 'bubble') {
          mark = add(g, 'circle', { cx: q.cx, cy: q.cy, r: 5 + 22 * Math.sqrt((p.size || 0) / maxSize), fill: col, 'fill-opacity': 0.5, stroke: col });
        } else {
          mark = add(g, 'circle', { cx: q.cx, cy: q.cy, r: s.kind === 'scatter' ? 4 : 3.2, fill: col, stroke: '#fff', 'stroke-width': 1 });
        }
        title(mark, (s.name ? s.name + ': ' : '') + String(p.x) + ', ' + fmt(p.y) + (p.size != null ? ' (' + fmt(p.size) + ')' : ''));
        if (showValues && (points <= 14 || typeof p.label === 'string') && !bars.length && s.kind !== 'scatter' && s.kind !== 'bubble') { // kết hợp cột + đường: chỉ ghi số trên cột
          // Số đặt ở phía không có đường: đỉnh → trên, đáy → dưới, đoạn dốc lên → trên-trái, dốc xuống → trên-phải.
          var before = pts[i - 1], after = pts[i + 1], up = before && before.cy > q.cy, down = after && after.cy > q.cy;
          var peak = (!before || up) && (!after || down), valley = (!before || before.cy < q.cy) && (!after || after.cy < q.cy);
          var rising = before ? before.cy > q.cy : after && after.cy < q.cy;
          var lx = q.cx, ly = q.cy - 8, anchor = 'middle';
          if (valley && !peak) ly = q.cy + fs + 3;
          else if (!peak) { anchor = rising ? 'end' : 'start'; lx = q.cx + (rising ? -5 : 5); ly = q.cy - 6; }
          var others = [];
          series.forEach(function (o, oi) {
            if (oi !== si && o.kind === s.kind) o.points.forEach(function (m) { if (String(m.x) === String(p.x)) others.push({ y: m.y, first: oi < si }); });
          });
          if (others.length) {
            if (others.some(function (m) { return m.first && Math.abs(yPix(m.y) - q.cy) < 2; })) return;
            lx = q.cx; anchor = 'middle';
            ly = others.every(function (m) { return p.y >= m.y; }) ? q.cy - 8 : q.cy + fs + 2;
          }
          // sát trục thì lệch sang trong để không đè nhãn trục
          if (anchor === 'middle') { var edge = q.cx - left < 14 ? 'start' : right - q.cx < 14 ? 'end' : 'middle'; anchor = edge; lx += edge === 'start' ? 3 : edge === 'end' ? -3 : 0; }
          else if (anchor === 'end' && lx - left < 4) { anchor = 'start'; lx = q.cx + 5; }
          else if (anchor === 'start' && right - lx < 4) { anchor = 'end'; lx = q.cx - 5; }
          add(g, 'text', { x: lx, y: ly, 'text-anchor': anchor, 'font-size': fs - 2, 'font-weight': 700, fill: INK }, valueText(p));
        }
      });
    });
    list(c.lines).forEach(function (m) {
      var stroke = { stroke: colourOr(m.color, MUTED), 'stroke-width': 1.6 };
      if (m.dash !== false) stroke['stroke-dasharray'] = '6 4';
      if (m.axis === 'y') add(svg, 'line', Object.assign({ x1: left, y1: yPix(m.value), x2: right, y2: yPix(m.value) }, stroke));
      else add(svg, 'line', Object.assign({ x1: along(m.value), y1: top, x2: along(m.value), y2: bottom }, stroke));
    });
    list(c.annotations).forEach(function (a) {                              // chữ ghi trên hình, đặt theo toạ độ dữ liệu
      if (!a || !a.text) return;
      var half = textWidth(a.text, fs - 1) / 2, ax = Math.max(box.x + half + 2, Math.min(box.x + box.w - half - 2, along(a.x))), anchor = 'middle';
      if (centred && Math.abs(along(a.x) - zx) < half + 4) { ax = zx - 6; anchor = 'end'; }      // chữ nằm trên trục tung: đặt bên trái trục
      add(svg, 'text', { x: ax, y: yPix(a.y) + fs * 0.35, 'text-anchor': anchor,
        'font-size': fs - 1, 'font-weight': 700, fill: colourOr(a.color, INK) }, a.text);
    });
    return true;
  }

  // ------------------------------------------------------------------ tròn / vành khuyên
  // Như sách: số nằm trong miếng, tên nằm cạnh miếng (outside); màn hình hẹp thì tên xuống chú giải.
  function pie(svg, c, box, fs, ring, outside, within) {
    var pts = c.series[0].points, total = pts.reduce(function (a, p) { return a + Math.max(0, p.y); }, 0);
    if (!(total > 0)) return false;
    var unit = c.yAxis && c.yAxis.unit ? c.yAxis.unit : '', suffix = unit ? (unit === '%' ? '%' : ' ' + unit) : '';
    var shown = c.showDataLabels !== false, names = pts.map(function (p) { return outside ? wrapText(p.x, 14) : []; });
    // tên ở chú giải: quanh hình chỉ còn số của miếng nhỏ, chừa ít chỗ hơn để hình tròn không bị bé
    var around = outside ? fs * 3 : c.valuePlace === 'outside' ? fs * 3.6 : c.namePlace === 'legend' ? fs * 2.8 : fs * 4.2;
    var cx = box.x + box.w / 2, cy = box.y + box.h / 2, R = Math.min(box.w / 2 - around, box.h / 2 - fs * (c.valuePlace === 'outside' ? 2 : 2.6), 190);
    if (within) R = Math.min(box.w / 2 - 14, box.h / 2 - 8, 190);       // tên nằm trong miếng: hình tròn to hết ô
    if (outside) {
      var turn = -Math.PI / 2;
      pts.forEach(function (p, i) {
        if (!(p.y > 0)) return;
        var sweep = p.y / total * Math.PI * 2, across = Math.abs(Math.cos(turn + sweep / 2));
        var width = names[i].reduce(function (a, l) { return Math.max(a, textWidth(l, fs) * 1.06); }, 0);
        var tall = names[i].length * (fs + 3), up = Math.abs(Math.sin(turn + sweep / 2));
        if (width && up > 0.5) R = Math.min(R, Math.max(box.h * 0.22, (box.h / 2 - tall) / up - 10));
        if (width && across > 0.15) R = Math.min(R, Math.max(box.w * 0.18, (box.w / 2 - width - 6) / across - 10));
        turn += sweep;
      });
    }
    if (R < 30) R = Math.max(30, Math.min(box.w, box.h) / 2 - fs * 2);
    var r0 = ring ? R * 0.55 : 0, angle = -Math.PI / 2, beside = [];
    var point = function (r, a) { return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
    var slices = add(svg, 'g', {}), words = add(svg, 'g', {});
    function blockInside(name, value, from, sweep) {
      var sizes = [fs + 2, fs + 1, fs, fs - 1, fs - 2], widths = [30, 14, 10, 8], radii = [0.6, 0.66, 0.55, 0.72];
      for (var i = 0; i < sizes.length; i++) for (var j = 0; j < widths.length; j++) {
        var lines = (name ? wrapText(name, widths[j]) : []).concat(value ? [value] : []);
        if (!lines.length) return null;
        var size = sizes[i], w = lines.reduce(function (m, l) { return Math.max(m, textWidth(l, size) * 0.96); }, 0), h = lines.length * (size + 4);
        for (var k = 0; k < radii.length; k++) {
          var middle = point(R * radii[k], from + sweep / 2);
          var ok = [[-1, -1], [1, -1], [-1, 1], [1, 1], [-1, 0], [1, 0]].every(function (c) {
            var dx = middle[0] + c[0] * w / 2 - cx, dy = middle[1] + c[1] * h / 2 - cy, r = Math.sqrt(dx * dx + dy * dy);
            var turn = (Math.atan2(dy, dx) - from + Math.PI * 4) % (Math.PI * 2);
            return r <= R - 2 && r >= r0 && (sweep >= Math.PI * 2 - 0.01 || turn <= sweep);
          });
          if (ok) return { lines: lines, size: size, at: middle };
        }
      }
      return null;
    }
    pts.forEach(function (p, i) {
      if (!(p.y > 0)) return;
      var sweep = p.y / total * Math.PI * 2, a1 = angle + sweep, big = sweep > Math.PI ? 1 : 0, d, path, fill = pointColor(p, color(i));
      if (sweep >= Math.PI * 2 - 1e-6) {
        d = ring ? 'M' + (cx + R) + ' ' + cy + 'A' + R + ' ' + R + ' 0 1 1 ' + (cx - R) + ' ' + cy + 'A' + R + ' ' + R + ' 0 1 1 ' + (cx + R) + ' ' + cy
          + 'M' + (cx + r0) + ' ' + cy + 'A' + r0 + ' ' + r0 + ' 0 1 0 ' + (cx - r0) + ' ' + cy + 'A' + r0 + ' ' + r0 + ' 0 1 0 ' + (cx + r0) + ' ' + cy + 'Z'
          : 'M' + (cx + R) + ' ' + cy + 'A' + R + ' ' + R + ' 0 1 1 ' + (cx - R) + ' ' + cy + 'A' + R + ' ' + R + ' 0 1 1 ' + (cx + R) + ' ' + cy + 'Z';
      } else {
        var s0 = point(R, angle), s1 = point(R, a1);
        d = ring ? 'M' + s0 + 'A' + R + ' ' + R + ' 0 ' + big + ' 1 ' + s1 + 'L' + point(r0, a1) + 'A' + r0 + ' ' + r0 + ' 0 ' + big + ' 0 ' + point(r0, angle) + 'Z'
          : 'M' + cx + ' ' + cy + 'L' + s0 + 'A' + R + ' ' + R + ' 0 ' + big + ' 1 ' + s1 + 'Z';
      }
      path = add(slices, 'path', { d: d, fill: fill, stroke: '#fff', 'stroke-width': 1.5, 'fill-rule': 'evenodd' });
      var value = shown ? valueText(p, suffix) : '', mid = angle + sweep / 2, at = ring ? (R + r0) / 2 : R * 0.64;
      title(path, [String(p.x), value].filter(Boolean).join(': '));
      var leader = c.valuePlace === 'outside' && !!value;
      var fits = within && !leader ? blockInside(String(p.x), value, angle, sweep) : null;
      if (within && String(p.x)) within[String(p.x)] = !!fits && within[String(p.x)] !== false;
      var inside = !leader && !fits && !!value && sweep > 0.25 && sweep * at >= textWidth(value, fs) + 2;
      if (fits) {
        fits.lines.forEach(function (line, n) {
          add(words, 'text', { x: fits.at[0], y: fits.at[1] + (n - (fits.lines.length - 1) / 2) * (fits.size + 4) + fits.size * 0.35,
            'text-anchor': 'middle', 'font-size': fits.size, 'font-weight': 700, fill: textOn(fill) }, line);
        });
        angle = a1;
        return;
      }
      if (inside) {
        var q = point(at, mid);
        add(words, 'text', { x: q[0], y: q[1] + fs * 0.4, 'text-anchor': 'middle', 'font-size': fs, 'font-weight': 700, fill: textOn(fill) }, value);
      }
      var lines = names[i].concat(value && !inside ? [value] : []);
      if (lines.length) beside.push({ lines: lines, mid: mid, right: Math.cos(mid) >= 0, leader: leader });
      angle = a1;
    });
    if (ring && c.centerText) {                                       // chữ in giữa hình vành khuyên
      var middle = String(c.centerText), size = Math.min(fs + 7, r0 * 1.7 / Math.max(1, textWidth(middle, 1)));
      add(words, 'text', { x: cx, y: cy + size * 0.35, 'text-anchor': 'middle', 'font-size': size, 'font-weight': 700, fill: INK }, middle);
    }
    // chữ cạnh miếng: đặt theo hướng của miếng, hai chữ cùng một bên không đè nhau
    [true, false].forEach(function (right) {
      var floor = box.y;
      beside.filter(function (b) { return b.right === right; }).map(function (b) {
        var q = point(R + (b.leader ? 18 : 10), b.mid), height = b.lines.length * (fs + 3);
        return { b: b, x: q[0] + (right ? 2 : -2), y: q[1] - height / 2 + Math.sin(b.mid) * height / 2, height: height };
      }).sort(function (a, b) { return a.y - b.y; }).forEach(function (item) {
        var y = Math.max(floor, Math.min(item.y, box.y + box.h - item.height));
        floor = y + item.height + 3;
        // không bao giờ đè lên hình tròn: dòng nào ngang tầm hình thì lùi ra ngoài đường tròn
        var gap = cy < y ? y - cy : cy > y + item.height ? cy - y - item.height : 0, x = item.x;
        var reach = item.b.leader ? R + 14 : R + 5;
        if (gap < reach) {
          var clear = Math.sqrt(reach * reach - gap * gap);
          x = right ? Math.max(x, cx + clear) : Math.min(x, cx - clear);
        }
        if (item.b.leader) {
          var from = point(R * 0.74, item.b.mid);
          add(words, 'line', { x1: from[0], y1: from[1], x2: x + (right ? -3 : 3), y2: y + item.height / 2 + 1, stroke: INK, 'stroke-width': 1.1 });
        }
        item.b.lines.forEach(function (line, n) {
          add(words, 'text', { x: x, y: y + n * (fs + 3) + fs, 'text-anchor': right ? 'start' : 'end', 'font-size': fs, 'font-weight': 700, fill: INK }, line);
        });
      });
    });
    return true;
  }

  // Như sách: hình tròn bên trái, chú giải xếp dọc bên phải, tên dài xuống dòng.
  function pieBeside(svg, c, box, fs, ring) {
    var items = c.series[0].points.map(function (p, i) { return { name: String(p.x), color: pointColor(p, color(i)) }; })
      .filter(function (it) { return it.name; });
    var mark = fs + 3, longest = items.reduce(function (m, it) { return Math.max(m, textWidth(it.name, fs)); }, 0);
    var legendW = Math.min(box.w * 0.43, longest + mark + 14), perLine = Math.max(8, Math.floor((legendW - mark - 12) / (fs * 0.55)));
    var rows = items.map(function (it) { return { it: it, lines: wrapText(it.name, perLine) }; });
    var height = rows.reduce(function (a, r) { return a + r.lines.length * (fs + 4) + 8; }, -8);
    var pieW = Math.min(box.w - legendW - 8, box.h * 1.3), x = box.x + Math.max(0, (box.w - pieW - legendW - 8) / 2);
    if (!pie(svg, c, { x: x, y: box.y, w: pieW, h: box.h }, fs, ring, false, null)) return false;
    var y = box.y + Math.max(0, (box.h - height) / 2), left = x + pieW + 8;
    rows.forEach(function (r) {
      var block = r.lines.length * (fs + 4);
      add(svg, 'rect', { x: left, y: y + (block - mark) / 2, width: mark, height: mark, fill: r.it.color });
      r.lines.forEach(function (line, n) { add(svg, 'text', { x: left + mark + 7, y: y + n * (fs + 4) + fs, 'font-size': fs, fill: INK }, line); });
      y += block + 8;
    });
    return true;
  }

  // ------------------------------------------------------------------ radar
  function radar(svg, c, box, fs) {
    var labels = labelsOf(c), n = labels.length;
    if (n < 3) return false;
    var max = Math.max.apply(null, c.series.reduce(function (a, s) { return a.concat(s.points.map(function (p) { return p.y; })); }, [0]));
    var ticks = niceTicks(0, max, 4), top = ticks[ticks.length - 1];
    var cx = box.x + box.w / 2, cy = box.y + box.h / 2, R = Math.min(box.w / 2 - fs * 5, box.h / 2 - fs * 3);
    if (R < 30) R = 30;
    var at = function (i, r) { var a = -Math.PI / 2 + i * 2 * Math.PI / n; return [cx + r * Math.cos(a), cy + r * Math.sin(a)]; };
    ticks.slice(1).forEach(function (v) {
      add(svg, 'polygon', { points: labels.map(function (_, i) { return at(i, R * v / top); }).join(' '), fill: 'none', stroke: GRID });
      add(svg, 'text', { x: cx + 3, y: cy - R * v / top - 2, 'font-size': fs - 2, fill: MUTED }, fmt(v));
    });
    labels.forEach(function (l, i) {
      var edge = at(i, R), out = at(i, R + 10 + (i === 0 ? fs : 0)); // nhãn đỉnh nằm trên số của vòng ngoài cùng
      add(svg, 'line', { x1: cx, y1: cy, x2: edge[0], y2: edge[1], stroke: GRID });
      var side = Math.abs(out[0] - cx) < 6 ? 'middle' : out[0] > cx ? 'start' : 'end';
      add(svg, 'text', { x: out[0], y: out[1] + (out[1] > cy ? fs : fs * 0.2), 'text-anchor': side, 'font-size': fs, fill: INK }, clip(l, 16));
    });
    c.series.forEach(function (s, si) {
      var by = {};
      s.points.forEach(function (p) { by[String(p.x)] = p.y; });
      var ring = labels.map(function (l, i) { return at(i, R * Math.min(1, (by[l] || 0) / top)); });
      add(svg, 'polygon', { points: ring.join(' '), fill: seriesColor(c, si), 'fill-opacity': 0.18, stroke: seriesColor(c, si), 'stroke-width': 2 });
      ring.forEach(function (q) { add(svg, 'circle', { cx: q[0], cy: q[1], r: 3, fill: seriesColor(c, si) }); });
    });
    return true;
  }

  // ------------------------------------------------------------------ hoa văn
  // Sách in một màu phân biệt cột/miếng bằng hoa văn: point.pattern hoặc series.pattern.
  var PATTERNS = {
    hlines: { size: 8, d: 'M0 4H8' }, vlines: { size: 8, d: 'M4 0V8' }, grid: { size: 10, d: 'M0 5H10M5 0V10' },
    diagonal: { size: 8, d: 'M-2 2L2 -2M0 8L8 0M6 10L10 6' }, backdiagonal: { size: 8, d: 'M-2 6L2 10M0 0L8 8M6 -2L10 2' },
    crosshatch: { size: 7, d: 'M0 0L7 7M0 7L7 0' }, diamond: { size: 14, d: 'M0 0L14 14M0 14L14 0' },
    vdash: { size: 8, d: 'M2 0V5M6 4V8M6 0V1' }, dots: { size: 10, dots: [[2.5, 2.5], [7.5, 7.5]], r: 1.1 },
    densedots: { size: 5, dots: [[1.25, 1.25], [3.75, 3.75]], r: 1.1 }, checker: { size: 8, squares: [[0, 0], [4, 4]] }, solid: { size: 8, solid: true }
  };
  var patternCount = 0;
  // Đổi mỗi chỗ có hoa văn sang một màu đánh dấu riêng, vẽ như thường, rồi thay màu đánh dấu bằng hoa văn.
  function markPatterns(c, found) {
    function mark(item, fallback) {
      if (!item || !Object.prototype.hasOwnProperty.call(PATTERNS, item.pattern)) return item;
      var key = '#0100' + ('0' + (found.length + 1).toString(16)).slice(-2);
      found.push({ key: key, shape: PATTERNS[item.pattern], ink: colourOr(item.color, fallback) });
      return Object.assign({}, item, { color: key });
    }
    var series = list(c.series).map(function (s, si) {
      var points = list(s.points).map(function (p, i) { return mark(p, colourOr(s.color, color(i))); });
      return Object.assign({}, mark(s, color(si)), { points: points });
    });
    return found.length ? Object.assign({}, c, { series: series }) : c;
  }
  function paintPatterns(svg, found) {
    if (!found.length) return;
    var defs = add(svg, 'defs', {});
    found.forEach(function (it) {
      var id = 'jsx-pattern-' + (++patternCount), shape = it.shape;
      var box = add(defs, 'pattern', { id: id, width: shape.size, height: shape.size, patternUnits: 'userSpaceOnUse' });
      add(box, 'rect', { width: shape.size, height: shape.size, fill: shape.solid ? it.ink : '#fff' });
      if (shape.d) add(box, 'path', { d: shape.d, stroke: it.ink, 'stroke-width': 1.5, fill: 'none' });
      (shape.dots || []).forEach(function (q) { add(box, 'circle', { cx: q[0], cy: q[1], r: shape.r, fill: it.ink }); });
      (shape.squares || []).forEach(function (q) { add(box, 'rect', { x: q[0], y: q[1], width: shape.size / 2, height: shape.size / 2, fill: it.ink }); });
      Array.prototype.forEach.call(svg.querySelectorAll('[fill="' + it.key + '"]'), function (el) {
        if (el.tagName === 'text') { el.setAttribute('fill', INK); return; }
        el.setAttribute('fill', 'url(#' + id + ')');
        if (el.tagName === 'rect' || el.tagName === 'path') { el.setAttribute('stroke', it.ink); el.setAttribute('stroke-width', 1.2); }
      });
      Array.prototype.forEach.call(svg.querySelectorAll('[stroke="' + it.key + '"]'), function (el) { el.setAttribute('stroke', it.ink); });
    });
    // số ghi trên nền hoa văn: nền trắng, chữ đen, như ảnh gốc
    Array.prototype.forEach.call(svg.querySelectorAll('text[fill="#fff"]'), function (text) {
      var around = text.getBBox();
      text.setAttribute('fill', INK);
      var plate = add(text.parentNode, 'rect', { x: around.x - 3, y: around.y - 1, width: around.width + 6, height: around.height + 2, fill: '#fff' });
      text.parentNode.insertBefore(plate, text);
    });
  }

  /** Vẽ biểu đồ vào ô el (đã có chiều rộng). Trả về null (không có bảng JSXGraph để giải phóng). */
  function draw(el, c, ratio) {
    var found = [];
    c = markPatterns(c, found);
    var W = el.clientWidth, fs = W < 420 ? 12 : W < 520 ? 13 : 15, kind = kindOf(c);
    // màn hình hẹp: ô cao hơn để chữ không chen nhau (ô đặt aspect-ratio nên chiều cao đổi theo)
    var shape = W < 480 ? ratio * 0.72 : ratio;
    // chữ dưới biểu đồ trùng với tên các hình tròn: đó là tên đặt dưới từng hình, không viết lại lần nữa
    var plain = function (s) { return String(s).toLowerCase().replace(/\s+/g, ''); }, caption = String(c.captionBelow || '');
    var several = c.series.length > 1 && (kindOf(c) === 'pie' || kindOf(c) === 'doughnut');
    var titlesBelow = several && !!caption && c.series.every(function (s) { return s.name && plain(caption).indexOf(plain(s.name)) >= 0; });
    if (titlesBelow) caption = '';
    var noteLines = caption.split('\n').reduce(function (a, line) {
      return a.concat(wrapText(line, Math.max(20, Math.floor((W - 16) / (fs * 0.55))))); }, []);
    var noteH = noteLines.length ? noteLines.length * (fs + 5) + 8 : 0;
    el.style.aspectRatio = String(noteH ? W / (W / shape + noteH) : shape);
    var H = el.clientHeight || W / shape + noteH;
    el.innerHTML = '';
    var svg = add(el, 'svg', { viewBox: '0 0 ' + W + ' ' + H, width: '100%', height: '100%', role: 'img', 'aria-label': c.title || 'Biểu đồ',
      style: 'display:block;font-family:' + (FONTS[c.fontStyle] || FONTS.sans) });
    var paper = add(svg, 'rect', { width: W, height: H, fill: '#fff' });
    var round = kind === 'pie' || kind === 'doughnut', pies = round ? c.series.length : 0, place = c.namePlace;
    var inSlice = round && (place === 'inside' || (pies > 1 && place !== 'legend'));      // tên ghi đâu theo ảnh gốc
    var outside = round && !inSlice && place !== 'legend' && W / pies >= 300;
    var side = round && place === 'legend' && W / pies >= 480;                       // đủ rộng: chú giải bên phải hình
    var top = 6, rows = outside || inSlice || side ? [] : legendRows(legendItems(c, kind), W, fs), legendH = rows.length ? rows.length * (fs + 9) + 6 : 0;
    if (c.title) {
      // tiêu đề dài thì xuống dòng (chữ đậm rộng hơn ước lượng), không thu nhỏ rồi vẫn bị cắt hai đầu
      var size = fs + 2, heading = wrapText(c.title, Math.max(16, Math.floor((W - 16) / (size * 0.62))));
      heading.forEach(function (line, n) {
        add(svg, 'text', { x: W / 2, y: top + n * (size + 4) + size + 2, 'text-anchor': 'middle', 'font-size': size, 'font-weight': 700, fill: INK }, line);
      });
      top += heading.length * (size + 4) + 8;
    }
    if (rows.tall) {                                                  // chú giải nhiều dòng: ô cao thêm để hình không bị bẹp
      H += legendH - (fs + 15);
      el.style.aspectRatio = String(W / H);
      svg.setAttribute('viewBox', '0 0 ' + W + ' ' + H);
      paper.setAttribute('height', H);
    }
    var box = { x: 0, y: top, w: W, h: H - noteH - top - legendH - 4 }, ok = false;
    var titles = several ? c.series.map(function (s) { return wrapText(s.name || '', Math.max(8, Math.floor((W / c.series.length - 10) / (fs * 0.58)))); }) : [];
    var titleLines = titles.reduce(function (m, l) { return Math.max(m, l.length); }, 0);
    var within = inSlice ? {} : null;                                // tên đã ghi trong miếng thì không cần chú giải
    try {
      ok = pies > 1 ? c.series.map(function (s, i) {                     // nhiều hình tròn đặt cạnh nhau
          var w = box.w / pies, titleH = titleLines * (fs + 4) + 8, under = titlesBelow;
          (titles[i] || []).forEach(function (line, n) {
            add(svg, 'text', { x: w * (i + 0.5), y: (under ? box.y + box.h - titleH + 6 : box.y) + n * (fs + 4) + fs + 2, 'text-anchor': 'middle', 'font-size': fs, 'font-weight': c.captionItalic && under ? 400 : 700,
              'font-style': c.captionItalic && under ? 'italic' : null, fill: INK }, line);
          });
          var one = Object.assign({}, c, { series: [s] }), area = { x: w * i, y: box.y + (under ? 0 : titleH), w: w, h: box.h - titleH };
          return side ? pieBeside(svg, one, area, Math.max(11, fs - 2), kind === 'doughnut') : pie(svg, one, area, fs, kind === 'doughnut', outside, within);
        }).every(Boolean)
        : side ? pieBeside(svg, c, box, fs + 1, kind === 'doughnut')
        : round ? pie(svg, c, box, fs, kind === 'doughnut', outside, within)
        : kind === 'radar' ? radar(svg, c, box, fs) : cartesian(svg, c, box, fs);
    } catch (error) { if (window.console) console.warn('[jsx-figure] chart', error); }
    if (!ok) { el.innerHTML = '<div class="jsx-figure-note">Không vẽ được biểu đồ.</div>'; return null; }
    if (within) rows = legendRows(legendItems(c, kind).filter(function (it) { return !within[it.name]; }), W, fs);
    drawLegend(svg, rows, W, H - noteH, fs);
    noteLines.forEach(function (line, i) {
      add(svg, 'text', { x: W / 2, y: H - noteH + 6 + i * (fs + 5) + fs, 'text-anchor': 'middle', 'font-size': fs + (c.captionItalic ? 1 : 0),
        'font-style': c.captionItalic ? 'italic' : null, fill: INK }, line);
    });
    paintPatterns(svg, found);
    return null;
  }

  window.JsxFigureChart = { valid: valid, aspect: aspect, draw: draw };
})();

/*!
 * jsx-figure v1 — vẽ hình JSXGraph của một câu hỏi cho WebView / web, giống hình trên web CMS.
 * Các dạng: đồ thị hàm số, bảng biến thiên, biểu đồ Venn, hình học phẳng, cơ học (con lắc, lò xo, vật), lăng trụ / chóp cụt, lăng trụ tam giác, chóp.
 *
 * Cách dùng: nhúng script, vậy là xong. Thẻ div.jsx-figure có data-figure (dữ liệu hình nằm sẵn trong HTML câu hỏi) được tự vẽ
 * khi script nạp xong, kể cả thẻ được thêm vào trang về sau (innerHTML / React / Vue):
 *   <script src="https://js-render.pages.dev/jsx-figure-v1.js"></script>
 *     data-max-width / data-max-height  (trên div.jsx-figure) cỡ tối đa của hình, lấy từ ảnh cũ, đơn vị px
 *   Vẽ thủ công một thẻ: JsxFigure.mount(element)  hoặc  JsxFigure.mount(element, { type, data })  (dạng cũ { geometryType, render, figure }).
 *   Dọn một thẻ khi rời trang: JsxFigure.unmount(element).
 *
 * Dữ liệu: chỉ đọc từ thẻ (data-figure), không gọi API nào.
 * An toàn: chữ do AI đọc từ ảnh được vẽ bằng nút văn bản SVG, hoặc là HTML máy chủ / bố cục đã thoát ký tự đặc biệt.
 */
(function () {
  'use strict';

  var VERSION = '1';
  var JSXGRAPH_FILE = 'jsxgraphcore-1.13.3.js';
  var MAX_WIDTH_PX = 560; // máy tính bảng / web: không phình hình quá to
  var MAX_HEIGHT_VH = 85; // hình không cao quá chừng này phần trăm chiều cao màn hình
  var MIN_FONT_PX = 12;
  var MARK_MIN_PX = 22; // nét góc vuông / cung góc dưới ngưỡng này (px màn hình) thì phóng to quanh đỉnh cho dễ nhìn
  var MARK_MAX_GROW = 2.5; // đừng phóng quá to khi hình bị thu nhỏ rất nhiều hoặc góc rất hẹp
  var SERIF = 'font-family:"Times New Roman","STIX Two Text","Noto Serif",serif;';

  // ------------------------------------------------------------------ phong cách: giống web CMS
  var INK = '#2B4182'; // màu chính (FunctionGraphRenderer, VariationTableRenderer, jsxGraphPalette.indigo)
  var INK_DARK = '#23366F'; // chữ tên điểm của hình không gian (jsxGraphPalette.indigoDark)
  var AMBER = '#FFB000'; // ruột điểm của hình không gian (jsxGraphPalette.amber)
  var CURVE_WIDTH = 2;
  var LINE_WIDTH = 1.2; // trục, vạch chia, đường gióng, tiệm cận
  var LABEL_CSS = SERIF + 'paint-order:stroke;stroke:#fff;stroke-width:4px;stroke-linejoin:round;';

  var script = document.currentScript;
  var scriptSrc = script ? script.src : '';

  // ------------------------------------------------------------------ nạp file kèm theo một lần (tự host, không dùng CDN)
  var loading = {};
  function loadScript(file, globalName) {
    if (window[globalName]) return Promise.resolve(window[globalName]);
    if (loading[file]) return loading[file];
    loading[file] = new Promise(function (resolve, reject) {
      var tag = document.createElement('script');
      tag.src = scriptSrc ? new URL(file, scriptSrc).href : file;
      tag.onload = function () { resolve(window[globalName]); };
      tag.onerror = function () { delete loading[file]; reject(new Error('Không tải được ' + file)); };
      document.head.appendChild(tag);
    });
    return loading[file];
  }
  function loadJSXGraph() { return loadScript(JSXGRAPH_FILE, 'JXG'); }

  function injectCss() {
    if (document.getElementById('jsx-figure-css')) return;
    var style = document.createElement('style');
    style.id = 'jsx-figure-css';
    style.textContent =
      '.jsx-figure{display:block;width:100%;max-width:' + MAX_WIDTH_PX + 'px;margin:8px auto}' +
      // Nền trắng cố định: hình vẫn rõ khi app/web để giao diện tối.
      '.jsx-figure-board{width:100%;margin:0 auto;border:0;background:#fff;touch-action:pan-y;overflow:hidden}' +
      '.jsx-figure-board + .jsx-figure-board{margin-top:12px}' +
      '.jsx-figure-source-spatial text[transform]{clip-path:none!important}' +
      '.jsx-figure-note{font:13px/1.4 system-ui,sans-serif;color:#64748b;text-align:center;padding:12px}';
    document.head.appendChild(style);
  }

  // Khung nhìn: một tỉ lệ cho cả hai trục, căn giữa trong ô W x H (không kéo dãn, không cắt).
  function fittedBox(box, W, H, maxScale) {
    var left = box[0], top = box[1], right = box[2], bottom = box[3];
    var scale = Math.min(W / (right - left), H / (top - bottom), maxScale || Infinity);
    var cx = (left + right) / 2, cy = (top + bottom) / 2;
    return { scale: scale, box: [cx - W / 2 / scale, cy + H / 2 / scale, cx + W / 2 / scale, cy - H / 2 / scale] };
  }

  var FIXED = { fixed: true, highlight: false };
  var NO_ENDS = { point1: { visible: false }, point2: { visible: false } };
  var ANCHOR = { middle: 'middle', left: 'left', right: 'right', top: 'top', bottom: 'bottom' };
  var STATIC_BOARD = { axis: false, grid: false, keepaspectratio: false, showCopyright: false, showNavigation: false, pan: { enabled: false }, zoom: { wheel: false, pinch: false } };
  function dashOf(item) { return item.line_style === 'dashed' ? 2 : 0; }
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }
  function extend() {
    var out = {};
    for (var i = 0; i < arguments.length; i++) for (var k in arguments[i]) out[k] = arguments[i][k];
    return out;
  }
  function initBoard(JXG, boardEl, box, extra) {
    return JXG.JSXGraph.initBoard(boardEl.id, extend(STATIC_BOARD, { boundingbox: box }, extra || {}));
  }

  // ================================================================== đồ thị hàm số (render.kind = "function_graph")
  // Máy chủ gửi hình học (toạ độ, chữ, nét liền/đứt, chữ đậm/nghiêng); màu và độ dày theo CMS.
  function drawFunctionGraph(JXG, boardEl, r) {
    var fit = fittedBox(r.view_box, boardEl.clientWidth, boardEl.clientHeight);
    var unit = fit.scale;
    var board = initBoard(JXG, boardEl, fit.box);
    var line = function (from, to, extra) {
      return board.create('segment', [from, to], extend(FIXED, NO_ENDS, { strokeColor: INK, strokeWidth: LINE_WIDTH }, extra || {}));
    };

    (r.guides || []).concat(r.asymptotes || []).forEach(function (g) {
      var style = g.line_style === 'solid' ? {} : { dash: 2 };
      if (g.arrow === 'both') { style.firstArrow = { type: 2, size: 5 }; style.lastArrow = { type: 2, size: 5 }; }
      line(g.from, g.to, style);
    });
    if (r.axes) {
      [r.axes.x, r.axes.y].forEach(function (a) { line(a.from, a.to, { lastArrow: { type: 2, size: 6 } }); });
      (r.tick_marks || []).forEach(function (t) {
        var h = t.half_length_px / unit;
        line(t.axis === 'x' ? [t.value, -h] : [-h, t.value], t.axis === 'x' ? [t.value, h] : [h, t.value]);
      });
    }

    // Đường cong: nối các đoạn thành một dãy điểm Bézier (đoạn thẳng = Bézier có điểm điều khiển trên đoạn).
    (r.curves || []).forEach(function (c) {
      var pt = function (x, y) { return { X: function () { return x; }, Y: function () { return y; } }; };
      var p0 = c.segments[0].p;
      var pts = [pt(p0[0], p0[1])];
      c.segments.forEach(function (s) {
        var p = s.p;
        if (s.type === 'cubic') pts.push(pt(p[2], p[3]), pt(p[4], p[5]), pt(p[6], p[7]));
        else pts.push(pt(p[0] + (p[2] - p[0]) / 3, p[1] + (p[3] - p[1]) / 3), pt(p[0] + (2 * (p[2] - p[0])) / 3, p[1] + (2 * (p[3] - p[1])) / 3), pt(p[2], p[3]));
      });
      board.create('curve', JXG.Math.Numerics.bezier(pts), extend(FIXED, {
        strokeColor: INK, strokeWidth: CURVE_WIDTH, dash: dashOf(c), numberPointsHigh: 1600, numberPointsLow: 800,
      }));
    });

    // Chữ: nút văn bản SVG (display 'internal', parse tắt) → không bao giờ thành HTML.
    // Như CMS: số trên trục đậm; tên trục nghiêng, to hơn 2px; O nghiêng, nhỏ hơn 1px, sát góc dưới trái gốc toạ độ.
    var fs = clamp(Math.round(unit * 0.42), MIN_FONT_PX, 20);
    var text = function (x, y, content, attrs) {
      board.create('text', [x, y, String(content)], extend(FIXED, {
        display: 'internal', parse: false, useMathJax: false, useKatex: false, strokeColor: INK,
      }, attrs));
    };
    (r.labels || []).forEach(function (l) {
      var style = (l.bold ? 'font-weight:700;' : 'font-weight:400;') + (l.italic ? 'font-style:italic;' : '');
      if (l.kind === 'origin') {
        text(-2 / unit, 3 / unit, l.text, { fontSize: fs - 1, anchorX: 'right', anchorY: 'top', cssStyle: LABEL_CSS + 'font-weight:400;font-style:italic;' });
        return;
      }
      text(l.x, l.y, l.text, {
        fontSize: l.kind === 'axis_name' ? fs + 2 : fs,
        anchorX: ANCHOR[l.anchor_x] || 'middle', anchorY: ANCHOR[l.anchor_y] || 'middle',
        rotate: l.rotation_deg || 0,
        cssStyle: (l.kind === 'axis_name' ? SERIF : LABEL_CSS) + style,
      });
    });
    return board;
  }

  // ================================================================== bảng biến thiên (render.kind = "variation_table")
  // Như VariationTableRenderer của CMS: một màu cho khung, mũi tên, chữ; chữ co theo bề rộng trong giới hạn máy chủ gửi.
  // Chữ là HTML máy chủ dựng (phân số, f′(x)) sau khi đã thoát ký tự đặc biệt (render_table._escape_html).
  function drawVariationTable(JXG, boardEl, r) {
    var fit = fittedBox(r.view_box, boardEl.clientWidth, boardEl.clientHeight, r.max_scale);
    var board = initBoard(JXG, boardEl, fit.box);
    (r.lines || []).forEach(function (l) {
      board.create('segment', [l.from, l.to], extend(FIXED, NO_ENDS, {
        strokeColor: INK, strokeWidth: l.width_px, dash: dashOf(l),
        lastArrow: l.arrow_px ? { type: 2, size: l.arrow_px } : false,
      }));
    });
    var font = r.font || {};
    (r.texts || []).forEach(function (t) {
      var px = clamp(Math.round(t.font_size * fit.scale), font.min_px || MIN_FONT_PX, font.max_px || 34);
      board.create('text', [t.x, t.y, t.html], extend(FIXED, {
        display: 'html', anchorX: 'middle', anchorY: 'middle', fontSize: px, strokeColor: INK,
        cssStyle: SERIF + 'font-weight:400;line-height:1;user-select:none;' + (t.italic ? 'font-style:italic;' : ''),
      }));
    });
    return board;
  }

  // ================================================================== biểu đồ Venn và hình học phẳng (render.kind = "venn_diagram" | "plane_geometry")
  // Máy chủ đã tính sẵn hình học (đường viền / đoạn thẳng / cung, vùng tô, nét gạch chéo, chấm, nhãn) theo toạ độ của ảnh gốc
  // (trục y hướng lên); ở đây chỉ vẽ lại, thứ tự: vùng tô, gạch chéo, đường viền, chấm, nhãn.
  function drawVenn(JXG, boardEl, r) {
    var fit = fittedBox(r.view_box, boardEl.clientWidth, boardEl.clientHeight);
    var unit = fit.scale; // điểm ảnh màn hình trên một điểm ảnh của ảnh gốc
    var board = initBoard(JXG, boardEl, fit.box);
    var cols = function (pts, i) { return pts.map(function (p) { return p[i]; }); };

    (r.fills || []).forEach(function (f) {
      if (f.label_decoration) {
        board.create('curve', [cols(f.points, 0), cols(f.points, 1)], extend(FIXED, {
          fillColor: '#fff', fillOpacity: 1, strokeColor: '#fff', strokeWidth: 4, layer: 7,
        }));
      }
      // Đường cong tự khép kín khi tô; nét cùng màu che khe hở giữa các vùng liền kề.
      board.create('curve', [cols(f.points, 0), cols(f.points, 1)], extend(FIXED, {
        fillColor: f.color, fillOpacity: f.opacity === undefined ? 1 : f.opacity, strokeColor: f.color, strokeWidth: f.opacity === undefined ? 0.5 : 0,
      }, f.label_decoration ? { layer: 8 } : {}));
    });

    // Mọi nét gạch gộp thành một đường cong: NaN giữa hai nét để ngắt đoạn.
    var hatch = r.hatch || [];
    if (hatch.length) {
      var byColor = {};
      hatch.forEach(function (l) { (byColor[l.color] = byColor[l.color] || []).push(l); });
      Object.keys(byColor).forEach(function (color) {
        var xs = [], ys = [];
        byColor[color].forEach(function (l) { xs.push(l.from[0], l.to[0], NaN); ys.push(l.from[1], l.to[1], NaN); });
        board.create('curve', [xs, ys], extend(FIXED, { strokeColor: color, strokeWidth: clamp(byColor[color][0].width_px * unit, 0.8, 2) }));
      });
    }

    // Every mark at one vertex (the rings of one angle mark, and the neighbouring angles each marked with its own arcs) must grow
    // together, by the factor the largest of them needs. Sized one by one, each ring is lifted to the same minimum radius and
    // they collapse onto each other: two equal-angle marks become a single arc, a double arc a single thick one, and the
    // figure then claims a different set of equal angles.
    var markReach = {};
    (r.outlines || []).forEach(function (o) {
      if (!o.symbol_vertex) return;
      var key = o.symbol_vertex.join(',');
      for (var i = 0; i < o.points.length; i++) {
        markReach[key] = Math.max(markReach[key] || 0, Math.hypot(o.points[i][0] - o.symbol_vertex[0], o.points[i][1] - o.symbol_vertex[1]));
      }
    });
    (r.outlines || []).forEach(function (o) {
      var decoration = o.label_decoration || String(o.id || '').indexOf('vec') === 0;
      // A right-angle tick or an angle arc is a tiny mark in picture pixels (see TICK_LENGTH/TICK_GAP in plane.py):
      // once the figure is shrunk to fit a narrow column, or the angle itself is small, it can shrink past reading.
      // Grow it around its own vertex (o.symbol_vertex, the same field spatial_projection.py / VennRenderer.tsx /
      // JSXGraphSourceSpatial.tsx already use) so it stays legible at any zoom.
      var grow = 1, points = o.points;
      // An equal-length tick is sized by the server in proportion to the picture: it is drawn as it comes, never grown or thickened.
      // (A tick stored with the old fixed 6 px length is under 1.5% of the picture: it is still grown so it can be read.)
      var picMax = Math.max((r.reference && r.reference.width_px) || 0, (r.reference && r.reference.height_px) || 0);
      // (the server sizes every equal-length tick against its own figure, so a tick is never grown or thickened: in a picture of several
      // small figures a tick well under 1.5% of the picture is still the size the picture draws it)
      var isTick = String(o.id || '').indexOf('tick') === 0 && !!o.symbol_vertex;
      if (o.symbol_vertex && !isTick) {
        var onScreen = markReach[o.symbol_vertex.join(',')] * unit;
        // A picture of several small figures side by side shrinks each one to a few dozen pixels: the minimum mark size must
        // not swallow the figure, so it never exceeds a tenth of the picture's shorter side on screen (10 px at the least).
        var markMin = MARK_MIN_PX;
        if (r.reference && r.reference.width_px && r.reference.height_px) {
          markMin = Math.min(MARK_MIN_PX, Math.max(10, 0.1 * Math.min(r.reference.width_px, r.reference.height_px) * unit));
        }
        if (onScreen > 0 && onScreen < markMin) {
          grow = Math.min(MARK_MAX_GROW, markMin / onScreen);
          points = points.map(function (p) { return [o.symbol_vertex[0] + (p[0] - o.symbol_vertex[0]) * grow, o.symbol_vertex[1] + (p[1] - o.symbol_vertex[1]) * grow]; });
        }
      }
      // A mark being enlarged (grow > 1) also gets a bolder minimum stroke: a bigger square whose outline is still
      // hairline-thin still reads as faint. Ordinary outlines (grow stays 1, no symbol_vertex) keep their old thin floor.
      var isPlaneRightAngle = r.kind === 'plane_geometry' && o.symbol_kind === 'right';
      var minStrokeWidth = o.symbol_vertex && !isTick ? (isPlaneRightAngle ? 0.9 : 1.6) : 0.6;
      var width = clamp(o.width_px * Math.sqrt(grow) * unit, minStrokeWidth, 4 * Math.sqrt(grow));
      if (decoration) {
        board.create('curve', [cols(points, 0), cols(points, 1)], extend(FIXED, {
          strokeColor: '#fff', strokeWidth: width + 4, layer: 7,
        }));
      }
      board.create('curve', [cols(points, 0), cols(points, 1)], extend(FIXED, {
        strokeColor: o.color, strokeWidth: width, dash: dashOf(o),
        fillColor: o.fill || 'none', fillOpacity: o.fill ? 1 : 0,
      }, decoration ? { layer: 8 } : {}));
    });

    (r.dots || []).forEach(function (d) {
      var strokeWidth = d.outline ? (unit < 0.6 ? 0.8 : 1.2) : 0;
      // JSXGraph adds one screen pixel to the circular point's size.
      var size = r.kind === 'plane_geometry'
        ? Math.max(0.25, d.radius_px * unit - 1 - strokeWidth / 2)
        : Math.max(1, d.radius_px * unit);
      board.create('point', [d.x, d.y], extend(FIXED, {
        size: size, strokeWidth: strokeWidth, fillColor: d.color, strokeColor: d.outline || d.color, withLabel: false, face: 'o',
      }));
    });

    // Hình trên nền tối phủ kín (bảng đen): viền trắng quanh chữ làm nhòe chữ sáng màu, bỏ viền.
    var darkPaper = r.kind === 'venn_diagram' && (r.fills || []).some(function (f) {
      var n = /^#[0-9a-fA-F]{6}$/.test(f.color) ? parseInt(f.color.slice(1), 16) : 0xffffff;
      var xs = f.points.map(function (p) { return p[0]; });
      return (n >> 16) * 0.299 + ((n >> 8) & 255) * 0.587 + (n & 255) * 0.114 < 90
        && Math.max.apply(null, xs) - Math.min.apply(null, xs) > (r.view_box[2] - r.view_box[0]) * 0.9;
    });

    // Chữ: nút văn bản SVG (display 'internal', parse tắt) → không bao giờ thành HTML.
    (r.labels || []).forEach(function (l) {
      var region = r.kind === 'inequality_region';
      var numericFont = r.kind === 'plane_geometry' && window.JsxFigureNumericLabelFit
        ? window.JsxFigureNumericLabelFit.numericLabelFont(l, unit, r) : undefined;
      var fontSize = numericFont === undefined
        ? clamp(Math.round(l.font_px_ref * unit), region ? 9 : 10, 48) : numericFont;
      var family = l.font_family === 'sans-serif' ? 'font-family:Arial,Helvetica,sans-serif;' : SERIF;
      var halo = l.halo === undefined ? !region && !darkPaper : l.halo;
      var labelStyle = halo ? family + 'paint-order:stroke;stroke:#fff;stroke-width:1.5px;stroke-linejoin:round;' : family;
      var position = numericFont === undefined && window.JsxFigureLabelLayout
        ? window.JsxFigureLabelLayout.pointLabelPosition(l, unit, fontSize) : l;
      board.create('text', [position.x, position.y, String(l.text)], extend(FIXED, {
        display: 'internal', parse: false, useMathJax: false, useKatex: false, strokeColor: l.color,
        // font_px_ref đã là cỡ chữ cuối cùng máy chủ tính sẵn (xem build_plane_render/TEXT_SCALE): chỉ còn nhân với
        // hệ số phóng `unit`, không tự ý nhân thêm gì — để web/app/di động sau này luôn ra cùng một kích cỡ.
        anchorX: 'middle', anchorY: 'middle', fontSize: fontSize, rotate: l.rotation_deg || 0,
        // Viền trắng phía sau chữ: chữ thường nằm sát đỉnh/cạnh của hình, đè lên nét vẽ thì vẫn đọc được.
        cssStyle: labelStyle + 'font-weight:' + (l.bold ? 700 : 400) + ';' + (l.italic ? 'font-style:italic;' : '') + 'user-select:none;',
      }));
    });
    return board;
  }

  // ================================================================== hình cơ học (geometryType = "mechanics")
  // Bố cục là jsx-figure-mechanics-layout.js (sinh từ mechanicsLayout.ts của CMS); phần vẽ chép MechanicsRenderer.tsx.
  var MECH_TEXT_CSS = SERIF + 'font-weight:500;user-select:none;';
  var DOT_SIZE = 2.5;
  var UNDER_LAYER = 4; // dưới hình tròn (6), đường cong (5), đường thẳng (7)
  var DASH_INDEX = [0, 1, 2, 6]; // 0 liền, 1 chấm, 2 đứt, 3 gạch-chấm → kiểu nét JSXGraph

  function drawMechanics(JXG, boardEl, lay, M) {
    var W = boardEl.clientWidth, H = boardEl.clientHeight;
    var board = initBoard(JXG, boardEl, fittedBox(lay.box, W, H).box, { resize: { enabled: false } });
    var halo = M.haloShadow('#ffffff');
    var textSize = M.labelSizeFor(W);
    var arrowFixed = { type: 2, size: M.ARROW_HEAD_SIZE };
    M.nudgeLabels(
      lay.primitives.map(function (p) { return p.kind === 'text' ? extend(p, { size: Math.min(p.size, textSize) }) : p; }),
      board.unitX,
      board.getBoundingBox()
    ).forEach(function (p) {
      if (p.kind === 'line') {
        var heads = p.arrow === 'both' ? 2 : 1;
        var arrow = { type: 2, size: function () { return M.arrowHeadSize(Math.hypot((p.x2 - p.x1) * board.unitX, (p.y2 - p.y1) * board.unitY), p.width, heads); } };
        board.create('segment', [[p.x1, p.y1], [p.x2, p.y2]], extend(FIXED, NO_ENDS, {
          strokeColor: p.color, strokeWidth: p.width, dash: DASH_INDEX[p.dash || 0],
          firstArrow: p.arrow === 'both' ? arrow : false, lastArrow: p.arrow ? arrow : false,
        }, p.under ? { layer: UNDER_LAYER } : {}));
      } else if (p.kind === 'curve') {
        board.create('curve', [p.xs, p.ys], extend(FIXED, {
          fillColor: p.fill || 'none', fillOpacity: p.fill ? 1 : 0,
          strokeColor: p.color, strokeWidth: p.width, dash: DASH_INDEX[p.dash || 0],
          firstArrow: p.arrow === 'both' ? arrowFixed : false, lastArrow: p.arrow ? arrowFixed : false,
        }));
      } else if (p.kind === 'dot') {
        board.create('point', [p.x, p.y], extend(FIXED, { name: '', withLabel: false, size: DOT_SIZE, strokeColor: p.color, fillColor: p.color, showInfobox: false }));
      } else if (p.kind === 'circle') {
        board.create('circle', [[p.x, p.y], p.r], extend(FIXED, { strokeColor: p.stroke, strokeWidth: p.width, fillColor: p.fill, fillOpacity: 1, center: { visible: false } }));
      } else {
        // p.html do mechanicsLabelHtml dựng sau khi đã thoát & < > (chỉ thêm <sub>, mũi tên vector).
        board.create('text', [p.x, p.y, p.html], extend(FIXED, {
          display: 'html', anchorX: 'middle', anchorY: 'middle', fontSize: p.size, strokeColor: '#111827',
          cssStyle: p.halo ? MECH_TEXT_CSS + halo : MECH_TEXT_CSS,
        }));
      }
    });
    board.update();
    return board;
  }

  // ================================================================== hình không gian (spatial_*)
  // Như JSXGraphSpatialPrism / Pyramid / TriangularPrism của CMS: view3d xoay được (kéo để xoay), cạnh khuất nét đứt.
  var SPATIAL_BOX = [-8, 5, 8, -5]; // khung dựng view3d như CMS; sau đó zoom vừa các đỉnh
  var SPATIAL_ASPECT = 4 / 3;
  var SPATIAL_PAD = 0.22; // lề quanh hình (tỉ lệ cạnh dài) để còn chỗ khi kéo xoay
  var HIDDEN_DASH = '4,3';

  function spatialEdges(type, lower, upper) {
    var e = function (a, b, hidden) { return { a: a, b: b, hidden: hidden }; };
    var A = lower[0], B = lower[1], C = lower[2], D = lower[3];
    var A1 = upper[0], B1 = upper[1], C1 = upper[2], D1 = upper[3];
    if (type === 'spatial_pyramid') {
      // Chóp S.ABCD: tên điểm cố định như CMS.
      return [e('A', 'B', 1), e('B', 'C', 0), e('C', 'D', 0), e('D', 'A', 1), e('A', 'C', 1), e('B', 'D', 1),
        e('S', 'A', 1), e('S', 'B', 0), e('S', 'C', 0), e('S', 'D', 0)];
    }
    if (type === 'spatial_triangular_prism') {
      if (!(A && B && C && A1 && B1 && C1)) return [];
      return [e(A, A1, 1), e(A, C, 1), e(A, B, 1), e(A1, C1, 0), e(A1, B1, 0), e(B, B1, 0), e(C, C1, 0), e(B, C, 0), e(B, C1, 0), e(B1, C1, 0)];
    }
    // spatial_prism, spatial_frustum: đáy dưới AB, DA khuất; đáy trên liền; cạnh bên AA' khuất.
    var out = [];
    if (A && B && C && D) out.push(e(A, B, 1), e(B, C, 0), e(C, D, 0), e(D, A, 1));
    if (A1 && B1 && C1 && D1) out.push(e(A1, B1, 0), e(B1, C1, 0), e(C1, D1, 0), e(A1, D1, 0));
    if (A && A1 && B && B1 && C && C1 && D && D1) out.push(e(A, A1, 1), e(B, B1, 0), e(C, C1, 0), e(D, D1, 0));
    return out;
  }

  function drawSpatial(JXG, boardEl, f) {
    var board = initBoard(JXG, boardEl, SPATIAL_BOX, { renderer: 'svg' });
    var pts = {}, names = {};
    (f.elements || []).forEach(function (el) {
      if (el.type === 'point' && el.coords) {
        pts[el.id] = [el.coords[0] || 0, el.coords[1] || 0, el.coords[2] || 0];
        names[el.id] = (el.attributes && el.attributes.name) || el.id;
      }
    });
    var ids = Object.keys(pts);
    if (!ids.length) return board;
    var axis = function (i) { return ids.map(function (id) { return pts[id][i]; }); };
    var range = function (arr) { return [Math.min.apply(null, arr) - 1, Math.max.apply(null, arr) + 1]; };
    var view = board.create('view3d', [[-6, -3.5], [11, 9], [range(axis(0)), range(axis(1)), range(axis(2))]], {
      trackball: { enabled: true }, depthOrder: { enabled: true }, projection: 'central',
      xPlaneRear: { visible: false }, xPlaneFront: { visible: false }, yPlaneRear: { visible: false },
      yPlaneFront: { visible: false }, zPlaneRear: { visible: false }, zPlaneFront: { visible: false },
      xAxis: { visible: false }, yAxis: { visible: false }, zAxis: { visible: false },
    });
    var zMin = Math.min.apply(null, axis(2));
    var lower = ids.filter(function (id) { return pts[id][2] === zMin; }).sort();
    var upper = ids.filter(function (id) { return lower.indexOf(id) < 0; }).sort();

    var objs = {};
    ids.forEach(function (id) {
      objs[id] = view.create('point3d', pts[id], {
        name: String(names[id]), size: 3, fillColor: AMBER, strokeColor: INK, strokeWidth: 1.5, fixed: true, withLabel: true,
        // Tên điểm do AI đọc: vẽ bằng nút văn bản SVG, không chèn HTML.
        label: { display: 'internal', parse: false, fontSize: 16, strokeColor: INK_DARK, cssStyle: SERIF + 'font-style:italic;font-weight:600;' },
      });
    });
    // Mặt có tô màu (ví dụ mặt bên xám của hình hộp): đa giác 3D tô đặc, vẽ trước các cạnh.
    (f.faces || []).forEach(function (face) {
      var corners = (face.points || []).map(function (id) { return objs[id]; }).filter(Boolean);
      if (corners.length < 3) return;
      view.create('polygon3d', corners, { fillColor: face.color || '#c8c8c8', fillOpacity: 1, strokeWidth: 0, vertices: { visible: false }, layer: 0 });
    });
    spatialEdges(f.geometryType, lower, upper).forEach(function (s) {
      if (!objs[s.a] || !objs[s.b]) return;
      var line = view.create('line3d', [objs[s.a], objs[s.b]], { strokeColor: INK, strokeWidth: 1.8, dash: s.hidden ? 2 : 0, lineCap: 'round' });
      if (line.rendNode) {
        if (s.hidden) line.rendNode.setAttribute('stroke-dasharray', HIDDEN_DASH);
        line.rendNode.setAttribute('stroke-linecap', 'round');
      }
    });
    board.fullUpdate();
    // Zoom vừa các đỉnh và căn giữa (CMS để view3d cố định nên hình nhỏ, lệch trái trong khung hẹp).
    var xs = [], ys = [];
    ids.forEach(function (id) {
      var p2 = objs[id].element2D;
      if (p2) { xs.push(p2.X()); ys.push(p2.Y()); }
    });
    if (xs.length) {
      var x0 = Math.min.apply(null, xs), x1 = Math.max.apply(null, xs);
      var y0 = Math.min.apply(null, ys), y1 = Math.max.apply(null, ys);
      var pad = Math.max(x1 - x0, y1 - y0, 1) * SPATIAL_PAD;
      board.setBoundingBox(fittedBox([x0 - pad, y1 + pad, x1 + pad, y0 - pad], boardEl.clientWidth, boardEl.clientHeight).box, false);
      board.fullUpdate();
    }
    return board;
  }

  // ================================================================== chọn cách vẽ theo dữ liệu
  // Mỗi mục là một ô vẽ { aspect, maxWidth?, rotate?, draw(JXG, boardEl) }. Không có gì để vẽ thì [].
  // Hai cách ghi dữ liệu một hình: { type, data } (mới) hoặc { geometryType, render, figure } (cũ). `data` có `kind` là khối
  // `render` do máy chủ tính sẵn; không có `kind` (cơ học, hình không gian) là `figure`.
  function normalize(payload) {
    if (payload && payload.type && !payload.geometryType && payload.data !== undefined) {
      var d = payload.data;
      return d && d.kind ? { geometryType: payload.type, render: d, figure: null } : { geometryType: payload.type, render: null, figure: d };
    }
    return payload;
  }

  // Legacy 2D point/edge payloads use the same renderer on CMS and embedded pages.
  function drawVectorPlane(JXG, el, figure) {
    var config = figure.boardConfig || {}, points = {};
    var board = initBoard(JXG, el, config.boundingbox || [-3, 7, 7, -3], {
      axis: config.axis !== false, grid: config.grid !== false, keepaspectratio: true
    });
    (figure.elements || []).forEach(function (item) {
      if (item.type !== 'point' || !item.coords) return;
      points[item.id] = board.create('point', item.coords, extend(FIXED, {
        name: (item.attributes || {}).name || item.id, size: 3, fillColor: AMBER, strokeColor: INK,
        label: { display: 'internal', parse: false, fontSize: 15, offset: [6, 6], cssStyle: SERIF }
      }));
    });
    (figure.elements || []).forEach(function (item) {
      var parents = (item.parents || []).map(function (id) { return points[id]; });
      if (parents.some(function (point) { return !point; })) return;
      if (item.type === 'polygon' && parents.length >= 3) {
        board.create('polygon', parents, extend(FIXED, {
          fillColor: '#fff3cd', fillOpacity: 0.58, borders: { strokeColor: INK, strokeWidth: 1.6 }
        }));
      } else if ((item.type === 'segment' || item.type === 'arrow') && parents.length >= 2) {
        var arrow = item.type === 'arrow' || (item.attributes || {}).withArrow;
        board.create(arrow ? 'arrow' : 'segment', parents.slice(0, 2), extend(FIXED, {
          strokeColor: arrow ? AMBER : INK, strokeWidth: arrow ? 2.1 : 1.6, dash: 0
        }));
      }
    });
    board.fullUpdate();
    return board;
  }

  function plan(payload) {
    payload = normalize(payload);
    var r = payload && payload.render;
    var type = (payload && payload.geometryType) || (r && r.kind);
    var f = payload && payload.figure;
    var aspectOf = function (vb) { return (vb[2] - vb[0]) / (vb[1] - vb[3]); };
    if (/^spatial_/.test(type || '') && r && f && f.source_view && window.JsxFigureSpatialSource) {
      return Promise.resolve([{
        aspect: f.source_view.picture_width / f.source_view.picture_height, rotate: true,
        draw: function (JXG, el) {
          el.classList.add('jsx-figure-source-spatial');
          try { return window.JsxFigureSpatialSource.draw(JXG, el, f, r); }
          catch (error) { return drawVenn(JXG, el, r); }
        }
      }]);
    }
    if (r && r.kind === 'function_graph_panels') {
      return Promise.resolve([{
        aspect: r.picture_aspect,
        draw: function (JXG, el) {
          el.innerHTML = '';
          el.style.position = 'relative';
          return r.panels.map(function (panel) {
            var rect = panel.source_rect, host = document.createElement('div');
            host.id = 'jsx-figure-panel-' + ++seq;
            host.style.cssText = 'position:absolute;overflow:hidden;left:' + rect[0] * 100 + '%;top:' + rect[1] * 100
              + '%;width:' + (rect[2] - rect[0]) * 100 + '%;height:' + (rect[3] - rect[1]) * 100 + '%';
            el.appendChild(host);
            return drawFunctionGraph(JXG, host, panel.render);
          });
        }
      }]);
    }
    if (r && r.kind === 'function_graph') {
      return Promise.resolve([{ aspect: aspectOf(r.view_box), draw: function (JXG, el) { return drawFunctionGraph(JXG, el, r); } }]);
    }
    if (r && (r.kind === 'venn_diagram' || r.kind === 'number_line' || r.kind === 'plane_geometry' || r.kind === 'vector_diagram' || r.kind === 'network_graph' || r.kind === 'inequality_region')) {
      return Promise.resolve([{
        aspect: aspectOf(r.view_box),
        originalWidth: r.kind === 'vector_diagram' ? r.view_box[2] - r.view_box[0] : null,
        draw: function (JXG, el) { return drawVenn(JXG, el, r); },
      }]);
    }
    if (r && r.kind === 'variation_table') {
      return Promise.resolve([{ aspect: aspectOf(r.view_box), draw: function (JXG, el) { return drawVariationTable(JXG, el, r); } }]);
    }
    // Biểu đồ (pipeline chart_analysis): dữ liệu lưu thô { isChart, chartType, data } hoặc đã gói sẵn { type:'chart', data }.
    if (type === 'chart' && !f && payload.isChart && payload.data) f = extend(payload.data, { chartType: payload.chartType });
    if (type === 'chart' && f && window.JsxFigureChart && window.JsxFigureChart.valid(f)) {
      var Chart = window.JsxFigureChart, ratio = Chart.aspect(f);
      return Promise.resolve([{ aspect: ratio, maxWidth: 720, svg: true, draw: function (JXG, el) { return Chart.draw(el, f, ratio); } }]);
    }
    if (type === 'mechanics' && f) {
      // Bố cục cơ học (src/mechanics-layout.js, sinh từ CMS) được build.py ghép vào đầu file này.
      var M = window.JsxFigureMechanicsLayout;
      if (!M) return Promise.resolve([]);
      return Promise.resolve(M.readMechanicsFigures(f).drawable.map(function (n) {
          var lay = M.layoutMechanics(n.figure);
          return {
            aspect: aspectOf(lay.box),
            // Như CMS: vật nặng không phóng to quá cỡ sách (maxScale điểm ảnh mỗi đơn vị).
            maxWidth: isFinite(lay.maxScale) ? (lay.box[2] - lay.box[0]) * lay.maxScale : null,
            draw: function (JXG, el) { return drawMechanics(JXG, el, lay, M); },
          };
        }));
    }
    if (type === 'vector_plane' && f && Array.isArray(f.elements)) {
      return Promise.resolve([{ aspect: 1.4, draw: function (JXG, el) { return drawVectorPlane(JXG, el, f); } }]);
    }
    if (/^spatial_/.test(type || '') && f && (f.elements || []).some(function (el) { return el.type === 'point'; })) {
      var spatial = extend(f, { geometryType: type });
      return Promise.resolve([{
        aspect: SPATIAL_ASPECT, rotate: true,
        draw: function (JXG, el) { return drawSpatial(JXG, el, spatial); },
      }]);
    }
    return Promise.resolve([]);
  }

  // ------------------------------------------------------------------ gắn vào một ô trên trang
  var seq = 0;
  function addBoard(container, item) {
    var el = document.createElement('div');
    el.id = 'jsx-figure-' + ++seq;
    el.className = 'jsx-figure-board jxgbox';
    el.style.aspectRatio = String(item.aspect);
    // Vừa màn hình cả hai chiều: không rộng quá khung (hay cỡ sách của hình cơ học), không cao quá 85% màn hình
    // (điện thoại xoay ngang, hình cao như con lắc).
    var wide = item.maxWidth ? Math.max(160, item.maxWidth) + 'px' : '100%';
    var limits = [wide, 'calc(' + MAX_HEIGHT_VH + 'vh * ' + item.aspect.toFixed(4) + ')'];
    if (item.originalWidth > 0) limits.push(item.originalWidth + 'px');
    // Cỡ của ảnh cũ (nếu trang ghi lại): data-max-width / data-max-height, đơn vị điểm ảnh CSS. Hình vẽ không to quá cỡ ảnh cũ,
    // giữ đúng tỉ lệ của hình (chiều cao tối đa đổi ra bề rộng tối đa theo tỉ lệ).
    var maxW = parseFloat(container.getAttribute('data-max-width'));
    var maxH = parseFloat(container.getAttribute('data-max-height'));
    if (maxW > 0) limits.push(maxW + 'px');
    if (maxH > 0) limits.push((maxH * item.aspect).toFixed(2) + 'px');
    el.style.maxWidth = 'min(' + limits.join(', ') + ')';
    // Hình không gian xoay bằng cách kéo: chạm vào hình không cuộn trang.
    if (item.rotate) el.style.touchAction = 'none';
    container.appendChild(el);
    return el;
  }

  // Vẽ khi ô có kích thước, vẽ lại khi xoay màn hình / đổi cỡ WebView. Gắn hàm dọn (board + ResizeObserver) lên
  // chính ô đó, để freeContainer() gọi lại được khi trang vẽ lại/rời đi — không làm thế thì ResizeObserver vẫn
  // giữ tham chiếu đến ô cũ mãi mãi (rò rỉ bộ nhớ dần qua mỗi lần vẽ lại, từng gây treo trang thật).
  function drawWhenSized(JXG, el, item) {
    var board = null, lastW = 0, frame = 0, observer = null;
    var release = function () {
      (Array.isArray(board) ? board : board ? [board] : []).forEach(function (value) { JXG.JSXGraph.freeBoard(value); });
      board = null;
    };
    var draw = function () {
      if (!el.clientWidth || el.clientWidth === lastW) return;
      lastW = el.clientWidth;
      release();
      board = item.draw(JXG, el);
    };
    draw();
    if (window.ResizeObserver) {
      observer = new ResizeObserver(function () { cancelAnimationFrame(frame); frame = requestAnimationFrame(draw); });
      observer.observe(el);
    }
    el._jsxFigureCleanup = function () {
      cancelAnimationFrame(frame);
      if (observer) observer.disconnect();
      release();
    };
  }

  // Giải phóng mọi board + ResizeObserver đã vẽ bên trong container (vẽ lại hoặc rời trang).
  function freeContainer(container) {
    Array.prototype.forEach.call(container.querySelectorAll('.jsx-figure-board'), function (el) {
      if (el._jsxFigureCleanup) { el._jsxFigureCleanup(); el._jsxFigureCleanup = null; }
    });
  }

  // Đọc dữ liệu hình đã nhúng sẵn trên chính element (câu đã duyệt: CMS lưu data-figure='{...JSON...}' ngay
  // trong HTML, hoặc dạng cũ type="..." data="..."). Trả về null khi không có gì để đọc.
  function readEmbeddedPayload(el) {
    var raw = el.getAttribute('data-figure');
    if (raw) {
      try { return JSON.parse(raw); } catch (e) { return null; }
    }
    var type = el.getAttribute('type') || el.getAttribute('data-type');
    var dataRaw = el.getAttribute('data');
    if (type && dataRaw) {
      try { return { type: type, data: JSON.parse(dataRaw) }; } catch (e) { return null; }
    }
    return null;
  }

  /** Vẽ dữ liệu { geometryType, render, figure } vào container. Không truyền payload: tự đọc từ attribute của
   * chính container (câu đã duyệt, dữ liệu đã nhúng sẵn trong HTML). Kết quả: true nếu có hình. */
  function mount(container, payload) {
    injectCss();
    if (payload === undefined) {
      payload = readEmbeddedPayload(container);
      if (!payload) return Promise.resolve(false);
    }
    return plan(payload).then(function (items) {
      freeContainer(container); // vẽ lại cùng một ô (đổi câu hỏi): dọn hình cũ trước khi vẽ hình mới
      if (!items.length) return false;
      // Biểu đồ vẽ bằng SVG thuần: không tải JSXGraph (946 KB) khi mọi ô đều là SVG.
      var needs = items.some(function (item) { return !item.svg; });
      return (needs ? loadJSXGraph() : Promise.resolve(null)).then(function (JXG) {
        container.innerHTML = '';
        container.classList.add('jsx-figure');
        items.forEach(function (item) { drawWhenSized(JXG, addBoard(container, item), item); });
        return true;
      });
    });
  }

  /** Giải phóng hình đã vẽ trong container (gọi khi ô rời khỏi trang / component unmount). */
  function unmount(container) { freeContainer(container); }

  // Tự vẽ thẻ .jsx-figure có sẵn dữ liệu nhúng (data-figure): FE chỉ cần nhúng script, không phải gọi mount từng thẻ.
  // Mỗi thẻ chỉ tự vẽ một lần; gọi mount thủ công sau đó vẫn an toàn (vẽ lại cùng một ô).
  function autoMount(el) {
    if (!el || el._jsxFigureAuto || !readEmbeddedPayload(el)) return false;
    el._jsxFigureAuto = true;
    mount(el).catch(function (err) { if (window.console) console.warn('[jsx-figure]', err); });
    return true;
  }

  function autoMountWithin(root) {
    if (!root || root.nodeType !== 1) return;
    if (root.classList && root.classList.contains('jsx-figure')) autoMount(root);
    Array.prototype.forEach.call(root.querySelectorAll ? root.querySelectorAll('.jsx-figure') : [], autoMount);
  }

  // Thẻ được đổ vào trang sau khi script đã nạp (React, Vue, innerHTML): cũng tự vẽ.
  function watchNewFigures() {
    if (!window.MutationObserver || !document.documentElement) return;
    new MutationObserver(function (records) {
      records.forEach(function (record) { Array.prototype.forEach.call(record.addedNodes, autoMountWithin); });
    }).observe(document.documentElement, { childList: true, subtree: true });
  }

  function boot() {
    autoMountWithin(document.documentElement);
    watchNewFigures();
  }

  window.JsxFigure = { version: VERSION, mount: mount, unmount: unmount };
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot);
  else boot();
})();
