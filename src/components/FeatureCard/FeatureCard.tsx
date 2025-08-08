// import { motion } from 'framer-motion'

interface FeatureCardProps {
  label: string
  cx: number
  cy: number
  onClose: () => void
}

const FeatureCard = ({ label, cx, cy, onClose }: FeatureCardProps) => {

  return (
    <foreignObject x='10' y={cy} width="100" height="200">
    <div
      xmlns="http://www.w3.org/1999/xhtml"
      className=" bg-white shadow-lg rounded p-4"
      style={{ pointerEvents: 'auto' }} // SVG내부 div 클릭 가능하게
    >
      <h3 className="text-lg font-bold mb-2">{label} 정보</h3>
      <p>여기에 {label}에 대한 상세 설명을 넣으세요.</p>
      <button
        onClick={onClose}
        className="mt-4 px-3 py-1 bg-purple-500 text-white rounded hover:bg-purple-600"
      >
        닫기
      </button>
    </div>
  </foreignObject>

  )
}

export default FeatureCard
