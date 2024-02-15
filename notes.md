## Introduction to NestJS

Nodejs makes no assumptions and include almost nothing by default , Its purposely mean to be bare bones

Nodejs by design has a minimalistic setup and developers are in change of setting up everything they want to use for their application, this applies to everything from how you handle routing, API calls, setting up web sockets, to even rudimentary things like code organization, file structure and naming conventions.

There are plenty of frameworks that have helped make some of the above requirements simpler most notably express.js but they all still require a lof of configuration and effort on the part of the developer

The ultimate flexibility can be a double edged sword creating potential problems as application or team grows very large

NestJs tires tp tackle some of these problems by creating an abstraction or overall framework around Nodejs, letting developers focus on the application problem at hand instead of the tiny implementation details such as setting up TypeScript, API routing, error handling , middleware setup and so much more.

NestJs provides an out of the box application architecture that allows developers and teams to create applications which are highly 1. testable 2. scalable 3. loosely coupled 4. maintainable

Conceptually think NestJs as a layer above Node.js itself, abstracting away difficult tasks, tools and boilerplate code, while also adding a fill fledge toolkit for your application development.

Using NestJS does not lock you into yet another framework but instead leverages readily available and prominent options and modules in the community like those available in Express.js application.

Nest can even be swapped to use "Fastify" under the hood instead of Express( which is used by default)

The flexibility that Nest provides here gives us the ability to create modules that are platform agnostic not only to HTTP framework such as Express.js r Fastify but even agnostic across different type of applications.

With NestJS, you can build Rest API's, MVC applications, micro services, GraphQL application, web sockets and CLI's and cron jobs.

With the help of NestJS's dependency injection we have the ability to swap out the underlying mechanism effortlessly

## Nest CLI

The CLI is a companion tool for nestjs that helps in generating file, run, compile, bundle application etc

AppModule is a route module for our application which contains everything our app needs.
AppModule can contain other sub module which are different features or chunks themselves

In simple words decorators are functions which apply logic , decorators can be applied to 1. Classes 2. Methods 3. properties 4. Paramters

## Controllers

1. Handle request in application. App controller decorator take a string then decorator passes the metadata needed for Nest to create a routing map.

2. Creating dynamic path
   // This signifies that we're expecting a dynamic root parameter named "id"

   ```ts @Get(':id')
   findOne(@Param('id') id: string) {
   return `This action return ${id} coffee`;
   }

   ```

3. @Param('id') , decorator will only return id value
4.

## Service

1. In nestjs each service is a provider.
2. The main idea of a provider is that it can inject dependencies, this means objects can create various relationships to each tother, and the logic of wiring up instances of objects together can all be handled by the nest runtime system as opposed to trying to create and manage this type of dependency injection yourself.
3. Providers are just a class annotated with a decorator called @Injectable
4. To use a provider we have to inject it, to inject a provider we can simply use a constructors.
5. Nest handles dependency injection for us by declaring in constructor.

```ts
  constructor(private readonly coffeesService: CoffeesService) {}

```

private access modifier syntax is a typescript shorthand allows us to both declare and initialize the CoffeeService member immediately in the same location, as well ass making it only accessible within the class itself hence "private".

readonly is more so a best practice but this helps us ensure that we aren't modifying the service reference and in fact only accessing things from it.

In Nest, thanks to TypeScript capabilities, it's extremely easy to manage dependencies because they are resolved just by type. In the example below, Nest will resolve the coffeesService by creating and returning an instance of CoffeesService (or, in the normal case of a singleton, returning the existing instance if it has already been requested elsewhere). This dependency is resolved and passed to your controller's constructor (or assigned to the indicated property):

6. Typically providers and services handle business logic as well as interaction with data services.

## Modules

A module is a class annotated with a @Module() decorator. The @Module() decorator provides metadata that Nest makes use of to organize the application structure.

The @Module() decorator takes a single object whose properties describe the module:

**providers** the providers that will be instantiated by the Nest injector and that may be shared at least across this module

**controllers** the set of controllers defined in this module which have to be instantiated

**imports** the list of imported modules that export the providers which are required in this module

**exports** the subset of providers that are provided by this module and should be available in other modules which import this module. You can use either the provider itself or just its token (provide value)

## Error Messages

      ```ts
      throw new HttpException(`Coffee ${id} not found `, HttpStatus.NOT_FOUND);
      ```

## Status Codes

1. Nest automatically sets status based on the request type
2. We can customize the request
3. ```ts @Post()
   @HttpCode(HttpStatus.GONE)
   create(@Body() body) {
   return body;
   }
   ```

## Res

```ts
@Get()
findAll(@Res() response) {
// return 'All coffees';
response.status(200).send('All coffees');
}
```

disadvantage : lose compatibility with Nest features that depend on Nest standard response handling. such as : interceptors and @Http code decorator

## DTO

Data transfer object are useful in creating a bit of type safety within our application. DTOs let us create a definition for the shape of the data that's coming into the body of an API request.

## Automatically validate incoming requests

ValidationPipe provides a convenient way of enforcing validation rules for all incoming payloads.

To automatically validate incoming requests, Nest provides several pipes available right out-of-the-box:

1.  ValidationPipe
2.  ParseIntPipe
3.  ParseBoolPipe
4.  ParseArrayPipe
5.  ParseUUIDPipe

The ValidationPipe makes use of the powerful class-validator package and its declarative validation decorators. The ValidationPipe provides a convenient approach to enforce validation rules for all incoming client payloads, where the specific rules are declared with simple annotations in local class/DTO declarations in each module.

TO use validation pipe add the following in main.ts

```ts
app.useGlobalPipes(
  new ValidationPipe({
    whitelist: true,
    forbidNonWhitelisted: true,
    transform: true,
  })
);
```

### Partial

When building input validation types (also called DTOs), it's often useful to build create and update variations on the same type. For example, the create variant may require all fields, while the update variant may make all fields optional.

Nest provides the PartialType() utility function to make this task easier and minimize boilerplate.

The PartialType() function returns a type (class) with all the properties of the input type set to optional.

```ts
export class UpdateCatDto extends PartialType(CreateCatDto) {}
```

## commands

1. To create project
   `nest new`
2. To generate a controller
   `nest generate controller  `

   `nest generate controller --no-spec`

   `nest generate controller  modules/abc`

won't generate the file but create a simulation. Perfect way to test files.
`nest generate controller  modules/abc --dry-run`

3. To generate services
   `nest generate services`
   `nest g s`

4. To generate module
   `nest g module <module name>`

## Web Development

1. Path parameters are used to identify a specific resource
2. use Query parameters to filter or sort that resource
3. Using **await** with **Promise.all()** lets us wait until the entire Array of Promises finishes before executing further code

## TypeORM

Abd **Entity** represents a relationship between a TypeScript class and a database table.
In nest our Entities will be class decorated with @Entity() decorator.

synchronize: true, allows table generation in DB using the classes with Entity decorator. Always set it to false in production.

```ts
  imports: [TypeOrmModule.forFeature([Coffee])],
```

TypeORM supports the repository design pattern, so each entity has its own repository. These repositories can be obtained from the database data source.

Repository class available from TypeORM acts as abstraction over our data source and exposes a variety of useful methods to interact with record stored in our database.

we can inject the UsersRepository into the UsersService using the @InjectRepository() decorator

**Relations** are associations established between two or more tables. Relations are based on common fields from each table, often involving primary and foreign keys.

There are three types of relations:

**One-to-one** Every row in the primary table has one and only one associated row in the foreign table. Use the @OneToOne() decorator to define this type of relation.

**One-to-many / Many-to-one** Every row in the primary table has one or more related rows in the foreign table. Use the @OneToMany() and @ManyToOne() decorators to define this type of relation.

**Many-to-many** Every row in the primary table has many related rows in the foreign table, and every record in the foreign table has many related rows in the primary table. Use the @ManyToMany() decorator to define this type of relation.

## Database transaction

A database transaction symbolizes a unit of work performed withing a database management system. Transaction are a reliable way to accomplish multiple tasks independent of other transactions. there are many different strategies to handle TypeORM transactions, but we recommend QueryRunner class because it gives us full control over the transaction.

## Dependency Injection

Dependency injection is a technique where we delegate instantiation of dependencies to an "Inversion of Control" container.

In nest application IOC container is the nestjs runtime system itself.

Nestjs handles all of the heavy lifting here instead of trying to achieve Dependency injection ourselves.

Example CoffeeService injection in CoffeeController.

There are three steps in dependency injection process that make it all happen.

1. Injector decorator declares a class that can be managed by the Nest container. This marks the class as a provider.
2. Class is injected by calling it in the constructor
3. Nest is aware that a class is provider because we've included in the provider in the module. which registers the class in IOC container

A single instance of the provider is shared across the entire application. The instance lifetime is tied directly to the application lifecycle. Once the application has bootstrapped, all singleton providers have been instantiated. Singleton scope is used by default.

Nest handles dependency inject and the correct order of injection.

The providers property takes an array of providers. So far, we've supplied those providers via a list of class names. In fact, the syntax providers: [CatsService] is short-hand for the more complete syntax:

```ts
providers: [
  {
    provide: CatsService,
    useClass: CatsService,
  },
];
```

Now that we see this explicit construction, we can understand the registration process. Here, we are clearly associating the token CatsService with the class CatsService. The short-hand notation is merely a convenience to simplify the most common use-case, where the token is used to request an instance of a class by the same name.

Factory providers: useFactory#
The useFactory syntax allows for creating providers dynamically. The actual provider will be supplied by the value returned from a factory function. The factory function can be as simple or complex as needed. A simple factory may not depend on any other providers. A more complex factory can itself inject other providers it needs to compute its result. For the latter case, the factory provider syntax has a pair of related mechanisms:

The factory function can accept (optional) arguments.
The (optional) inject property accepts an array of providers that Nest will resolve and pass as arguments to the factory function during the instantiation process. Also, these providers can be marked as optional. The two lists should be correlated: Nest will pass instances from the inject list as arguments to the factory function in the same order. The example below demonstrates this.

### Swagger setup

1. yarn add @nestjs/swagger
2. add the following code in main.ts
   ```ts
   const config = new DocumentBuilder()
     .setTitle('Iluvcoffee')
     .setDescription('Coffee application')
     .setVersion('1.0')
     .build();
   const document = SwaggerModule.createDocument(app, config);
   SwaggerModule.setup('api', app, document);
   ```
3. Enable cli-plugin https://docs.nestjs.com/openapi/cli-plugin
4. Use @ApiTags('') with tag name inside to group the apis 
5. 
