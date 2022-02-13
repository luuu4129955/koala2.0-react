import echarts from 'echarts'
import {useEffect, useRef } from 'react'
import styled from 'styled-components'

type Props={
  option:echarts.EChartOption
}
const Echarts:React.FC<Props> =(props)=>{
  const container=useRef<HTMLDivElement>(null)
  const chart=useRef<HTMLCanvasElement>(null)
  const {option}=props
  useEffect(()=>{
    const width=document.documentElement.clientWidth
    container.current!.style.width=`${width}px`
    container.current!.style.height=`${(width)*0.6}px`
    // @ts-ignore
    chart.current=echarts.init(container.current)
  },[])
  useEffect(()=>{
// @ts-ignore
    chart.current.setOption(option)
  },[option])
  return(
    <Wrapper ref={container}></Wrapper>
  )
}
const Wrapper=styled.div`
`
export {Echarts}