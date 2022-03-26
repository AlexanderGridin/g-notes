# Сервисы

**Сервисы** - это классы, которые можно инжектить (внедрять) в другие классы (_см. Dependency Injection_)

Некоторые сервисы поставляются вместе с Angular, остальные можно создать самостоятельно.

Встроенные сервисы Angular:

- **Title service** - автоматически создает HTML элемент **title** в теге **head**, если это необходимо, и корректно устанавливает его значение

```ts
constructor(private readonly titleService: Title) {}
```

- **Meta service** - позволяет добавлять/обновлять мета-теги

```ts
constructor(private readonly metaService: Meta){
  metaService.addTag({name: 'author', content: 'author name'});
}
```

## Создание собственного сервиса

С помощью Angular CLI:

```ts
$ ng g s servicesFolderName/serviceFolderName/serviceName
```

Руками

```ts
@Injectable()
export class TestService {}
```

Сервис - это **синглтон**: только один инстанс сервиса существует в приложении (если не накосячить с DI, разумеется). Благодаря этому возможна реализация передачи данных между несвязанными компонентами с помощью сервиса.

Сервис сам может иметь зависимости.

> Регистрация и инъекция сервисов рассмотрена в **Dependency Injection**
