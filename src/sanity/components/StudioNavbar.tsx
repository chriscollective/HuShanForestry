/**
 * Sanity Studio 自訂導航欄組件
 * 在右上角添加返回首頁的按鈕
 */
import { HomeIcon } from '@sanity/icons'
import { Button, Flex } from '@sanity/ui'
import { type NavbarProps } from 'sanity'

export function StudioNavbar(props: NavbarProps) {
  return (
    <Flex align="center" style={{ width: '100%' }}>
      {/* 渲染默認的導航欄內容 */}
      <Flex flex={1}>{props.renderDefault(props)}</Flex>

      {/* 返回首頁按鈕 */}
      <Flex paddingRight={3}>
        <Button
          as="a"
          href="/zh-TW"
          target="_blank"
          mode="bleed"
          tone="primary"
          icon={HomeIcon}
          text="返回首頁"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        />
      </Flex>
    </Flex>
  )
}
