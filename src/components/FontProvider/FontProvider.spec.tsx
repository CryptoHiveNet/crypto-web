import { waitFor } from '@testing-library/react';

import FontProvider from './FontProvider';

describe('FontProvider component unit tests', () => {
  it('should render the HTML document with the appropriate font class name', async () => {
    waitFor(() => {
      const lng = 'en';
      const wrapper = mount(
        <FontProvider
          children={<div>Test</div>}
          params={{ lng }}
        />,
      );

      expect(wrapper.find('html').prop('className')).toBe('font-roboto');
    });
  });
  it('should render the HTML document with the appropriate font class name when the language is Arabic', async () => {
    waitFor(() => {
      const lng = 'fa';
      const wrapper = mount(
        <FontProvider
          children={<div>Test</div>}
          params={{ lng }}
        />,
      );

      expect(wrapper.find('html').prop('className')).toBe('font-vazirmatn');
    });
  });
});
