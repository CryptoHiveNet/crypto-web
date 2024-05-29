import Toast from '@/types/components/Toast/Toast';
import ToastToggle from '@/types/components/Toast/ToastToggle/ToastToggle';
import { ToastType } from '@/types/shared/types/components/toast';

import Icon from '../Icon/Icon';

const NotificationToast = ({
    testId,
    message,
    type,
}: {
    testId?: string;
    message: string;
    type?: ToastType;
}) => {
    let iconName;
    let containerColor;
    let iconColor;
    let textColor;
    let closeButtonColor;

    switch (type) {
        case ToastType.Success:
            iconName = 'HiCheck';
            containerColor = 'bg-green-100 dark:bg-green-800 ';
            iconColor =
                'bg-white text-green-500 dark:bg-green-800 dark:text-green-200';
            textColor = 'text-green-500 dark:text-green-200';
            closeButtonColor =
                'bg-green-100 text-green-500 dark:bg-green-800 dark:text-green-200';
            break;
        case ToastType.Warning:
            iconName = 'HiExclamation';
            containerColor = 'bg-orange-100 dark:bg-orange-800 ';
            iconColor =
                'bg-white text-orange-500 dark:bg-orange-800 dark:text-orange-200';
            textColor = 'text-orange-500 dark:text-orange-200';
            closeButtonColor =
                'bg-orange-100 text-orange-500 dark:bg-orange-800 dark:text-orange-200';
            break;
        case ToastType.Danger:
            iconName = 'HiX';
            containerColor = 'bg-red-100 dark:bg-red-800 ';
            iconColor =
                'bg-white text-red-500 dark:bg-red-800 dark:text-red-200';
            textColor = 'text-red-500 dark:text-red-200';
            closeButtonColor =
                'bg-red-100 text-red-500 dark:bg-red-800 dark:text-red-200';
            break;
        default:
            iconName = 'HiInformationCircle';
            containerColor = 'bg-gray-100 dark:bg-gray-800';
            iconColor =
                'bg-white text-gray-500 dark:bg-gray-800 dark:text-gray-200';
            textColor = 'text-gray-500 dark:text-gray-200';
            closeButtonColor =
                'bg-gray-100 text-gray-500 dark:bg-gray-800 dark:text-gray-200';
            break;
    }

    return (
        <Toast
            className={`${containerColor} mt-2 z-50 max-w-none w-80`}
            data-testid={testId}
        >
            <div
                className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg ${iconColor}`}
            >
                <Icon
                    name={iconName}
                    className="h-5 w-5"
                />
            </div>
            <div className={`ml-3 text-sm font-normal ${textColor}`}>
                {message}
            </div>
            <ToastToggle className={closeButtonColor} />
        </Toast>
    );
};

export default NotificationToast;
