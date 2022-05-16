import { useCities } from '@src/hooks';
import { useEffect, useRef, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  LineElement,
  Title,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import * as S from './Chart.style';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend, Title);

const options = {
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart',
    },
  },
};

const Chart = () => {
  const { cities } = useCities();
  const ref = useRef(null);
  const [data, setData] = useState({
    datasets: [],
  });

  useEffect(() => {
    const chart = ref.current;

    if (!chart) {
      return;
    }

    const names = [];

    const temperatures = [];

    cities.forEach(({ name, weather }) => {
      names.push(name);

      temperatures.push(weather.temperature);
    });

    const chartData = {
      labels: names,
      datasets: [
        {
          label: 'Temperature',
          backgroundColor: '#eb0707',
          borderColor: 'rgba(255,123,123,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(247,0,0,0.1)',
          hoverBorderColor: 'rgba(255,123,123,1)',
          data: temperatures,
        },
      ],
    };

    setData(chartData);
  }, [cities]);

  return (
    <S.Wrapper>
      <Line ref={ref} data={data} options={options} />
    </S.Wrapper>
  );
};

export default Chart;
