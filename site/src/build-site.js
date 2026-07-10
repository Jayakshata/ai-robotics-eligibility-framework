'use strict';
const fs = require('fs');
const ROOT = '/home/dee/Desktop/AI criterion';
const OUT = ROOT + '/site/ai-robotics-framework.html';
const SP = ROOT + '/site/src';

/* ---------------- content registry ---------------- */
const CAPS = [
  ['computer-vision-3d-perception','A1'],['tactile-force-sensing','A1'],['multimodal-sensor-fusion','A1'],
  ['state-estimation-slam','A2'],
  ['motion-planning-navigation','A3'],['task-and-motion-planning','A3'],
  ['control-classical-optimal-mpc','A4'],['whole-body-compliant-control','A4'],
  ['manipulation-and-grasping','A5'],['locomotion','A5'],
  ['reinforcement-learning-control','A6'],['imitation-learning-teleoperation','A6'],['sim-to-real-transfer','A6'],
  ['robot-foundation-models-vla','A7'],['world-models','A7'],
  ['simulation-digital-twins','A8'],
  ['human-robot-interaction','A9'],['multi-robot-swarm','A9'],
  ['robotics-middleware-realtime','A10'],['safety-verification-assurance','A10'],['calibration-integration-mlops','A10'],['soft-robotics','A10'],['micro-nano-bio-robotics','A10'],
];
const CLUSTERS = {A1:'Sensing & Perception',A2:'State Estimation & Spatial AI',A3:'Planning & Navigation',A4:'Control',A5:'Embodied Skills',A6:'Robot Learning',A7:'Foundation Models',A8:'Simulation & Digital Twins',A9:'Interaction & Multi-Agent',A10:'Systems, Safety & Infrastructure'};
const VERTS = [['manufacturing','High'],['logistics-warehouse','Medium'],['defense-security','High'],['healthcare-surgical','Critical'],['agriculture','Medium'],['construction','High'],['mining','High'],['oil-gas-hazardous','Critical'],['domestic-service','Medium'],['autonomous-vehicles','Critical'],['aerial-uas-drones','High'],['space-robotics','Critical'],['marine-underwater','High'],['inspection-maintenance','Medium-High'],['food-processing','Medium'],['nuclear-decommissioning','Critical']];
const VAXIS = {manufacturing:'B1','logistics-warehouse':'B2','defense-security':'B3','healthcare-surgical':'B4',agriculture:'B5',construction:'B6',mining:'B7','oil-gas-hazardous':'B8','domestic-service':'B9','autonomous-vehicles':'B10','aerial-uas-drones':'B11','space-robotics':'B12','marine-underwater':'B13','inspection-maintenance':'B14','food-processing':'B15','nuclear-decommissioning':'B16'};
const PLATS = [['fixed-manipulator-arm','C1'],['mobile-manipulator','C2'],['amr-agv','C3'],['quadruped','C4'],['humanoid','C5'],['aerial-drone','C6'],['underwater-marine','C7'],['soft-continuum','C8'],['swarm-multi-robot','C9'],['micro-nano','C10']];
const SYNTH = [['eligibility-matrix','Eligibility Matrix'],['common-core-vs-specialization','Common Core vs Specialization'],['progression-paths','Progression Paths'],['lab-procurement-and-partnerships','Lab Procurement & Partnerships']];
const REFS = [['master-niche-taxonomy','Master Taxonomy',ROOT+'/master-niche-taxonomy.md'],['capabilities-only-taxonomy','Capabilities-Only Taxonomy',ROOT+'/capabilities-only-taxonomy.md'],['grounding-reference','Grounding Reference',ROOT+'/phase-1/_grounding-reference.md']];

/* Applied / non-embodied AI — two areas, not axes. See applied-ai-taxonomy.md. */
const AGENTIC = [['agentic-llm-orchestration','AG1'],['engineering-robotics-copilots','AG2'],['knowledge-rag-systems','AG3'],['operations-erp-ai','AG4'],['conversational-hmi-agents','AG5'],['llmops-ai-platform','AG6'],['generative-ai-design','AG7'],['responsible-ai-governance','AG8']];
const ANALYTICS = [['predictive-maintenance','AN1'],['quality-yield-defect-analytics','AN2'],['process-production-optimization','AN3'],['forecasting-planning-analytics','AN4'],['anomaly-fault-detection','AN5']];

const KEYSET = new Set();
[...CAPS.map(x=>x[0]),...VERTS.map(x=>x[0]),...PLATS.map(x=>x[0]),...SYNTH.map(x=>x[0]),...REFS.map(x=>x[0]),...AGENTIC.map(x=>x[0]),...ANALYTICS.map(x=>x[0])].forEach(k=>KEYSET.add(k));

/* ---------------- markdown -> html ---------------- */
const Z=String.fromCharCode(0);
const ZRE=new RegExp(Z+'(\\d+)'+Z,'g');
const Y=String.fromCharCode(1);
const YRE=new RegExp(Y+'(\\d+)'+Y,'g');
function esc(s){return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');}

/* Emphasis via CommonMark's delimiter-stack, incl. the rule-of-three. Regexes
   cannot do this: they mis-nest "**A *b***" (bold wrapping italic, closing on a
   3-run) and either drop the bold in "**a*b**" (unpaired literal '*') or, with a
   lazy ***…*** rule, match from one 3-run to the NEXT and swallow everything
   between. Call with code spans and escaped \* already sentinel-protected. */
const PUNCT=/[\p{P}\p{S}]/u;
function emphasize(s){
  if(s.indexOf('*')<0) return s;
  const isSpace=c=>c===undefined||/\s/.test(c);
  const isPunct=c=>c!==undefined&&PUNCT.test(c);
  const toks=[];
  for(let i=0;i<s.length;){
    if(s[i]==='*'){
      let j=i;while(s[j]==='*')j++;
      const p=i>0?s[i-1]:undefined, f=j<s.length?s[j]:undefined;
      const left=!isSpace(f)&&(!isPunct(f)||isSpace(p)||isPunct(p));
      const right=!isSpace(p)&&(!isPunct(p)||isSpace(f)||isPunct(f));
      toks.push({d:true,n:j-i,orig:j-i,open:left,close:right,dead:false,pre:'',post:''});
      i=j;
    }else{
      let j=i;while(j<s.length&&s[j]!=='*')j++;
      toks.push({d:false,txt:s.slice(i,j)});
      i=j;
    }
  }
  let ci=0;
  while(ci<toks.length){
    const c=toks[ci];
    if(!c.d||!c.close||c.n===0||c.dead){ci++;continue;}
    let found=-1;
    for(let oi=ci-1;oi>=0;oi--){
      const o=toks[oi];
      if(!o.d||!o.open||o.n===0||o.dead) continue;
      // rule of three: if either delimiter can both open and close, the sum of
      // the ORIGINAL run lengths must not be a multiple of 3 (unless both are).
      const both=c.open||o.close;
      const bad=both&&((c.orig+o.orig)%3===0)&&!(c.orig%3===0&&o.orig%3===0);
      if(!bad){found=oi;break;}
    }
    if(found<0){ci++;continue;}
    const o=toks[found];
    const use=(c.n>=2&&o.n>=2)?2:1, tag=use===2?'strong':'em';
    o.n-=use;c.n-=use;
    o.post='<'+tag+'>'+o.post;   // opener: later (inner) match nests to the right
    c.pre=c.pre+'</'+tag+'>';    // closer: earlier (inner) match closes first
    for(let k=found+1;k<ci;k++) if(toks[k].d) toks[k].dead=true; // literal '*' kept
    if(c.n===0)ci++;
  }
  return toks.map(t=>t.d?(t.pre+'*'.repeat(t.n)+t.post):t.txt).join('');
}

function inline(s){
  const codes=[];
  s=s.replace(/`([^`]+)`/g,function(m,c){codes.push(c);return Z+(codes.length-1)+Z;});
  s=esc(s);
  s=s.replace(/\[([^\]]+)\]\(([^)]+)\)/g,function(m,t,u){
    u=u.trim();
    if(/^https?:\/\//.test(u)) return '<a href="'+u.replace(/"/g,'%22')+'" target="_blank" rel="noopener noreferrer">'+t+'</a>';
    const base=u.replace(/^.*\//,'').replace(/\.md$/,'').replace(/^_/,'');
    if(KEYSET.has(base)) return '<a class="xref" data-key="'+base+'" href="#'+base+'">'+t+'</a>';
    return '<span class="xref-off">'+t+'</span>';
  });
  // Pull escaped \* and \_ out first, so "RRT\*" never feeds the emphasis rules.
  const escq=[];
  s=s.replace(/\\([*_])/g,function(m,ch){escq.push(ch);return Y+(escq.length-1)+Y;});
  s=emphasize(s);
  s=s.replace(YRE,function(m,i){return escq[+i];});
  s=s.replace(ZRE,function(m,i){
    const c=codes[+i],t=c.trim();
    if(t.length<=10 && /^[✓~⏱★🆕◆FS\[\]\s]+$/u.test(t) && (/[✓~⏱★🆕◆]/u.test(t) || /^\[[FS]\]/.test(t))){
      let cls='ctag';
      if(t.indexOf('⏱')>=0)cls+=' t-time';
      else if(t.indexOf('✓')>=0)cls+=' t-ok';
      else if(t.indexOf('🆕')>=0||t.indexOf('★')>=0)cls+=' t-new';
      else if(t.indexOf('~')>=0)cls+=' t-warn';
      else cls+=' t-type';
      return '<span class="'+cls+'">'+esc(c)+'</span>';
    }
    return '<code>'+esc(c)+'</code>';
  });
  return s;
}
function parseBlocks(md){
  const lines=md.replace(/\r/g,'').split('\n');
  let out=[],i=0;
  const isTableRow=l=>/^\s*\|.*\|\s*$/.test(l);
  while(i<lines.length){
    let l=lines[i];
    if(/^\s*$/.test(l)){i++;continue;}
    // fenced code block — without this a ``` fence leaks its backticks as inline code
    const fence=l.match(/^\s*```+\s*(\S*)\s*$/);
    if(fence){
      const buf=[];i++;
      while(i<lines.length&&!/^\s*```+\s*$/.test(lines[i])){buf.push(lines[i]);i++;}
      i++; // consume the closing fence
      out.push('<pre class="codeblock"><code>'+esc(buf.join('\n'))+'</code></pre>');
      continue;
    }
    if(/^\s*---+\s*$/.test(l)){out.push('<hr>');i++;continue;}
    let h=l.match(/^(#{1,6})\s+(.*)$/);
    if(h){out.push('<h'+h[1].length+'>'+inline(h[2].trim())+'</h'+h[1].length+'>');i++;continue;}
    if(isTableRow(l)&&i+1<lines.length&&/^\s*\|?[\s:|-]+\|?\s*$/.test(lines[i+1])&&lines[i+1].includes('-')){
      const rows=[];rows.push(l);i++;i++;
      while(i<lines.length&&isTableRow(lines[i])){rows.push(lines[i]);i++;}
      const cells=r=>r.trim().replace(/^\|/,'').replace(/\|$/,'').split('|').map(c=>c.trim());
      let t='<div class="tablewrap"><table><thead><tr>';
      cells(rows[0]).forEach(c=>t+='<th>'+inline(c)+'</th>');
      t+='</tr></thead><tbody>';
      for(let r=1;r<rows.length;r++){t+='<tr>';cells(rows[r]).forEach(c=>t+='<td>'+inline(c)+'</td>');t+='</tr>';}
      t+='</tbody></table></div>';out.push(t);continue;
    }
    if(/^\s*>\s?/.test(l)){
      const buf=[];
      while(i<lines.length&&/^\s*>\s?/.test(lines[i])){buf.push(lines[i].replace(/^\s*>\s?/,''));i++;}
      out.push('<blockquote>'+parseBlocks(buf.join('\n')).join('\n')+'</blockquote>');continue;
    }
    if(/^\s*[-*]\s+/.test(l)){
      const buf=[];
      while(i<lines.length&&!/^\s*$/.test(lines[i])&&(/^\s*[-*]\s+/.test(lines[i])||(/^\s{2,}\S/.test(lines[i])&&buf.length))){buf.push(lines[i]);i++;}
      out.push(renderList(buf));continue;
    }
    const para=[l];i++;
    while(i<lines.length&&!/^\s*$/.test(lines[i])&&!/^\s*[-*]\s+/.test(lines[i])&&!/^(#{1,6})\s+/.test(lines[i])&&!/^\s*>\s?/.test(lines[i])&&!/^\s*---+\s*$/.test(lines[i])&&!isTableRow(lines[i])){para.push(lines[i]);i++;}
    out.push('<p>'+inline(para.join(' ').trim())+'</p>');
  }
  return out;
}
function renderList(buf){
  let html='<ul>',j=0;
  while(j<buf.length){
    const line=buf[j];
    const indent=(line.match(/^\s*/)[0]||'').length;
    const m=line.match(/^\s*[-*]\s+(.*)$/);
    if(!m){j++;continue;}
    const raw=m[1];
    const nested=[];j++;
    while(j<buf.length){
      const ni=(buf[j].match(/^\s*/)[0]||'').length;
      if(/^\s*[-*]\s+/.test(buf[j])&&ni>indent){nested.push(buf[j]);j++;}else break;
    }
    // keyed multi-item bullet ("**Key:** a · b · c …") -> key heading + sub-bullets
    const km=raw.match(/^\*\*([\s\S]+?)\*\*(?:\s*(?:—|–)\s*|\s*:?\s*)([\s\S]+)$/);
    const segs=km?km[2].split(/\s+·\s+/):null;
    const bal=segs&&segs.every(function(x){return (x.match(/\*\*/g)||[]).length%2===0&&(x.match(/`/g)||[]).length%2===0;});
    if(km&&segs&&segs.length>=3&&bal&&nested.length===0){
      const key=km[1].replace(/\s*:\s*$/,'');
      let sub='<ul class="toklist">';
      segs.forEach(function(s){sub+='<li>'+inline(s.trim())+'</li>';});
      sub+='</ul>';
      html+='<li class="keyed"><span class="li-k">'+inline(key)+'</span>'+sub+'</li>';
      continue;
    }
    let li=inline(raw);
    li=li.replace(/^<strong>([\s\S]+?)<\/strong>(\s*(?:—|–|:)\s*)/,'<span class="li-k">$1</span>$2');
    html+='<li>'+li+(nested.length?renderList(nested):'')+'</li>';
  }
  return html+'</ul>';
}

/* ---------------- document renderer (sectioned) ---------------- */
function stripTags(s){return s.replace(/<[^>]+>/g,'');}
function transformBlock(b){
  const m=b.match(/^<p><strong>([\s\S]+?)<\/strong>\s*(?:—|–|:)\s*([\s\S]*)<\/p>$/);
  if(m) return '<div class="field"><div class="field-k">'+m[1]+'</div><div class="field-v">'+m[2]+'</div></div>';
  return b;
}
function transformPreamble(b){
  if(/^<p>/.test(b)){
    const inner=b.replace(/^<p>/,'').replace(/<\/p>$/,'');
    if((inner.match(/<strong>[^<]*:<\/strong>/g)||[]).length>=2){
      const segs=inner.split(/\s*·\s*(?=<strong>)/);
      let items='';
      segs.forEach(function(seg){
        const mm=seg.match(/^<strong>([\s\S]+?):<\/strong>\s*([\s\S]*)$/);
        if(mm) items+='<div class="meta-i"><span class="meta-k">'+mm[1]+'</span><span class="meta-v">'+mm[2]+'</span></div>';
        else items+='<div class="meta-i meta-free">'+seg+'</div>';
      });
      return '<div class="meta-row">'+items+'</div>';
    }
  }
  return b;
}
function renderDoc(md){
  const blocks=parseBlocks(md);
  let head='',preamble=[],secs=[],parts=[],cur=null,body='';
  function flush(){ if(cur){ parts.push('<section class="sec"><div class="sec-h"><span class="sec-n">'+cur.num+'</span><h2 id="'+cur.id+'">'+cur.title+'</h2></div><div class="sec-b">'+body+'</div></section>'); body=''; } }
  blocks.forEach(function(b){
    if(/^<h1>/.test(b)){head+=b;return;}
    if(/^<h2>/.test(b)){
      flush();
      const mm=b.match(/^<h2>([\s\S]*)<\/h2>$/); let t=mm?mm[1]:'';
      const nm=t.match(/^(\d+)\.\s*([\s\S]*)$/); const num=nm?nm[1]:String(secs.length+1); const title=nm?nm[2]:t;
      cur={num:num,title:title,id:'sec-'+num}; secs.push(cur); return;
    }
    if(!cur){preamble.push(b);return;}
    body+=transformBlock(b);
  });
  flush();
  let pre='';
  preamble.forEach(function(b){ if(/^<blockquote>/.test(b))return; pre+=transformPreamble(b); });
  let nav='';
  if(secs.length>=3){
    nav='<nav class="secnav" aria-label="Sections">';
    secs.forEach(function(s){ nav+='<a class="secnav-i" href="#'+s.id+'"><span class="secnav-n">'+s.num+'</span><span class="secnav-t">'+esc(stripTags(s.title))+'</span></a>'; });
    nav+='</nav>';
  }
  return head+pre+nav+'<div class="secs">'+parts.join('')+'</div>';
}

/* ---------------- read ---------------- */
function read(p){try{return fs.readFileSync(p,'utf8');}catch(e){return null;}}
function titleOf(md,fallback){const m=md.match(/^#\s+(.*)$/m);let t=m?m[1]:fallback;t=t.replace(/^Per-Niche Profile —\s*/,'').replace(/^Vertical Overlay —\s*/,'').replace(/^Platform Track —\s*/,'').replace(/\s*\(.*$/,'').trim();return t;}
const DATA={};
function add(key,group,path,extra){
  const md=read(path);if(md===null){console.error('MISSING',path);return;}
  DATA[key]=Object.assign({key,group,title:titleOf(md,key),html:renderDoc(md)},extra||{});
}
CAPS.forEach(([k,cl],ix)=>add(k,'A',ROOT+'/phase-1/'+k+'.md',{cluster:cl,cid:'A'+(ix+1)}));
VERTS.forEach(([k,crit])=>add(k,'B',ROOT+'/phase-1/verticals/'+k+'.md',{crit,cid:VAXIS[k]}));
PLATS.forEach(([k,cid])=>add(k,'C',ROOT+'/phase-1/platforms/'+k+'.md',{cid}));
AGENTIC.forEach(([k,cid])=>add(k,'D',ROOT+'/phase-1/agentic/'+k+'.md',{cid}));
ANALYTICS.forEach(([k,cid])=>add(k,'E',ROOT+'/phase-1/analytics/'+k+'.md',{cid}));
SYNTH.forEach(([k,t])=>add(k,'S',ROOT+'/phase-2/'+k+'.md',{navTitle:t}));
REFS.forEach(([k,t,p])=>add(k,'R',p,{navTitle:t}));
add('executive-brief','X',ROOT+'/executive-brief.md',{navTitle:'Executive Brief'});
const clOrder=['A1','A2','A3','A4','A5','A6','A7','A8','A9','A10'];
function critClass(c){return 'crit-'+(c||'').toLowerCase().replace(/[^a-z]/g,'');}

/* ---------------- accordion sidebar ---------------- */
function item(key,id,title,badge){return '<button class="navitem" data-key="'+key+'" data-title="'+esc(title.toLowerCase())+'">'+(id?'<span class="ni-id">'+id+'</span>':'<span class="ni-id ni-dot">·</span>')+'<span class="ni-t">'+esc(title)+'</span>'+(badge||'')+'</button>';}
function accGroup(ax,label,n,bodyHtml){
  return '<div class="navgroup" data-acc><button class="navhead acc-toggle" type="button"><span class="nh-car"></span><span class="gh-ax">'+ax+'</span> '+label+'<span class="gh-n">'+n+'</span></button><div class="navbody">'+bodyHtml+'</div></div>';
}
let aBody='';
clOrder.forEach(cl=>{
  const items=CAPS.filter(x=>x[1]===cl);
  let inner='';items.forEach(([k])=>{const d=DATA[k];inner+=item(k,d.cid,d.title);});
  aBody+='<div class="navcluster" data-acc><button class="navsub acc-toggle" type="button"><span class="nh-car"></span>'+cl+' · '+CLUSTERS[cl]+'<span class="gh-n">'+items.length+'</span></button><div class="navbody">'+inner+'</div></div>';
});
let bBody='';VERTS.forEach(([k,crit])=>{const d=DATA[k];bBody+=item(k,d.cid,d.title,'<span class="critdot '+critClass(crit)+'" title="'+crit+' criticality"></span>');});
let cBody='';PLATS.forEach(([k,cid])=>{const d=DATA[k];cBody+=item(k,cid,d.title);});
let dBody='';AGENTIC.forEach(([k,cid])=>{const d=DATA[k];if(d)dBody+=item(k,cid,d.title);});
let eBody='';ANALYTICS.forEach(([k,cid])=>{const d=DATA[k];if(d)eBody+=item(k,cid,d.title);});
let sBody='';SYNTH.forEach(([k,t])=>sBody+=item(k,'',t));
let rBody='';REFS.forEach(([k,t])=>rBody+=item(k,'',t));
let side='';
side+='<button class="navitem nav-top" data-key="overview"><span class="ni-id">◎</span><span class="ni-t">Overview & Map</span></button>';
side+='<button class="navitem nav-top nav-feature" data-key="executive-brief"><span class="ni-id">★</span><span class="ni-t">Executive Brief</span></button>';
side+=accGroup('Axis A','Capabilities',23,aBody);
side+=accGroup('Axis B','Verticals',16,bBody);
side+=accGroup('Axis C','Platforms',10,cBody);
side+=accGroup('Area 1','Agentic & Applied AI',AGENTIC.length,dBody);
side+=accGroup('Area 2','Analytics / Predictive AI',ANALYTICS.length,eBody);
side+=accGroup('◇','Synthesis',4,sBody);
side+=accGroup('§','Reference',3,rBody);

/* ---------------- tree map ---------------- */
function treeLeaf(key,id,title,critBadge){return '<button class="tm-leaf" data-key="'+key+'">'+(critBadge||'')+(id?'<span class="tm-lid">'+id+'</span>':'')+'<span class="tm-lt">'+esc(title)+'</span></button>';}
function buildTree(){
  let h='<div class="treemap"><div class="tm-tools"><button class="tm-tool" type="button" data-tmall="1">＋ Expand all</button><button class="tm-tool" type="button" data-tmall="0">－ Collapse all</button></div>';
  h+='<div class="tm-root"><span class="tm-rootdot">◆</span><span class="tm-rootname">AI for Robotics</span><span class="tm-rootmeta">3 axes + 2 applied areas · 62 niches</span></div>';
  h+='<div class="tm-branches">';
  h+='<div class="tm-branch tm-open ax-a"><button class="tm-node tm-axis" type="button" data-tt><span class="tm-caret"></span><span class="tm-aid">A</span><span class="tm-nlabel">Capabilities</span><span class="tm-count">23</span><span class="tm-nsub">the engineering competencies</span></button><div class="tm-children">';
  clOrder.forEach(cl=>{
    const items=CAPS.filter(x=>x[1]===cl);
    h+='<div class="tm-branch tm-cl"><button class="tm-node tm-cluster" type="button" data-tt><span class="tm-caret"></span><span class="tm-cid">'+cl+'</span><span class="tm-nlabel">'+CLUSTERS[cl]+'</span><span class="tm-count">'+items.length+'</span></button><div class="tm-children tm-leaves">';
    items.forEach(([k])=>{const d=DATA[k];h+=treeLeaf(k,d.cid,d.title);});
    h+='</div></div>';
  });
  h+='</div></div>';
  h+='<div class="tm-branch tm-open ax-b"><button class="tm-node tm-axis" type="button" data-tt><span class="tm-caret"></span><span class="tm-aid">B</span><span class="tm-nlabel">Verticals</span><span class="tm-count">16</span><span class="tm-nsub">industry overlays</span></button><div class="tm-children tm-leaves">';
  VERTS.forEach(([k,crit])=>{const d=DATA[k];h+=treeLeaf(k,d.cid,d.title,'<span class="tm-crit '+critClass(crit)+'" title="'+crit+' criticality"></span>');});
  h+='</div></div>';
  h+='<div class="tm-branch tm-open ax-c"><button class="tm-node tm-axis" type="button" data-tt><span class="tm-caret"></span><span class="tm-aid">C</span><span class="tm-nlabel">Platforms</span><span class="tm-count">10</span><span class="tm-nsub">robot form factors</span></button><div class="tm-children tm-leaves">';
  PLATS.forEach(([k,cid])=>{const d=DATA[k];h+=treeLeaf(k,cid,d.title);});
  h+='</div></div>';
  h+='<div class="tm-branch tm-open ax-d"><button class="tm-node tm-axis" type="button" data-tt><span class="tm-caret"></span><span class="tm-aid">1</span><span class="tm-nlabel">Agentic &amp; Applied AI</span><span class="tm-count">'+AGENTIC.length+'</span><span class="tm-nsub">AI that acts on people &amp; workflows</span></button><div class="tm-children tm-leaves">';
  AGENTIC.forEach(([k,cid])=>{const d=DATA[k];if(d)h+=treeLeaf(k,cid,d.title);});
  h+='</div></div>';
  h+='<div class="tm-branch tm-open ax-e"><button class="tm-node tm-axis" type="button" data-tt><span class="tm-caret"></span><span class="tm-aid">2</span><span class="tm-nlabel">Analytics / Predictive AI</span><span class="tm-count">'+ANALYTICS.length+'</span><span class="tm-nsub">AI that acts on your data</span></button><div class="tm-children tm-leaves">';
  ANALYTICS.forEach(([k,cid])=>{const d=DATA[k];if(d)h+=treeLeaf(k,cid,d.title);});
  h+='</div></div>';
  h+='</div></div>';
  return h;
}

/* ---------------- overview ---------------- */
function metric(n,l){return '<div class="metric"><div class="m-n">'+n+'</div><div class="m-l">'+l+'</div></div>';}
function synthCard(key,t,b){return '<button class="card" data-key="'+key+'"><div class="c-t">'+t+'</div><div class="c-b">'+b+'</div><div class="c-go">Open →</div></button>';}
let ov='';
ov+='<div class="hero"><div class="eyebrow">Engineering Eligibility & Training Framework</div>';
ov+='<h1 class="hero-h">AI for Robotics — the complete capability map</h1>';
ov+='<p class="hero-sub">Who is eligible to build AI for robotics, and how to train them — mapped across every capability, industry vertical and robot platform, plus the applied, non-embodied AI a robotics company also builds. 62 researched profiles, one navigable map.</p>';
ov+='<div class="metrics">'+metric('62','Niche profiles')+metric('23','Capabilities · A')+metric('16','Verticals · B')+metric('10','Platforms · C')+metric('13','Applied AI · 2 areas')+'</div></div>';
ov+='<button class="execcallout" data-key="executive-brief"><div class="ec-l"><span class="ec-tag">Start here</span><div class="ec-t">Executive Brief — Manufacturing &amp; Humanoids</div><div class="ec-b">The decision view: which roles matter for factory robotics and next-generation humanoids, who to hire first, what to buy, and who to partner with — a dozen roles instead of sixty-two.</div></div><div class="ec-go">Open →</div></button>';
ov+='<div class="mapsec"><div class="mapsec-head"><h2 class="ov-h">The map</h2><p class="ov-lead">Three orthogonal axes. Expand a branch to see what it contains; click any node to open its profile.</p></div>';
ov+=buildTree();
ov+='<p class="tm-caption"><span class="mono">the coordinate idea —</span> an engineer is a point in this space: a <b>capability</b> (A) operating on a <b>platform</b> (C) within a <b>vertical</b> (B). The axes stay orthogonal, so the map never duplicates a curriculum.</p></div>';
ov+='<h2 class="ov-h">Cross-cutting synthesis</h2><div class="cards">';
ov+=synthCard('eligibility-matrix','Eligibility Matrix','Every niche × strongest degrees, top programs, key certifications and entry bar — plus which degree opens which niches.');
ov+=synthCard('common-core-vs-specialization','Common Core vs Specialization','The ~920-hour shared foundation every robotics engineer builds, then ~480 hours of per-track depth.');
ov+=synthCard('progression-paths','Progression Paths','The L1→L5 ladder, the lattice of how niches combine and worked career paths.');
ov+=synthCard('lab-procurement-and-partnerships','Lab & Partnerships','The consolidated buy-list — robots, sensors, compute, sim — tiered entry/mid/flagship, plus partnership targets.');
ov+='</div>';
ov+='<div class="tagkey"><span class="tk">Confidence tags used throughout</span> <span class="ctag t-ok">✓</span> research-grounded <span class="ctag t-warn">~</span> verify at publish <span class="ctag t-time">⏱</span> time-sensitive <span class="ctag t-new">★</span> frontier</div>';
DATA['overview']={key:'overview',group:'top',title:'Overview',html:ov};

/* ---------------- assemble ---------------- */
const payload=JSON.stringify(DATA).replace(/</g,'\\u003c');
const CSS=fs.readFileSync(SP+'/site.css','utf8');
const JS=fs.readFileSync(SP+'/site.js','utf8');
const html=`<title>AI for Robotics — Capability & Eligibility Framework</title>
<style>${CSS}</style>
<div id="app">
  <aside id="sidebar">
    <div class="brand"><div class="brand-mark">◆</div><div class="brand-txt"><div class="brand-t">AI · Robotics</div><div class="brand-s">Capability Framework</div></div></div>
    <div class="filterwrap"><input id="filter" type="text" placeholder="Filter 62 profiles…" autocomplete="off" spellcheck="false"><span class="fx" id="fx"></span></div>
    <nav id="nav">${side}</nav>
    <div class="side-foot">62 profiles · 3 axes + 2 applied areas · synthesised mid-2026<br><span class="mono">re-verify ⏱ items before publish</span></div>
  </aside>
  <div id="scrim"></div>
  <main id="main">
    <header id="topbar">
      <button id="menu" aria-label="Open navigation">☰</button>
      <div id="crumb"><span class="mono" id="crumb-id"></span> <span id="crumb-t">Overview</span></div>
      <button id="theme" aria-label="Toggle colour theme"><span class="th-i"></span></button>
    </header>
    <div id="content" tabindex="-1"></div>
  </main>
</div>
<script id="data" type="application/json">${payload}</script>
<script>${JS}</script>`;
fs.mkdirSync(ROOT+'/site',{recursive:true});
fs.writeFileSync(OUT,html);
console.log('WROTE',OUT,(html.length/1024).toFixed(0)+'KB','entries='+Object.keys(DATA).length);
