import("etherpad.log");
import("plugins.mathquill.static.js.main");

function init() {
 this.hooks = ['aceGetFilterStack', 'aceCreateDomLine']
 this.client = new main.init();
 this.description = 'MathQuill';
 this.aceGetFilterStack = main.aceGetFilterStack;
 this.aceCreateDomLine = main.aceCreateDomLine;

 this.install = install;
 this.uninstall = uninstall;
}

function install() {
 log.info("Installing MathQuill");
}

function uninstall() {
 log.info("Uninstalling MathQuill");
}
