'use strict';

var React = require('react');

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".flag{display:inline-block;overflow:hidden;position:relative;-webkit-box-sizing:border-box;box-sizing:border-box}.flag.size-s{width:16px;height:12px}.flag.size-s.drop-shadow{-webkit-box-shadow:0 0 1px .5px rgba(0,0,0,.1);box-shadow:0 0 1px .5px rgba(0,0,0,.1)}.flag.size-s.border-radius{border-radius:1px}.flag.size-s.border-radius.border::before{border-radius:1px}.flag.size-m{width:20px;height:15px}.flag.size-m.drop-shadow{-webkit-box-shadow:0 1px 2px 0 rgba(0,0,0,.1);box-shadow:0 1px 2px 0 rgba(0,0,0,.1)}.flag.size-m.border-radius{border-radius:1.5px}.flag.size-m.border-radius.border::before{border-radius:1.5px}.flag.size-l{width:32px;height:24px}.flag.size-l.drop-shadow{-webkit-box-shadow:0 2px 3px 0 rgba(0,0,0,.1);box-shadow:0 2px 3px 0 rgba(0,0,0,.1)}.flag.size-l.border-radius{border-radius:2px}.flag.size-l.border-radius.border::before{border-radius:2px}.flag.border::before{content:'';width:100%;height:100%;position:absolute;display:block;mix-blend-mode:overlay;-webkit-box-sizing:border-box;box-sizing:border-box;border:1px solid rgba(0,0,0,.5);mix-blend-mode:overlay}.flag.top-down::before{content:'';width:100%;height:100%;position:absolute;display:block;mix-blend-mode:overlay;-webkit-box-sizing:border-box;box-sizing:border-box;background-image:-webkit-gradient(linear,left bottom,left top,color-stop(2%,rgba(0,0,0,.3)),to(rgba(255,255,255,.7)));background-image:linear-gradient(0deg,rgba(0,0,0,.3) 2%,rgba(255,255,255,.7) 100%)}.flag.real-linear::before{content:'';width:100%;height:100%;position:absolute;display:block;mix-blend-mode:overlay;-webkit-box-sizing:border-box;box-sizing:border-box;background-image:linear-gradient(45deg,rgba(0,0,0,.2) 0,rgba(39,39,39,.22) 11%,rgba(255,255,255,.3) 27%,rgba(0,0,0,.24) 41%,rgba(0,0,0,.55) 52%,rgba(255,255,255,.26) 63%,rgba(0,0,0,.27) 74%,rgba(255,255,255,.3) 100%)}.flag.real-circular::before{content:'';width:100%;height:100%;position:absolute;display:block;mix-blend-mode:overlay;-webkit-box-sizing:border-box;box-sizing:border-box;background:radial-gradient(50% 36%,rgba(255,255,255,.3) 0,rgba(0,0,0,.24) 11%,rgba(0,0,0,.55) 17%,rgba(255,255,255,.26) 22%,rgba(0,0,0,.17) 27%,rgba(255,255,255,.28) 31%,rgba(255,255,255,0) 37%) center calc(50% - 8px)/600% 600%,radial-gradient(50% 123%,rgba(255,255,255,.3) 25%,rgba(0,0,0,.24) 48%,rgba(0,0,0,.55) 61%,rgba(255,255,255,.26) 72%,rgba(0,0,0,.17) 80%,rgba(255,255,255,.28) 88%,rgba(255,255,255,.3) 100%) center calc(50% - 8px)/600% 600%}.flag img{display:block;width:100%;height:100%;-o-object-fit:cover;object-fit:cover}";
styleInject(css_248z);

const Flag = ({ code = 'NL', size = 'l', gradient = '', hasBorder = true, hasDropShadow = false, hasBorderRadius = true, className }) => (React.createElement("div", { className: `flag
    ${gradient}
    size-${size}
    ${hasBorder ? 'border' : ''}
    ${hasDropShadow ? 'drop-shadow' : ''}
    ${hasBorderRadius ? 'border-radius' : ''}
    ${className ? className.replace(/\s\s+/g, ' ').trim() : ''}` },
    React.createElement("img", { src: require(`flagpack-core/lib/flags/${size}/${code}.svg`).default.src })));

module.exports = Flag;
