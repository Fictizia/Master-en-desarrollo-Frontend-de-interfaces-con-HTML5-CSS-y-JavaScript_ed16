# Clase 1

### Normas y demás
- Puntualidad
- Liquidos y comida
- Ubicación
- Cafeteria, cajeros, farmacias, etc...

### Metodología
- Descansos
- Gestión del curso en GitHub
 - Comunicación fuera de clase
 - Repositorio común
 - Toda la teoría, prácticas y recursos
- Proyecto personal
- Prácticas y "deberes"

### Sobre el profesor

![img_developer](https://avatars0.githubusercontent.com/u/45309269?v=4)

**Bio:**
"#VR, #Mnemotecnia, #OpenSource | #JavaScript, #React, #React-Native | Colaborador [@os_weekends](http://osweekends.com/) | Profe en [@fictiziaescuela](https://www.fictizia.com/profesorado/)

**Redes Sociales:**
- [Twitter](https://twitter.com/GilValdesoiro)
- [Github](https://github.com/FranciscoValdesoiro)
- [Linkedin](https://www.linkedin.com/in/francisco-valdesoiro-gil/)


### Control de Versiones

**Bienvenidos a la maquina del tiempo**
- Arquitectura de Árbol(working area, staging Area, Repository)
- Auditoria de código (quien? cuando? y que?)
- Git trabaja en binario (imagenes, docs, etc...)
- Git no guarda una copia de cada version, solo los cambios.
- Distribución (Repositorios y Clones)
- Opensource y funciona offline
- Consola vs. GUI

**Trabajo efectivo**

- [Clientes escritorio](https://mac.github.com)
- [Consola (Cheat-sheet)](https://education.github.com/git-cheat-sheet-education.pdf)
- Repositorio
- Tracking
- Commits
- Sincronizar cambios
- Ramas
- Fork
- Clonación
- Pull-request
- Gestión de merges
- Público/Privado


**Los entornos con Git**

![Repositorios locales y remotos](https://camo.githubusercontent.com/a7e841d76d25ce81747e02cb04f651c554ebf391/687474703a2f2f6d656469612e74756d626c722e636f6d2f74756d626c725f6c626e706f7859744e6d3171616b7530352e706e67)

[Repositorios locales y remotos](https://camo.githubusercontent.com/a7e841d76d25ce81747e02cb04f651c554ebf391/687474703a2f2f6d656469612e74756d626c722e636f6d2f74756d626c725f6c626e706f7859744e6d3171616b7530352e706e67)


**Working Flow**

![Como trabajar con Git](https://camo.githubusercontent.com/9bde6fb64a9542a572e0e2017cbb58d9d2c440ac/687474703a2f2f6e7669652e636f6d2f696d672f6769742d6d6f64656c4032782e706e67)


### Github

- [Socializacion](https://guides.github.com/activities/socialize/)
	- Perfil
- Timeline Actividad
- [Colaborar](https://guides.github.com/activities/contributing-to-open-source/)
- [Compartir](https://guides.github.com/introduction/getting-your-project-on-github/)
- [Gist](https://gist.github.com/)
- [Issues](https://guides.github.com/features/issues)
- [Pages](https://guides.github.com/features/pages/)
- [Wikis](https://guides.github.com/features/wikis)


**GIT (comandos)**

![Trabajar con Git/Github](https://camo.githubusercontent.com/f7aed3b4c2a01dacf317a788d2b8836b1e9c5038/687474703a2f2f7777772e6765656b67756d626f2e636f6d2f77702d636f6e74656e742f75706c6f6164732f323031312f30382f6e7669652d6769742d776f726b666c6f772d636f6d6d616e64732e706e67)


**Quiero subir algo a Github**

1. Verificamos el estado en general.
 ```
git status
 ```

2. Nos actualizamos.
 ```
git pull
 ```

3. Preparamos nuestro commit (añadimos archivos y añadimos la información adicional)
 ```
git add "ARCHIVO"
git commit -m "MENSAJE..."
 ```

4. Actualizamos y enviamos los cambios a Github
 ```
git pull && git push
 ```


**No quiero subir nada a Github, pero quiero estar actualizado**

1. Verificamos el estado en general.
 ```
git status
 ```

2. Nos actualizamos.
 ```
git pull
 ```


**Trucos:**

Si usais este [comando](https://git-scm.com/docs/git-credential-cache/1.7.12.1):

```
git config --global credential.helper 'cache --timeout=9999999'
```
Git cacheará la sesión y no os preguntará el usuario o la password durante 9999999ms (2,7h).