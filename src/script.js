import { createRoot } from 'react-dom/client';
import ListFront from './components/FrontEnd/ListFront';
import SliderFront from './components/FrontEnd/SliderFront';
import TableFront from './components/FrontEnd/TableFront';
import TimelineFront from './components/FrontEnd/TimelineFront';
import './style.scss';
// Block Name
function FrontEnd({ attributes }) {
  const { theme } = attributes;

  switch (theme) {
    case 'slide':
      return <SliderFront attributes={attributes} />;
    case 'timeline':
      return <TimelineFront attributes={attributes} />;
    case 'list':
      return <ListFront attributes={attributes} />;
    default:
      return <TableFront attributes={attributes} />;
  }
}

const container = document.querySelectorAll('.wp-block-bppb-hello');
container?.forEach((ele) => {
  const attributes = JSON.parse(ele.dataset.attributes);
  const root = createRoot(ele);
  root.render(<FrontEnd attributes={attributes} />);
});
