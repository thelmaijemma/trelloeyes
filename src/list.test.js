import React from 'react';
import ReactDOM from 'react-dom';
import List from './components/list.js';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
    // render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<List />, div);
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree2 = renderer
      .create(<List />)
      .toJSON();
    expect(tree2).toMatchSnapshot();  
    });