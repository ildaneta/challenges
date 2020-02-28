export function loadLists() {
  return [
    {
      title: 'A fazer',
      creatable: true,
      phrase: 'Aqui vão todas as tarefas que precisam ser feitas!',

      cards: [
        {
          id: 1,
          content: 'Estudar módulo 01 de NodeJS',
          priority: 'Baixa prioridade',
          labels: ['#5BC25B'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 2,
          content:
            'Criar vídeo para o Youtube ensinando a recriar a interface do Pipefy',
          priority: 'Neutra',
          labels: ['#3490D1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 3,
          content: 'Estudar módulo 03 de React Native',
          priority: 'Alta prioridade',
          date: '03/03/2020 18:00',
          dateCard: 'Mar, 03',
          labels: ['#7159c1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 4,
          content:
            'Gravar Aula "NextJS: Utilizando server-side rendering com ReactJS"',
          priority: 'Crítica',
          date: '10/03/2020 14:30',
          dateCard: 'Mar, 10',
          labels: ['#000000'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 5,
          content: 'Gravar testes e deploy ReactJS',
          priority: 'Neutra',
          labels: ['#3490D1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        }
      ]
    },
    {
      title: 'Fazendo',
      creatable: true,
      phrase: 'Aqui vão as tarefas que você está trabalhando.',
      cards: [
        {
          id: 6,
          content: 'Recriando clone do Pipefy',
          priority: 'Crítica',
          date: '14/04/2020 16:25',
          dateCard: 'Abr, 14',
          labels: ['#000'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        }
      ]
    },
    {
      title: 'Pausado',
      creatable: true,
      phrase: 'Aqui estão as tarefas em espera.',
      cards: [
        {
          id: 7,
          content: 'Gravar sobre Geolocalização e mapas com React Native',
          priority: 'Alta prioridade',
          date: '29/02/2020 17:05',
          dateCard: 'Fev, 29',
          labels: ['#7159c1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 8,
          content: 'Gravar testes e deploy ReactJS',
          priority: 'Neutra',
          labels: ['#3490D1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 9,
          content: 'Ajustes na biblioteca unform',
          priority: 'Indefinida',
          labels: ['#EAEDF1']
        }
      ]
    },
    {
      title: 'Feito',
      creatable: true,
      done: true,
      phrase: 'Parabéns! Todas as tarefas finalizadas vão aqui!',
      cards: [
        {
          id: 10,
          content: 'Gravar aula sobre deploy e CI com React Native',
          priority: 'Indefinida',
          labels: ['#EAEDF1']
        },
        {
          id: 12,
          content: 'Gravar testes e deploy ReactJS',
          priority: 'Crítica',
          labels: ['#000000']
        },
        {
          id: 13,
          content:
            'Gravar Aula "Internacionalização de aplicações Node.js, ReactJS e React Native"',
          priority: 'Alta prioridade',
          labels: ['#7159c1']
        }
      ]
    }
  ];
}
