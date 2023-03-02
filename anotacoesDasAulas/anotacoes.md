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
