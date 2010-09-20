function init() {
  this.hooks = ['aceInitInnerdocbodyHead', 'aceGetFilterStack', 'aceCreateDomLine'];
  this.aceInitInnerdocbodyHead = aceInitInnerdocbodyHead;
  this.aceGetFilterStack = aceGetFilterStack;
  this.aceCreateDomLine = aceCreateDomLine;
}

function aceInitInnerdocbodyHead(args) {
  args.iframeHTML.push('\'<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"></scr\'+\'ipt>\\n<script type="text/javascript" src="http://laughinghan.github.com/mathquill/mathquill.js"></scr\'+\'ipt>\'')
}

function aceGetFilterStack(args) {
  return [
    args.linestylefilter.getRegexpFilter(/\$[^$]*\$/g, 'mathquill')
  ];
}

var i = 0;
function aceCreateDomLine(args) {
  console.log('oh-so-hooked:');
  console.log(args);
  if (args.cls.indexOf('mathquill') >= 0) {
    var id = '#math' + i,
      txt = args.doc.defaultView.
        $('<span><span id="math'+i+'">'+args.txt+'</span></span>')
        .children().mathquill('editable').end();
    i += 1;
    setTimeout(function(){
      args.doc.defaultView.$(id).mathquill('redraw');
    },0);
    return [{
      cls: args.cls,
      txt: txt.html()
    }];
  }
}

/* used on the client side only */
mathquill = new init();
