import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// use describe the group together similar tests
describe("App", () => {

    // us 'it' to test a single attribute of the target
  it("should show the correct text", () => {
    //using help to render component for test
    const component = renderComponent(App);
    // makes an assertion about the target
    expect(component).to.contain("React simple starter");
  });
  
});

