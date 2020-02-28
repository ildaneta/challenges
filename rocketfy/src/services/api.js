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
          user:
            'https://raw.githubusercontent.com/ildasilva/challenges/master/rocketfy/src/assets/avatar.jpg'
        },
        {
          id: 2,
          content: 'Escrever artigo ensinando como se utiliza o Netlify CMS',
          priority: 'Neutra',
          labels: ['#3490D1'],
          user:
            'https://raw.githubusercontent.com/ildasilva/flexbox-rocketseat/master/images/filipe-deschamps.png'
        },
        {
          id: 3,
          content: 'Iniciar os estudos do back-end do GoBarber',
          priority: 'Alta prioridade',
          date: '03/03/2020 18:00',
          dateCard: 'Mar, 03',
          labels: ['#7159c1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 4,
          content:
            'Assistir vídeo do Lucas Montano: O que é Soft Skills para programadores?',
          priority: 'Crítica',
          date: '10/03/2020 14:30',
          dateCard: 'Mar, 10',
          labels: ['#000000'],
          user:
            'https://raw.githubusercontent.com/ildasilva/bootcamp-gostack-8-rocketseat/master/Frontend/M%C3%B3dulo%2004%20-%20Introdu%C3%A7%C3%A3o%20ao%20React/Desafio/src/assets/avatar-lucas-montano.jpg'
        },
        {
          id: 5,
          content: 'Gravar testes e deploy ReactJS',
          priority: 'Neutra',
          labels: ['#3490D1'],
          user:
            'https://raw.githubusercontent.com/ildasilva/challenges/master/rocketfy/src/assets/avatar.jpg'
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
          user:
            'https://raw.githubusercontent.com/ildasilva/challenges/master/rocketfy/src/assets/avatar.jpg'
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
          content:
            'Estudar sobre a diferença dos pré-processadores SASS x LESS',
          priority: 'Alta prioridade',
          date: '29/02/2020 17:05',
          dateCard: 'Fev, 29',
          labels: ['#7159c1'],
          user:
            'https://raw.githubusercontent.com/ildasilva/flexbox-rocketseat/master/images/filipe-deschamps.png'
        },
        {
          id: 8,
          content: 'Atualizar as extensões do VSCode',
          priority: 'Neutra',
          labels: ['#3490D1'],
          user: 'https://rocketseat-cdn.s3-sa-east-1.amazonaws.com/profile.png'
        },
        {
          id: 9,
          content: 'Entender melhor sobre as diferentes medidas do CSS',
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
          content:
            'Postar artigo sobre O que meu Eu de agora diria ao meu Eu de 7 anos atrás',
          priority: 'Indefinida',
          labels: ['#EAEDF1']
        },
        {
          id: 12,
          content: 'Entender um pouco mais sobre o Docker',
          priority: 'Crítica',
          labels: ['#000000']
        },
        {
          id: 13,
          content: 'Lotion e Notion para realizar anotações',
          priority: 'Alta prioridade',
          labels: ['#7159c1']
        }
      ]
    }
  ];
}
