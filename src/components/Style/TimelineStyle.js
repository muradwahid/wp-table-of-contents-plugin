import React from 'react';
import {
  getBackgroundCSS,
  getBorderCSS,
  getMultiShadowCSS,
} from '../../../../Components/utils/getCSS';
import { boxCss } from '../../utils/functions';

const TimelineStyle = ({ attributes }) => {
  const { table, sticky, slideTitle, slideList, boxList } = attributes;
  return (
    <>
      <style>
        {`
.timeline-container {
  ${getBackgroundCSS(table.bgColor)};
  box-shadow: ${getMultiShadowCSS(table.shadow)};
padding:${boxCss(table.padding.desktop)};
  ${getBorderCSS(table.border)}
}

.timeline-list-items {
  height: 90%;
  list-style: none;
  position: relative;
  margin-left: 10px;
  border-left: 2px dashed ${boxList.treeColor};
}
.timeline-title {
  padding-top:${slideTitle.space.desktop};
  padding-bottom: ${slideTitle.spaceBottom.desktop};
}
.timeline-list {
  margin-bottom:${slideList.space.desktop};
  margin-left:25px;
}

.timeline-list>a {
  text-decoration: none;
  font-size:${slideList.fontSize.desktop}
}
a.item-active{
  color:${boxList.hTxtColor} !important;
}
.timeline-list>a.item-active::before{
  background-color:${boxList.hTxtColor}
}
.timeline-list>a::before {
  position: absolute;
  left: 0;
  transform: translateX(-50%);
  width: ${boxList.dotSize}px;
  height: ${boxList.dotSize}px;
  border: 6px solid #e7e7e7;
  background-color: #b1b0b0;
  border-radius: 50%;
  -webkit-box-shadow: ${getMultiShadowCSS(boxList.dotShadow)};
  box-shadow: ${getMultiShadowCSS(boxList.dotShadow)};
  content: "";
  transition: background .3s ease-in-out;
}
.timeline-list>a{
  color:${boxList.nTxtColor} !important;
}
.timeline-list>a:hover {
  color:${boxList.hTxtColor} !important;
  transition: color .2s ease-in-out;
}

.timeline-list>a:hover::before {
  background-color:${boxList.hTxtColor};
}
.timeline-container.sticky {
  width:${table.width.desktop};
  ${getBackgroundCSS(table.bgColor)};
  box-shadow: ${getMultiShadowCSS(table.shadow)};
padding:${boxCss(table.padding.desktop)};
  z-index: ${sticky.zIndex.desktop} !important;

  position:fixed;
}
${
["left", "right"].map(val => `.timeline-container.sticky.${val}{
${val}:${sticky[val].desktop};
}`).join("")
}
${["top", "bottom"].map(val => `.timeline-container.sticky.${val}{
${val}:${sticky[val].desktop}
}`).join("")
}
${sticky.verticalAlign === "center" ? `.timeline-container.sticky.center{top:50%;  transform: translateY(-50%)}` : null
}


@media screen and (min-width: 1024px) {
.timeline-container {
padding:${boxCss(table.padding.desktop)}
}
.timeline-title {
  padding-top:${slideTitle.space.desktop};
  padding-bottom: ${slideTitle.spaceBottom.desktop};
}
.timeline-list {
  margin-bottom:${slideList.space.desktop};
  margin-left:25px;
}
.timeline-list>a {
  text-decoration: none;
  font-size:${slideList.fontSize.desktop}
}
.timeline-container.sticky {
  width:${table.width.desktop};
  ${getBackgroundCSS(table.bgColor)};
  box-shadow: ${getMultiShadowCSS(table.shadow)};
padding:${boxCss(table.padding.desktop)};
  z-index: ${sticky.zIndex.desktop} !important;
  position:${sticky.device.includes('Desktop') ? 'fixed' : 'initial'};
}
${
["left", "right"].map(val => `.timeline-container.sticky.${val}{
${val}:${sticky[val].desktop};
}`).join("")
}
${["top", "bottom"].map(val => `.timeline-container.sticky.${val}{
${val}:${sticky[val].desktop}
}`).join("")
}
${sticky.verticalAlign === "center" ? `.timeline-container.sticky.center{top:50%;  transform: translateY(-50%)}` : null
}  
}
@media (min-width: 768px) and (max-width: 1023px) {

  .timeline-container {
padding:${boxCss(table.padding.tablet)}
}
.timeline-title {
  padding-top:${slideTitle.space.tablet};
  padding-bottom: ${slideTitle.spaceBottom.tablet};
}
.timeline-list {
  margin-bottom:${slideList.space.tablet};
}
.timeline-list>a {
  font-size:${slideList.fontSize.tablet}
}
.timeline-container.sticky {
  width:${table.width.tablet};
  z-index: ${sticky.zIndex.tablet} !important;
  position:${sticky.device.includes('Tablet') ? 'fixed' : 'initial'};
}

${
["left", "right"].map(val => `.timeline-container.sticky.${val}{
${val}:${sticky[val].tablet};
}`)
}

${["top", "bottom"].map(val => `.timeline-container.sticky.${val}{
${val}:${sticky[val].tablet}
}`).join("")
}
${sticky.verticalAlign === "center" ? `.timeline-container.sticky.center{top:50%;  transform: translateY(-50%)}` : null
}

}
@media screen and (max-width: 767px) {

.timeline-container {
  width:${table.width.mobile};
padding:${boxCss(table.padding.mobile)}
}
.timeline-title {
  padding-top:${slideTitle.space.mobile};
  padding-bottom: ${slideTitle.spaceBottom.mobile};
}
.timeline-list {
  margin-bottom:${slideList.space.mobile};
}
.timeline-list>a {
  font-size:${slideList.fontSize.mobile}
}
.timeline-container.sticky {
  z-index: ${sticky.zIndex.mobile} !important;
  position:${sticky.device.includes('Mobile') ? 'fixed' : 'initial'};
}

${["top", "bottom"].map(val => `.timeline-container.sticky.${val}{
${val}:${sticky[val].mobile}
}`).join("")
}
${sticky.verticalAlign === "center" ? `.timeline-container.sticky.center{top:50%;  transform: translateY(-50%)}` : null
}
${
["left", "right"].map(val => `.timeline-container.sticky.${val}{
${val}:${sticky[val].mobile};
}`)
}
}
`}
      </style>
    </>
  );
};

export default TimelineStyle;
