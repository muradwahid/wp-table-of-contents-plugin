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
    topAlignValueDesktop,
    bottomAlignUnitMobile,
    bottomAlignUnitTablet,
    bottomAlignUnitDesktop,
    bottomAlignValueMobile,
    bottomAlignValueTablet,
    bottomAlignValueDesktop,
    deskZindex,
    mobileZindex,
    tabletZindex,
  } = attributes;
  return (
    <>
      <style>
        {`
        ol>li>.table-content-anchor-list:hover{
          color:#532EC9 !important; 
          text-decoration:underline !important;
        }
        ol>li>.table-content-anchor-list{
          color:#2e2e2e !important;
          text-decoration:none;
          margin-left:5px;
        }
        .panel-table-container-order-list{
          list-style-type: ;
        }
        .accordion.sticky {
          background: white;
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
        `
          : `
        .panel-table-container-order-list{
          list-style-type:none;
        }
        panel-table-container-order-list>li{
          display:flex;
          align-items:center;
          gap:5px;
        }
        `
      }
      @media screen and (min-width: 1024px) {
        .accordion.sticky {
          z-index: ${deskZindex};
          position:${stickyDevice.includes('Desktop') ? 'fixed' : 'initial'};
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
      }
      @media (min-width: 768px) and (max-width: 1023px) {
        .accordion.sticky {
          z-index: ${tabletZindex};
          position:${stickyDevice.includes('Tablet') ? 'fixed' : 'initial'};
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
      }
      @media screen and (max-width: 767px) {
        .accordion.sticky {
          z-index: ${mobileZindex};
          position:${stickyDevice.includes('Mobile') ? 'fixed' : 'initial'};
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
      }
      `}
      </style>
    </>
  );
};

export default Style;
