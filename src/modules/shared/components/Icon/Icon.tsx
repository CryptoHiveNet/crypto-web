import { FunctionComponent, SVGProps } from 'react';

import { HiEnvelope, HiExclamationCircle } from 'react-icons/hi2';
import { MdOutlinePassword } from 'react-icons/md';

const iconMap: { [key: string]: FunctionComponent<SVGProps<SVGSVGElement>> } = {
    HiEnvelope,
    HiExclamationCircle,
    MdOutlinePassword,
};

const Icon = ({ name }: { name?: string }) => {
    const IconComponent = iconMap[name || 'HiExclamationCircle'];
    if (!IconComponent) {
        return <HiExclamationCircle />;
    }
    return <IconComponent />;
};

export default Icon;
