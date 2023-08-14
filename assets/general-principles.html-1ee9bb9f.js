import{_ as n,r as t,o as s,c as l,a,b as e,d as r,e as i}from"./app-abe605b9.js";const c={},d=a("h1",{id:"general-principles",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#general-principles","aria-hidden":"true"},"#"),e(" General principles")],-1),p={class:"custom-container tip"},h={href:"https://github.com/laravel/framework/issues/41565#issuecomment-1073572954",target:"_blank",rel:"noopener noreferrer"},_={href:"https://github.com/Laravel-Lang/json-fallback-hotfix",target:"_blank",rel:"noopener noreferrer"},m=i(`<p>Almost all console commands accept an array of localizations as a parameter.</p><p>For example:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>php artisan lang:<span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> en de ro
php artisan lang:<span class="token operator">&lt;</span>command<span class="token operator">&gt;</span> de
php artisan lang:<span class="token operator">&lt;</span>command<span class="token operator">&gt;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Where:</p><ul><li><code>en de ro</code> - a list of locales separated by a space;</li><li><code>de</code> - it is also possible to specify a single localization name;</li><li>if the parameter is not passed during the call, the script will ask two questions: <ul><li><code>Do you want to %s all localizations?</code>, when <code>%s</code> is <code>install</code>, <code>remove</code> or <code>reset</code>;</li><li>If <code>no</code>, then next question is <code>Select localizations to add (specify the necessary localizations separated by commas)</code>.</li></ul></li></ul>`,5),f={class:"custom-container tip"},u=a("code",null,"install",-1),g=a("code",null,"uninstall",-1),b=a("code",null,"reset",-1),k=a("code",null,"update",-1),v={href:"https://laravel.com",target:"_blank",rel:"noopener noreferrer"},w={href:"https://jetstream.laravel.com",target:"_blank",rel:"noopener noreferrer"},x={href:"https://github.com/laravel/fortify",target:"_blank",rel:"noopener noreferrer"},y={href:"https://laravel.com/docs/billing",target:"_blank",rel:"noopener noreferrer"},L={href:"https://github.com/laravel/breeze",target:"_blank",rel:"noopener noreferrer"},z={href:"https://nova.laravel.com",target:"_blank",rel:"noopener noreferrer"},N={href:"https://spark.laravel.com",target:"_blank",rel:"noopener noreferrer"},F={href:"https://github.com/laravel/ui",target:"_blank",rel:"noopener noreferrer"};function B(I,S){const o=t("ExternalLinkIcon");return s(),l("div",null,[d,a("div",p,[a("p",null,[e("Json fallbacks "),a("a",h,[e("doesn't work"),r(o)]),e(" in the Laravel Framework.")]),a("p",null,[e("To solve this problem, install the "),a("a",_,[e("Laravel Lang: JSON Fallback Hotfix"),r(o)]),e(" package.")])]),m,a("div",f,[a("p",null,[e("When performing any work with files ("),u,e(", "),g,e(", "),b,e(" and "),k,e("), in addition to php files, work with json files, including translation for "),a("a",v,[e("Laravel Framework"),r(o)]),e(", "),a("a",w,[e("Jetstream"),r(o)]),e(" , "),a("a",x,[e("Fortify"),r(o)]),e(", "),a("a",y,[e("Cashier"),r(o)]),e(", "),a("a",L,[e("Breeze"),r(o)]),e(", "),a("a",z,[e("Nova"),r(o)]),e(" , "),a("a",N,[e("Spark"),r(o)]),e(" and "),a("a",F,[e("UI"),r(o)]),e(", will also be automatically performed.")])])])}const j=n(c,[["render",B],["__file","general-principles.html.vue"]]);export{j as default};
