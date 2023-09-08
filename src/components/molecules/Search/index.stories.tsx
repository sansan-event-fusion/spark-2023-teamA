import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SearchBox } from '.';

const meta: Meta<typeof SearchBox> = {
  title: 'molecules/SearchBox',
  component: SearchBox,
};
export default meta;

type Story = StoryObj<typeof SearchBox>;

export const TopPageSearchBox: Story = {
  render: () => < SearchBox labelText='探す' placeholder='お探しの賃貸名を記入する'/>,
};
