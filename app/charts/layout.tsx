const ChartLayout = ({
  lineChart,
  barChart,
  heatmap,
  login,
}: {
  lineChart: React.ReactNode;
  barChart: React.ReactNode;
  heatmap: React.ReactNode;
  login: React.ReactNode;
}) => {
  const isloginuser = false;

  return (
    <div>
      {isloginuser ? (
        <div>
          {" "}
          {lineChart}
          {barChart}
          {heatmap}
        </div>
      ) : (
        <div>{login}</div>
      )}
    </div>
  );
};

export default ChartLayout;
