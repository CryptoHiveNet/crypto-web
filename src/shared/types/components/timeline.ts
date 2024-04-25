import { FC, SVGProps } from 'react';

<<<<<<< HEAD:src/shared/types/components/timeline.ts
export type TimelineProps = {
    id?: string;
    horizontal?: boolean;
    className?: string;
    children: React.ReactNode;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
export type TimelineItemProps = {
    id?: string;
    className?: string;
    children: React.ReactNode;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
export type TimelinePointProps = {
    id?: string;
    className?: string;
    icon?: FC<SVGProps<SVGSVGElement>>;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};

export type TimelineContentProps = {
    id?: string;
    className?: string;
    children: React.ReactNode;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
export type TimelineTimeProps = {
    id?: string;
    className?: string;
    children: React.ReactNode;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
export type TimelineBodyProps = {
    id?: string;
    className?: string;
    children: React.ReactNode;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
};
export type TimelineTitleProps = {
    id?: string;
    className?: string;
    children: React.ReactNode;
    testId?: string;
    onClick?: () => void;
    onMouseEnter?: () => void;
    onMouseLeave?: () => void;
=======
export type iTimelineProps = {
  id?: string;
  horizontal?: boolean;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iTimelineItemProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iTimelinePointProps = {
  id?: string;
  className?: string;
  icon?: FC<SVGProps<SVGSVGElement>>;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};

export type iTimelineContentProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iTimelineTimeProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iTimelineBodyProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
};
export type iTimelineTitleProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
  testId?: string;
  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
>>>>>>> bbc4d29 (feat: added timeline component and sub components and their unit tests):src/types/components/timeline.ts
};
