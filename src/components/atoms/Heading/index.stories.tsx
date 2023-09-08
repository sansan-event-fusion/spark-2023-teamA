import { StoryObj } from "@storybook/react";
import { Heading } from ".";


const meta = {
  title: 'atoms/Heading',
  component:  Heading,
}

export default meta;

type Story = StoryObj<typeof Heading>;

export const Error: Story = {
  render: () => <Heading />
}