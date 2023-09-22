import S from './Avatar.module.css'
import { ImgHTMLAttributes } from 'react'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
  hasBorder?: boolean
}

export function Avatar({ hasBorder, ...props}:AvatarProps) {
  return (
    <img className={hasBorder ? S.avatarWithBorder : S.avatar} {...props}
    />
  )
}

