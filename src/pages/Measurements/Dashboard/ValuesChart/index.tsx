import { Paper, Text } from '@mantine/core';
import Chart from 'react-apexcharts';
import { useProjects } from '../../../../store/hooks/projectHooks';

function ValuesChart() {
  const projects = useProjects();
  return (
    <Paper shadow="xs" p="xl">
      <Text fw={600} c="#BDBDBD">
        Valores
      </Text>
      <Chart
        options={{
          chart: {
            height: 350,
            type: 'bar',
            // events: {
            //   click(chart, w, e) {
            //     // console.log(chart, w, e)
            //   },
            // },
          },
          colors: ['#40c057', '#fd7e14', '#fa5252'],
          plotOptions: {
            bar: {
              columnWidth: '45%',
              distributed: true,
              colors: {},
            },
          },
          dataLabels: {
            enabled: false,
          },
          legend: {
            show: false,
          },
          xaxis: {
            categories: ['Previsto', 'Executado', 'Saldo'],
            labels: {
              style: {
                colors: ['#40c057', '#fd7e14', '#fa5252'],
                fontSize: '14px',
                fontWeight: 'bold',
              },
            },
          },
          yaxis: {
            labels: {
              formatter(value) {
                // Formatando o valor para exibir em real brasileiro (R$)
                return `R$ ${value.toFixed(2).replace('.', ',')}`; // Exemplo: R$ 1.000,50
              },
            },
          },
        }}
        series={[
          {
            data: [
              projects
                ?.map((p) => p.valorPrevisto)
                .reduce((acc, cur) => acc + cur, 0) ?? 0,
              projects
                ?.map((p) => p.valorExecutado)
                .reduce((acc, cur) => acc + cur, 0) ?? 0,
              projects
                ?.map((p) => p.valorSaldo)
                .reduce((acc, cur) => acc + cur, 0) ?? 0,
            ],
            name: 'Valor',
          },
        ]}
        type="bar"
        height={350}
      />
    </Paper>
  );
}

export default ValuesChart;
