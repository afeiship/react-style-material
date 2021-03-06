# react-style-material
css style materials for react native.


## resources:
+ https://atom.io/packages/atom-react-native-css

##republish:
```bash
./publish.sh
```


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
{ horizontalLeft: { justifyContent: 'flex-start' },
  horizontalMiddle: { justifyContent: 'center' },
  horizontalRight: { justifyContent: 'flex-end' },
  verticalTop: { alignItems: 'flex-start' },
  verticalMiddle: { alignItems: 'center' },
  verticalBottom: { alignItems: 'flex-end' },
  justifyAround: { justifyContent: 'space-around' },
  justifyBetween: { justifyContent: 'space-between' },
  blank1: { height: 1 },
  blank2: { height: 2 },
  blank3: { height: 3 },
  blank4: { height: 4 },
  blank5: { height: 5 },
  blank6: { height: 6 },
  blank7: { height: 7 },
  blank8: { height: 8 },
  blank9: { height: 9 },
  blank10: { height: 10 },
  blank12: { height: 12 },
  blank14: { height: 14 },
  blank16: { height: 16 },
  blank18: { height: 18 },
  blank20: { height: 20 },
  blank30: { height: 30 },
  blank40: { height: 40 },
  blank50: { height: 50 },
  radius1: { borderRadius: 1 },
  radius2: { borderRadius: 2 },
  radius3: { borderRadius: 3 },
  radius4: { borderRadius: 4 },
  radius5: { borderRadius: 5 },
  radius6: { borderRadius: 6 },
  radius7: { borderRadius: 7 },
  radius8: { borderRadius: 8 },
  radius9: { borderRadius: 9 },
  radius10: { borderRadius: 10 },
  radius1000: { borderRadius: 1000 },
  c0: { color: '#000' },
  bg0: { backgroundColor: '#000' },
  c3: { color: '#333' },
  bg3: { backgroundColor: '#333' },
  c6: { color: '#666' },
  bg6: { backgroundColor: '#666' },
  c9: { color: '#999' },
  bg9: { backgroundColor: '#999' },
  ca: { color: '#aaa' },
  bga: { backgroundColor: '#aaa' },
  cb: { color: '#bbb' },
  bgb: { backgroundColor: '#bbb' },
  cc: { color: '#ccc' },
  bgc: { backgroundColor: '#ccc' },
  cd: { color: '#ddd' },
  bgd: { backgroundColor: '#ddd' },
  ce: { color: '#ddd' },
  bge: { backgroundColor: '#ddd' },
  cf: { color: '#fff' },
  bgf: { backgroundColor: '#fff' },
  col: { flex: 1 },
  col1: { flex: 1 },
  col2: { flex: 2 },
  col3: { flex: 3 },
  col4: { flex: 4 },
  col5: { flex: 5 },
  col6: { flex: 6 },
  col7: { flex: 7 },
  col8: { flex: 8 },
  col9: { flex: 9 },
  col10: { flex: 10 },
  col11: { flex: 11 },
  col12: { flex: 12 },
  f10: { fontSize: 10 },
  f11: { fontSize: 11 },
  f12: { fontSize: 12 },
  f13: { fontSize: 13 },
  f14: { fontSize: 14 },
  f15: { fontSize: 15 },
  f16: { fontSize: 16 },
  f17: { fontSize: 17 },
  f18: { fontSize: 18 },
  f19: { fontSize: 19 },
  f20: { fontSize: 20 },
  f21: { fontSize: 21 },
  f22: { fontSize: 22 },
  f23: { fontSize: 23 },
  f24: { fontSize: 24 },
  f25: { fontSize: 25 },
  f26: { fontSize: 26 },
  f27: { fontSize: 27 },
  f28: { fontSize: 28 },
  f29: { fontSize: 29 },
  f30: { fontSize: 30 },
  lh10: { height: 10 },
  lh12: { height: 12 },
  lh14: { height: 14 },
  lh16: { height: 16 },
  lh18: { height: 18 },
  lh20: { height: 20 },
  lh22: { height: 22 },
  lh24: { height: 24 },
  lh26: { height: 26 },
  lh28: { height: 28 },
  lh30: { height: 30 },
  lh32: { height: 32 },
  lh34: { height: 34 },
  lh36: { height: 36 },
  lh38: { height: 38 },
  lh40: { height: 40 },
  lh50: { height: 50 },
  ml1: { marginLeft: 1 },
  mr1: { marginRight: 1 },
  mt1: { marginTop: 1 },
  mb1: { marginBottom: 1 },
  mx1: { marginHorizontal: 1 },
  my1: { marginVertical: 1 },
  m1: { margin: 1 },
  ml2: { marginLeft: 2 },
  mr2: { marginRight: 2 },
  mt2: { marginTop: 2 },
  mb2: { marginBottom: 2 },
  mx2: { marginHorizontal: 2 },
  my2: { marginVertical: 2 },
  m2: { margin: 2 },
  ml3: { marginLeft: 3 },
  mr3: { marginRight: 3 },
  mt3: { marginTop: 3 },
  mb3: { marginBottom: 3 },
  mx3: { marginHorizontal: 3 },
  my3: { marginVertical: 3 },
  m3: { margin: 3 },
  ml4: { marginLeft: 4 },
  mr4: { marginRight: 4 },
  mt4: { marginTop: 4 },
  mb4: { marginBottom: 4 },
  mx4: { marginHorizontal: 4 },
  my4: { marginVertical: 4 },
  m4: { margin: 4 },
  ml5: { marginLeft: 5 },
  mr5: { marginRight: 5 },
  mt5: { marginTop: 5 },
  mb5: { marginBottom: 5 },
  mx5: { marginHorizontal: 5 },
  my5: { marginVertical: 5 },
  m5: { margin: 5 },
  ml6: { marginLeft: 6 },
  mr6: { marginRight: 6 },
  mt6: { marginTop: 6 },
  mb6: { marginBottom: 6 },
  mx6: { marginHorizontal: 6 },
  my6: { marginVertical: 6 },
  m6: { margin: 6 },
  ml7: { marginLeft: 7 },
  mr7: { marginRight: 7 },
  mt7: { marginTop: 7 },
  mb7: { marginBottom: 7 },
  mx7: { marginHorizontal: 7 },
  my7: { marginVertical: 7 },
  m7: { margin: 7 },
  ml8: { marginLeft: 8 },
  mr8: { marginRight: 8 },
  mt8: { marginTop: 8 },
  mb8: { marginBottom: 8 },
  mx8: { marginHorizontal: 8 },
  my8: { marginVertical: 8 },
  m8: { margin: 8 },
  ml9: { marginLeft: 9 },
  mr9: { marginRight: 9 },
  mt9: { marginTop: 9 },
  mb9: { marginBottom: 9 },
  mx9: { marginHorizontal: 9 },
  my9: { marginVertical: 9 },
  m9: { margin: 9 },
  ml10: { marginLeft: 10 },
  mr10: { marginRight: 10 },
  mt10: { marginTop: 10 },
  mb10: { marginBottom: 10 },
  mx10: { marginHorizontal: 10 },
  my10: { marginVertical: 10 },
  m10: { margin: 10 },
  ml20: { marginLeft: 20 },
  mr20: { marginRight: 20 },
  mt20: { marginTop: 20 },
  mb20: { marginBottom: 20 },
  mx20: { marginHorizontal: 20 },
  my20: { marginVertical: 20 },
  m20: { margin: 20 },
  ml30: { marginLeft: 30 },
  mr30: { marginRight: 30 },
  mt30: { marginTop: 30 },
  mb30: { marginBottom: 30 },
  mx30: { marginHorizontal: 30 },
  my30: { marginVertical: 30 },
  m30: { margin: 30 },
  ml40: { marginLeft: 40 },
  mr40: { marginRight: 40 },
  mt40: { marginTop: 40 },
  mb40: { marginBottom: 40 },
  mx40: { marginHorizontal: 40 },
  my40: { marginVertical: 40 },
  m40: { margin: 40 },
  ml50: { marginLeft: 50 },
  mr50: { marginRight: 50 },
  mt50: { marginTop: 50 },
  mb50: { marginBottom: 50 },
  mx50: { marginHorizontal: 50 },
  my50: { marginVertical: 50 },
  m50: { margin: 50 },
  pl1: { paddingLeft: 1 },
  pr1: { paddingRight: 1 },
  pt1: { paddingTop: 1 },
  pb1: { paddingBottom: 1 },
  px1: { paddingHorizontal: 1 },
  py1: { paddingVertical: 1 },
  p1: { padding: 1 },
  pl2: { paddingLeft: 2 },
  pr2: { paddingRight: 2 },
  pt2: { paddingTop: 2 },
  pb2: { paddingBottom: 2 },
  px2: { paddingHorizontal: 2 },
  py2: { paddingVertical: 2 },
  p2: { padding: 2 },
  pl3: { paddingLeft: 3 },
  pr3: { paddingRight: 3 },
  pt3: { paddingTop: 3 },
  pb3: { paddingBottom: 3 },
  px3: { paddingHorizontal: 3 },
  py3: { paddingVertical: 3 },
  p3: { padding: 3 },
  pl4: { paddingLeft: 4 },
  pr4: { paddingRight: 4 },
  pt4: { paddingTop: 4 },
  pb4: { paddingBottom: 4 },
  px4: { paddingHorizontal: 4 },
  py4: { paddingVertical: 4 },
  p4: { padding: 4 },
  pl5: { paddingLeft: 5 },
  pr5: { paddingRight: 5 },
  pt5: { paddingTop: 5 },
  pb5: { paddingBottom: 5 },
  px5: { paddingHorizontal: 5 },
  py5: { paddingVertical: 5 },
  p5: { padding: 5 },
  pl6: { paddingLeft: 6 },
  pr6: { paddingRight: 6 },
  pt6: { paddingTop: 6 },
  pb6: { paddingBottom: 6 },
  px6: { paddingHorizontal: 6 },
  py6: { paddingVertical: 6 },
  p6: { padding: 6 },
  pl7: { paddingLeft: 7 },
  pr7: { paddingRight: 7 },
  pt7: { paddingTop: 7 },
  pb7: { paddingBottom: 7 },
  px7: { paddingHorizontal: 7 },
  py7: { paddingVertical: 7 },
  p7: { padding: 7 },
  pl8: { paddingLeft: 8 },
  pr8: { paddingRight: 8 },
  pt8: { paddingTop: 8 },
  pb8: { paddingBottom: 8 },
  px8: { paddingHorizontal: 8 },
  py8: { paddingVertical: 8 },
  p8: { padding: 8 },
  pl9: { paddingLeft: 9 },
  pr9: { paddingRight: 9 },
  pt9: { paddingTop: 9 },
  pb9: { paddingBottom: 9 },
  px9: { paddingHorizontal: 9 },
  py9: { paddingVertical: 9 },
  p9: { padding: 9 },
  pl10: { paddingLeft: 10 },
  pr10: { paddingRight: 10 },
  pt10: { paddingTop: 10 },
  pb10: { paddingBottom: 10 },
  px10: { paddingHorizontal: 10 },
  py10: { paddingVertical: 10 },
  p10: { padding: 10 },
  pl20: { paddingLeft: 20 },
  pr20: { paddingRight: 20 },
  pt20: { paddingTop: 20 },
  pb20: { paddingBottom: 20 },
  px20: { paddingHorizontal: 20 },
  py20: { paddingVertical: 20 },
  p20: { padding: 20 },
  pl30: { paddingLeft: 30 },
  pr30: { paddingRight: 30 },
  pt30: { paddingTop: 30 },
  pb30: { paddingBottom: 30 },
  px30: { paddingHorizontal: 30 },
  py30: { paddingVertical: 30 },
  p30: { padding: 30 },
  pl40: { paddingLeft: 40 },
  pr40: { paddingRight: 40 },
  pt40: { paddingTop: 40 },
  pb40: { paddingBottom: 40 },
  px40: { paddingHorizontal: 40 },
  py40: { paddingVertical: 40 },
  p40: { padding: 40 },
  pl50: { paddingLeft: 50 },
  pr50: { paddingRight: 50 },
  pt50: { paddingTop: 50 },
  pb50: { paddingBottom: 50 },
  px50: { paddingHorizontal: 50 },
  py50: { paddingVertical: 50 },
  p50: { padding: 50 },
  rel: { position: 'relative' },
  fixed: { position: 'fixed' },
  abs: { position: 'absolute' },
  trbl0: { top: 0, right: 0, bottom: 0, left: 0 },
  lr0: { left: 0, right: 0 },
  tb0: { top: 0, bottom: 0 },
  t0: { top: 0 },
  r0: { right: 0 },
  b0: { bottom: 0 },
  l0: { left: 0 },
  t5: { top: '50%' },
  r5: { right: '50%' },
  b5: { bottom: '50%' },
  l5: { left: '50%' },
  t100: { top: '100%' },
  r100: { right: '100%' },
  b100: { bottom: '100%' },
  l100: { left: '100%' },
  z1: { zIndex: 1 },
  z2: { zIndex: 2 },
  z3: { zIndex: 3 } }

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
