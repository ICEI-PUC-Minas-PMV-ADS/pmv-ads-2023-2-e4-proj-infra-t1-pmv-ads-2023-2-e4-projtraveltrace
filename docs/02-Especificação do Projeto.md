# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="1-Documentação de Contexto.md"> Documentação de Contexto</a></span>

Definição do problema e ideia de solução a partir da perspectiva do usuário. É composta pela definição do  diagrama de personas, histórias de usuários, requisitos funcionais e não funcionais além das restrições do projeto.

Apresente uma visão geral do que será abordado nesta parte do documento, enumerando as técnicas e/ou ferramentas utilizadas para realizar a especificações do projeto

## Personas

### Amélia Santos

- **Idade:** 36 anos
- **Ocupação:** Professora de escola pública
- **Motivação:** Quer visitar todos os irmãos em tempo hábil
- **História:** Amélia mudou-se para belo horizonte quando casou e todo ano ela visita seus irmãos e irmãs, porém eles moram em estados diferentes e por causa disso ela gasta muito tempo viajando, da última vez que tentou visitar seus irmãos ela só conseguiu visitar 6 deles e teve que voltar para trabalhar.
- **Necessidade:** O desejo de Amélia é que ela possa de forma prática fazer um cronograma para conseguir visitar todos os irmãos

![amélia](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-projtraveltrace/assets/103431797/66d9db1f-d9db-4bac-9a8d-06d3dac5c354)

### Antony Oliveira

- **Idade:** 18 anos
- **Ocupação:** Auxiliar Administrativo
- **Motivação:** Viajar nas férias e gastar pouco
- **História:** Antony mora em Minas Gerais e está de férias do trabalho. Ele nunca viajou e também nunca conheceu a praia. Ele quer conhecer outro estado e ver o mar em suas férias, porém ele não tem muitos recursos para gastar
  
![antony](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-projtraveltrace/assets/103431797/319cf568-f38f-479c-97ef-d014b9d3c4bc)


### Karina Machado

- **Idade:** 27 anos
- **Ocupação:** Vice diretora de uma multinacional
- **Motivação:** Se organizar melhor e conhecer melhor os lugares onde passa.
- História:** Karina viaja muito a trabalho, fazendo reuniões e visitando filiais. Muitas vezes depois de realizar seu trabalho, sobra tempo até o horário de ir para o aeroporto e o desejo dela é conhecer os pontos turísticos dos lugares onde passa, mas quase sempre ela não consegue se organizar para fazer isso. 


![Karina](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-projtraveltrace/assets/103431797/2ceb3256-3819-4115-9051-a84bc1718658)


## Histórias de Usuários

Com base na análise das personas forma identificadas as seguintes histórias de usuários:

|EU COMO... `PERSONA`| QUERO/PRECISO ... `FUNCIONALIDADE` |PARA ... `MOTIVO/VALOR`                 |
|--------------------|------------------------------------|----------------------------------------|
|Amélia Santos | Planejar um itinerário           | Para visitar todos os irmãos               |
|Antony Oliveira       | Gerenciar os gastos da viagem                 | Para aproveitar as férias |
|Karina Machado | Organizar o itinerário de viagens          | Para aproveitar o tempo livre               |


Apresente aqui as histórias de usuário que são relevantes para o projeto de sua solução. As Histórias de Usuário consistem em uma ferramenta poderosa para a compreensão e elicitação dos requisitos funcionais e não funcionais da sua aplicação. Se possível, agrupe as histórias de usuário por contexto, para facilitar consultas recorrentes à essa parte do documento.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)

## Modelagem do Processo de Negócio 

### Análise da Situação Atual

Apresente aqui os problemas existentes que viabilizam sua proposta. Apresente o modelo do sistema como ele funciona hoje. Caso sua proposta seja inovadora e não existam processos claramente definidos, apresente como as tarefas que o seu sistema pretende implementar são executadas atualmente, mesmo que não se utilize tecnologia computacional.

Atualmente o planejamento de viagens por conta própria, sem necessidade da intervenção de agências de viagens, tem se tornado cada vez mais popular e acessível devido a grande quantidade de informações disponíveis na internet. Porém, para alguns viajantes surge a dificuldade de organizar esse grande volume de dados e os possíveis custos envolvidos, principalmente quando as viagens são longas, incluem mais de um destino e envolvem mais de uma pessoa. Além disso, outra dificuldade é armazenar as diversas informações que serão necessárias durante a viagem de forma prática e acessível.

Entre os dados utilizados estão informações sobre cidades, datas, hospedagem, transportes, atrações turísticas, previsão de custos, entre outros, que são muitas vezes impressos posteriormente para consulta antes e mesmo durante a viagem. O controle de custos ao longo da viagem é realizado através de anotações diárias no papel ou até em programas editores de planilhas, como o Microsoft Excel. Nesse processo informações podem ser perdidas ou esquecidas, além de não existir uma facilidade de acesso remoto das informações a qualquer momento.


### Descrição Geral da Proposta

Apresente aqui uma descrição da sua proposta abordando seus limites e suas ligações com as estratégias e objetivos do negócio. Apresente aqui as oportunidades de melhorias.

Seguindo a linha de pensamento de La Porta (2018), desenvolvimento de uma aplicação distribuída de planejamento de viagens tem como foco facilitar a organização de informações referentes a roteiros, transportes, além da criação de estimativas de gastos. Todas essas informações serão editáveis pelo usuário, existindo a possibilidade de adicionar novos dados ao longo do tempo, como os gastos reais que estiverem ocorrendo durante a viagem. Se tornará, estão, uma plataforma que possibilita o planejamento e a organização de os aspectos de uma viagem antes, durante e depois da realização desta. Além disso, poderá também ser usado como uma ferramenta de controle de gastos durante viagens.

Diante dessas tendências e estatísticas apresentadas, torna-se evidente que uma aplicações distribuída desempenharia um papel fundamental na simplificação e melhoria da experiência de planejamento de viagens para os viajantes modernos. Podemos citar alguns exemplos de melhoria no processo de planejamento de viagens a partir da implementação da aplicação, tais como: 

**Exploração de destinos:** O usuário poderá manter sua rota atualizada, de acordo com o interesse específico que tenha em cada lugar;

**Itinerários Personalizados:** Sem depender de planejamentos enviesados por outros usuários com interesses diametralmente opostos ou agências de viagens com interesses escusos querendo controlar e direcionar o viajante para parceiros;

**Gerenciamento de Orçamento:** O aspecto financeiro das viagens é uma preocupação comum. Com a aplicação o usuário poderá definir seu orçamento e rastrear as despesas. Isso ajuda a manter as finanças sob controle e evita surpresas desagradáveis ao voltar para casa.

**Acesso de Qualquer Lugar, a Qualquer Momento:** Com a abordagem distribuída, estando disponível tanto em formato web para browsers tanto para dispositivos móveis, significa que os viajantes têm suas informações de viagem à mão a qualquer momento, em qualquer lugar. Isso é particularmente útil durante a viagem, quando é necessário verificar reservas, itinerários e outras informações importantes e nem sempre há a possibilidade de usar um PC.

### Processo 1 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 1. Em seguida, apresente o modelo do processo 1, descrito no padrão BPMN. 

![Processo 1](img/02-bpmn-proc1.png)

### Processo 2 – NOME DO PROCESSO

Apresente aqui o nome e as oportunidades de melhorias para o processo 2. Em seguida, apresente o modelo do processo 2, descrito no padrão BPMN.

![Processo 2](img/02-bpmn-proc2.png)

## Indicadores de Desempenho

Apresente aqui os principais indicadores de desempenho e algumas metas para o processo. Atenção: as informações necessárias para gerar os indicadores devem estar contempladas no diagrama de classe. Colocar no mínimo 5 indicadores. 

Usar o seguinte modelo: 

![Indicadores de Desempenho](img/02-indic-desemp.png)
Obs.: todas as informações para gerar os indicadores devem estar no diagrama de classe a ser apresentado a posteriori. 

## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

|ID    | Descrição do Requisito  | Prioridade |
|------|-----------------------------------------|----|
|RF-001| Oferecer opções de login e cadastro. | ALTA | 
|RF-002| Exibir anúncios e promoções relacionadas a viagens. | BAIXA |
|RF-003| Verificar as credenciais e autenticar os usuários. | ALTA |
|RF-004| Fornecer opção de redefinição de senha. | ALTA |
|RF-005| Permitir atualização dos dados do usuário. | MÉDIA |
|RF-006| Permitir adição de despesas. | ALTA |
|RF-007| Calcular total de despesas e saldo disponível. | MÉDIA |
|RF-008| Classificar e exibir despesas por categorias. | BAIXA |
|RF-009| Permitir criação e edição de um itinerário. | ALTA |
|RF-010| Permitir adição de destinos, atividades e notas. | ALTA |


### Requisitos não Funcionais

|ID     | Descrição do Requisito  |Prioridade |
|-------|-------------------------|----|
|RNF-001| O sistema deve ser responsivo para rodar em um dispositivos móvel | MÉDIA | 
|RNF-002| Deve processar requisições do usuário em no máximo 3s |  BAIXA | 
|RNF-003| O site deve ser intuitivo e fácil de usar. |  MÉDIA | 
|RNF-004| O site deve ser compatível com os navegadores Google Chrome e Firefox no Desktop. |  ALTA | 
|RNF-005| O sistema deve ser capaz de lidar com o número necessário de usuários sem queda no desempenho |  MÉDIA | 
|RNF-006| Executável em iOS e Android	 |  ALTA | 


Com base nas Histórias de Usuário, enumere os requisitos da sua solução. Classifique esses requisitos em dois grupos:

- [Requisitos Funcionais
 (RF)](https://pt.wikipedia.org/wiki/Requisito_funcional):
 correspondem a uma funcionalidade que deve estar presente na
  plataforma (ex: cadastro de usuário).
- [Requisitos Não Funcionais
  (RNF)](https://pt.wikipedia.org/wiki/Requisito_n%C3%A3o_funcional):
  correspondem a uma característica técnica, seja de usabilidade,
  desempenho, confiabilidade, segurança ou outro (ex: suporte a
  dispositivos iOS e Android).
Lembre-se que cada requisito deve corresponder à uma e somente uma
característica alvo da sua solução. Além disso, certifique-se de que
todos os aspectos capturados nas Histórias de Usuário foram cobertos.

## Restrições

O projeto está restrito pelos itens apresentados na tabela a seguir.

|ID| Restrição                                             |
|--|-------------------------------------------------------|
|01| O projeto deverá seguir o cronograma proposto pela PUC |
|02| Não pode ser desenvolvido um módulo de backend        |
|03| O site deve ser acessível a partir dos principais navegadores (Chrome, Firefox, Safari, Edge) e dispositivos. |

Enumere as restrições à sua solução. Lembre-se de que as restrições geralmente limitam a solução candidata.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)

## Diagrama de Casos de Uso

A seguir, é representado o Diagrama de Casos de Uso do sistema Travel Trace:
![casos de uso travel - Página 1](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-projtraveltrace/assets/103431797/f6dbd0b9-4cdf-4785-8197-78868008f60c)


# Matriz de Rastreabilidade

A matriz de rastreabilidade é uma ferramenta usada para facilitar a visualização dos relacionamento entre requisitos e outros artefatos ou objetos, permitindo a rastreabilidade entre os requisitos e os objetivos de negócio. 

A matriz deve contemplar todos os elementos relevantes que fazem parte do sistema, conforme a figura meramente ilustrativa apresentada a seguir.

![Exemplo de matriz de rastreabilidade](img/02-matriz-rastreabilidade.png)

> **Links Úteis**:
> - [Artigo Engenharia de Software 13 - Rastreabilidade](https://www.devmedia.com.br/artigo-engenharia-de-software-13-rastreabilidade/12822/)
> - [Verificação da rastreabilidade de requisitos usando a integração do IBM Rational RequisitePro e do IBM ClearQuest Test Manager](https://developer.ibm.com/br/tutorials/requirementstraceabilityverificationusingrrpandcctm/)
> - [IBM Engineering Lifecycle Optimization – Publishing](https://www.ibm.com/br-pt/products/engineering-lifecycle-optimization/publishing/)


# Gerenciamento de Projeto

De acordo com o PMBoK v6 as dez áreas que constituem os pilares para gerenciar projetos, e que caracterizam a multidisciplinaridade envolvida, são: Integração, Escopo, Cronograma (Tempo), Custos, Qualidade, Recursos, Comunicações, Riscos, Aquisições, Partes Interessadas. Para desenvolver projetos um profissional deve se preocupar em gerenciar todas essas dez áreas. Elas se complementam e se relacionam, de tal forma que não se deve apenas examinar uma área de forma estanque. É preciso considerar, por exemplo, que as áreas de Escopo, Cronograma e Custos estão muito relacionadas. Assim, se eu amplio o escopo de um projeto eu posso afetar seu cronograma e seus custos.

## Gerenciamento de Tempo

Com diagramas bem organizados que permitem gerenciar o tempo nos projetos, o gerente de projetos agenda e coordenar tarefas dentro de um projeto para estimar o tempo necessário de conclusão.

![Gestao de tempo eixo 4](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-projtraveltrace/assets/102702197/ae67ec66-5932-4871-9da2-27ca33434667)

## Gerenciamento de Equipe

O gerenciamento apropriado de tarefas contribuirá para que o projeto tenha um bom nível de produtividade. É fundamental que ocorra a gestão de tarefas e de pessoas, para que os profissionais envolvidos no projeto possam ser facilmente gerenciados.

Scrum Master: Laura Santos Andrade
Product Owner: Mariana Júlia Estevam Corrêa
Equipe de desenvolvimento: Francisco Costa Ribeiro, Gabriel Aston Ferreira Costa, Gabriel Vinícius Silveira e Silva, Ricardo Peixoto da Silva.

O gerenciamento da equipe será realizado pelo Projets, onde todas as atividades de uma sprint serão dispostas e divididas entre os integrantes. A utilização da metodologia ágil permite uma auto-organização da equipe priorizando atividades, bem como criando atividades não esperadas e alterando a ordem de acordo com as necessidades observadas na reuiões semanais. A criação das sprint é de consenso geral da equipe bem como a organização de próximas sprints e debatida sempre colocada em pauta e livre para todos integrantes criarem novas tarefas.

Utilizando a visualização do board podemos ter uma visão de tudo que precisa ser entregua na sprint e utilizando o princípio do fluxo puxado temos uma grande colaboração e pro atividade na manutenção de tarefas que estejam sobrecarregando algum integrante.

![projects](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-projtraveltrace/assets/102702197/4b6e9bf9-8066-4bdb-a84b-235abb57fb2d)


## Gestão de Orçamento

Com base em todo o escopo produzido anteriormente, os custos do projeto serão gerenciados em conformidade com os objetivos e requisitos alcançados na concepção do projeto, de modo a garantir o desenvolvimento norteado pela realidade financeira pré-definida.Com base em todo o escopo produzido anteriormente, os custos do projeto serão gerenciados em conformidade com os objetivos e requisitos alcançados na concepção do projeto, de modo a garantir o desenvolvimento norteado pela realidade financeira pré-definida.

![Gestão de REcursos eixo 4](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-projtraveltrace/assets/102702197/30ef3191-cab7-458c-837c-eeabd252891d)

