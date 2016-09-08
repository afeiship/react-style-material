# react-style-material
css style materials for react native.


## resources:
+ https://atom.io/packages/atom-react-native-css

##republish:
+ `node index.js > preview.js`

## how to use this style:
+ install
```bash
npm install --save afeiship/react-style-material
```

+ usage:
```javascript
import React, { Component } from 'react';
import {
  StyleSheet,
} from 'react-native';
import reactStyleMaterial from 'react-style-material';
const basicStyles = StyleSheet.create(reactStyleMaterial);
```
+ enjoy the styles:
```javascript
[styles list]: https://github.com/afeiship/react-style-material/blob/master/src/preview.js
```

## useable properties:
```javascript
{
  "alignItems",//flex-start | flex-end | center | stretch
　"alignSelf",//主容器内元素在辅轴的排列方向，同alignItems有点类似
  "backfaceVisibility",
  "backgroundColor",//——背景颜色
  "borderBottomColor",
  "borderBottomLeftRadius",
  "borderBottomRightRadius",
  "borderBottomWidth",
  "borderColor",
  "borderLeftColor",
  "borderLeftWidth",
  "borderRadius",//——容器圆角
  "borderRightColor",
  "borderRightWidth",
  "borderStyle",//——solid，dotted，dashed
  "borderTopColor",
  "borderTopLeftRadius",
  "borderTopRightRadius",
  "borderTopWidth",
  "borderWidth",//——边框宽度
  "bottom",//——绝对定位属性
  "color",//——字体颜色
  "elevation",//——听觉样式表
  "flex",//——分配剩余空间
  "flexDirection",//——设置主轴方向
  "flexWrap",
  "fontFamily",
  "fontSize",
  "fontStyle",
  "fontWeight",
  "height",
  "justifyContent",//——在主轴的排列方向
  "left",//——绝对定位属性
  "letterSpacing",
  "lineHeight",
  "margin",
  "marginBottom",
  "marginHorizontal",
  "marginLeft",
  "marginRight",
  "marginTop",
  "marginVertical",
  "maxHeight",
  "maxWidth",
  "minHeight",
  "minWidth",
  "opacity",
  "overflow",
  "overlayColor",//——？
  "padding",
  "paddingBottom",
  "paddingHorizontal",
  "paddingLeft",
  "paddingRight",
  "paddingTop",
  "paddingVertical",//——针对辅轴两边的内边距
  "position",
  "resizeMode",//——resizeMode 缩放比例,可选参数('cover', 'contain', 'stretch') 该当图片的尺寸超过布局的尺寸的时候，会根据设置Mode进行缩放或者裁剪图片
  "right",
  "rotation",
  "scaleX",
  "scaleY",
  "shadowColor",
  "shadowOffset",
  "shadowOpacity",
  "shadowRadius",
  "textAlign",
  "textAlignVertical",
  "textDecorationColor",
  "textDecorationLine",
  "textDecorationStyle",
  "textShadowColor",
  "textShadowOffset",
  "textShadowRadius",
  "tintColor",//——图片背景颜色
  "top",
  "transform",
  "transformMatrix",
  "translateX",
  "translateY",
  "width",
  "writingDirection",
  "zIndex"
}
```
