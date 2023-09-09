# Arquitetura da Solução

<span style="color:red">Pré-requisitos: <a href="3-Projeto de Interface.md"> Projeto de Interface</a></span>

Definição de como o software é estruturado em termos dos componentes que fazem parte da solução e do ambiente de hospedagem da aplicação.

![Arquitetura da Solução](img/02-mob-arch.png)

## Diagrama de Classes

A seguir, é representado o Diagrama de Classes do sistema Travel Trace:

![travel trace - Classe UML](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-projtraveltrace/assets/103431797/72580096-0b3b-4667-aa3f-fc7589827721)

## Modelo ER

O modelo ER a seguir representa por meio de um diagrama, um tipo de fluxograma, de como as entidades se relacionam entre si na aplicação interativa descrevendo as cardinalidades que definem as relações em termos de números.

![Diagrama ER TRAVEL TRACE](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-projtraveltrace/assets/103853727/5af380ff-4c18-4003-a8a6-d1b8d3ea311d)



## Esquema Relacional

O Esquema Relacional descrito a seguir é um modelo de dados representativo baseado no princípio de que todos os dados estão armazenados em tabelas juntamente com suas restrições de integridade e suas respectivas chaves primárias e secundárias. 
 

![Esquema Relacional Travel Trace](https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-projtraveltrace/assets/103853727/45764735-5f19-45f1-be0c-8305bc91f2ef)


## Modelo Físico

Entregar um arquivo banco.sql contendo os scripts de criação das tabelas do banco de dados. Este arquivo deverá ser incluído dentro da pasta src\bd.

## Tecnologias Utilizadas

IDE: vscode

Ferramentas de comunicação: teams e discord

Ferramenta para desenho de tela: Figma

Criação do documento: Google Docs

Gerenciamento do Projeto: Github Projects

Repositório do código fonte: Github

Linguagens utilizadas no Front-end: Html, css, javascript

Linguagem utilizada no Back-end: C#

Linguagem Mobile: React-Native Expo CLI. 

Framework Front-end: Bootstrap

Framework para integração entre back-end e banco de dados: Entity Framework

Banco de Dados: Microsoft SQL Server

Servidor em nuvem para banco de dados: Azure

## Hospedagem

O site utiliza a plataforma do Github Pages como ambiente de hospedagem do site do projeto. O site é mantido no ambiente da URL:

https://github.com/ICEI-PUC-Minas-PMV-ADS/pmv-ads-2023-2-e4-proj-infra-t1-pmv-ads-2023-2-e4-projtraveltrace

## Qualidade de Software

O conceito de Qualidade de Software abrange uma série de fatores que devem ser atendidos para garantir que a aplicação esteja em conformidade com os requisitos acordados com o cliente. Essa busca pela qualidade se traduz na satisfação das necessidades do usuário, sendo aferida por meio de testes que garantem resultados alinhados com as expectativas do cliente.

No cenário de desenvolvimento de software, a qualidade se define como um conjunto de características que devem ser alcançadas para satisfazer as necessidades dos usuários. Entretanto, essa satisfação não é obtida espontaneamente, mas sim por meio de um processo de desenvolvimento contínuo. Assim, a qualidade do produto está intimamente ligada ao processo de desenvolvimento.

Para orientar o desenvolvimento de um projeto de software em relação à qualidade, a norma internacional ISO/IEC 25010, uma atualização da ISO/IEC 9126, define oito características principais e 30 subcaracterísticas de qualidade. A escolha das subcaracterísticas a serem utilizadas como referência pela equipe depende de alguns aspectos simples de qualidade e é justificada da seguinte forma:

**Funcionalidade:** Se refere à capacidade do software de atender às necessidades funcionais especificadas. Métricas, como a quantidade de funcionalidades implementadas corretamente e a taxa de defeitos funcionais encontrados, podem ser usadas para avaliar a funcionalidade.

**Confiabilidade:** Garante que o software funcione de forma consistente e livre de falhas. Métricas como o tempo médio entre falhas (MTBF) e a taxa de falhas podem ser usadas para avaliar a confiabilidade.

**Usabilidade:** Importante para a satisfação do usuário. Métricas de usabilidade, como tempo médio de aprendizado e taxa de erro do usuário, ajudam a avaliar essa subcaracterística.

**Eficiência de Desempenho:** Diz respeito ao desempenho do software em termos de recursos utilizados. Métricas de eficiência incluem o tempo de resposta do sistema e a utilização de recursos de hardware.

**Compatibilidade:** Garante que o software funcione em diferentes ambientes. Métricas podem incluir o número de plataformas suportadas e o grau de conformidade com os padrões.

**Segurança:** A proteção de dados e sistemas e vital. Métricas de segurança podem incluir a taxa de vulnerabilidades identificadas e o tempo médio para corrigir vulnerabilidades.

**Manutenibilidade:** Se relaciona à facilidade de fazer alterações e melhorias no software. Métricas, como o tempo médio para implementar uma correção ou atualização, podem ser usadas para avaliar a manutenibilidade.

**Portabilidade:** Capacidade do software de ser transferido para diferentes ambientes. Métricas podem incluir o tempo necessário para adaptar o software a uma nova plataforma e a taxa de sucesso das adaptações.

Assim sendo, foram definidos as seguintes características e subcaracterísticas que nortearão o desenvolvimento da aplicação distribuída TravelTrace, bem como suas justificativas e métricas:

Com base nessas características e subcaracterísticas segue abaixo as que foram escolhidas para nortear o desenvolvimento projeto do Pet Pass mobile, bem como a justificativa e métricas que permitirão à equipe avaliar os objetos de interesse. 

**Segurança**:

- Confidencialidade: *A aplicação garante a confidencialidade dos dados? Sim/Não.*

- Integridade: *A aplicação garante a integridade dos dados? Sim/Não.*

**Usabilidade**:

- Apreensibilidade: *É fácil aprender a utilizar a aplicação? Sim/Não.*

- Operacionalidade: *É fácil de operar e controlar a funcionalidades da aplicação? Sim/Não.*

- Estética da interface: *A aplicação possui interface atual? Sim/Não.*

- Inteligibilidade: *A interface é de fácil entendimento? Sim/Não.*

**Portabilidade** :

- Adaptabilidade: *O sistema esta adaptado a Android e IOS? Sim/Não/Apenas um deles.*

- Conformidade: *O sistema apresenta aderência a padrões de portabilidade? Sim/Não.*

**Confiabilidade** :

- Maturidade: *Com que frequência a aplicação apresenta falhas? Sempre/Às vezes/Nunca.*

- Recuperabilidade: *A aplicação é capaz de recuperar dados após uma falha? Sim/Não.*

- Tolerância a falhas: *A aplicação reage bem às falhas que aparecem? Sim/Não.*

**Eficiência** :

- Tempo: *Mínimo tempo de resposta? Sim e Não. Máxima velocidade de execução? Sim/Não.*

- Recursos utilizados: *Mínimo uso de recursos para o mesmo resultado? Sim/Não.*

**Manutenibilidade** :

- Modificabilidade: *Há facilidade em modificar o código? Sim/Não.*

- Testabilidade: *Há facilidade de testar a aplicação? Sim/Não.*
