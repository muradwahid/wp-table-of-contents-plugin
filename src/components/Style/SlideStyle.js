import React from 'react';
import {
  getBackgroundCSS,
  getMultiShadowCSS,
} from '../../../../Components/utils/getCSS';

const SlideStyle = ({ attributes }) => {
  const { table, slideTitle, slideList, sticky, boxList } = attributes;
  return (
    <>
      <style>
        {`
.slide-title {
  position: relative;
  margin-left: 8px;
  transition: all 0.3s ease-in;
}

.slide-title-heading {
  margin-left: 30px;
  transition: all 0.3s ease-in;
  opacity: 0;
  margin-top:${slideTitle.space.desktop}${slideTitle.spaceUnit.desktop};
  margin-bottom: ${slideTitle.spaceBottom.desktop}${
          slideTitle.spaceBottomUnit.desktop
        };
}
.slide-container:hover>.slide-title>.slide-title-heading {
  margin-left: 8px;
  opacity: 1;
}
.slide-title::after {
  content: "";
  height: 3px;
  width: 38px;
  background-color: ${slideTitle.slideBarColor};
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  opacity: 1;
  transition: opacity .3s ease-in;
}

.slide-container:hover .slide-title::after {
  opacity: 0;
}

.slide-list-items {
  list-style: none;
  margin-left: 8px;
}

.slide-list {
  position: relative;
  margin: 0;
  margin-left: 0px;
  margin-bottom:${slideList.space.desktop}${slideList.spaceUnit.desktop};
}
.slide-list>a{
  margin-left: 30px;
  transition: all 0.3s ease-in;
  opacity: 0;
  text-decoration:none;
}
.slide-container:hover>.slide-list-items>.slide-list>a{
  margin-left: 8px;
  opacity: 1;
}
.slide-list-items>.slide-list>a{
  color:${boxList.nTxtColor};
  font-size:${slideList.fontSize.desktop}${slideList.fontUnit.desktop};
}
.slide-list-items>.slide-list>a:hover{
    color:${boxList.hTxtColor};
}
.item-active{
  color:${boxList.hTxtColor} !important;
}
.slide-list::after {
  content: "";
  height: 3px;
  width: 30px;
  background-color: ${boxList.nBarColor};
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity .3s ease-in;
}
.slide-container:hover .slide-list::after{
  opacity: 0;
  background-color:${boxList.hBarColor};
} 


.slide-container{
  border: ${table.boxBWidth}px solid ${table.boxBColor};
  border-radius: ${table.boxBRadius}px;
  ${getBackgroundCSS(table.bgColor)};
  box-shadow: ${getMultiShadowCSS(table.shadow)};
  padding-top:${table.padding.desktop?.top};
  padding-bottom:${table.padding.desktop?.bottom};
  padding-left:${table.padding.desktop?.left};
  padding-right:${table.padding.desktop?.right};
}



.slide-container.sticky {
  border: ${table.boxBWidth}px solid ${table.boxBColor};
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
            ? `.slide-container.sticky.left{
          left:${sticky.left.desktop}${sticky.leftUnit.desktop};
        }`
            : `.slide-container.sticky.right{
          right:${sticky.right.desktop}${sticky.rightUnit.desktop};
        }`
        }
        ${
          sticky.verticalAlign === 1
            ? `.slide-container.sticky.top{
          top:${sticky.top.desktop}${sticky.topUnit.desktop};
          }`
            : sticky.verticalAlign === 2
            ? `.slide-container.sticky.center{top:50%;  transform: translateY(-50%)}`
            : `.slide-container.sticky.bottom{
            bottom:${sticky.bottom.desktop}${sticky.bottomUnit.desktop};
          }`
        }
        
@media screen and (min-width: 1024px) {
          .slide-container{
            padding-top:${table.padding.desktop?.top};
            padding-bottom:${table.padding.desktop?.bottom};
            padding-left:${table.padding.desktop?.left};
            padding-right:${table.padding.desktop?.right};
          }
        .slide-container.sticky {
          width:617px;
          z-index: ${sticky.zIndex.desktop};
          position:${sticky.device.includes('Desktop') ? 'fixed' : 'initial'};
        }
        .slide-container.sticky.top{
          top:${sticky.top.desktop}${sticky.topUnit.desktop};
          }
        .slide-container.sticky.left{
          left:${sticky.left.desktop}${sticky.leftUnit.desktop};
        }
        .slide-container.sticky.right{
          right:${sticky.right.desktop}${sticky.rightUnit.desktop};
        }
        .slide-container.sticky.bottom{
            bottom:${sticky.bottom.desktop}${sticky.bottomUnit.desktop};
          }

        .slide-title-heading {
          margin-top:${slideTitle.space.desktop}${slideTitle.spaceUnit.desktop};
          margin-bottom: ${slideTitle.spaceBottom.desktop}${
          slideTitle.spaceBottomUnit.dekstop
        };
        }
        .slide-list {
          margin-bottom:${slideList.space.desktop}${
          slideList.spaceUnit.desktop
        };
        }
        .slide-list-items>.slide-list>a{
          font-size:${slideList.fontSize.desktop}${slideList.fontUnit.desktop};
        }
        }

@media (min-width: 768px) and (max-width: 1023px) {
          .slide-container{
            padding-top:${table.padding.tablet?.top};
            padding-bottom:${table.padding.tablet?.bottom};
            padding-left:${table.padding.tablet?.left};
            padding-right:${table.padding.tablet?.right};
          }
        .slide-container.sticky {
          width:100%;
          z-index: ${sticky.zIndex.tablet};
          position:${sticky.device.includes('Tablet') ? 'fixed' : 'initial'};
        }
        .slide-container.sticky.top{
          top:${sticky.top.tablet}${sticky.topUnit.tablet};
          }
        .slide-container.sticky.left{
          left:${sticky.left.tablet}${sticky.leftUnit.tablet};
        }
        .slide-container.sticky.right{
          right:${sticky.right.tablet}${sticky.rightUnit.tablet};
        }
        .slide-container.sticky.bottom{
            bottom:${sticky.bottom.tablet}${sticky.bottomUnit.tablet};
          }
        .slide-title-heading {
          margin-top:${slideTitle.space.tablet}${slideTitle.spaceUnit.tablet};
          margin-bottom: ${slideTitle.spaceBottom.tablet}${
          slideTitle.spaceBottomUnit.tablet
        };
        }
        .slide-list {
          margin-bottom:${slideList.space.tablet}${slideList.spaceUnit.tablet};
        }
        .slide-list-items>.slide-list>a{
          font-size:${slideList.fontSize.tablet}${slideList.fontUnit.tablet};
        }
        }

        @media screen and (max-width: 767px) {
          .slide-container{
            padding-top:${table.padding.mobile?.top};
            padding-bottom:${table.padding.mobile?.bottom};
            padding-left:${table.padding.mobile?.left};
            padding-right:${table.padding.mobile?.right};
          }
        .slide-container.sticky {
          z-index: ${sticky.zIndex.mobile};
          position:${sticky.device.includes('Mobile') ? 'fixed' : 'initial'};
          width:100%;
        }
        .slide-container.sticky.top{
          top:${sticky.top.mobile}${sticky.topUnit.mobile};
          }
        .slide-container.sticky.left{
          left:${sticky.left.mobile}${sticky.leftUnit.mobile};
        }
        .slide-container.sticky.right{
          right:${sticky.right.mobile}${sticky.rightUnit.mobile};
        }
        .slide-container.sticky.bottom{
            bottom:${sticky.bottom.mobile}${sticky.bottomUnit.mobile};
          }
        .slide-title-heading {
          margin-top:${slideTitle.space.mobile}${slideTitle.spaceUnit.mobile};
          margin-bottom: ${slideTitle.spaceBottom.mobile}${
          slideTitle.spaceBottomUnit.mobile
        };
        }
        .slide-list {
          margin-bottom:${slideList.space.mobile}${slideList.spaceUnit.mobile};
        }
        .slide-list-items>.slide-list>a{
          font-size:${slideList.fontSize.mobile}${slideList.fontUnit.mobile};
        }
        }

          `}
      </style>
    </>
  );
};

export default SlideStyle;
