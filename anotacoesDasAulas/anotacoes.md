# Aula-1 Bem começado, metade feito:

## Sobre o One-Way e Two-way dataBinding:

No Angular, o data binding é a técnica usada para sincronizar a propriedade de um componente com o template, permitindo que os dados sejam exibidos e atualizados em tempo real. Existem dois tipos principais de data binding: one-way e two-way.

O one-way binding é uma forma de comunicação unidirecional em que os dados fluem do componente para o template, mas não do template para o componente. Ou seja, as alterações no componente refletem no template, mas as alterações no template não afetam o componente.

Por exemplo, suponha que você tem um componente que exibe o nome de um usuário e permite que o usuário seja editado. O one-way binding é usado para exibir o nome do usuário no template, mas não permite que o nome seja alterado diretamente no template. Para editar o nome do usuário, é necessário acessar o componente e alterar a propriedade correspondente.

Um exemplo de one-way binding em Angular 11 é o uso de interpolação para exibir um valor do componente no template:

```typescript
@Component({
  selector: "app-exemplo",
  template: "<p>Olá, {{nome}}!</p>",
})
export class ExemploComponent {
  nome = "João";
}
```

Nesse exemplo, o valor da propriedade nome do componente é exibido no template usando a interpolação {{}}. Qualquer alteração na propriedade nome será refletida automaticamente no template.

O two-way binding é uma forma de comunicação bidirecional em que os dados fluem do componente para o template e vice-versa. Ou seja, as alterações no componente são refletidas no template e as alterações no template são refletidas no componente.

Por exemplo, suponha que você tem um componente que exibe e permite editar o nome de um usuário. O two-way binding é usado para sincronizar a propriedade correspondente do componente com um input no template, permitindo que o usuário edite o nome diretamente no template.

Um exemplo de two-way binding em Angular 11 é o uso do ngModel para sincronizar um input no template com uma propriedade do componente:

```typescript
@Component({
  selector: "app-exemplo",
  template: `
    <label for="nome">Nome:</label>
    <input id="nome" [(ngModel)]="nome" />
    <p>Olá, {{ nome }}!</p>
  `,
})
export class ExemploComponent {
  nome = "João";
}
```

Nesse exemplo, o input no template é sincronizado com a propriedade nome do componente usando o ngModel e o binding de propriedade [(ngModel)]="nome". Qualquer alteração no input será refletida automaticamente na propriedade nome do componente, e qualquer alteração na propriedade nome será refletida automaticamente no input.

## O que foi feito na aula-1:

1. Instalação do Angular CLI
2. Criação de um novo projeto com a ferramenta e como executá-lo
3. Compreensão da estrutura criada
4. Data binding através de Angular Expression
5. Data binding de atributos
6. Convenções adotadas até o momento

---

# Aula-2: Criando o primeiro componente

## Sobre os arquivos **package.json** e **package-lock.json**:

O arquivo _package.json_ é um arquivo fundamental em projetos Node.js, incluindo projetos Angular. Ele é responsável por armazenar informações sobre as dependências do projeto, scripts de execução, versões do Node.js, nome do projeto, entre outras informações relevantes.

Ao executar o comando npm install, o npm utiliza o arquivo _package.json_ para instalar todas as dependências do projeto. O npm também atualiza o arquivo _package-lock.json_ para registrar as versões específicas das dependências que foram instaladas. Esse arquivo é usado pelo npm para garantir que, em projetos futuros, as mesmas dependências sejam instaladas na mesma versão exata, evitando possíveis problemas de compatibilidade.

Em resumo, a importância do _package.json_ é registrar as informações sobre as dependências do projeto e o _package-lock.json_ é responsável por garantir que as mesmas versões das dependências sejam instaladas em futuras instalações do projeto. Isso ajuda a garantir a consistência do projeto e a evitar problemas de compatibilidade de versão.

## Sobre o código do arquivo app.module:

```typescript
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PhotoComponent } from "./photo/photo.component";

@NgModule({
  declarations: [AppComponent, PhotoComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

Esse código é um exemplo de um módulo em Angular 11. O módulo é definido pela anotação @NgModule e agrupa um conjunto de componentes, diretivas, pipes e outros módulos que são usados em um aplicativo Angular.

O @NgModule é definido como uma classe em que as propriedades e métodos são usados para configurar e personalizar o módulo. Vamos analisar as propriedades e métodos usados neste exemplo:

- declarations: uma propriedade que define os componentes, diretivas e pipes que são declarados e disponíveis para uso neste módulo. Neste exemplo, AppComponent e PhotoComponent são declarados e disponíveis para uso.

- imports: uma propriedade que define outros módulos que este módulo depende. Neste exemplo, BrowserModule e AppRoutingModule são importados. BrowserModule é necessário para que o aplicativo possa ser executado no navegador e AppRoutingModule é um módulo que define as rotas do aplicativo.

- providers: uma propriedade que define os serviços que estão disponíveis para uso em toda a aplicação. Neste exemplo, nenhum serviço é definido.

- bootstrap: uma propriedade que define o componente raiz da aplicação que será iniciado quando a aplicação for carregada. Neste exemplo, AppComponent é o componente raiz.

- export: uma propriedade opcional que define os componentes, diretivas e pipes que são exportados deste módulo e disponíveis para uso em outros módulos. Nenhum componente, diretiva ou pipe é exportado neste exemplo.

- Por fim, a classe AppModule é exportada e representa o módulo da aplicação Angular. Este módulo é importado no arquivo main.ts para iniciar a aplicação Angular.
