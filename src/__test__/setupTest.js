import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
/**no ayuda a ejecutar las peticiones fetch para probar
 * nuestra api
 */
global.fetch = require('jest-fetch-mock')