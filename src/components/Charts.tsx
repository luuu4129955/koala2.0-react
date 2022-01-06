import echarts from 'echarts'
import {useEffect, useRef } from 'react'

const Echarts=()=>{
  const container=useRef<HTMLDivElement>(null)
  const chart=useRef(null)
  useEffect(()=>{
    const width=document.documentElement.clientWidth
    container.current!.style.width=`${width-20}px`
    container.current!.style.height=`${(width-20)*0.6}px`
    // @ts-ignore
    chart.current=echarts.init(container.current)
  },[])
  return(
    <div ref={container}></div>
  )
}

export {Echarts}