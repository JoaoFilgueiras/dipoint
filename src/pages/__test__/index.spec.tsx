import React from 'react';
import { mount } from 'enzyme';

describe("Home page ", () => {
    it("should teste jest", () => {
        const wrapper = mount(<p>Hello Jest!</p>);
        expect(wrapper.text()).toMatch('Hello Jest!');
    });
});