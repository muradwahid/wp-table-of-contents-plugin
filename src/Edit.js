import { useEffect } from 'react';
import Settings from './components/Settings/Settings';
import SmoothScroll from './components/SmoothScroll';
import TableContents from './components/TableContents/TableContents';
import Style from './components/Style/Style';
const Edit = (props) => {
  const { className, setAttributes, clientId, attributes } = props;

  useEffect(() => {
    clientId && setAttributes({ cId: clientId.substring(0, 10) });
  }, [clientId]); // Set & Update clientId to cId

  return (
    <div className={className} id={`hbHelloBlock-${clientId}`}>
      <SmoothScroll />
      <Style attributes={attributes} />
      <Settings attributes={attributes} setAttributes={setAttributes} />
      <TableContents attributes={attributes}/>
    </div>
  );
};
export default Edit;
