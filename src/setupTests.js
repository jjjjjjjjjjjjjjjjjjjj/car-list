// Ref: https://github.com/facebook/create-react-app/issues/3199#issuecomment-334801311
import raf from 'testPolyfills'
import Enzyme, { shallow, render, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

// React 16 Enzyme adapter
Enzyme.configure({ adapter: new Adapter() })

// Make Enzyme functions available in all test files without importing
global.shallow = shallow
global.render = render
global.mount = mount

// Fail tests on any warning
console.error = message => {
  throw new Error(message)
}
