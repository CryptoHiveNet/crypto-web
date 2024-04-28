import {
  TimelineBodyProps,
  TimelineContentProps,
  TimelineItemProps,
  TimelineProps,
  TimelineTimeProps,
  TimelineTitleProps,
  TimelnePointProps,
} from 'flowbite-react';

import { BaseProps } from '../global/base';
import { UserReactionProps } from '../global/userReaction';

export type iTimelineProps = TimelineProps & UserReactionProps & BaseProps;
export type iTimelineItemProps = TimelineItemProps &
  UserReactionProps &
  BaseProps;
export type iTimelinePointProps = TimelnePointProps &
  UserReactionProps &
  BaseProps;

export type iTimelineContentProps = TimelineContentProps &
  UserReactionProps &
  BaseProps;
export type iTimelineTimeProps = TimelineTimeProps &
  UserReactionProps &
  BaseProps;
export type iTimelineBodyProps = TimelineBodyProps &
  UserReactionProps &
  BaseProps;
export type iTimelineTitleProps = TimelineTitleProps &
  UserReactionProps &
  BaseProps;
