import { PointMarker } from "../PointMarker";


const points = [
    { cx: 50, cy: 250, label: '대학입학' },
    { cx: 200, cy: 250, label: '뉴질랜드' },
    { cx: 300, cy: 305, label: 'GTQ1급' },
    { cx: 400, cy: 165, label: '토익' },
    { cx: 550, cy: 120, label: '정보처리기사' },
  ];
const RoadMap = () => {

    const handleClick = (label: string) => {
      };
      
  return (
    <svg viewBox="0 0 700 500" className="w-full h-auto">
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

      {/* 길 */}
      <path
        d="M50 250 C 150 50, 250 450, 350 250 S 550 50, 650 250"
        fill="none"
        stroke="url(#gradient)"
        strokeWidth="6"
        markerEnd="url(#arrow)"
      />

      {/* 지점들 */}
      {points.map((point, i) => (
        <PointMarker
          key={i}
          cx={point.cx}
          cy={point.cy}
          label={point.label}
          onClick={() => handleClick(point.label)}
        />
      ))}
    </svg>
  )
}

export default RoadMap
