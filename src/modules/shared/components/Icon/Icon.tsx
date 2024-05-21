import { FunctionComponent, SVGProps } from 'react';

import { HiEnvelope, HiExclamationCircle } from 'react-icons/hi2';

const iconMap: { [key: string]: FunctionComponent<SVGProps<SVGSVGElement>> } = {
    HiEnvelope,
    HiExclamationCircle,
};

const Icon = ({ name }: { name?: string }) => {
    const IconComponent = iconMap[name || 'HiExclamationCircle'];
    if (!IconComponent) {
        return <HiExclamationCircle />;
    }
    return <IconComponent />;
};

export default Icon;
