import React from 'react'
import {shallow} from 'enzyme'
import toJson from 'enzyme-to-json'
import {ExpanseDashboardPage} from '../../components/dashboard'

test('should render dashboard correctly', () => {
    const wrapper = shallow(<ExpanseDashboardPage />)
    expect(toJson(wrapper)).toMatchSnapshot()
})