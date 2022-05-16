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
    const minTemperatures = [];
    const maxTemperatures = [];
    const temperatures = [];

    cities.forEach(({ name, weather }) => {
      names.push(name);
      minTemperatures.push(weather.min_temperature);
      maxTemperatures.push(weather.max_temperature);
      temperatures.push(weather.temperature);
    });

    const chartData = {
      labels: names,
      datasets: [
        {
          label: 'Temperature min',
          backgroundColor: 'rgba(196, 255, 248,1)',
          borderColor: 'rgba(18, 139, 125,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(196, 255, 248,1)',
          hoverBorderColor: 'rgba(18, 139, 125,1)',
          data: minTemperatures,
        },
        {
          label: 'Temperature Max',
          backgroundColor: 'rgba(247,0,0,0.1)',
          borderColor: 'rgba(255,123,123,1)',
          borderWidth: 1,
          hoverBackgroundColor: 'rgba(247,0,0,0.1)',
          hoverBorderColor: 'rgba(255,123,123,1)',
          data: maxTemperatures,
        },
        {
          label: 'Temperature',
          backgroundColor: '#eb0707',
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
