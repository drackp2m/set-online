"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[50],{3050:(d,a,n)=>{n.r(a),n.d(a,{default:()=>f});var u=n(6814),r=n(95),m=n(5417),o=n(4946),c=n(3511);function l(e,i){if(1&e&&(o.TgZ(0,"p",6),o._uU(1),o.qZA()),2&e){const t=o.oxw();o.xp6(1),o.hij("Error: ",t.error(),"")}}const p=[{path:"",component:(()=>{class e{constructor(t,s){this.apiClient=t,this.router=s,this.form=new r.cw({username:new r.NI("",[r.kI.required]),password:new r.NI("",[r.kI.required])}),this.error=(0,o.tdS)("")}onSubmit(){const t=this.form.controls;!t.username.value||!t.password.value||this.apiClient.auth.post("/login",{username:t.username.value,password:t.password.value}).subscribe({next:()=>{this.router.navigate(["/home"])},error:s=>{this.error.set(s.statusText)}})}}return e.\u0275fac=function(t){return new(t||e)(o.Y36(c.S),o.Y36(m.F0))},e.\u0275cmp=o.Xpm({type:e,selectors:[["ng-component"]],decls:9,vars:2,consts:[[1,"content-fixed","pt-lg","pb-xxl"],[1,"flex-row","gap-sm","mt-md",3,"formGroup","submit"],["type","text","formControlName","username",1,"p-sm","round-sm","surface-vivid","color-cosmic"],["type","password","formControlName","password",1,"p-sm","round-sm","surface-vivid","color-cosmic"],["type","submit",1,"p-sm","round-sm","surface-serene","color-vivid"],["class","color-radiant mt-sm",4,"ngIf"],[1,"color-radiant","mt-sm"]],template:function(t,s){1&t&&(o.TgZ(0,"section",0)(1,"h4"),o._uU(2,"Login form"),o.qZA(),o.TgZ(3,"form",1),o.NdJ("submit",function(){return s.onSubmit()}),o._UZ(4,"input",2)(5,"input",3),o.TgZ(6,"button",4),o._uU(7,"Send"),o.qZA()(),o.YNc(8,l,2,1,"p",5),o.qZA()),2&t&&(o.xp6(3),o.Q6J("formGroup",s.form),o.xp6(5),o.Q6J("ngIf",s.error()))},dependencies:[u.O5,r._Y,r.Fj,r.JJ,r.JL,r.sg,r.u],styles:["section[_ngcontent-%COMP%]{min-height:100%;background-color:#fff}"]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=o.oAB({type:e}),e.\u0275inj=o.cJS({imports:[u.ez,m.Bz.forChild(p),r.UX]}),e})()}}]);