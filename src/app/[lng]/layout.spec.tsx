import { t } from 'i18next';
import { getServerSession } from 'next-auth';
import { ReactNode } from 'react';

import { waitFor } from '@testing-library/react';

import RootLayout, { metadata } from './layout';

jest.mock('next/font/google');
jest.mock('next-auth', () => ({
  getServerSession: jest.fn(),
}));

jest.mock('@/types/components/ReactQueryProvider/ReactQueryProvider', () => {
  return function DummyReactQueryProvider({
    children,
  }: {
    children: ReactNode;
  }) {
    return <>{children}</>;
  };
});

jest.mock('@/types/components/SessionProvider/SessionProvider', () => {
  return function DummySessionProvider({
    children,
    session,
  }: {
    children: ReactNode;
    session: any;
  }) {
    return <>{children}</>;
  };
});

jest.mock('@/types/theme/ThemeProvider', () => {
  return function DummyThemeProvider({ children }: { children: ReactNode }) {
    return <>{children}</>;
  };
});

const mockGetServerSession = getServerSession as jest.MockedFunction<
  typeof getServerSession
>;

beforeEach(() => {
  mockGetServerSession.mockResolvedValue({ user: null });
});

describe('RootLayout', () => {
  const expectedTitle = t('metadata_title');
  const expectedDescription = t('metadata_description');
  let lng = 'en';
  const dir = 'ltr';
  const session = { user: { name: 'John Doe' } };

  it('metadata contains the expected title', () => {
    expect(metadata.title).toBe(expectedTitle);
  });
  it('metadata contains the expected description', () => {
    expect(metadata.description).toBe(expectedDescription);
  });
  it('should render the HTML document with the appropriate language and direction', async () => {
    waitFor(() => {
      const getServerSessionMock = jest
        .spyOn(getServerSession, 'getServerSession')
        .mockResolvedValue(session);

      const wrapper = mount(
        <RootLayout
          children={<div>Test</div>}
          params={{ lng }}
        />,
      );

      expect(wrapper.find('html').prop('lang')).toBe(lng);
      expect(wrapper.find('html').prop('dir')).toBe(dir);
      expect(getServerSessionMock).toHaveBeenCalled();

      getServerSessionMock.mockRestore();
    });
  });
  it("should render the HTML document with default language and direction when 'lng' parameter is not provided", async () => {
    waitFor(() => {
      const getServerSessionMock = jest
        .spyOn(getServerSession, 'getServerSession')
        .mockResolvedValue(session);

      const wrapper = mount(
        <RootLayout
          children={<div>Test</div>}
          params={{}}
        />,
      );

      expect(wrapper.find('html').prop('lang')).toBe(lng);
      expect(wrapper.find('html').prop('dir')).toBe(dir);
      expect(getServerSessionMock).toHaveBeenCalled();

      getServerSessionMock.mockRestore();
    });
  });
});
