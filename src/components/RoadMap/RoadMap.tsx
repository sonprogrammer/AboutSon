import { useState } from "react";
import { PointMarker } from "../PointMarker";



const points = [
    { cx: 50, cy: 250, label: '대학', content: '한서대학교, 항공소프트웨어공학과 - 학사졸업 ' },
    { cx: 200, cy: 250, label: '뉴질랜드', content: '뉴질랜드에서의 워킹홀리데이를 통해 혼자 문제를 해결하며 도전 정신과 자기계발 습관을 키웠습니다. 다양한 국적의 사람들과 소통하며 ‘다른 시선을 이해하는 법’을 배웠고, 이 경험이 UI/UX와 프론트엔드 개발에 대한 관심으로 이어졌습니다.' },
    { cx: 300, cy: 305, label: 'GTQ1급', content: 'GTQ 1급 – 디자인에 관심을 가지고 그래픽 툴 활용 능력을 인증 ' },
    { cx: 400, cy: 165, label: '토익', content: 'TOEIC 835점 – 기본적 영어 능력 인증, 현재도 지속적으로 영어 학습 중' },
    { cx: 550, cy: 120, label: '정보처리기사', content: 'IT 및 소프트웨어 개발 역량 인증' },
  ];
const RoadMap = () => {
  const [selected, setSelected] = useState<{
    label: string;
    content: string;
    cx: number;
    cy: number;
  } | null>(null)



  const handlePointClick = (point: { label: string; cx: number; cy: number, content: string }, e: React.MouseEvent) => {
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
          content={point.content}
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
          className=" bg-stone-200 shadow-lg rounded-xl p-3 relative"
          style={{ pointerEvents: 'auto' }}
        >
          <h3 className="text-[12px] font-bold mb-2">{selected.label}</h3>
          <p className="text-[10px]">{selected.content}</p>
          <button
            onClick={onClose}
            className=" absolute top-2 right-2 rounded-full p-1 px-2 bg-purple-500 text-white text-[10px] hover:bg-purple-600 cursor-pointer"
          >
            X
          </button>
        </div>
      </foreignObject>
      )}
      

      
    </svg>
  )
}

export default RoadMap
