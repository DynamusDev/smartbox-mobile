import React from 'react';
import { useNavigation } from '@react-navigation/native'

import { Container, Title, Space } from './styles';
import { translate } from '../../i18n';
import { Feather } from '@expo/vector-icons';

interface Props {
  onLeftPress?: any,
  onRightPress?: any,
  bgColor?: string,
  color?: string,
  title?: string,
  tx?: string,
  leftIcon?: "link" | "search" | "image" | "menu" | "radio" | "key" 
              | "code" | "map" | "video" | "circle" | "filter" | "minus" 
              | "plus" | "info" | "check" | "book" | "pause" | "frown" 
              | "mail" | "home" | "star" | "meh" | "save" | "user" | "phone" 
              | "paperclip" | "inbox" | "lock" | "cloud" | "eye" | "camera" 
              | "delete" | "heart" | "chrome" | "github" | "upload" | "download" 
              | "unlock" | "play" | "tag" | "calendar" | "database" | "flag" | "layout" 
              | "printer" | "tool" | "gift" | "wifi" | "edit" | "codepen" | "gitlab" | "youtube" 
              | "twitter" | "dribbble" | "instagram" | "slack" | "align-left" | "align-right" 
              | "archive" | "arrow-down" | "arrow-left" | "arrow-right" | "arrow-up" | "battery" 
              | "bell" | "bookmark" | "box" | "briefcase" | "chevron-down" | "chevron-left" 
              | "chevron-right" | "chevron-up" | "clipboard" | "clock" | "compass" | "copy" 
              | "credit-card" | "crop" | "facebook" | "feather" | "folder" | "globe" | "grid" 
              | "layers" | "linkedin" | "list" | "log-out" | "mic" | "moon" | "mouse-pointer" 
              | "music" | "pie-chart" | "rss" | "scissors" | "share" | "shield" | "shopping-bag" 
              | "shopping-cart" | "shuffle" | "tablet" | "thermometer" | "thumbs-down" | "thumbs-up" 
              | "trash" | "tv" | "users" | "voicemail" | "external-link" | "activity" | "airplay" 
              | "alert-circle" | "alert-octagon" | "alert-triangle" | "align-center" | "align-justify" 
              | "anchor" | "aperture" | "arrow-down-circle" | "arrow-down-left" | "arrow-down-right" 
              | "arrow-left-circle" | "arrow-right-circle" | "arrow-up-circle" | "arrow-up-left" 
              | "arrow-up-right" | "at-sign" | "award" | "bar-chart" | "bar-chart-2" | "battery-charging" 
              | "bell-off" | "bluetooth" | "bold" | "book-open" | "camera-off" | "cast" | "check-circle" 
              | "check-square" | "chevrons-down" | "chevrons-left" | "chevrons-right" | "chevrons-up" 
              | "cloud-drizzle" | "cloud-lightning" | "cloud-off" | "cloud-rain" | "cloud-snow" 
              | "codesandbox" | "coffee" | "columns" | "command" | "corner-down-left" 
              | "corner-down-right" | "corner-left-down" | "corner-left-up" | "corner-right-down" 
              | "corner-right-up" | "corner-up-left" | "corner-up-right" | "cpu" | "crosshair" | "disc" 
              | "divide" | "divide-circle" | "divide-square" | "dollar-sign" | "download-cloud" 
              | "droplet" | "edit-2" | "edit-3" | "eye-off" | "fast-forward" | "figma" | "file" 
              | "file-minus" | "file-plus" | "file-text" | "film" | "folder-minus" | "folder-plus" 
              | "framer" | "git-branch" | "git-commit" | "git-merge" | "git-pull-request" | "hard-drive" 
              | "hash" | "headphones" | "help-circle" | "hexagon" | "italic" | "life-buoy" | "link-2" 
              | "loader" | "log-in" | "map-pin" | "maximize" | "maximize-2" | "message-circle" 
              | "message-square" | "mic-off" | "minimize" | "minimize-2" | "minus-circle" | "minus-square" 
              | "monitor" | "more-horizontal" | "more-vertical" | "move" | "navigation" | "navigation-2" 
              | "octagon" | "package" | "pause-circle" | "pen-tool" | "percent" | "phone-call" | "phone-forwarded" 
              | "phone-incoming" | "phone-missed" | "phone-off" | "phone-outgoing" | "play-circle" | "plus-circle" 
              | "plus-square" | "pocket" | "power" | "refresh-ccw" | "refresh-cw" | "repeat" | "rewind" 
              | "rotate-ccw" | "rotate-cw" | "send" | "server" | "settings" | "share-2" | "shield-off" 
              | "sidebar" | "skip-back" | "skip-forward" | "slash" | "sliders" | "smartphone" | "smile" 
              | "speaker" | "square" | "stop-circle" | "sun" | "sunrise" | "sunset" | "target" | "terminal" 
              | "toggle-left" | "toggle-right" | "trash-2" | "trello" | "trending-down" | "trending-up" 
              | "triangle" | "truck" | "twitch" | "type" | "umbrella" | "underline" | "upload-cloud" | "user-check" 
              | "user-minus" | "user-plus" | "user-x" | "video-off" | "volume" | "volume-1" | "volume-2" 
              | "volume-x" | "watch" | "wifi-off" | "wind" | "x" | "x-circle" | "x-octagon" | "x-square" | "zap" 
              | "zap-off" | "zoom-in" | "zoom-out",
  rightIcon?: "link" | "search" | "image" | "menu" | "radio" | "key" 
  | "code" | "map" | "video" | "circle" | "filter" | "minus" 
  | "plus" | "info" | "check" | "book" | "pause" | "frown" 
  | "mail" | "home" | "star" | "meh" | "save" | "user" | "phone" 
  | "paperclip" | "inbox" | "lock" | "cloud" | "eye" | "camera" 
  | "delete" | "heart" | "chrome" | "github" | "upload" | "download" 
  | "unlock" | "play" | "tag" | "calendar" | "database" | "flag" | "layout" 
  | "printer" | "tool" | "gift" | "wifi" | "edit" | "codepen" | "gitlab" | "youtube" 
  | "twitter" | "dribbble" | "instagram" | "slack" | "align-left" | "align-right" 
  | "archive" | "arrow-down" | "arrow-left" | "arrow-right" | "arrow-up" | "battery" 
  | "bell" | "bookmark" | "box" | "briefcase" | "chevron-down" | "chevron-left" 
  | "chevron-right" | "chevron-up" | "clipboard" | "clock" | "compass" | "copy" 
  | "credit-card" | "crop" | "facebook" | "feather" | "folder" | "globe" | "grid" 
  | "layers" | "linkedin" | "list" | "log-out" | "mic" | "moon" | "mouse-pointer" 
  | "music" | "pie-chart" | "rss" | "scissors" | "share" | "shield" | "shopping-bag" 
  | "shopping-cart" | "shuffle" | "tablet" | "thermometer" | "thumbs-down" | "thumbs-up" 
  | "trash" | "tv" | "users" | "voicemail" | "external-link" | "activity" | "airplay" 
  | "alert-circle" | "alert-octagon" | "alert-triangle" | "align-center" | "align-justify" 
  | "anchor" | "aperture" | "arrow-down-circle" | "arrow-down-left" | "arrow-down-right" 
  | "arrow-left-circle" | "arrow-right-circle" | "arrow-up-circle" | "arrow-up-left" 
  | "arrow-up-right" | "at-sign" | "award" | "bar-chart" | "bar-chart-2" | "battery-charging" 
  | "bell-off" | "bluetooth" | "bold" | "book-open" | "camera-off" | "cast" | "check-circle" 
  | "check-square" | "chevrons-down" | "chevrons-left" | "chevrons-right" | "chevrons-up" 
  | "cloud-drizzle" | "cloud-lightning" | "cloud-off" | "cloud-rain" | "cloud-snow" 
  | "codesandbox" | "coffee" | "columns" | "command" | "corner-down-left" 
  | "corner-down-right" | "corner-left-down" | "corner-left-up" | "corner-right-down" 
  | "corner-right-up" | "corner-up-left" | "corner-up-right" | "cpu" | "crosshair" | "disc" 
  | "divide" | "divide-circle" | "divide-square" | "dollar-sign" | "download-cloud" 
  | "droplet" | "edit-2" | "edit-3" | "eye-off" | "fast-forward" | "figma" | "file" 
  | "file-minus" | "file-plus" | "file-text" | "film" | "folder-minus" | "folder-plus" 
  | "framer" | "git-branch" | "git-commit" | "git-merge" | "git-pull-request" | "hard-drive" 
  | "hash" | "headphones" | "help-circle" | "hexagon" | "italic" | "life-buoy" | "link-2" 
  | "loader" | "log-in" | "map-pin" | "maximize" | "maximize-2" | "message-circle" 
  | "message-square" | "mic-off" | "minimize" | "minimize-2" | "minus-circle" | "minus-square" 
  | "monitor" | "more-horizontal" | "more-vertical" | "move" | "navigation" | "navigation-2" 
  | "octagon" | "package" | "pause-circle" | "pen-tool" | "percent" | "phone-call" | "phone-forwarded" 
  | "phone-incoming" | "phone-missed" | "phone-off" | "phone-outgoing" | "play-circle" | "plus-circle" 
  | "plus-square" | "pocket" | "power" | "refresh-ccw" | "refresh-cw" | "repeat" | "rewind" 
  | "rotate-ccw" | "rotate-cw" | "send" | "server" | "settings" | "share-2" | "shield-off" 
  | "sidebar" | "skip-back" | "skip-forward" | "slash" | "sliders" | "smartphone" | "smile" 
  | "speaker" | "square" | "stop-circle" | "sun" | "sunrise" | "sunset" | "target" | "terminal" 
  | "toggle-left" | "toggle-right" | "trash-2" | "trello" | "trending-down" | "trending-up" 
  | "triangle" | "truck" | "twitch" | "type" | "umbrella" | "underline" | "upload-cloud" | "user-check" 
  | "user-minus" | "user-plus" | "user-x" | "video-off" | "volume" | "volume-1" | "volume-2" 
  | "volume-x" | "watch" | "wifi-off" | "wind" | "x" | "x-circle" | "x-octagon" | "x-square" | "zap" 
  | "zap-off" | "zoom-in" | "zoom-out",
}

export function Header(props: Props) {
  const navigation = useNavigation()

  return (
    <Container style={{backgroundColor: props.bgColor || '#1e111d' }} >
      {
        props.leftIcon 
          ? <Feather 
              name={props.leftIcon} 
              color={props.color || '#eb6726'} 
              size={25} 
              onPress={props.leftIcon === 'arrow-left' ? navigation.goBack : props.onLeftPress} />
            : <Space />
      }
      <Title style={{color: props.color || '#eb6726'}}> {translate(props.tx) || props.title} </Title>
      {
        props.rightIcon 
          ? <Feather name={props.rightIcon} color={props.color || '#eb6726'} size={25} onPress={props.onRightPress} />
            : <Space />
      }
    </Container>
  )
}