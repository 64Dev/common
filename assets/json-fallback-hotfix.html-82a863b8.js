import{_ as l,r as n,o as s,c as r,a,b as e,d as t,e as c}from"./app-abe605b9.js";const i={},d=a("h1",{id:"json-fallback-hotfix",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#json-fallback-hotfix","aria-hidden":"true"},"#"),e(" JSON Fallback Hotfix")],-1),h=a("code",null,"Laravel Lang: JSON Fallback Hotfix",-1),f={href:"https://getcomposer.org",target:"_blank",rel:"noopener noreferrer"},p=c(`<div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">composer</span> require laravel-lang/json-fallback-hotfix
</code></pre></div><p>Next, in the <code>providers</code> section of the <code>config/app.php</code> file, replace <code>Illuminate\\Translation\\TranslationServiceProvider::class</code> with <code>LaravelLang\\JsonFallbackHotfix\\TranslationServiceProvider::class</code>.</p><p>It&#39;s all 😊</p><h2 id="what-s-fixed" tabindex="-1"><a class="header-anchor" href="#what-s-fixed" aria-hidden="true">#</a> What&#39;s fixed</h2>`,4),_={href:"https://github.com/laravel/framework/issues/41565#issuecomment-1073572954",target:"_blank",rel:"noopener noreferrer"},u=a("p",null,[e("For example, when you call "),a("code",null,"__('Remember Me')"),e(", you get "),a("code",null,"Remember Me"),e(" instead of "),a("code",null,"Se souvenir de moi"),e(" for French fallback language.")],-1),m=a("p",null,"This package solves this problem.",-1);function x(b,k){const o=n("ExternalLinkIcon");return s(),r("div",null,[d,a("p",null,[e("To get the latest version of "),h,e(", simply require the project using "),a("a",f,[e("Composer"),t(o)]),e(":")]),p,a("p",null,[e("Out of the box, Laravel "),a("a",_,[e("doesn't allow"),t(o)]),e(" fallback translations for JSON keys.")]),u,m])}const v=l(i,[["render",x],["__file","json-fallback-hotfix.html.vue"]]);export{v as default};
