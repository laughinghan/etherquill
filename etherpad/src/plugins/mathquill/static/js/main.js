function init() {
  this.hooks = ['aceInitInnerdocbodyHead', 'aceGetFilterStack', 'aceCreateDomLine'];
  this.aceInitInnerdocbodyHead = aceInitInnerdocbodyHead;
  this.aceGetFilterStack = aceGetFilterStack;
  this.aceCreateDomLine = aceCreateDomLine;
}

function aceInitInnerdocbodyHead(args) {
  args.iframeHTML.push('\'<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.4.2/jquery.min.js"/><script type="text/javascript" src="http://laughinghan.github.com/mathquill/mathquill.js"/>\'')
}

function aceGetFilterStack(args) {
  return [
    args.linestylefilter.getRegexpFilter(/\$/g, 'mathquill')
  ];
}

function aceCreateDomLine(args) {
  if (args.cls.indexOf('mathquill') >= 0) {
    console.log(args);

    $(cls).mathquill('editable');
    return [{
      cls: cls
      //extraOpenTags: '<a href="' + href.replace(/\"/g, '&quot;') + '">',
      //extraCloseTags: '</a>'
    }];
  }
}

/* used on the client side only */
mathquill = new init();
