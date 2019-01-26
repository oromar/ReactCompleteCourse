import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {NotFoundPage} from '../../components/not-found'

test('should render not found page correctly', () => {
    const wrapper = shallow(<NotFoundPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
})