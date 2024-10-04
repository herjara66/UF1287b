
# Examen UF1289: Desarrollo de Componentes Software para el Manejo de Dispositivos (Drivers)

## Parte 1: Teoría (4 puntos)

1. Define qué es un **driver de dispositivo** y su función en un sistema operativo.

2. Diferencia entre un **driver de kernel** y un **driver de espacio de usuario**. Proporciona un ejemplo de cada uno.

3. Explica qué es el **modelo de controlador monolítico** y compáralo con el **modelo de microkernel**.

4. ¿Cuáles son las ventajas y desventajas de los controladores en el espacio del usuario frente a los controladores en el espacio del kernel?


## Parte 2: Práctica (6 puntos)

## **Objetivo:**

Crear un proyecto Node.js con npm que implemente un servidor HTTP. El servidor debe responder a diferentes rutas y parámetros enviados a través de la URL. **No está permitido utilizar Postman u otras herramientas de prueba similares**; las pruebas se realizarán únicamente en el navegador o mediante `curl` desde la terminal.

## **Instrucciones:**

1. **Inicialización del proyecto**
   - Crea una carpeta para tu proyecto y dentro de esta carpeta inicializa un proyecto npm ejecutando el siguiente comando:
     ```bash
     npm init -y
     ```
   - Instala la dependencia de desarrollo `nodemon` para facilitar el desarrollo:
     ```bash
     npm install --save-dev nodemon
     ```

2. **Configuración del servidor HTTP**
   Implementa un servidor HTTP en Node.js que maneje las siguientes rutas:

   - **Ruta principal** (`/`): Debe devolver el mensaje `"Bienvenido al examen de Node.js"`.

   - **Ruta `/saludo`**: Debe aceptar un parámetro de nombre a través de la URL (ej. `?nombre=Carlos`) y devolver el mensaje `"Hola, Carlos!"` o `"Hola, Usuario!"` si no se proporciona un nombre.

   - **Ruta `/calcular`**: Debe aceptar dos parámetros numéricos `a` y `b`, además de un parámetro de operación `operacion` que puede ser "suma", "resta", "multiplicacion" o "division". Devuelve el resultado de la operación en un mensaje. Si se especifica una operación no válida o faltan parámetros, debe devolver un error con el mensaje `"Operación no válida"` o `"Faltan parámetros"`.

   - **Ruta no encontrada (404)**: Cualquier otra ruta debe devolver un mensaje indicando que la ruta no existe.

3. **Pruebas permitidas:**
   - Puedes usar el **navegador** para probar las rutas. Por ejemplo:
     - `http://localhost:3000/saludo?nombre=Ana`
     - `http://localhost:3000/calcular?a=10&b=5&operacion=suma`
   - También puedes utilizar el comando **`curl`** desde la terminal para hacer las peticiones. Por ejemplo:
     - Para la ruta de saludo:
       ```bash
       curl "http://localhost:3000/saludo?nombre=Carlos"
       ```
     - Para la ruta de cálculo:
       ```bash
       curl "http://localhost:3000/calcular?a=10&b=5&operacion=suma"
       ```

4. **Configuración de nodemon**
   Modifica tu `package.json` para añadir el siguiente script en la sección `"scripts"`:
   ```json
   "start": "nodemon server.js"
   ```
5. **Entrega del examen:**
   - Asegúrate de que tu servidor responde correctamente a las siguientes rutas:
     - `http://localhost:3000/`
     - `http://localhost:3000/saludo?nombre=TuNombre`
     - `http://localhost:3000/calcular?a=12&b=8&operacion=suma`
     - `http://localhost:3000/calcular?a=12&b=0&operacion=division`
     - Cualquier otra ruta debe devolver un error 404.

## **Criterios de evaluación:**
- El servidor debe inicializarse correctamente con npm.
- El servidor debe responder de manera adecuada a las rutas especificadas.
- El manejo de parámetros en las URLs debe ser correcto.
- Las pruebas deben realizarse usando únicamente el navegador o `curl`.
- Manejo adecuado de los errores (como rutas no encontradas y operaciones inválidas).
