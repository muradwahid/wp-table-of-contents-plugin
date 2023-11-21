import React from 'react';

const SlideStyle = ({ attributes }) => {
  const {
    slideBoxBgColor,
    deskZindex,
    tabletZindex,
    mobileZindex,
    horizontalAlign,
    leftAlignValueDesktop,
    leftAlignValueTablet,
    leftAlignValueMobile,
    leftAlignUnitDesktop,
    leftAlignUnitTablet,
    leftAlignUnitMobile,
    rightAlignValueDesktop,
    rightAlignValueTablet,
    rightAlignValueMobile,
    rightAlignUnitDesktop,
    rightAlignUnitTablet,
    rightAlignUnitMobile,
    verticalAlign,
    topAlignValueDesktop,
    topAlignValueTablet,
    topAlignValueMobile,
    stickyDevice,
    topAlignUnitDesktop,
    topAlignUnitTablet,
    topAlignUnitMobile,
    bottomAlignValueDesktop,
    bottomAlignValueTablet,
    bottomAlignValueMobile,
    bottomAlignUnitDesktop,
    bottomAlignUnitTablet,
    bottomAlignUnitMobile,
    slideBoxBrRadius,
    slideBoxBrColor,
    slideBoxBrWidth,
    boxShadow,
    boxPaddingDesktop,
    boxPaddingTablet,
    boxPaddingMobile,
    slideBarColor,
    slideSpaceHeadingTopDesktop,
    slideSpaceHeadingTopMobile,
    slideSpaceHeadingTopTablet,
    slideSpaceHeadingTopUnitDesktop,
    slideSpaceHeadingTopUnitTablet,
    slideSpaceHeadingTopUnitMobile,
    slideSpaceHeadingBottomDesktop,
    slideSpaceHeadingBottomTablet,
    slideSpaceHeadingBottomMobile,
    slideSpaceHeadingBottomUnitDesktop,
    slideSpaceHeadingBottomUnitTablet,
    slideSpaceHeadingBottomUnitMobile,
    slideListSpaceBottomDesktop,
    slideListSpaceBottomTablet,
    slideListSpaceBottomMobile,
    slideListSpaceBottomUnitDesktop,
    slideListSpaceBottomUnitTablet,
    slideListSpaceBottomUnitMobile,
    slideNormalTxtColor,
    slideNormalBarColor,
    slideHoverBarColor,
    slideHoverTxtColor,
    slideListFontSizeDesktop,
    slideListFontSizeTablet,
    slideListFontSizeMobile,
    slideListFontSizeUnitDesktop,
    slideListFontSizeUnitTablet,
    slideListFontSizeUnitMobile,
  } = attributes;
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
  margin-top:${slideSpaceHeadingTopDesktop}${slideSpaceHeadingTopUnitDesktop};
  margin-bottom: ${slideSpaceHeadingBottomDesktop}${slideSpaceHeadingBottomUnitDesktop};
}
.slide-container:hover>.slide-title>.slide-title-heading {
  margin-left: 8px;
  opacity: 1;
}
.slide-title::after {
  content: "";
  height: 3px;
  width: 38px;
  background-color: ${slideBarColor};
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
  margin-bottom:${slideListSpaceBottomDesktop}${slideListSpaceBottomUnitDesktop};
}
.slide-list>a{
  margin-left: 30px;
  transition: all 0.3s ease-in;
  opacity: 0;
  color:${slideNormalTxtColor};
  text-decoration:none;
}
.slide-container:hover>.slide-list-items>.slide-list>a{
  margin-left: 8px;
  opacity: 1;
}
.slide-list-items>.slide-list>a{
  font-size:${slideListFontSizeDesktop}${slideListFontSizeUnitDesktop};
}
.slide-list-items>.slide-list>a:hover{
    color:${slideHoverTxtColor};
}
.slide-list::after {
  content: "";
  height: 3px;
  width: 30px;
  background-color: ${slideNormalBarColor};
  position: absolute;
  left: 0px;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity .3s ease-in;
}
.slide-container:hover .slide-list::after{
  opacity: 0;
  background-color:${slideHoverBarColor};
} 


.slide-container{
  border: ${slideBoxBrWidth}px solid ${slideBoxBrColor};
  border-radius: ${slideBoxBrRadius}px;
  background:${
    slideBoxBgColor?.bgType === 'gradient'
      ? slideBoxBgColor?.gradient
      : slideBoxBgColor?.bg
  } !important;
  box-shadow: ${boxShadow?.color} ${boxShadow?.hOffset} ${boxShadow?.vOffset} ${
          boxShadow?.blur
        } ${boxShadow?.spreed} ${boxShadow?.isInset ? 'inset' : ''};
  padding-top:${boxPaddingDesktop?.top};
  padding-bottom:${boxPaddingDesktop?.bottom};
  padding-left:${boxPaddingDesktop?.left};
  padding-right:${boxPaddingDesktop?.right};
}



.slide-container.sticky {
          background:${
            slideBoxBgColor?.bgType === 'gradient'
              ? slideBoxBgColor?.gradient
              : slideBoxBgColor?.bg
          } !important;
          z-index: ${deskZindex};
          width:617px;
          position:fixed;
        }
        ${
          horizontalAlign === 1
            ? `.slide-container.sticky.left{
          left:${leftAlignValueDesktop}${leftAlignUnitDesktop};
        }`
            : `.slide-container.sticky.right{
          right:${rightAlignValueDesktop}${rightAlignUnitDesktop};
        }`
        }
        ${
          verticalAlign === 1
            ? `.slide-container.sticky.top{
          top:${topAlignValueDesktop}${topAlignUnitDesktop};
          }`
            : verticalAlign === 2
            ? `.slide-container.sticky.center{top:50%;  transform: translateY(-50%)}`
            : `.slide-container.sticky.bottom{
            bottom:${bottomAlignValueDesktop}${bottomAlignUnitDesktop};
          }`
        }
        
        @media screen and (min-width: 1024px) {
          .slide-container{
            padding-top:${boxPaddingDesktop?.top};
            padding-bottom:${boxPaddingDesktop?.bottom};
            padding-left:${boxPaddingDesktop?.left};
            padding-right:${boxPaddingDesktop?.right};
          }
        .slide-container.sticky {
          z-index: ${deskZindex};
          position:${stickyDevice.includes('Desktop') ? 'fixed' : 'initial'};
        }
        .slide-container.sticky.top{
          top:${topAlignValueDesktop}${topAlignUnitDesktop};
          }
        .slide-container.sticky.left{
          left:${leftAlignValueDesktop}${leftAlignUnitDesktop};
        }
        .slide-container.sticky.right{
          right:${rightAlignValueDesktop}${rightAlignUnitDesktop};
        }
        .slide-container.sticky.bottom{
            bottom:${bottomAlignValueDesktop}${bottomAlignUnitDesktop};
          }

        .slide-title-heading {
          margin-top:${slideSpaceHeadingTopDesktop}${slideSpaceHeadingTopUnitDesktop};
          margin-bottom: ${slideSpaceHeadingBottomDesktop}${slideSpaceHeadingBottomUnitDesktop};
        }
        .slide-list {
          margin-bottom:${slideListSpaceBottomDesktop}${slideListSpaceBottomUnitDesktop};
        }
        .slide-list-items>.slide-list>a{
          font-size:${slideListFontSizeDesktop}${slideListFontSizeUnitDesktop};
        }
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .slide-container{
            padding-top:${boxPaddingTablet?.top};
            padding-bottom:${boxPaddingTablet?.bottom};
            padding-left:${boxPaddingTablet?.left};
            padding-right:${boxPaddingTablet?.right};
          }
        .slide-container.sticky {
          z-index: ${tabletZindex};
          position:${stickyDevice.includes('Tablet') ? 'fixed' : 'initial'};
        }
        .slide-container.sticky.top{
          top:${topAlignValueTablet}${topAlignUnitTablet};
          }
        .slide-container.sticky.left{
          left:${leftAlignValueTablet}${leftAlignUnitTablet};
        }
        .slide-container.sticky.right{
          right:${rightAlignValueTablet}${rightAlignUnitTablet};
        }
        .slide-container.sticky.bottom{
            bottom:${bottomAlignValueTablet}${bottomAlignUnitTablet};
          }
        .slide-title-heading {
          margin-top:${slideSpaceHeadingTopTablet}${slideSpaceHeadingTopUnitTablet};
          margin-bottom: ${slideSpaceHeadingBottomTablet}${slideSpaceHeadingBottomUnitTablet};
        }
        .slide-list {
          margin-bottom:${slideListSpaceBottomTablet}${slideListSpaceBottomUnitTablet};
        }
        .slide-list-items>.slide-list>a{
          font-size:${slideListFontSizeTablet}${slideListFontSizeUnitTablet};
        }
        }

        @media screen and (max-width: 767px) {
          .slide-container{
            padding-top:${boxPaddingMobile?.top};
            padding-bottom:${boxPaddingMobile?.bottom};
            padding-left:${boxPaddingMobile?.left};
            padding-right:${boxPaddingMobile?.right};
          }
        .slide-container.sticky {
          z-index: ${mobileZindex};
          position:${stickyDevice.includes('Mobile') ? 'fixed' : 'initial'};
        }
        .slide-container.sticky.top{
          top:${topAlignValueMobile}${topAlignUnitMobile};
          }
        .slide-container.sticky.left{
          left:${leftAlignValueMobile}${leftAlignUnitMobile};
        }
        .slide-container.sticky.right{
          right:${rightAlignValueMobile}${rightAlignUnitMobile};
        }
        .slide-container.sticky.bottom{
            bottom:${bottomAlignValueMobile}${bottomAlignUnitMobile};
          }
        .slide-title-heading {
          margin-top:${slideSpaceHeadingTopMobile}${slideSpaceHeadingTopUnitMobile};
          margin-bottom: ${slideSpaceHeadingBottomMobile}${slideSpaceHeadingBottomUnitMobile};
        }
        .slide-list {
          margin-bottom:${slideListSpaceBottomMobile}${slideListSpaceBottomUnitMobile};
        }
        .slide-list-items>.slide-list>a{
          font-size:${slideListFontSizeMobile}${slideListFontSizeUnitMobile};
        }
        }

          `}
      </style>
    </>
  );
};

export default SlideStyle;
