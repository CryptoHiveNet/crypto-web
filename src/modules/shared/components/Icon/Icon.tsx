import { FunctionComponent, SVGProps } from 'react';

import { HiEnvelope, HiExclamationCircle, HiOutlineUser } from 'react-icons/hi2';
import { MdOutlinePassword } from 'react-icons/md';
import { PiUserList } from 'react-icons/pi';

const iconMap: { [key: string]: FunctionComponent<SVGProps<SVGSVGElement>> } = {
    HiEnvelope,
    HiExclamationCircle,
    MdOutlinePassword,
    HiOutlineUser,
    PiUserList,
};

const Icon = ({ name, className }: { name?: string; className?: string }) => {
    const IconComponent = iconMap[name || 'HiExclamationCircle'];
    if (!IconComponent) {
        return <HiExclamationCircle className={className} />;
    }
    return <IconComponent className={className} />;
};

export default Icon;
