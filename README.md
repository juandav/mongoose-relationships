# mongoose_relationships

Bueno la idea con este proyecto es la de probar las diferentes alternativas que tiene mongoose para relacionar nuestras colecciones. Un ejemplo del resultado es el siguiente:

## Colección A

```javascript
{
    "_id" : ObjectId("57d74b1a301a8a652404ca0e"),
    "test" : "4sUgG]Z%@XV[y$w*",
    "B" : [
        {
            "test" : "9M%l[VrsW^Gw4rPf",
            "_id" : ObjectId("57d74b1a301a8a652404ca0f")
        }
    ],
    "__v" : NumberInt(0)
}
```

## Colección B
La colección `B` se encuentra embebida en `A`.

## Colección C

```javascript
{
    "_id" : ObjectId("57d74b1a301a8a652404ca10"),
    "test" : "1hOn)52gDR84WX3H",
    "B" : ObjectId("57d74b1a301a8a652404ca0f"),
    "__v" : NumberInt(0)
}
```

## Correr el proyecto

para ejecutar el servidor basta con lo siguiente:

```
npm start
```
