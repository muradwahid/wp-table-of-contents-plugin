import { createRoot } from 'react-dom/client';
import './style.scss';
import TableContents from './components/TableContents/TableContents';
import Style from './components/Style/Style';
// Block Name
function FrontEnd({ attributes }) {
  
  return (
    <>
      <Style attributes={attributes}/>
			<TableContents attributes={attributes} />
    </>
  );
}

const container = document.querySelectorAll('.wp-block-bppb-hello');
container?.forEach((ele) => {
  const attributes = JSON.parse(ele.dataset.attributes);
  const root = createRoot(ele);
  root.render(<FrontEnd attributes={attributes} />);
});
