import echarts from 'echarts'
import {useEffect, useRef } from 'react'

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
    <div ref={container}></div>
  )
}

export {Echarts}