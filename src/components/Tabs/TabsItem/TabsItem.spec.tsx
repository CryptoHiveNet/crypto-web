import { HiAdjustments } from 'react-icons/hi';

import { render, screen } from '@testing-library/react';

import TabsItem from './TabsItem';

const mockPropsOne = {
    id: 'tabs-item-one',
    active: true,
    disabled: false,
    title: 'Test Tab One',
    icon: HiAdjustments,
    className: 'custom-tabs-item',
    testId: 'test-tabs-item-one',
};

describe('TabsItem component unit tests', () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });

    it('should render TabsItem component with required props', () => {
        render(<TabsItem {...mockPropsOne}>TabsItem Content One</TabsItem>);
        const tabsItemComponent = screen.getByText('TabsItem Content One');
        expect(tabsItemComponent).toBeInTheDocument();
        expect(tabsItemComponent).toHaveClass('custom-tabs-item');
    });
});
