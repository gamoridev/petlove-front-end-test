import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import App from '../../App';
import Panel from '../../components/Panel';

// Shallow rendering test
const appRenderer = new ShallowRenderer();
appRenderer.render(<App/>);

const result = appRenderer.getRenderOutput();
const defaultChildren = result.props.children;

test('App wrapper renders properly', () => {
	expect(result.type).toBe('div');
	expect(result.props.className).toEqual('App');
});

test('App default chidren renders properly', () => {
	expect(defaultChildren[0].type).toEqual(Panel)
});