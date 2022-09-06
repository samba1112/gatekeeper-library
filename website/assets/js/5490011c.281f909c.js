"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[321],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var s=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,s)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,s,r=function(e,t){if(null==e)return{};var n,s,r={},a=Object.keys(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)n=a[s],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=s.createContext({}),c=function(e){var t=s.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return s.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},y=s.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),y=c(n),m=r,u=y["".concat(o,".").concat(m)]||y[m]||p[m]||a;return n?s.createElement(u,i(i({ref:t},d),{},{components:n})):s.createElement(u,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,i=new Array(a);i[0]=y;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return s.createElement.apply(null,i)}return s.createElement.apply(null,n)}y.displayName="MDXCreateElement"},9058:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var s=n(7462),r=(n(7294),n(3905));const a={id:"forbidden-sysctls",title:"Forbidden Sysctls"},i="Forbidden Sysctls",l={unversionedId:"forbidden-sysctls",id:"forbidden-sysctls",title:"Forbidden Sysctls",description:"Description",source:"@site/docs/forbidden-sysctls.md",sourceDirName:".",slug:"/forbidden-sysctls",permalink:"/gatekeeper-library/forbidden-sysctls",draft:!1,editUrl:"https://github.com/open-policy-agent/gatekeeper-library/edit/master/website/docs/forbidden-sysctls.md",tags:[],version:"current",frontMatter:{id:"forbidden-sysctls",title:"Forbidden Sysctls"},sidebar:"docs",previous:{title:"FlexVolumes",permalink:"/gatekeeper-library/flexvolume-drivers"},next:{title:"FS Group",permalink:"/gatekeeper-library/fsgroup"}},o={},c=[{value:"Description",id:"description",level:2},{value:"Template",id:"template",level:2},{value:"Examples",id:"examples",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"forbidden-sysctls"},"Forbidden Sysctls"),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"Controls the ",(0,r.kt)("inlineCode",{parentName:"p"},"sysctl")," profile used by containers. Corresponds to the ",(0,r.kt)("inlineCode",{parentName:"p"},"forbiddenSysctls")," field in a PodSecurityPolicy. For more information, see ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/"},"https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/")),(0,r.kt)("h2",{id:"template"},"Template"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: templates.gatekeeper.sh/v1\nkind: ConstraintTemplate\nmetadata:\n  name: k8spspforbiddensysctls\n  annotations:\n    metadata.gatekeeper.sh/title: "Forbidden Sysctls"\n    description: >-\n      Controls the `sysctl` profile used by containers. Corresponds to the\n      `forbiddenSysctls` field in a PodSecurityPolicy. For more information,\n      see https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/\nspec:\n  crd:\n    spec:\n      names:\n        kind: K8sPSPForbiddenSysctls\n      validation:\n        # Schema for the `parameters` field\n        openAPIV3Schema:\n          type: object\n          description: >-\n            Controls the `sysctl` profile used by containers. Corresponds to the\n            `forbiddenSysctls` field in a PodSecurityPolicy. For more information,\n            see https://kubernetes.io/docs/tasks/administer-cluster/sysctl-cluster/\n          properties:\n            forbiddenSysctls:\n              type: array\n              description: "A disallow-list of sysctls. `*` forbids all sysctls."\n              items:\n                type: string\n  targets:\n    - target: admission.k8s.gatekeeper.sh\n      rego: |\n        package k8spspforbiddensysctls\n\n        violation[{"msg": msg, "details": {}}] {\n            sysctl := input.review.object.spec.securityContext.sysctls[_].name\n            forbidden_sysctl(sysctl)\n            msg := sprintf("The sysctl %v is not allowed, pod: %v. Forbidden sysctls: %v", [sysctl, input.review.object.metadata.name, input.parameters.forbiddenSysctls])\n        }\n\n        # * may be used to forbid all sysctls\n        forbidden_sysctl(sysctl) {\n            input.parameters.forbiddenSysctls[_] == "*"\n        }\n\n        forbidden_sysctl(sysctl) {\n            input.parameters.forbiddenSysctls[_] == sysctl\n        }\n\n        forbidden_sysctl(sysctl) {\n            startswith(sysctl, trim(input.parameters.forbiddenSysctls[_], "*"))\n        }\n\n')),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"forbidden-sysctls"),(0,r.kt)("blockquote",null,(0,r.kt)("details",null,(0,r.kt)("summary",null,"constraint"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: constraints.gatekeeper.sh/v1beta1\nkind: K8sPSPForbiddenSysctls\nmetadata:\n  name: psp-forbidden-sysctls\nspec:\n  match:\n    kinds:\n      - apiGroups: [""]\n        kinds: ["Pod"]\n  parameters:\n    forbiddenSysctls:\n    # - "*" # * may be used to forbid all sysctls\n    - kernel.*\n\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-disallowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-forbidden-sysctls-disallowed\n  labels:\n    app: nginx-forbidden-sysctls\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n  securityContext:\n    sysctls:\n      - name: kernel.msgmax\n        value: "65536"\n      - name: net.core.somaxconn\n        value: "1024"\n\n'))),(0,r.kt)("details",null,(0,r.kt)("summary",null,"example-allowed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Pod\nmetadata:\n  name: nginx-forbidden-sysctls-disallowed\n  labels:\n    app: nginx-forbidden-sysctls\nspec:\n  containers:\n    - name: nginx\n      image: nginx\n  securityContext:\n    sysctls:\n      - name: net.core.somaxconn\n        value: "1024"\n\n'))))))}p.isMDXComponent=!0}}]);