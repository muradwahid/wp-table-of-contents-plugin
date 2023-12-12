import React from 'react';
import {
  getBackgroundCSS,
  getMultiShadowCSS,
} from '../../../../Components/utils/getCSS';

const ListStyle = ({ attributes }) => {
  const { table, sticky, slideTitle, slideList, boxList } = attributes;
  return (
    <style>
      {`
p{
  margin: 0px;
}
.list-container{
  border: ${table.boxBWidth}px solid ${table.boxBColor};
  border-radius: ${table.boxBRadius}px;
  ${getBackgroundCSS(table.bgColor)};
  box-shadow: ${getMultiShadowCSS(table.shadow)};
  padding-top:${table.padding.desktop?.top};
  padding-bottom:${table.padding.desktop?.bottom};
  padding-left:${table.padding.desktop?.left};
  padding-right:${table.padding.desktop?.right};
}
.list-title-heading{
  padding-top:${slideTitle.space.desktop}${slideTitle.spaceUnit.desktop};
  padding-bottom:${slideTitle.spaceBottom.desktop}${
        slideTitle.spaceBottomUnit.desktop
      }
}
.list-item{
  margin-left: 10px;
  margin-bottom:${slideList.space.desktop < 10 ? 10 : slideList.space.desktop}${
        slideList.spaceUnit.desktop
      };
  position: relative;
}


.list-item>a::before{
  content: "";
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  height:20px;
  width:3px;
  background-color:${boxList.nBarColor ? boxList.nBarColor : '#ccc'} !important;
  position: absolute;
  transition: background .3s ease-in-out;
}
a.item-active::before{
  background-color:${boxList.hBarColor} !important;
}
.list-item>a:hover::before{
  background: ${boxList.hBarColor} !important;
}
.list-item>a{
  color:${boxList.nTxtColor} !important;
  padding-left: 30px;
  transition: all .3s ease-in-out;
  text-decoration:none;
  font-size:${slideList.fontSize.desktop}${slideList.fontUnit.desktop}
}
.list-item>a:hover {
  color: ${boxList.hTxtColor} !important;
}
a.item-active{
  color: ${boxList.hTxtColor} !important;
}
.list-container.sticky {
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
            ? `.list-container.sticky.left{
          left:${sticky.left.desktop}${sticky.leftUnit.desktop};
        }`
            : `.list-container.sticky.right{
          right:${sticky.right.desktop}${sticky.rightUnit.desktop};
        }`
        }
        ${
          sticky.verticalAlign === 1
            ? `.list-container.sticky.top{
          top:${sticky.top.desktop}${sticky.topUnit.desktop};
          }`
            : sticky.verticalAlign === 2
            ? `.list-container.sticky.center{top:50%;  transform: translateY(-50%)}`
            : `.list-container.sticky.bottom{
            bottom:${sticky.bottom.desktop}${sticky.bottomUnit.desktop};
          }`
        }

@media screen and (min-width: 1024px) {
  .list-container{
  padding-top:${table.padding.desktop?.top};
  padding-bottom:${table.padding.desktop?.bottom};
  padding-left:${table.padding.desktop?.left};
  padding-right:${table.padding.desktop?.right};
}
.list-title-heading{
  padding-top:${slideTitle.space.desktop}${slideTitle.spaceUnit.desktop};
  padding-bottom:${slideTitle.spaceBottom.desktop}${
        slideTitle.spaceBottomUnit.desktop
      }
}
.list-item{
  margin-bottom:${slideList.space.desktop < 10 ? 10 : slideList.space.desktop}${
        slideList.spaceUnit.mobile
      };
}
.list-item>a{
  font-size:${slideList.fontSize.desktop}${slideList.fontUnit.desktop}
}

.list-container.sticky {
  width:617px;
  padding-top:${table.padding.desktop?.top};
  padding-bottom:${table.padding.desktop?.bottom};
  padding-left:${table.padding.desktop?.left};
  padding-right:${table.padding.desktop?.right};
  z-index: ${sticky.zIndex.desktop};
  z-index: ${sticky.zIndex.desktop};
  position:${sticky?.device.includes('Desktop') ? 'fixed' : 'initial'};
}
.list-container.sticky.top{
  top:${sticky.top.desktop}${sticky.topUnit.desktop};
}
.list-container.sticky.left{
  left:${sticky.left.desktop}${sticky.leftUnit.desktop};
}
.list-container.sticky.right{
  right:${sticky.right.desktop}${sticky.rightUnit.desktop};
}
.list-container.sticky.bottom{
    bottom:${sticky.bottom.desktop}${sticky.bottomUnit.desktop};
}

}
@media (min-width: 768px) and (max-width: 1023px) {

.list-container{
  padding-top:${table.padding.tablet?.top};
  padding-bottom:${table.padding.tablet?.bottom};
  padding-left:${table.padding.tablet?.left};
  padding-right:${table.padding.tablet?.right};
}
.list-title-heading{
  padding-top:${slideTitle.space.tablet}${slideTitle.spaceUnit.tablet};
  padding-bottom:${slideTitle.spaceBottom.tablet}${
        slideTitle.spaceBottomUnit.tablet
      }
}
.list-item{
  margin-bottom:${slideList.space.tablet}${slideList.spaceUnit.mobile};
}
.list-item>a{
  font-size:${slideList.fontSize.tablet}${slideList.fontUnit.tablet}
}
.list-container.sticky {
  width:90%;
  padding-top:${table.padding.tablet?.top};
  padding-bottom:${table.padding.tablet?.bottom};
  padding-left:${table.padding.tablet?.left};
  padding-right:${table.padding.tablet?.right};
  z-index: ${sticky.zIndex.tablet};
  z-index: ${sticky.zIndex.tablet};
  position:${sticky?.device.includes('Tablet') ? 'fixed' : 'initial'};
}
.list-container.sticky.top{
  top:${sticky.top.tablet}${sticky.topUnit.tablet};
}
.list-container.sticky.left{
  left:${sticky.left.tablet}${sticky.leftUnit.tablet};
}
.list-container.sticky.right{
  right:${sticky.right.tablet}${sticky.rightUnit.tablet};
}
.list-container.sticky.bottom{
    bottom:${sticky.bottom.tablet}${sticky.bottomUnit.tablet};
}

}
@media screen and (max-width: 767px) {
.list-container{
  padding-top:${table.padding.mobile?.top};
  padding-bottom:${table.padding.mobile?.bottom};
  padding-left:${table.padding.mobile?.left};
  padding-right:${table.padding.mobile?.right};
}
.list-title-heading{
  padding-top:${slideTitle.space.mobile}${slideTitle.spaceUnit.mobile};
  padding-bottom:${slideTitle.spaceBottom.mobile}${
        slideTitle.spaceBottomUnit.mobile
      }
}
.list-item{
  margin-bottom:${slideList.space.mobile}${slideList.spaceUnit.mobile};
}
.list-item>a{
  font-size:${slideList.fontSize.mobile}${slideList.fontUnit.mobile}
}
.list-container.sticky {
  width:100%;
  padding-top:${table.padding.mobile?.top};
  padding-bottom:${table.padding.mobile?.bottom};
  padding-left:${table.padding.mobile?.left};
  padding-right:${table.padding.mobile?.right};
  z-index: ${sticky.zIndex.mobile};
  z-index: ${sticky.zIndex.mobile};
  position:${sticky?.device.includes('Mobile') ? 'fixed' : 'initial'};
}
.list-container.sticky.top{
  top:${sticky.top.mobile}${sticky.topUnit.mobile};
}
.list-container.sticky.left{
  left:${sticky.left.mobile}${sticky.leftUnit.mobile};
}
.list-container.sticky.right{
  right:${sticky.right.mobile}${sticky.rightUnit.mobile};
}
.list-container.sticky.bottom{
    bottom:${sticky.bottom.mobile}${sticky.bottomUnit.mobile};
}


}

        `}
    </style>
  );
};

export default ListStyle;
