<h1 align="center">
看到
</h1>

<div align="center">

[![NPM version](https://img.shields.io/npm/v/@sfeer/kd)](https://www.npmjs.com/package/@sfeer/kd) [![Vue Support](https://img.shields.io/badge/support-TypeScript-blueviolet)](./package.json) [![NPM downloads](https://img.shields.io/npm/dm/@sfeer/kd)](https://www.npmjs.com/package/@sfeer/kd) [![License](https://img.shields.io/github/license/sfeer/kd)](./LICENSE)

</div>

相关文档后期需要整理到docs中

## 发布npm

```
npm help config
npm config set [registry]
npm config get [registry]
npm config ls -l

npm publish
npm unpublish XXX --force
```

## 数据牌

README.md上有很多小的数据牌，上面介绍这个类库的下载量，大小，版本等信息

使用 [Shields.io](https://shields.io/) 制作

参考文章 https://zhuanlan.zhihu.com/p/217540872

## GitHub Actions 自动发布npm包

参考 https://www.cnblogs.com/gaobw/p/11593602.html

`.npmrc` 里面查看npm的token值

GitHub Actions默认模版是在项目创建版本时触发Action去发布到NPM