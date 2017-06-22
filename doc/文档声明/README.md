## 文档声明

### 文档类型

现在我们所有的网页，无论是PC端网页，还是移动端网页，所有的html网页，都使用HTML5的声明方式声明，将文档设置为HTML5文档类型。

```html
<!DOCTYPE html>
<html>
    ...
</html>
```

### 文档语言声明

html标记的lang属性声明当前文档的语言类型，常用的有en和zh-CN。

其实中文语言，除了zh-CN外，还有一些其他的语言值也在用的，如zh、zh-cn,这几个语言值，无论是哪一个，严格来说，都是已经废弃的，已经不提倡使用的了。只是由于历史和其他方面的一些原因，这些语言值并没有完全的被废弃，正确的语言值应该是cmn。

可参考：[网页头部的声明应该是用 lang="zh" 还是 lang="zh-cn"？](https://www.zhihu.com/question/20797118)

文档的语言声明，根据产品的业务需求，灵活选择吧。定义方式如下:

```html
<!DOCTYPE html>
<html lang="zh-CN">
...
</html>
```

### 文档编码格式声明

无论是何种格式的编码，都要做到编码格式的统一。我们规定我们所有web产品线得所有文件包括css、js和html的编码格式都为UTF-8。

```html
<!DOCTYPE html>
<html lang="zh-CN">
<head>
    <meta charset="UTF-8">
    ...
</head>
<body>
</body>
</html>
```