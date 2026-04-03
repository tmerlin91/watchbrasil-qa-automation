> Automação E2E utilizando Playwright com validação integrada entre API e UI

# Teste Técnico QA - Watch Brasil

## Visão geral

Projeto de automação de testes focado no fluxo de busca de filmes, utilizando Playwright com JavaScript.
A abordagem adotada combina validação via API + UI, garantindo maior confiabilidade nos testes e reduzindo falsos positivos (flakiness).

---

## Tecnologias utilizadas

* Playwright
* JavaScript (ES6)
* Node.js

---

## Como executar

```bash
npm install
npx playwright install
npx playwright test
```

Após a execução, o relatório pode ser visualizado com:

```bash
npx playwright show-report evidences/report
```

---

## Estratégia de teste

Optei por validar o fluxo de busca combinando API + UI.

* A API é utilizada como fonte de verdade para garantir que os dados existem e estão corretos.
* A UI valida se esses dados são apresentados corretamente ao usuário.

Essa abordagem reduz dependência de dados fixos e aumenta a confiabilidade dos testes.

Também evitei validações frágeis como textos genéricos da página, priorizando validações baseadas em comportamento e elementos específicos.

---

## Cenários automatizados

Foram implementados 4 cenários principais:

1. Busca via API + validação na UI

   * Garante que um filme retornado pela API está visível na interface.

2. Consistência entre API e UI

   * Valida que o primeiro resultado da API corresponde ao exibido na UI.

3. Busca com múltiplos resultados

   * Garante que buscas genéricas retornam mais de um item.

4. Cenário negativo

   * Valida que uma busca inválida não retorna resultados.

---

## Boas práticas aplicadas

* Uso de Page Object Model para organização da UI;
* Separação de responsabilidades (pages, services, tests);
* Uso de service layer para integração com API;
* Validações mais robustas (evitando `innerText` global);
* Estrutura preparada para escalabilidade;

---

## Retries e estabilidade

O projeto utiliza retries automáticos do Playwright para reduzir impacto de falhas intermitentes.
Isso permite identificar possíveis cenários flaky sem comprometer a execução completa da suíte.

---

## Observações

* Durante a automação, foram feitos ajustes em seletores para evitar fragilidade.
* O projeto prioriza estabilidade e clareza ao invés de volume de testes.

Caso a porta do relatório esteja em uso:

```bash
npx playwright show-report evidences/report --port=9324
```

---

## Próximos passos

* Adicionar testes de paginação;
* Validar filtros de busca;
* Cobrir cenários de erro da API (ex: 401, 500);
* Adicionar parametrização de testes (data-driven);
