# Aplicación lista de tareas

Proyecto de talento digital

### Pre-requisitos 📋

Debes tener previamente instalado en tu equipo lo siguiente:

```
Node.js, git, MySql, XAMPP
```

### Instalación 🔧

Clona el proyecto.

```
git clone https://github.com/Francooo2/meOrganizoApp.git
```

Abre tu editor de preferencia, y por consola ejecuta lo siguiente para instalar dependencias del proyecto.

```
npm i
```

Ejecuta el menu_escolar.sql, que se encuantra en la carpeta , en tu motor de base de datos de preferencia.

Luego crea un archivo .env en el proyecto con la siguiente estructura.

```
DATABASE_HOST=localhost
DATABASE_USER=root
DATABASE_PASSWORD=
DATABASE=menu_escolar
JWT_SECRET=mysecret
JWT_EXPIRES_IN=1d
JWT_COOKIE_EXPIRES=90
```

## Ejecutando el proyecto ⚙️

Para ejecutar el proyecto, luego de completar los pasos anteriores, ejecuta el siguiente comando por conasola, mientras tienes XAMPP corriendo.

```
npm run start
```
o

```
npm run dev
```

Una vez ejecutado npm run start, se debería ver la siguiente salida por consola.

```
Servidor corriendo en el puerto 3000
DB is conected
```

para ver el servicio accede a.

```
localhost:3000/login
```

Credencuiales usuarios

user -> fpalmalopez2@gmail.com: password -> 123
user -> admin@junaeb.cl: password -> 12345678

## Construido con 🛠️

* [Node js](https://nodejs.org/es/) - Entorno de ejecución javascript para el backend.
* [Express](https://expressjs.com/es/) - infraestructura de aplicaciones web Node.js.
* [JWT](https://jwt.io/) - Método de autenticación.
* [hbs](https://handlebarsjs.com/) - Motor de plantillas utilizado.

---
⌨️ Feliz código, [Franco](https://github.com/Francooo2) 😊
