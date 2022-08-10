import React from 'react';
import ReactDOM from 'react-dom';
import { App } from 'App';
import WebFont from 'webfontloader';

WebFont.load({
  google: {
    families: ['Roboto Flex:200,300,400,500,700'],
  },
});

ReactDOM.render(<App />, document.getElementById('root'));
