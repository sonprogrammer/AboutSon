import { useState } from "react";
import { PointMarker } from "../PointMarker";



const points = [
    { cx: 50, cy: 250, label: '대학입학' },
    { cx: 200, cy: 250, label: '뉴질랜드' },
    { cx: 300, cy: 305, label: 'GTQ1급' },
    { cx: 400, cy: 165, label: '토익' },
    { cx: 550, cy: 120, label: '정보처리기사' },
  ];
const RoadMap = () => {
  const [selected, setSelected] = useState<{
    label: string;
    cx: number;
    cy: number;
  } | null>(null)



  const handlePointClick = (point: { label: string; cx: number; cy: number }, e: React.MouseEvent) => {
    setSelected(point)
    e.stopPropagation()
  }

  const onClose = () => {
    setSelected(null)
  }

  return (
    <svg viewBox="0 -70 700 600" className="w-full " onClick={onClose}>
      <defs>
        <marker
          id="arrow"
          markerWidth="10"
          markerHeight="20"
          refX="6"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <path d="M0,0 L0,6 L9,3 z" fill="#eef2ff" />
        </marker>
        <linearGradient id="gradient" x1="0" x2="1" y1="0" y2="0">
          <stop offset="0%" stopColor="#d8b4fe" />
          <stop offset="100%" stopColor="#e0e7ff" />
        </linearGradient>
      </defs>


      <path
        d="M50 250 C 150 50, 250 450, 350 250 S 550 50, 650 250"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="6"
        markerEnd="url(#arrow)"
      />


      {points.map((point, i) => (
        <PointMarker
          key={i}
          cx={point.cx}
          cy={point.cy}
          label={point.label}
          onClick={(e) => handlePointClick(point,e)}
        />
      ))}

      {selected && (
        <foreignObject 
          x={selected.label === "정보처리기사" ? selected.cx - 150 : selected.cx - 30}
          y={selected.cy +50} width="250" height="200"
          onClick={(e) => e.stopPropagation()}
          >
        <div
          xmlns="http://www.w3.org/1999/xhtml"
          className=" bg-white shadow-lg rounded p-4"
          style={{ pointerEvents: 'auto' }}
        >
          <h3 className="text-lg font-bold mb-2">{selected.label} 정보</h3>
          <p>여기에 {selected.label}에 대한 상세 설명을 넣으세요.</p>
          <button
            onClick={onClose}
            className="mt-4 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
          >
            닫기
          </button>
        </div>
      </foreignObject>
      )}
      

      
    </svg>
  )
}

export default RoadMap
