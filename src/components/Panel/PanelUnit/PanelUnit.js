import {useState,useEffect,useRef} from 'react';

const PanelUnit = ({ units, value, renderFunction }) => {
  const [toggle, setToggle] = useState(false);
  const unitRef = useRef();
  useEffect(() => {
    const handle = (e) => {
      if (!unitRef?.current?.contains(e.target)) {
        setToggle(false);
      }
    };
    document.addEventListener('mousedown', handle);
    return () => {
      document.removeEventListener('mousedown', handle);
    };
  });
  return (
    <>
      <style>
        {`
          .custom-unit-comp{
            width:35px;
            position:relative;
          }
          .custom-unit-comp .custom-unit-dropdown{
              width: 100%;
              display: flex;
              justify-content: space-between;
              align-items: center;
              padding: 0 3px;
              padding-bottom:4px;
              border-radius: 2px;
              transition: background .2s ease-in-out;
              cursor: pointer;
            }
          .custom-unit-comp .custom-unit-dropdown>i{
              margin-top:5px;
            }
          .custom-unit-comp .custom-unit-dropdown:hover{
              background-color: #e6e8ea;
              color:#006BA1;
            }
          .custom-unit-comp .custom-unit-value{
              background-color: #e7e5e5;
              text-align: center;
              border-radius: 7px;
              overflow:hidden;
              position: absolute;
              z-index: 99;
              left: 3px;
            }
          .custom-unit-comp .custom-unit-value p {
              margin:0px;
              padding: 5px 8px;
              cursor:pointer;
              transition: background-color .2s ease-in-out;
            }
          .custom-unit-comp .custom-unit-value p:hover{
              background-color: #dddddd;
              color:#006BA1;
            }
          `}
      </style>
      <div ref={unitRef} className="custom-unit-comp">
        <div
          onClick={() => setToggle(!toggle)}
          className="custom-unit-dropdown"
        >
          <span>{value}</span>
          <i className="fa-solid fa-angle-down"></i>
        </div>
        {toggle && (
          <div className="custom-unit-value">
            {units.map((unit, i) => (
              <div key={i} onClick={()=>setToggle(false)}>
                <p onClick={() => renderFunction(unit)}>
                  {unit}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default PanelUnit;
