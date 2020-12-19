import React from 'react';
import ReactDOM from 'react-dom';
import Card from './components/card';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    // first create a DOM element to render the component into
    const div = document.createElement('div');
    // render the component, this is the actual test, if something is wrong it will fail here
    ReactDOM.render(<Card />, div);
    // clean up code
    ReactDOM.unmountComponentAtNode(div);
  });

it('renders the UI as expected', () => {
    const tree3 = renderer
      .create(<Card />)
      .toJSON();
    expect(tree3).toMatchSnapshot();  
    }); 