import { forwardRef } from 'react';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useTranslation } from 'react-i18next';

import Avatar from '../../Avatar/Avatar';
import Button from '../../Button/Button';
import Dropdown from '../../Dropdown/Dropdown';
import DropdownDivider from '../../Dropdown/DropdownDivider/DropdownDivider';
import DropdownHeader from '../../Dropdown/DropdownHeader/DropdownHeader';
import DropdownItem from '../../Dropdown/DropdownItem/DropdownItem';

// eslint-disable-next-line react/display-name
const TopMenuUserMenu = forwardRef<any, { lng: string; testId?: string }>(
    (
        { lng, testId }: { lng: string; testId?: string },
        ref: React.Ref<any> | null,
    ) => {
        const { t } = useTranslation(lng);
        const { data: session } = useSession();

        return session ? (
            <Dropdown
                testId={testId}
                ref={ref}
                inline
                label={
                    <Avatar
                        alt={`${session.user.name} profile picture`}
                        placeholderInitials={session.user.name
                            ?.split(' ')
                            .map((n) => n[0])
                            .join('')}
                        img={session.user.pic}
                        rounded
                        className="space-x-0 md:space-x-4"
                    >
                        <h6 className="text-sm hidden md:block">
                            Hi, {session.user.name?.split(' ')[0]}
                        </h6>
                    </Avatar>
                }
            >
                <DropdownHeader>
                    <span className="block text-sm">{session.user.name}</span>
                    <span className="block truncate text-sm font-medium">
                        {session.user.email}
                    </span>
                </DropdownHeader>
                <DropdownItem>Dashboard</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem>Earnings</DropdownItem>
                <DropdownDivider />
                <DropdownItem>
                    <Button
                        type="button"
                        size="sm"
                        color="failure"
                        onClick={() => signOut()}
                    >
                        {t('sign-out')}
                    </Button>
                </DropdownItem>
            </Dropdown>
        ) : (
            <Button
                testId={testId}
                ref={ref}
                type="button"
                color="blue"
                onClick={() => signIn()}
            >
                {t('login') + ' / ' + t('register')}
            </Button>
        );
    },
);

export default TopMenuUserMenu;
