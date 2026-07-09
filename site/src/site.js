(function(){
  'use strict';
  var DATA={};
  try{DATA=JSON.parse(document.getElementById('data').textContent);}catch(e){console.error('data parse',e);}
  var content=document.getElementById('content');
  var crumbId=document.getElementById('crumb-id');
  var crumbT=document.getElementById('crumb-t');
  var nav=document.getElementById('nav');
  var app=document.getElementById('app');
  var filter=document.getElementById('filter');
  var fx=document.getElementById('fx');
  var root=document.documentElement;
  var themeBtn=document.getElementById('theme');

  /* theme */
  function curTheme(){var t=root.getAttribute('data-theme');if(t)return t;return (window.matchMedia&&window.matchMedia('(prefers-color-scheme:dark)').matches)?'dark':'light';}
  function updIcon(){var i=themeBtn.querySelector('.th-i');if(i)i.textContent=curTheme()==='dark'?'☀':'☾';}
  try{var st=localStorage.getItem('airb-theme');if(st==='dark'||st==='light')root.setAttribute('data-theme',st);}catch(e){}
  updIcon();
  themeBtn.addEventListener('click',function(){var n=curTheme()==='dark'?'light':'dark';root.setAttribute('data-theme',n);updIcon();try{localStorage.setItem('airb-theme',n);}catch(e){}});

  /* open the accordion path to a nav item */
  function openAncestors(el){var p=el.parentElement;while(p&&p!==nav){if(p.hasAttribute&&p.hasAttribute('data-acc'))p.classList.add('open');p=p.parentElement;}}

  function go(key){
    var d=DATA[key]||DATA.overview;if(!d){return;}
    content.innerHTML=d.html;
    crumbId.textContent=d.cid||'';
    crumbT.textContent=d.navTitle||d.title||'Overview';
    var btns=nav.querySelectorAll('.navitem'),activeEl=null;
    for(var i=0;i<btns.length;i++){var on=btns[i].getAttribute('data-key')===d.key;btns[i].classList.toggle('active',on);if(on)activeEl=btns[i];}
    if(activeEl){openAncestors(activeEl);try{activeEl.scrollIntoView({block:'nearest'});}catch(e){}}
    window.scrollTo(0,0);if(document.scrollingElement)document.scrollingElement.scrollTop=0;
    app.classList.remove('open');
    if(location.hash!=='#'+d.key){try{history.replaceState(null,'','#'+d.key);}catch(e){}}
    try{content.focus({preventScroll:true});}catch(e){}
  }

  document.addEventListener('click',function(e){
    var keyEl=e.target.closest('[data-key]');
    if(keyEl){e.preventDefault();go(keyEl.getAttribute('data-key'));return;}
    var tt=e.target.closest('[data-tt]');
    if(tt){var br=tt.closest('.tm-branch');if(br)br.classList.toggle('tm-open');return;}
    var all=e.target.closest('[data-tmall]');
    if(all){var open=all.getAttribute('data-tmall')==='1';var brs=content.querySelectorAll('.tm-branch');for(var j=0;j<brs.length;j++){brs[j].classList.toggle('tm-open',open);}return;}
    var acc=e.target.closest('.acc-toggle');
    if(acc){var g=acc.parentElement;if(g&&g.hasAttribute('data-acc'))g.classList.toggle('open');return;}
  });
  document.getElementById('menu').addEventListener('click',function(){app.classList.toggle('open');});
  document.getElementById('scrim').addEventListener('click',function(){app.classList.remove('open');});
  window.addEventListener('hashchange',function(){var k=(location.hash||'').replace('#','');if(DATA[k])go(k);});

  /* accordion-aware filter */
  filter.addEventListener('input',function(){
    var q=filter.value.trim().toLowerCase();
    var items=nav.querySelectorAll('.navitem'),shown=0;
    for(var i=0;i<items.length;i++){
      var it=items[i];if(it.classList.contains('nav-top'))continue;
      var t=it.getAttribute('data-title')||'';
      var m=!q||t.indexOf(q)>=0;it.style.display=m?'':'none';if(m)shown++;
    }
    var accs=nav.querySelectorAll('[data-acc]');
    for(var a=0;a<accs.length;a++){
      var box=accs[a],its=box.querySelectorAll('.navitem'),any=false;
      for(var k=0;k<its.length;k++){if(its[k].style.display!=='none'){any=true;break;}}
      if(q){box.style.display=any?'':'none';box.classList.toggle('open',any);}
      else{box.style.display='';box.classList.remove('open');}
    }
    if(!q){var act=nav.querySelector('.navitem.active');if(act)openAncestors(act);}
    fx.textContent=q?String(shown):'';
  });

  var start=(location.hash||'').replace('#','');
  go(DATA[start]?start:'overview');
})();
