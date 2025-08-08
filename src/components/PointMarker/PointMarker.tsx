

interface PointMarkerProps {
    cx: number;
    cy: number;
    label: string;
    onClick?: () => void;
  }
  

const PointMarker = ({cx, cy, label, onClick}:PointMarkerProps) => {
  return (
    <g
    className="cursor-pointer group transition-all duration-300"
    onClick={onClick}
  >
    <circle
      cx={cx}
      cy={cy}
      r="12"
      className="fill-[#BDBDBD] hover:fill-purple-400 hover:stroke-indigo-300 transition-all  duration-300"
    />
    <text
      x={cx}
      y={cy + 30}
      fontSize="12"
      textAnchor="middle"
      className="pointer-events-none text-black"
    >
      {label}
    </text>
  </g>
  )
}

export default PointMarker
