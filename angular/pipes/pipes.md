# Pipes

**Pipes** - используются для предобразования данных перед их отображением. Могут быть использованы как в HTML шаблоне, так и в коде компонента.

```html
<!-- Использование пайпа json для предобразования data -->
<p>{{data | json}}</p>
```

> Обычно пайп регистрируется в **declarations** @NgModule.

В коде компонента pipe используется через dependency injection

```ts
export class TestComponent implements OnInit {
  public readonly data: any;
  public formattedData: any;

  // инжектим Pipe
  constructor(private readonly testPipe: TestPipe) {}

  public ngOnInit(): void {
    // преобразование исходных данных с помощью pipe
    this.formattedDate = this.testPipe.transform(data);
  }
}
```

При этом нужно помнить, что пайп должен быть добавлен в **providers** @NgModule или @Component.

> Ключевой особенностью пайпа является то, что его нужно использовать в HTML шаблонах для предварительного преобразования данных, вместо методов класса компонента или функций, т.к. pipe отрабатывает только тогда, когда изменяются данные, подлежащие обработке, а функция (или метод) будут отрабатывать при каждом change detection, что приведет к снижению производительности приложения при наличии сложного кода в этой функции/методе.

## Создание своего Pipe

```ts
// указывается имя pipe, которое будет использоваться в шаблоне
@Pipe({ name: "testPipe" })
export class TestPipe implements PipeTransform {
  public transform(value: any): any {
    return any.toUpperCase();
  }
}
```

Использование созданного pipe в шаблоне

```html
<div>{{string | testPipe}}</div>
```

Пайпу в шаблоне можно передавать дополнительные аргументы:

```html
<div>
  {{data | testPipe:arg1:arg2}}
  <div></div>
</div>
```

Код пайпа выглядит следующим образом:

```ts
@Pipe({ name: "testPipe" })
export class TestPipe implements PipeTransform {
  public transform(value: any, arg1: any, arg2: any): any {
    // return transformed data
  }
}
```