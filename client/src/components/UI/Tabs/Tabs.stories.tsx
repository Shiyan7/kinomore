import React from 'react';
import {ComponentStory, ComponentMeta} from '@storybook/react';
import {Tabs} from './Tabs';
import "../../../scss/components/tabs.scss"

export default {
  title: 'Tabs',
  component: Tabs,
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = () => (
  <div style={{padding: '0 15px'}}>
    <Tabs tabs={tabs} />
  </div>
);

const tabs = [
    {txt: 'Таб 1', content: <p>Контент таба 1</p>},
    {txt: 'Таб 2', content: <p>Контент таба 2</p>},
    {txt: 'Таб 3', content: <p>Контент таба 3</p>},
]

export const Example = Template.bind({});