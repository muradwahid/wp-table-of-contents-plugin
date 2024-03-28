/* eslint-disable no-unused-vars */
import React from 'react';
import {
  getBackgroundCSS,
  getBorderCSS,
  getMultiShadowCSS,
} from '../../../../Components/utils/getCSS';
import { boxCss } from '../../utils/functions';

const SlideStyle = ({ attributes }) => {
  const { table, slideTitle, slideList, sticky, boxList, cId } = attributes;
  const blockWrapper = `#bppb-table-of-contents-${cId}`;
  const slideContainer = `${blockWrapper} .slide-container`;
  const titleWrapper = `${slideContainer} .slide-titleSubWrapper`;
  const subTitleWrapper = `${titleWrapper} .slide-title`;
  const title = `${subTitleWrapper} .slide-title-heading`;
  const slideListWrapper = `${slideContainer} .slide-list-items`;
  const list = `${slideListWrapper} .slide-list`;
  return (
    <>
      <style>
        {`
.slide-title {
  position: relative;
  margin-top:${slideTitle.space.desktop};
  margin-bottom: ${slideTitle.spaceBottom.desktop};
  margin-left: 8px;
}
.slide-titleSubWrapper{
  transition: all 0.3s ease-in;
  display: flex;
}

.slide-title-heading {
  margin:0px;
  margin-left: 30px !important;
  transition: all 0.3s ease-in;
  opacity: 0;
}
.slide-container:hover>.slide-titleSubWrapper>.slide-title>.slide-title-heading {
  margin-left: 8px !important;
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
  margin-bottom:${slideList.space.desktop};
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
  font-size:${slideList.fontSize.desktop};
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
  ${getBackgroundCSS(table.bgColor)};
  box-shadow: ${getMultiShadowCSS(table.shadow)};
padding:${boxCss(table.padding.desktop)};
  ${getBorderCSS(table.border)}
}



.slide-container.sticky {
  width:${table.width.desktop};
  ${getBackgroundCSS(table.bgColor)};
  box-shadow: ${getMultiShadowCSS(table.shadow)};
padding:${boxCss(table.padding.desktop)};
  z-index: ${sticky.zIndex.desktop} !important;
  position:fixed;
}
${["left", "right"].map(val => `.slide-container.sticky.${val}{
${val}:${sticky[val].desktop};
}`).join("")
          }
${["top", "bottom"].map(val => `.slide-container.sticky.${val}{
${val}:${sticky[val].desktop}
}`).join("")
          }
${sticky.verticalAlign === "center" ? `.slide-container.sticky.center{top:50%;  transform: translateY(-50%)}` : null
          }

        
@media screen and (min-width: 1024px) {
.slide-container{
padding:${boxCss(table.padding.desktop)}
}
.slide-container.sticky {
  width:${table.width.desktop};
  z-index: ${sticky.zIndex.desktop} !important;
  position:${sticky.device.includes('Desktop') ? 'fixed' : 'initial'};
}

${["left", "right"].map(val => `.slide-container.sticky.${val}{
  ${val}:${sticky[val].desktop};
}`).join("")
          }
${["top", "bottom"].map(val => `.slide-container.sticky.${val}{
${val}:${sticky[val].desktop}
}`).join("")
          }
        ${sticky.verticalAlign === "center" ? `.slide-container.sticky.center{top:50%;  transform: translateY(-50%)}` : null
          }

        .slide-title {
  margin-top:${slideTitle.space.desktop};
  margin-bottom: ${slideTitle.spaceBottom.desktop};
}
        .slide-list {
          margin-bottom:${slideList.space.desktop};
        }
        .slide-list-items>.slide-list>a{
          font-size:${slideList.fontSize.desktop};
        }
        }

@media (min-width: 768px) and (max-width: 1023px) {
          .slide-container{
  padding:${boxCss(table.padding.tablet)}
          }
        .slide-container.sticky {
          width:${table.width.tablet};
          z-index: ${sticky.zIndex.tablet} !important;
          position:${sticky.device.includes('Tablet') ? 'fixed' : 'initial'};
        }
        ${["left", "right"].map(val => `.slide-container.sticky.${val}{
            ${val}:${sticky[val].tablet};
          }`).join("")
          }
        ${["top", "bottom"].map(val => `.slide-container.sticky.${val}{
        ${val}:${sticky[val].tablet}
        }`).join("")
          }
        ${sticky.verticalAlign === "center" ? `.slide-container.sticky.center{top:50%;  transform: translateY(-50%)}` : null
          }
        .slide-title {
          margin-top:${slideTitle.space.tablet};
          margin-bottom: ${slideTitle.spaceBottom.tablet};
        }
        .slide-list {
          margin-bottom:${slideList.space.tablet};
        }
        .slide-list-items>.slide-list>a{
          font-size:${slideList.fontSize.tablet};
        }
        }

        @media screen and (max-width: 767px) {
          .slide-container{
      padding:${boxCss(table.padding.mobile)}
          }
        .slide-container.sticky {
          z-index: ${sticky.zIndex.mobile} !important;
          position:${sticky.device.includes('Mobile') ? 'fixed' : 'initial'};
          width:${table.width.mobile};
        }

${["left", "right"].map(val => `.slide-container.sticky.${val}{
    ${val}:${sticky[val].mobile};
  }`).join("")
          }
  ${["top", "bottom"].map(val => `.slide-container.sticky.${val}{
  ${val}:${sticky[val].mobile}
  }`).join("")
          }
        ${sticky.verticalAlign === "center" ? `.slide-container.sticky.center{top:50%;  transform: translateY(-50%)}` : null
          }
        .slide-title {
          margin-top:${slideTitle.space.mobile};
          margin-bottom: ${slideTitle.spaceBottom.mobile};
        }
        .slide-list {
          margin-bottom:${slideList.space.mobile};
        }
        .slide-list-items>.slide-list>a{
          font-size:${slideList.fontSize.mobile};
        }
        }

          `}
      </style>
    </>
  );
};

export default SlideStyle;
