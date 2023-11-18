const Style = ({ attributes }) => {
  const {
    markupView,
    sticky,
    horizontalAlign,
    verticalAlign,
    leftAlignValue,
    leftAlignUnit,
    rightAlignUnit,
    rightAlignValue,
    topAlignUnit,
    topAlignValue,
    deskZindex,
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
          left:${leftAlignValue}${leftAlignUnit};
        }`
            : `.accordion.sticky.right{
          right:${rightAlignValue}${rightAlignUnit};
        }`
        }
        ${
          verticalAlign === 1
            ? `.accordion.sticky.top{
          top:${topAlignValue}${topAlignUnit};
          }`
            : verticalAlign === 2
            ? `.accordion.sticky.center{top:50%;  transform: translateY(-50%)}`
            : `.accordion.sticky.bottom{
            bottom:0px
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
          position:initial;
        }
      }
      `}
      </style>
    </>
  );
};

export default Style;