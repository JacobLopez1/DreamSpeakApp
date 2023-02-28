const CircularTick = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <circle cx={0} cy={0} r={2} fill="#51c5bd" />
      <text x={0} y={3} dy={16} textAnchor="middle" fill="#666">{payload.value}</text>
    </g>
  );
};

export default CircularTick;