import { signIn, signOut, useSession } from 'next-auth/react';

import Avatar from '../../Avatar/Avatar';
import Dropdown from '../../Dropdown/Dropdown';
import DropdownDivider from '../../Dropdown/DropdownDivider/DropdownDivider';
import DropdownHeader from '../../Dropdown/DropdownHeader/DropdownHeader';
import DropdownItem from '../../Dropdown/DropdownItem/DropdownItem';

const TopMenuUserMenu = () => {
    const { data: session } = useSession();
    const userMockData = {
        name: 'Bonnie Green',
        email: 'name@flowbite.com',
        pic: 'https://flowbite.com/docs/images/people/profile-picture-5.jpg',
    };

    return session ? (
        <Dropdown
            inline
            label={
                <Avatar
                    alt={`${userMockData.name} profile picture`}
                    img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    rounded
                />
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
                <button
                    type="button"
                    onClick={() => signOut()}
                >
                    Sign out
                </button>
            </DropdownItem>
        </Dropdown>
    ) : (
        <button
            type="button"
            onClick={() => signIn()}
        >
            Login / Register
        </button>
    );
};

export default TopMenuUserMenu;
