import { Cell } from "@vant-taro/core"
import "./index.scss"
import Block from "../../components/block"
import Page from "../../components/page"

export default function CellDemo() {
  return (
    <Page title="Cell 单元格">
      <Block title="基础用法">
        <Cell label="标题">内容</Cell>
        <Cell label="标题" clickable>内容</Cell>
        <Cell label="标题" clickable arrow>内容</Cell>
      </Block>
    </Page>
  )
}