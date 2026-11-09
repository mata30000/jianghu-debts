#!/usr/bin/env python3
"""Create cache-safe, content-addressed web entry files from the readable sources."""
import hashlib
import json
import re
from pathlib import Path
ROOT=Path(__file__).resolve().parent
SCRIPTS=['compat.js','story.js','adventure-content.js','progression.js','story-triggers.js','encounters.js','exploration-layouts.js','map.js','combat.js','game.js','offline.js']
STYLES=['style.css','mobile.css','offline.css']
js='/* Jianghu iPhone release v7. Readable modules are retained in the repository. */\n'+ '\n;\n'.join((ROOT/name).read_text() for name in SCRIPTS)+'\n;window.dispatchEvent(new Event("jianghu-boot-ready"));\n'
css='/* Jianghu iPhone release v7 */\n'+'\n'.join((ROOT/name).read_text() for name in STYLES)
short=lambda value:hashlib.sha256(value.encode()).hexdigest()[:12]
app='app-v7-'+short(js)+'.js';style='game-v7-'+short(css)+'.css'
for pattern in ['app-v7-*.js','game-v7-*.css']:
 for path in ROOT.glob(pattern):path.unlink()
(ROOT/app).write_text(js);(ROOT/style).write_text(css)
html=(ROOT/'index.html').read_text()
html=re.sub(r'<script\b[^>]*\bsrc=[\"\'][^\"\']+[\"\'][^>]*>\s*</script>','',html,flags=re.I)
html=re.sub(r'<link\b(?=[^>]*\brel=[\"\']stylesheet[\"\'])[^>]*>','',html,flags=re.I)
html=re.sub(r'<!-- jianghu-bootstrap-start -->[\s\S]*?<!-- jianghu-bootstrap-end -->','',html)
html='\n'.join(line.rstrip() for line in html.splitlines())+'\n'
html=re.sub(r'\n{3,}','\n\n',html)
html=html.replace('</head>',f'  <link rel="stylesheet" href="{style}">\n</head>')
bootstrap=r'''<!-- jianghu-bootstrap-start -->
<!-- game.js: compatibility marker for previously installed offline editions. -->
<script>
(function(){
 var timer,expected=APP_FILE;
 function problem(text){if(window.JianghuGame)return;var box=document.getElementById('world-loading'),title=document.getElementById('world-loading-title'),note=document.getElementById('world-loading-text'),retry=document.getElementById('world-retry');if(!box)return;box.hidden=false;box.dataset.state='failed';if(title)title.textContent=text;if(note)note.textContent='可以重试载入，浏览器里的存档会保留。';if(retry){retry.hidden=false;retry.onclick=function(){location.reload();};}}
 window.addEventListener('error',function(event){var target=event.target;if((target&&target.tagName==='SCRIPT'&&String(target.src).indexOf(expected)>=0)||String(event.filename||'').indexOf(expected)>=0)problem('游戏程序暂时未能载入');},true);
 window.addEventListener('jianghu-boot-ready',function(){clearTimeout(timer);},{once:true});
 timer=setTimeout(function(){problem('程序下载有些慢，可以重试');},20000);
})();
</script>
<script defer data-jianghu-app src="APP_SRC"></script>
<!-- jianghu-bootstrap-end -->'''
bootstrap=bootstrap.replace('APP_FILE',json.dumps(app)).replace('APP_SRC',app)
html=html.replace('</body>',bootstrap+'\n</body>');html=re.sub(r'\n{3,}','\n\n',html);(ROOT/'index.html').write_text(html)
assets=sorted(str(p.relative_to(ROOT)) for p in (ROOT/'assets').iterdir() if p.suffix.lower() in ['.png','.svg'])
files=['index.html',style,'manifest.webmanifest',app]+assets
worker=(ROOT/'sw.js').read_text()
worker=re.sub(r"const EDITION='[^']+',CACHE='jianghu-single-player-'\+EDITION;",'__EDITION__',worker)
worker=re.sub(r'const FILES=\[[\s\S]*?\];','__FILES__',worker,count=1)
payload=hashlib.sha256((html+js+css+worker).encode())
for name in assets:payload.update((ROOT/name).read_bytes())
edition='v7-20261109-'+payload.hexdigest()[:12]
sw=(ROOT/'sw.js').read_text()
sw=re.sub(r"const EDITION='[^']+',CACHE='jianghu-single-player-'\+EDITION;", "const EDITION='"+edition+"',CACHE='jianghu-single-player-'+EDITION;",sw)
sw=re.sub(r'const FILES=\[[\s\S]*?\];','const FILES='+json.dumps(files,ensure_ascii=False,indent=1)+';',sw,count=1)
(ROOT/'sw.js').write_text(sw)
print(json.dumps({'edition':edition,'app':app,'style':style,'offline_files':len(files),'first_screen_images':['world-town.png','world-people.png']},ensure_ascii=False))
