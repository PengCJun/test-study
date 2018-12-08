# test-study
前端测试-单元测试-持续集成

在package.json中的scripts里面，执行对应的脚本文件.
”test“: "mocha"
z这条语句会执行所有的js文件，如果执行特定的文件，在后面加上文件路径
”test“: "mocha test/mocha.js"

api测试主要是确保后端代码的高效稳定，健壮。主要有chai, mocha, 持续集成等工具都是api测试。

ui测试 也就是组件测试，在浏览器中点击。除了人工测试以外，也要向后端有自动化的测试工具。
