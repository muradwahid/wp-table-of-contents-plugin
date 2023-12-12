import React from 'react';
import {
  getBackgroundCSS,
  getMultiShadowCSS,
} from '../../../../Components/utils/getCSS';

const TimelineStyle = ({ attributes }) => {
  const { table, sticky, slideTitle, slideList, boxList } = attributes;
  return (
    <>
      <style>
        {`
.timeline-container {
  border: ${table.boxBWidth}px solid ${table.boxBColor};
  border-radius: ${table.boxBRadius}px;
  ${getBackgroundCSS(table.bgColor)};
  box-shadow: ${getMultiShadowCSS(table.shadow)};
  padding-top:${table.padding.desktop?.top};
  padding-bottom:${table.padding.desktop?.bottom};
  padding-left:${table.padding.desktop?.left};
  padding-right:${table.padding.desktop?.right};
}

.timeline-list-items {
  height: 90%;
  list-style: none;
  position: relative;
  margin-left: 10px;
  border-left: 2px dashed ${boxList.treeColor};
}
.timeline-title {
  margin-top:${slideTitle.space.desktop}${slideTitle.spaceUnit.desktop};
  margin-bottom: ${slideTitle.spaceBottom.desktop}${
          slideTitle.spaceBottomUnit.desktop
        };
}
.timeline-list {
  margin-bottom:${
    slideList.space.desktop < 26 ? '26' : slideList.space.desktop
  }${slideList.spaceUnit.desktop};
  margin-left:25px;
}

.timeline-list>a {
  text-decoration: none;
  font-size:${slideList.fontSize.desktop}${slideList.fontUnit.desktop}
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
  border-radius: ${table.boxBRadius}px;
  ${getBackgroundCSS(table.bgColor)};
  box-shadow: ${getMultiShadowCSS(table.shadow)};
  padding-top:${table.padding.desktop?.top};
  padding-bottom:${table.padding.desktop?.bottom};
  padding-left:${table.padding.desktop?.left};
  padding-right:${table.padding.desktop?.right};
  z-index: ${sticky.zIndex.desktop};

  position:fixed;
}
${
  sticky.horizonAlign === 1
    ? `.timeline-container.sticky.left{
  left:${sticky.left.desktop}${sticky.leftUnit.desktop};
}`
    : `.timeline-container.sticky.right{
  right:${sticky.right.desktop}${sticky.rightUnit.desktop};
}`
}
${
  sticky.verticalAlign === 1
    ? `.timeline-container.sticky.top{
  top:${sticky.top.desktop}${sticky.topUnit.desktop};
  }`
    : sticky.verticalAlign === 2
    ? `.timeline-container.sticky.center{top:50%;  transform: translateY(-50%)}`
    : `.timeline-container.sticky.bottom{
    bottom:${sticky.bottom.desktop}${sticky.bottomUnit.desktop};
  }`
}


@media screen and (min-width: 1024px) {
.timeline-container {
  padding-top:${table.padding.desktop?.top};
  padding-bottom:${table.padding.desktop?.bottom};
  padding-left:${table.padding.desktop?.left};
  padding-right:${table.padding.desktop?.right};
}
.timeline-title {
  margin-top:${slideTitle.space.desktop}${slideTitle.spaceUnit.desktop};
  margin-bottom: ${slideTitle.spaceBottom.desktop}${
          slideTitle.spaceBottomUnit.desktop
        };
}
.timeline-list {
  margin-bottom:${
    slideList.space.desktop < 26 ? '26' : slideList.space.desktop
  }${slideList.spaceUnit.desktop};
  margin-left:25px;
}
.timeline-list>a {
  text-decoration: none;
  font-size:${slideList.fontSize.desktop}${slideList.fontUnit.desktop}
}
.timeline-container.sticky {
  width:617px;
  border-radius: ${table.boxBRadius}px;
  ${getBackgroundCSS(table.bgColor)};
  box-shadow: ${getMultiShadowCSS(table.shadow)};
  padding-top:${table.padding.desktop?.top};
  padding-bottom:${table.padding.desktop?.bottom};
  padding-left:${table.padding.desktop?.left};
  padding-right:${table.padding.desktop?.right};
  z-index: ${sticky.zIndex.desktop};
  z-index: ${sticky.zIndex.desktop};
  position:${sticky.device.includes('Desktop') ? 'fixed' : 'initial'};
}
.timeline-container.sticky.left{
  left:${sticky.left.desktop}${sticky.leftUnit.desktop};
}
.timeline-container.sticky.right{
  right:${sticky.right.desktop}${sticky.rightUnit.desktop};
}
.timeline-container.sticky.center{top:50%;  transform: translateY(-50%);}
.timeline-container.sticky.top{
  top:${sticky.top.desktop}${sticky.topUnit.desktop};
}
  
}
@media (min-width: 768px) and (max-width: 1023px) {

  .timeline-container {
  padding-top:${table.padding.tablet?.top};
  padding-bottom:${table.padding.tablet?.bottom};
  padding-left:${table.padding.tablet?.left};
  padding-right:${table.padding.tablet?.right};
}
.timeline-title {
  margin-top:${slideTitle.space.tablet}${slideTitle.spaceUnit.tablet};
  margin-bottom: ${slideTitle.spaceBottom.tablet}${
          slideTitle.spaceBottomUnit.tablet
        };
}
.timeline-list {
  margin-bottom:${slideList.space.tablet}${slideList.spaceUnit.tablet};
}
.timeline-list>a {
  font-size:${slideList.fontSize.tablet}${slideList.fontUnit.tablet}
}
.timeline-container.sticky {
  width:100%;
  z-index: ${sticky.zIndex.tablet};
  position:${sticky.device.includes('Tablet') ? 'fixed' : 'initial'};
}
.timeline-container.sticky.left{
  left:${sticky.left.tablet}${sticky.leftUnit.tablet};
}
.timeline-container.sticky.right{
  right:${sticky.right.tablet}${sticky.rightUnit.tablet};
}
.timeline-container.sticky.center{top:50%;  transform: translateY(-50%);}
.timeline-container.sticky.top{
  top:${sticky.top.tablet}${sticky.topUnit.tablet};
}

}
@media screen and (max-width: 767px) {

.timeline-container {
  width:100%;
  padding-top:${table.padding.mobile?.top};
  padding-bottom:${table.padding.mobile?.bottom};
  padding-left:${table.padding.mobile?.left};
  padding-right:${table.padding.mobile?.right};
}
.timeline-title {
  margin-top:${slideTitle.space.mobile}${slideTitle.spaceUnit.mobile};
  margin-bottom: ${slideTitle.spaceBottom.mobile}${
          slideTitle.spaceBottomUnit.mobile
        };
}
.timeline-list {
  margin-bottom:${slideList.space.mobile}${slideList.spaceUnit.mobile};
}
.timeline-list>a {
  font-size:${slideList.fontSize.mobile}${slideList.fontUnit.mobile}
}
.timeline-container.sticky {
  z-index: ${sticky.zIndex.mobile};
  position:${sticky.device.includes('Mobile') ? 'fixed' : 'initial'};
}
.timeline-container.sticky.left{
  left:${sticky.left.mobile}${sticky.leftUnit.mobile};
}
.timeline-container.sticky.right{
  right:${sticky.right.mobile}${sticky.rightUnit.mobile};
}
.timeline-container.sticky.center{top:50%;  transform: translateY(-50%);}
.timeline-container.sticky.top{
  top:${sticky.top.mobile}${sticky.topUnit.mobile};
}

}
          `}
      </style>
    </>
  );
};

export default TimelineStyle;
