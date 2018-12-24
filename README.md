//ie Set未定义
https://hefang.link/program/javascript/how-to-make-react16-work-in-ie9.html

# webpack4-react16-reactrouter-demo
webpack4-react16-reactrouter-demo
React无疑是非常好用的前端框架, 在Chrome, Firefox, Edge下工作正常, 但在IE11以下无法工作, 要如何解决这个问题呢?
其实React是能支持IE11以下的, 官网已经给出了解决方案

    React 16 depends on the collection types Map and Set. If you support older browsers and devices which may not yet provide these natively (e.g. IE < 11) or which have non-compliant implementations (e.g. IE 11), consider including a global polyfill in your bundled application, such as core-js or babel-polyfill.

React依赖集合类型Map和Set. 如果您要支持没有本地提供这些特性(例如: IE < 11)或提供了不兼容特性(例如: IE 11)的老浏览器和设备, 请考虑在你的应用中全局引入polyfill, 比如core-js或babel-polyfill

可以npm i core-js后在代码中添加

    import 'core-js/es6/map';
    import 'core-js/es6/set';

也可以直接在head中引入core-js

    <script src="xxx.xxx/core-js.min.js"></script>

