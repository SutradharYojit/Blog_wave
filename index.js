/**
 * @format
 */

import { AppRegistry, Text } from 'react-native';
import App from './lib/app/App';
import { name as appName } from './app.json';

// Apply font family globally
/* const TextRender = Text.render;
Text.render = function render(props) {
    props = { ...props, style: [{ fontFamily: 'Ubuntu' }, props.style] };
    return TextRender.apply(this, [props]);
} */
AppRegistry.registerComponent(appName, () => App);
