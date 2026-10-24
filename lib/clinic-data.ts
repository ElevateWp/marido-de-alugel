export interface TeamProfile { id: string; slug: string; name: string; title: string; qualifications: string; specialization: string; experienceYears: number; bio: string; philosophy: string; education: string[]; memberships: string[]; specialties: string[]; image: string; warmImage: string; }
export type DentistProfile = TeamProfile;
export interface ServiceDetail {
  slug: string; name: string; navLabel: string; tagline: string; shortDescription: string; clinicalExplanation: string; whoNeeds: string[]; benefits: string[];
  indications: { condition: string; explanation: string }[];
  procedureSteps: { stepNumber: number; title: string; duration: string; description: string; clinicalDetails: string }[];
  recoveryTimeline: { period: string; expectedSensations: string; careProtocol: string }[];
  costTransparency: { baseRange: string; factors: string[]; whatIsIncluded: string[]; note: string };
  beforeAfterCase: { category: string; clinicalContext: string; beforeLabel: string; afterLabel: string; beforeImage: string; afterImage: string; timeframe: string };
  assignedDentistId: string; faqs: { question: string; answer: string; relatedSlug?: string }[];
}
export interface ClinicInformation {
  name: string; legalName: string; tagline: string; primaryLocation: { street: string; suite: string; city: string; state: string; postalCode: string; country: string; directions: string; landmarks: string; coordinates?: { lat: number; lng: number } };
  contact: { phone: string; emergencyPhone: string; email?: string; whatsapp: string; website?: string }; identityHighlights: string[]; schedule: { day: string; hours: string; isOpenToday?: boolean; isEmergencyOnly?: boolean }[];
  verifiedStats: { value: number; suffix: string; label: string; description: string }[]; accreditations: string[];
}
export const CLINIC_INFO: ClinicInformation = {
  name: 'Marido de Aluguel Campo Engenharia', legalName: 'Marido de Aluguel Campo Engenharia', tagline: 'Serviços de alvenaria e construção com atendimento atencioso em Aparecida de Goiânia.',
  primaryLocation: { street: 'R. Anhangá, Qd 37-A Lt 20 C1', suite: '', city: 'Aparecida de Goiânia', state: 'GO', postalCode: '74911-380', country: 'BR', directions: 'R. Anhangá, Qd 37-A Lt 20 C1 - Vila Brasília, Aparecida de Goiânia - GO, 74911-380, Brasil', landmarks: '7P7R+JW Vila Brasília, Aparecida de Goiânia - Goiás, Brasil' },
  contact: { phone: '+55 62 98236-7515', emergencyPhone: '+55 62 98236-7515', whatsapp: '+55 62 98236-7515' },
  identityHighlights: ['Serviços de alvenaria', 'Construção e reformas', 'Reparos residenciais', 'Atendimento pontual e cuidadoso', 'Orçamentos para sua obra'],
  schedule: [
    { day: 'Monday', hours: '8 AM–6 PM' }, { day: 'Tuesday', hours: '8 AM–6 PM' }, { day: 'Wednesday', hours: '8 AM–6 PM' },
    { day: 'Thursday', hours: '8 AM–6 PM' }, { day: 'Friday', hours: '8 AM–6 PM' }, { day: 'Saturday', hours: '8 AM–2 PM' }, { day: 'Sunday', hours: 'Closed' },
  ],
  verifiedStats: [
    { value: 5.0, suffix: '/5', label: 'Avaliação no Google', description: 'Com base em 4 avaliações' },
    { value: 4, suffix: '', label: 'Avaliações no Google', description: 'Opiniões de clientes' },
  ], accreditations: [],
};
const teamId = 'marido-de-aluguel-campo-engenharia';
export const DENTISTS: TeamProfile[] = [{ id: teamId, slug: teamId, name: CLINIC_INFO.name, title: 'Equipe de alvenaria e construção', qualifications: '', specialization: 'Alvenaria, construção, reformas e reparos', experienceYears: 0, bio: 'A Marido de Aluguel Campo Engenharia atende projetos de alvenaria e construção em Aparecida de Goiânia. Entre em contato para conversar sobre o serviço que você precisa.', philosophy: 'Atendimento pontual, cuidadoso e eficiente, com atenção à qualidade do serviço.', education: [], memberships: [], specialties: CLINIC_INFO.identityHighlights, image: '/images/roofing-hero.png', warmImage: '/images/roof-repair.png' }];
const photos = ['/images/roofing-hero.png','/images/roof-repair.png','/images/roof-with-tiles.png','/images/roof-saffron-walden-1024x768-1.jpg'];
const serviceNames: [string,string][] = [
  ['servicos-de-alvenaria','Serviços de Alvenaria'], ['construcao-residencial','Construção Residencial'], ['reformas-residenciais','Reformas Residenciais'],
  ['assentamento-de-pisos','Assentamento de Pisos'], ['reboco-de-paredes','Reboco de Paredes'], ['pintura-residencial','Pintura Residencial'],
  ['pequenos-reparos','Pequenos Reparos'], ['impermeabilizacao','Impermeabilização'], ['manutencao-predial','Manutenção Predial'],
];
function createService([slug,name]: [string,string], index:number): ServiceDetail {
  const situations = [`Você precisa de ${name.toLowerCase()} em sua casa ou imóvel`, 'Uma obra ou reforma que precisa de avaliação', 'Orientação sobre os reparos adequados para o seu espaço'];
  return {
    slug,name,navLabel:name,tagline:`${name} em Aparecida de Goiânia.`,shortDescription:`Converse com a Marido de Aluguel Campo Engenharia sobre ${name.toLowerCase()} e solicite um orçamento para o seu projeto.`,
    clinicalExplanation:`A equipe conversa com você sobre o imóvel, o serviço desejado e os detalhes da obra para entender o escopo e apresentar os próximos passos.`,whoNeeds:situations,
    benefits:['Atendimento atencioso e pontual','Escopo do serviço conversado com clareza','Orçamento conforme as necessidades do projeto'],
    indications:situations.map((condition)=>({condition,explanation:`Conte à equipe o que você precisa fazer no imóvel para conversar sobre uma avaliação e os próximos passos.`})),
    procedureSteps:[
      {stepNumber:1,title:'Conte sobre o projeto',duration:'Por telefone ou WhatsApp',description:'Explique o serviço que precisa e compartilhe detalhes do imóvel.',clinicalDetails:'A equipe conversa com você para entender a necessidade.'},
      {stepNumber:2,title:'Avalie o escopo',duration:'A combinar',description:'Converse sobre o local, os materiais e o trabalho necessário.',clinicalDetails:'Cada projeto é avaliado conforme as condições do imóvel.'},
      {stepNumber:3,title:'Receba um orçamento',duration:'Antes do início da obra',description:'Alinhe o serviço e o orçamento com a equipe antes de começar.',clinicalDetails:'Prazo e valor dependem do escopo e dos materiais.'},
      {stepNumber:4,title:'Realize o serviço',duration:'Conforme combinado',description:'A equipe executa o trabalho acordado com atenção ao imóvel.',clinicalDetails:'A duração depende do tipo e da dimensão do serviço.'},
    ],
    recoveryTimeline:[{period:'Antes do serviço',expectedSensations:'Converse sobre o que você deseja fazer.',careProtocol:'Compartilhe medidas, fotos e detalhes do imóvel se possível.'},{period:'Durante o serviço',expectedSensations:'A equipe realiza o trabalho definido com você.',careProtocol:'Mantenha o espaço de trabalho acessível e organizado.'},{period:'Após o serviço',expectedSensations:'Confira o trabalho realizado junto com a equipe.',careProtocol:'Fale com a equipe se tiver alguma dúvida sobre o serviço.'}],
    costTransparency:{baseRange:'Solicite um orçamento para o seu projeto.',factors:['Tipo e dimensão do serviço','Materiais necessários','Condições e acesso ao local'],whatIsIncluded:['Conversa sobre o trabalho desejado','Alinhamento do escopo do serviço','Orçamento antes de iniciar'],note:'O valor e o prazo são definidos conforme os detalhes e as necessidades do projeto.'},
    beforeAfterCase:{category:name,clinicalContext:'Imagens ilustrativas de serviços de construção e manutenção.',beforeLabel:'Exemplo de serviço',afterLabel:'Exemplo de serviço',beforeImage:photos[index%photos.length],afterImage:photos[(index+1)%photos.length],timeframe:'O prazo varia conforme o serviço'},assignedDentistId:teamId,
    faqs:[{question:`Como funciona ${name.toLowerCase()}?`,answer:'Entre em contato para conversar sobre o imóvel, o escopo do trabalho e um orçamento.'},{question:'Como solicito um orçamento?',answer:'Ligue ou envie uma mensagem pelo WhatsApp para conversar sobre o serviço desejado.'},{question:'Qual é a área de atendimento?',answer:'A empresa está localizada em Vila Brasília, Aparecida de Goiânia. Entre em contato para confirmar o atendimento no seu endereço.'},{question:'Como entro em contato?',answer:'Ligue ou envie uma mensagem para a Marido de Aluguel Campo Engenharia pelo +55 62 98236-7515.'}],
  };
}
export const SERVICES: ServiceDetail[] = serviceNames.map(createService);
export interface EmergencyCondition { id:string; title:string; urgency:'Immediate (0–2 hours)'|'Same-Day (2–6 hours)'|'Urgent (Within 24 hours)'; symptoms:string[]; immediateAction:string[]; clinicTreatment:string; }
export const EMERGENCY_CONDITIONS: EmergencyCondition[] = [
  {id:'infiltracao-ativa',title:'Infiltração ou vazamento ativo',urgency:'Urgent (Within 24 hours)',symptoms:['Manchas de umidade aumentando','Água entrando por parede ou cobertura'],immediateAction:['Afaste móveis e objetos da área afetada.','Se possível, identifique de onde vem a água.','Evite a área se houver risco elétrico ou estrutural.'],clinicTreatment:'Entre em contato pelo +55 62 98236-7515 para conversar sobre o reparo.'},
  {id:'reparo-de-alvenaria',title:'Reparo de alvenaria',urgency:'Same-Day (2–6 hours)',symptoms:['Trincas ou danos visíveis','Reboco ou revestimento solto'],immediateAction:['Mantenha pessoas afastadas de partes soltas.','Registre o local com fotos para explicar o problema.'],clinicTreatment:'Envie uma mensagem para conversar sobre a avaliação do serviço.'},
];
export interface BlogPost { slug:string; title:string; category:string; readTime:string; publishDate:string; lastUpdated:string; authorId:string; excerpt:string; leadImage:string; relatedServiceSlug:string; content:{intro:string;sections:{heading:string;body:string}[];faqs?:{question:string;answer:string}[]}; }
export const BLOG_POSTS: BlogPost[] = [
 {slug:'planeje-sua-reforma-residencial',title:'Como planejar uma reforma residencial',category:'Reformas',readTime:'3 min read',publishDate:'2026-10-22',lastUpdated:'2026-10-22',authorId:teamId,excerpt:'Defina as prioridades, os serviços necessários e os detalhes do imóvel antes de iniciar sua reforma.',leadImage:photos[1],relatedServiceSlug:'reformas-residenciais',content:{intro:'Uma boa conversa sobre o imóvel e o escopo ajuda a organizar os próximos passos da reforma.',sections:[{heading:'Liste o que precisa ser feito',body:'Anote os cômodos e os serviços que deseja realizar e observe as condições de cada espaço.'},{heading:'Converse sobre os detalhes',body:'Compartilhe as informações do imóvel para alinhar o escopo, os materiais e o orçamento.'}]}},
 {slug:'quando-reparar-uma-parede',title:'Quando uma parede precisa de reparo',category:'Alvenaria',readTime:'3 min read',publishDate:'2026-10-22',lastUpdated:'2026-10-22',authorId:teamId,excerpt:'Observe trincas, reboco solto e sinais de umidade para explicar o reparo que sua parede precisa.',leadImage:photos[0],relatedServiceSlug:'servicos-de-alvenaria',content:{intro:'Danos visíveis na parede podem exigir avaliação para identificar o reparo adequado.',sections:[{heading:'Observe as condições da parede',body:'Veja se há trincas, partes soltas ou sinais de umidade e anote onde aparecem.'},{heading:'Explique o que você observou',body:'Fotos e detalhes do local ajudam a equipe a entender o serviço e orientar os próximos passos.'}]}},
 {slug:'escolha-pisos-para-sua-obra',title:'Pontos para considerar ao escolher pisos',category:'Acabamentos',readTime:'3 min read',publishDate:'2026-10-22',lastUpdated:'2026-10-22',authorId:teamId,excerpt:'Converse sobre o ambiente, o tipo de piso e a preparação necessária para o assentamento.',leadImage:photos[2],relatedServiceSlug:'assentamento-de-pisos',content:{intro:'O ambiente e as condições do contrapiso ajudam a definir os próximos passos para assentar o piso.',sections:[{heading:'Considere o espaço',body:'Pense no uso do ambiente, nas dimensões e no acabamento desejado.'},{heading:'Planeje a preparação',body:'Converse sobre as condições da superfície e os materiais para alinhar o escopo do trabalho.'}]}},
 {slug:'cuidados-com-a-umidade-em-casa',title:'Como lidar com sinais de umidade em casa',category:'Manutenção',readTime:'3 min read',publishDate:'2026-10-22',lastUpdated:'2026-10-22',authorId:teamId,excerpt:'Registre onde a umidade aparece e converse sobre a avaliação e o reparo do local.',leadImage:photos[3],relatedServiceSlug:'impermeabilizacao',content:{intro:'Manchas, infiltração e umidade podem ter diferentes causas. Uma avaliação ajuda a conversar sobre o serviço necessário.',sections:[{heading:'Anote onde aparece',body:'Observe se a umidade está em paredes, pisos ou perto de coberturas e quando você a percebeu.'},{heading:'Converse sobre a avaliação',body:'Compartilhe fotos e informações do imóvel para entender os próximos passos do reparo.'}]}}
];
export const CUSTOMER_REVIEWS = [
 {name:'Natalia Angelica',date:'há 7 meses',text:'Atendimento rápido, muito atencioso e eficiente. Recomendo muito.'},
 {name:'Vanessa',date:'há 7 meses',text:'Excelente atendimento. Pontualidade e qualidade. Recomendo muito!'},
 {name:'Lucas Nunes',date:'há 7 meses',text:'Excelente atendimento.'},
];