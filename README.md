# Teste fullstack softeo

## Aplicação full stack para teste prático da empresa Softeo

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/729d55cf9f986a89782b?action=collection%2Fimport)
---
## Como rodar localmente
<details>
  <summary>expandir</summary>
  Para rodar o Back End, siga estas etapas:

  - Clone o repositório

  ```bash
    $ git clone git@github.com:fernandosenacruz/teste-fullstack-sfteo.git
  ```

  - Entre na pasta

  ```bash
    $ cd teste-fullstack-sfteo
  ```

  - Instale as dependencias

  ```
    $ npm install
  ```

  - Rode o nondemon

  ```
    $ npm run dev
  ```

  - Testes unitários *opcional*

  ```
    $ npm test
  ```
</details>

## Documentação da API

### Paciente

**Body**
| Chave   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Obrigatório**. O NOME do paciente |
| `totalCostDentalTreatment`      | `number` | **Obrigatório**. O valor(inteiro) total do tatamento |
| `numberInstallment`      | `number` | **Obrigatório**. Número de parcelas do tatamento |

#### Endpoints

<details>
  <summary>expandir</summary>

  #### Cadastra um paciente

  ```
    POST https://teste-fullstack-sfteo.herokuapp.com/patient
  ```

  #### Retorna todos os pacientes **limit opcional*

  ```
    GET https://git.heroku.com/teste-fullstack-sfteo.git/patients?limit=10
  ```

  #### Retorna todos os pacientes *por data selecionada* *DD-MM-YYYY

  ```
    GET https://git.heroku.com/teste-fullstack-sfteo.git/patients/installment?selectedMonth=${date}
  ```

  #### Retorna um paciente pelo id

  ```http
    GET https://teste-fullstack-sfteo.herokuapp.com/patient/${id}
  ```

  #### Atualiza o tratamento de um paciente

  ```http
    PUT https://teste-fullstack-sfteo.herokuapp.com/patient/${id}
  ```

  #### Atualiza o nome de um paciente

  ```http
    PATCH https://teste-fullstack-sfteo.herokuapp.com/patient/${id}
  ```

  #### Deleta um paciente

  ```http
    DELETE https://teste-fullstack-sfteo.herokuapp.com/patient/${id}
  ```
</details>