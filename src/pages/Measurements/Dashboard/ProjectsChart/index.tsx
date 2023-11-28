import { Paper, Text } from '@mantine/core';
import Chart from 'react-apexcharts';
import { useProjects } from '../../../../store/hooks/projectHooks';

function ProjectsCharts() {
  const projects = useProjects();
  return (
    <Paper shadow="xs" p="xl">
      <Text fw={600} c="#BDBDBD">
        Projetos por status
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
          colors: ['#fa5252', '#fd7e14', '#978989', '#40c057'],
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
            categories: ['Cancelados', 'Pendentes', 'Contestados', 'Aprovados'],
            labels: {
              style: {
                colors: ['#fa5252', '#fd7e14', '#978989', '#40c057'],
                fontSize: '14px',
                fontWeight: 'bold',
              },
            },
          },
        }}
        series={[
          {
            data: [
              projects?.filter((v) => v.situacao === 'Cancelado').length ?? 0,
              projects?.filter((v) => v.situacao === 'Pendente').length ?? 0,
              projects?.filter((v) => v.situacao === 'Contestado').length ?? 0,
              projects?.filter((v) => v.situacao === 'Aprovado').length ?? 0,
            ],
            name: 'Projetos',
          },
        ]}
        type="bar"
        height={350}
      />
    </Paper>
  );
}

export default ProjectsCharts;
