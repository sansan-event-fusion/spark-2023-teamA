import type { Preview } from "@storybook/react";
import '../src/styles/globals.css';

export const parameters = {
   actions: { argTypesRegex: "^on[A-Z].*" },
   controls: {
     matchers: {
       color: /(background|color)$/i,
       date: /Date$/,
     },
   },
 }
const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};
export default preview;
