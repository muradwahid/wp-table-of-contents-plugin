const Style = ({ attributes }) => {
  const {
    markupView,
    sticky,
    stickyDevice,
    horizontalAlign,
    verticalAlign,
    leftAlignValueDesktop,
    leftAlignUnitDesktop,
    leftAlignUnitTablet,
    leftAlignUnitMobile,
    leftAlignValueTablet,
    leftAlignValueMobile,
    rightAlignUnitDesktop,
    rightAlignValueDesktop,
    rightAlignUnitTablet,
    rightAlignUnitMobile,
    rightAlignValueTablet,
    rightAlignValueMobile,
    topAlignUnitDesktop,
    topAlignUnitTablet,
    topAlignUnitMobile,
    topAlignValueDesktop,
    topAlignValueTablet,
    topAlignValueMobile,
    bottomAlignUnitMobile,
    bottomAlignUnitTablet,
    bottomAlignUnitDesktop,
    bottomAlignValueMobile,
    bottomAlignValueTablet,
    bottomAlignValueDesktop,
    deskZindex,
    mobileZindex,
    tabletZindex,
    backgroundColor,
    boxBColor,
    boxBWidth,
    boxBRadius,
    boxShadow,
    boxPaddingDesktop,
    boxPaddingTablet,
    boxPaddingMobile,
    headerBgColor,
    separatorColor,
    separatorWidth,
    listPaddingDesktop,
    listPaddingTablet,
    listPaddingMobile,
    listMaxHeightDesktop,
    listMaxHeightTablet,
    listMaxHeightMobile,
    normalTxtColor,
    normalTxtDecoration,
    hoverTxtDecoration,
    hoverTxtColor,
    markerFontSizeDesktop,
    markerFontSizeTablet,
    markerFontSizeMobile,
    markerFontUnitDesktop,
    markerFontUnitTablet,
    markerFontUnitMobile,
    markerColor,
  } = attributes;

  const listSl = `ol>li>.table-content-anchor-list`;

  return (
    <>
      <style>
        {`
        ${listSl}:hover{
          color:${hoverTxtColor} !important; 
          text-decoration:${
            hoverTxtDecoration ? 'underline' : 'none'
          } !important;
        }
        
        ${listSl}{
          color:${normalTxtColor} !important;
          text-decoration:${normalTxtDecoration ? 'underline' : 'none'};
          margin-left:5px;
        }
        .accordion{
          border: ${boxBWidth}px solid ${boxBColor};
          border-radius: ${boxBRadius}px;
          background:${
            backgroundColor?.bgType === 'gradient'
              ? backgroundColor?.gradient
              : backgroundColor?.bg
          } !important;
          box-shadow: ${boxShadow?.color} ${boxShadow?.hOffset} ${
          boxShadow?.vOffset
        } ${boxShadow?.blur} ${boxShadow?.spreed} ${
          boxShadow?.isInset ? 'inset' : ''
        };
        }
        .accordion.sticky {
          background:${
            backgroundColor?.bgType === 'gradient'
              ? backgroundColor?.gradient
              : backgroundColor?.bg
          } !important;
          z-index: ${deskZindex};
          width:617px;
          position:fixed;
        }
        ${
          horizontalAlign === 1
            ? `.accordion.sticky.left{
          left:${leftAlignValueDesktop}${leftAlignUnitDesktop};
        }`
            : `.accordion.sticky.right{
          right:${rightAlignValueDesktop}${rightAlignUnitDesktop};
        }`
        }
        ${
          verticalAlign === 1
            ? `.accordion.sticky.top{
          top:${topAlignValueDesktop}${topAlignUnitDesktop};
          }`
            : verticalAlign === 2
            ? `.accordion.sticky.center{top:50%;  transform: translateY(-50%)}`
            : `.accordion.sticky.bottom{
            bottom:${bottomAlignValueDesktop}${bottomAlignUnitDesktop};
          }`
        }
      ${
        markupView === 'decimal'
          ? `
          
        .panel-table-container-order-list{
          list-style-type:decimal;
          margin-left:22px;
        }
        .panel-table-container-order-list>.panel-table-list-items::marker{
          color:${markerColor};
          font-size:${markerFontSizeDesktop}${markerFontUnitDesktop};
        }
        `
          : `
        .panel-table-container-order-list{
          list-style-type:none;
        }
        .panel-table-container-order-list>li{
          display:flex;
          align-items:center;
          gap:5px;
        }
        .panel-table-container-order-list>.panel-table-list-items>span>i{
          color:${markerColor};
          font-size:${markerFontSizeDesktop}${markerFontUnitDesktop} !important;
        }
        `
      }
      .accordion>.accordion-title{
        background:${headerBgColor};
        border-bottom: ${separatorWidth}px solid ${separatorColor};
      }
      .accordion>.panel{
        padding-top:${boxPaddingDesktop?.top};
        padding-bottom:${boxPaddingDesktop?.bottom};
        padding-left:${boxPaddingDesktop?.left};
        padding-right:${boxPaddingDesktop?.right};
        ${
          listMaxHeightDesktop > 0
            ? 'max-height:' + listMaxHeightDesktop + 'px;'
            : ''
        }
        ${listMaxHeightDesktop > 0 ? 'overflow-y:auto;' : ''}
        
        
      }
      .panel>.panel-table-container-order-list>.panel-table-list-items{
        padding-top:${listPaddingDesktop?.top};
        padding-bottom:${listPaddingDesktop?.bottom};
        padding-right:${listPaddingDesktop?.right};
      }
      .panel>.panel-table-container-order-list{
        padding-left:${listPaddingDesktop?.left};
      }
      .panel-table-list-items::marker{
          font-size: 40px;
        }
      @media screen and (min-width: 1024px) {
        .accordion.sticky {
          z-index: ${deskZindex};
          position:${stickyDevice.includes('Desktop') ? 'fixed' : 'initial'};
        }
        .accordion.sticky.top{
          top:${topAlignValueDesktop}${topAlignUnitDesktop};
          }
        .accordion.sticky.left{
          left:${leftAlignValueDesktop}${leftAlignUnitDesktop};
        }
        .accordion.sticky.right{
          right:${rightAlignValueDesktop}${rightAlignUnitDesktop};
        }
        .accordion.sticky.bottom{
            bottom:${bottomAlignValueDesktop}${bottomAlignUnitDesktop};
          }
        .accordion>.panel{
          padding-top:${boxPaddingDesktop?.top};
          padding-bottom:${boxPaddingDesktop?.bottom};
          padding-left:${boxPaddingDesktop?.left};
          padding-right:${boxPaddingDesktop?.right};
          ${
            listMaxHeightDesktop > 0
              ? 'max-height:' + listMaxHeightDesktop + 'px;'
              : ''
          }
          ${listMaxHeightDesktop > 0 ? 'overflow-y:auto;' : ''}
      }
      .panel>.panel-table-container-order-list>.panel-table-list-items{
        padding-top:${listPaddingDesktop?.top};
        padding-bottom:${listPaddingDesktop?.bottom};
        padding-right:${listPaddingDesktop?.right};
      }
      .panel>.panel-table-container-order-list{
        padding-left:${listPaddingDesktop?.left};
      }
      .panel-table-container-order-list>.panel-table-list-items::marker{
          color:${markerColor};
          font-size:${markerFontSizeDesktop}${markerFontUnitDesktop};
        }
      .panel-table-container-order-list>.panel-table-list-items>span>i{
          color:${markerColor};
          font-size:${markerFontSizeDesktop}${markerFontUnitDesktop} !important;
        }
      }
      @media (min-width: 768px) and (max-width: 1023px) {
        .accordion.sticky {
          z-index: ${tabletZindex};
          position:${stickyDevice.includes('Tablet') ? 'fixed' : 'initial'};
        }
        .accordion.sticky.top{
          top:${topAlignValueTablet}${topAlignUnitTablet};
          }
        .accordion.sticky.left{
          left:${leftAlignValueTablet}${leftAlignUnitTablet};
        }
        .accordion.sticky.right{
          right:${rightAlignValueTablet}${rightAlignUnitTablet};
        }
        .accordion.sticky.bottom{
            bottom:${bottomAlignValueTablet}${bottomAlignUnitTablet};
          }
        .accordion>.panel{
          padding-top:${boxPaddingTablet?.top};
          padding-bottom:${boxPaddingTablet?.bottom};
          padding-left:${boxPaddingTablet?.left};
          padding-right:${boxPaddingTablet?.right};
                    ${
                      listMaxHeightTablet > 0
                        ? 'max-height:' + listMaxHeightTablet + 'px;'
                        : ''
                    }
          ${listMaxHeightTablet > 0 ? 'overflow-y:auto;' : ''}
        }
      .panel>.panel-table-container-order-list>.panel-table-list-items{
        padding-top:${listPaddingTablet?.top};
        padding-bottom:${listPaddingTablet?.bottom};
        padding-right:${listPaddingTablet?.right};
      }
      .panel>.panel-table-container-order-list{
        padding-left:${listPaddingTablet?.left};
      }
    .panel-table-container-order-list>.panel-table-list-items::marker{
          color:${markerColor};
          font-size:${markerFontSizeTablet}${markerFontUnitTablet};
        }
    .panel-table-container-order-list>.panel-table-list-items>span>i{
          color:${markerColor};
          font-size:${markerFontSizeTablet}${markerFontUnitTablet} !important;
        }

      }
      @media screen and (max-width: 767px) {
        .accordion.sticky {
          z-index: ${mobileZindex};
          position:${stickyDevice.includes('Mobile') ? 'fixed' : 'initial'};
        }
        .accordion.sticky.top{
          top:${topAlignValueMobile}${topAlignUnitMobile};
          }
        .accordion.sticky.left{
          left:${leftAlignValueMobile}${leftAlignUnitMobile};
        }
        .accordion.sticky.right{
          right:${rightAlignValueMobile}${rightAlignUnitMobile};
        }
        .accordion.sticky.bottom{
            bottom:${bottomAlignValueMobile}${bottomAlignUnitMobile};
          }
        .accordion>.panel{
          padding-top:${boxPaddingMobile?.top};
          padding-bottom:${boxPaddingMobile?.bottom};
          padding-left:${boxPaddingMobile?.left};
          padding-right:${boxPaddingMobile?.right};
                    ${
                      listMaxHeightMobile > 0
                        ? 'max-height:' + listMaxHeightMobile + 'px;'
                        : ''
                    }
          ${listMaxHeightMobile > 0 ? 'overflow-y:auto;' : ''}
        }
      .panel>.panel-table-container-order-list>.panel-table-list-items{
        padding-top:${listPaddingMobile?.top};
        padding-bottom:${listPaddingMobile?.bottom};
        padding-right:${listPaddingMobile?.right};
      }
      .panel>.panel-table-container-order-list{
        padding-left:${listPaddingMobile?.left};
      }
      .panel-table-container-order-list>.panel-table-list-items::marker{
          color:${markerColor};
          font-size:${markerFontSizeMobile}${markerFontUnitMobile};
        }
      .panel-table-container-order-list>.panel-table-list-items>span>i{
          color:${markerColor};
          font-size:${markerFontSizeMobile}${markerFontUnitMobile} !important;
        }
      }
      `}
      </style>
    </>
  );
};

export default Style;
