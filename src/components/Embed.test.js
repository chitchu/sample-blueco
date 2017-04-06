import React from 'react';
import ReactDOM from 'react-dom';

import Embed from './Embed';
import { shallow, render } from 'enzyme';

describe(`Embed suite`, () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Embed />, div);
  });

  it('contains the correct class', () => {
    expect(shallow(<Embed />).is('.embed-widget')).toBe(true);
  });

  it('contains correct elements', () => {
    const el = render(<Embed title={'Test'} location={'Middle-earth'} />);
    expect(el.find('h1.Heading').text()).toBe('Test');
    expect(el.find('h2.Heading').text()).toBe('Middle-earth');
    //Todo: More of this
  });
});
