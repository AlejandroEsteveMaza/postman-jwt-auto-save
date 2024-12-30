# postman-jwt-auto-save

Este repositorio proporciona una solución sencilla para guardar automáticamente un token JWT como variable de entorno en Postman. Al recibir la respuesta de una solicitud que contiene el JWT, el script extrae el token y lo guarda como una variable de entorno bajo el nombre `JWT`. Esto facilita la reutilización del token en solicitudes posteriores mediante el encabezado de autorización **Bearer**.

## Funcionalidad

```javascript
const responseJson = pm.response.json();
const jwt = responseJson.token; // Reemplaza "token" con la clave de la respuesta que contiene el JWT

pm.environment.set("JWT", `Bearer ${jwt}`);
```

Este script puede integrarse en la pestaña **Scripts** > **Post-response** de una solicitud en Postman, garantizando que el JWT se almacene automáticamente para su uso posterior.

## Uso

1. **Configura tu solicitud** en Postman para obtener el JWT (por ejemplo, en el endpoint de autenticación).
2. En la pestaña **Tests** de la solicitud, agrega el script proporcionado.
3. El JWT se guardará automáticamente en la variable de entorno `JWT` como **Bearer token**.
4. Usa `{{JWT}}` en otras solicitudes de Postman para agregar el token a los encabezados de autorización.

## Requisitos

- **Debe existir un entorno en Postman** para que el script funcione correctamente, ya que guarda el token en una variable de entorno.