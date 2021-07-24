# api-nucba-zappi

# Usuarios de prueba para mercadopago

```javascript
//Tener en cuanta que estos usuarios son solo para Testing, y en caso de no ser utilizados durante 60 dias corridos, seran automaticamente eliminados de mercadopago


//Vendedor
{
    "id": 789022624,
    "nickname": "TESTFNAB20U0",
    "password": "qatest3735",
    "site_status": "active",
    "email": "test_user_58765652@testuser.com"
}

//cliente
{
    "id": 789022711,
    "nickname": "TETE2164677",
    "password": "qatest5344",
    "site_status": "active",
    "email": "test_user_13322442@testuser.com"
}
```

# Deploy Heroku

- Instalar Heroku CLI
- Sincronizar la primas con el postgres de heroku
  - No se puede utilizar migrate (al menos por el momento) usar:
  ```javascript
      npx prisma db push --preview-feature
  ```
  - Correr el Seed:
  ```javascript
     npm run seed
  ```
- Realizar el build de typescript
  - Modificar el entrypoint de la app (./dis/src/index.js)
  - Agregar los scripts "start" y "build"
  - Tener en cuenta los rootDirs y outDir en tsconfig.json
- Crear el archivo Procfile en el root del proyecto ("web: node dist/src/index.js")
