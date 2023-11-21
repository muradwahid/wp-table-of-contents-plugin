import { useEffect } from 'react';
import Settings from './components/Settings/Settings';
import SmoothScroll from './components/SmoothScroll';
import TableContents from './components/TableContents/TableContents';
import Style from './components/Style/Style';
import Slide from './components/TableContents/Layout/Slide/Slide';
const Edit = (props) => {
  const { className, setAttributes, clientId, attributes } = props;
  const { customStyleToggle, customStyle } = attributes;

  useEffect(() => {
    clientId && setAttributes({ cId: clientId.substring(0, 10) });
  }, [clientId]); // Set & Update clientId to cId

  return (
    <div className={className} id={`hbHelloBlock-${clientId}`}>
      <SmoothScroll />
      <Style attributes={attributes} />
      <Settings attributes={attributes} setAttributes={setAttributes} />
      {!customStyleToggle ?  <TableContents attributes={attributes} />
        :
        customStyle==='slide'&& <Slide attributes={attributes}/>    
    }
    </div>
  );
};
export default Edit;
