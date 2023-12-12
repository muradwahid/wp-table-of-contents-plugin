import { getBackgroundCSS, getMultiShadowCSS } from '../../../../Components/utils/getCSS';

const Style = ({ attributes }) => {
  const {
    table,
    header,
    boxList,
    markup,
    sticky
  } = attributes;
  const listSl = `ol>li>a.table-content-anchor-list`;
  return (
    <>
      <style>
        {`
        ${listSl}:hover{
          color:${boxList.hTxtColor} !important; 
          text-decoration:${
            boxList.hTxtDecoration ? 'underline' : 'none'
          } !important;
        }
        ${listSl}{
          color:${boxList.nTxtColor} !important;
          text-decoration:${boxList.nTxtDecoration ? 'underline' : 'none'};
          margin-left:5px;
        }
        .accordion{
          border: ${table.boxBWidth}px solid ${table.boxBColor};
          border-radius: ${table.boxBRadius}px;
          ${getBackgroundCSS(table?.bgColor)};
          box-shadow: ${getMultiShadowCSS(table.shadow)};
          overflow:hidden;
        }
        .accordion.sticky {
          ${getBackgroundCSS(table.bgColor)};
          z-index: ${sticky.zIndex.desktop};

          position:fixed;
        }
        ${
          sticky.horizonAlign === 1
            ? `.accordion.sticky.left{
          left:${sticky.left.desktop}${sticky.leftUnit.desktop};
        }`
            : `.accordion.sticky.right{
          right:${sticky.right.desktop}${sticky.rightUnit.desktop};
        }`
        }
        ${
          sticky.verticalAlign === 1
            ? `.accordion.sticky.top{
          top:${sticky.top.desktop}${sticky.topUnit.desktop};
          }`
            : sticky.verticalAlign === 2
            ? `.accordion.sticky.center{top:50%;  transform: translateY(-50%)}`
            : `.accordion.sticky.bottom{
            bottom:${sticky.bottom.desktop}${sticky.bottomUnit.desktop};
          }`
        }
      ${
        markup.view === 'decimal'
          ? `
          
        .panel-table-container-order-list{
          list-style-type:decimal;
          margin:0px;
          margin-left:${boxList.padding.desktop?.left};
        }
        .panel-table-container-order-list>.panel-table-list-items::marker{
          color:${markup.color};
          font-size:${markup.markupSize.desktop}${markup.markupUnit.desktop};
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
          color:${markup.color};
          font-size:${markup.markupSize.desktop}${markup.markupUnit.desktop} !important;
        }
        `
      }
      .accordion>.accordion-title{
        background:${header.bgColor};
        border-bottom: ${header.separatorWidth}px solid ${
          header.separatorColor
        };
        margin-bottom:-2px;
      }
      .accordion>.panel{
        ${
          boxList.maxHeight.desktop > 0
            ? 'max-height:' + boxList.maxHeight.desktop + 'px;'
            : ''
        }
        ${boxList.maxHeight.desktop > 0 ? 'overflow-y:auto;' : ''}
        
        
      }
      a.table-content-anchor-list.item-active{
        color:${boxList.hTxtColor} !important;
      }
      .panel>.panel-table-container-order-list>.panel-table-list-items{
        padding-top:${boxList.padding.desktop?.top};
        padding-bottom:${boxList.padding.desktop?.bottom};
        padding-right:${boxList.padding.desktop?.right};
      }
      .panel>.panel-table-container-order-list{
        padding-left:${boxList.padding.desktop?.left};
        padding-top:10px;
      }
      .panel-table-list-items::marker{
          font-size: 40px;
        }
      @media screen and (min-width: 1024px) {
        .accordion.sticky {
            width:617px;
          z-index: ${sticky.zIndex.desktop};
          position:${sticky?.device.includes('Desktop') ? 'fixed' : 'initial'};
        }
        .accordion.sticky.top{
          top:${sticky.top.desktop}${sticky.topUnit.desktop};
          }
        .accordion.sticky.left{
          left:${sticky.left.desktop}${sticky.leftUnit.desktop};
        }
        .accordion.sticky.right{
          right:${sticky.right.desktop}${sticky.rightUnit.desktop};
        }
        .accordion.sticky.bottom{
            bottom:${sticky.bottom.desktop}${sticky.bottomUnit.desktop};
          }
        .accordion>.panel{
          ${
            boxList.maxHeight.desktop > 0
              ? 'max-height:' + boxList.maxHeight.desktop + 'px;'
              : ''
          }
          ${boxList.maxHeight.desktop > 0 ? 'overflow-y:auto;' : ''}
      }
      .panel>.panel-table-container-order-list>.panel-table-list-items{
        padding-top:${boxList.padding.desktop?.top};
        padding-bottom:${boxList.padding.desktop?.bottom};
        padding-right:${boxList.padding.desktop?.right};
      }
      .panel>.panel-table-container-order-list{
        padding-left:${boxList.padding.desktop?.left};
      }
      .panel-table-container-order-list>.panel-table-list-items::marker{
          color:${markup.color};
          font-size:${markup.markupSize.desktop}${markup.markupUnit.desktop};
        }
      .panel-table-container-order-list>.panel-table-list-items>span>i{
          color:${markup.color};
          font-size:${markup.markupSize.desktop}${
          markup.markupUnit.desktop
        } !important;
        }
      }
      @media (min-width: 768px) and (max-width: 1023px) {
        .accordion.sticky {
          width:100%;
          z-index: ${sticky.zIndex.tablet};
          position:${sticky.device.includes('Tablet') ? 'fixed' : 'initial'};
        }
        .accordion.sticky.top{
          top:${sticky.top.tablet}${sticky.topUnit.tablet};
          }
        .accordion.sticky.left{
          left:${sticky.left.tablet}${sticky.leftUnit.tablet};
        }
        .accordion.sticky.right{
          right:${sticky.right.tablet}${sticky.rightUnit.tablet};
        }
        .accordion.sticky.bottom{
            bottom:${sticky.bottom.tablet}${sticky.bottomUnit.tablet};
          }
        .accordion>.panel{
                    ${
                      boxList.maxHeight.tablet > 0
                        ? 'max-height:' + boxList.maxHeight.tablet + 'px;'
                        : ''
                    }
          ${boxList.maxHeight.tablet > 0 ? 'overflow-y:auto;' : ''}
        }
      .panel>.panel-table-container-order-list>.panel-table-list-items{
        padding-top:${boxList.padding.tablet?.top};
        padding-bottom:${boxList.padding.tablet?.bottom};
        padding-right:${boxList.padding.tablet?.right};
      }
      .panel>.panel-table-container-order-list{
        padding-left:${boxList.padding.tablet?.left};
      }
    .panel-table-container-order-list>.panel-table-list-items::marker{
          color:${markup.color};
          font-size:${markup.markupSize.tablet}${markup.markupUnit.tablet};
        }
    .panel-table-container-order-list>.panel-table-list-items>span>i{
          color:${markup.color};
          font-size:${markup.markupSize.tablet}${
          markup.markupUnit.tablet
        } !important;
        }

      }
      @media screen and (max-width: 767px) {
        .accordion.sticky {
          width:100%;
          z-index: ${sticky.zIndex.mobile};
          position:${sticky.device.includes('Mobile') ? 'fixed' : 'initial'};
        }
        .accordion.sticky.top{
          top:${sticky.top.mobile}${sticky.topUnit.mobile};
          }
        .accordion.sticky.left{
          left:${sticky.left.mobile}${sticky.leftUnit.mobile};
        }
        .accordion.sticky.right{
          right:${sticky.right.mobile}${sticky.rightUnit.mobile};
        }
        .accordion.sticky.bottom{
            bottom:${sticky.bottom.mobile}${sticky.bottomUnit.mobile};
          }
        .accordion>.panel{
                    ${
                      boxList.maxHeight.mobile > 0
                        ? 'max-height:' + boxList.maxHeight.mobile + 'px;'
                        : ''
                    }
          ${boxList.maxHeight.mobile > 0 ? 'overflow-y:auto;' : ''}
        }
      .panel>.panel-table-container-order-list>.panel-table-list-items{
        padding-top:${boxList.padding.mobile?.top};
        padding-bottom:${boxList.padding.mobile?.bottom};
        padding-right:${boxList.padding.mobile?.right};
      }
      .panel>.panel-table-container-order-list{
        padding-left:${boxList.padding.mobile?.left};
      }
      .panel-table-container-order-list>.panel-table-list-items::marker{
          color:${markup.color};
          font-size:${markup.markupSize.mobile}${markup.markupUnit.mobile};
        }
      .panel-table-container-order-list>.panel-table-list-items>span>i{
          color:${markup.color};
          font-size:${markup.markupSize.mobile}${
          markup.markupUnit.mobile
        } !important;
        }
      }
      `}
      </style>
    </>
  );
};

export default Style;
