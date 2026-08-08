# Golden Benefits — sitio nuevo

Página de aterrizaje para **www.golden-benefits.com**, diseñada para adultos mayores
hispanohablantes que están entendiendo Medicare.

**Estrategia:** la página no muestra ningún número de teléfono. Todo empuja al
formulario para que la persona deje sus datos y Ernesto la llame.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La página principal. Todo (diseño, textos, estilos) está en este único archivo. |
| `privacidad.html` | Aviso de privacidad, enlazado desde el pie de página. |
| `logo.png` | ✅ El monograma dorado GB, en el encabezado. |
| `ernesto.jpg` | ✅ Su foto, solo en la sección "Mucho gusto, soy Ernesto". |

No hay que instalar nada. Se abre con doble clic o se sube a cualquier servidor.

---

## 🖼️ Las imágenes

Ya están puestas. Se copiaron de
`Documents/Claude/Projects/Golden B/golden-benefits-site/`.

- **`logo.png`** — el monograma se achicó a 512×512 px (de 1254×1254) porque en el
  encabezado se ve a 54 px. Pesaba 1 MB y ahora pesa 238 KB, así que la página abre
  más rápido en celular.
  El archivo trae fondo blanco, por eso el logo va dentro de una **chapa blanca
  redondeada** en el encabezado azul. Se ve intencional y funciona igual de bien si
  algún día consigue una versión con fondo transparente.
- **`ernesto.jpg`** — 1024×1024 px, 139 KB. Aparece **solo** en la sección
  "Mucho gusto, soy Ernesto", con marco dorado.

Si quiere cambiar cualquiera de las dos, simplemente reemplace el archivo respetando
el mismo nombre. El código tiene un respaldo automático: si un archivo se borra o se
renombra, la página **no se rompe** — muestra el monograma dibujado en código o las
iniciales "ES".

---

## ✅ Estado actual del sitio

- **El formulario ya está conectado** a Formspree (`https://formspree.io/f/xojgggbe`).
  Cuando alguien lo llena, el mensaje le llega por correo a
  `ernestos@expertinsuranceteam.com`. Solo hay un formulario en toda la página
  (el del héroe, sección "Solicitar información"); el que había duplicado en
  "Contacto" se eliminó.
- **El sitio ya está publicado** en Vercel, conectado al repositorio de GitHub
  `transportems9-dotcom/golden-benefits-site` (rama `main`). Cada vez que se suba un
  cambio a esa rama, Vercel lo vuelve a publicar solo, sin que haga nada más.

**Pendiente:**
1. **Pruebe el formulario usted mismo** — llénelo en el sitio publicado con sus propios
   datos y confirme que le llega el correo. Revise también la carpeta de spam la primera
   vez.
2. **Las cifras de la franja dorada** — dice "+10 años ayudando a la comunidad".
   Ponga su número real. No invente cifras.
3. **Su horario real** — está en el pie de página.

Ya está puesto: el número de licencia **20161875** (en "Mucho gusto, soy Ernesto" y en
el pie de página).

En el panel de Formspree (formspree.io → su formulario → Settings), le conviene activar
la notificación por correo si no está activada por defecto, y revisar si puede agregar
un aviso por SMS. Un cliente de 65 años que llenó el formulario espera su llamada
pronto — entre más rápido conteste, más probable que se inscriba con usted.

El plan gratis de Formspree permite 50 mensajes al mes. Si recibe más, hay planes de
pago.

---

## Cómo actualizar el sitio ya publicado

El sitio vive en GitHub y Vercel lo redespliega automáticamente con cada cambio. Para
actualizar cualquier texto, precio o dato:

1. Edite el archivo (`index.html`, etc.) en esta carpeta.
2. Suba el cambio a GitHub:
   ```
   git add -A
   git commit -m "describa aquí qué cambió"
   git push
   ```
3. En 1–2 minutos Vercel ya tiene la versión nueva en línea. No hay que entrar a
   Vercel ni tocar nada allá — se actualiza solo.

---

## Conectar su dominio propio (www.golden-benefits.com)

**golden-benefits.com es ahora el dominio oficial del sitio**, en lugar de
tuasesormedicare.com. Las etiquetas del sitio (`canonical`, `og:url`) ya apuntan a
golden-benefits.com.

1. En **vercel.com**, entre al proyecto → **Settings → Domains**.
2. Escriba `golden-benefits.com` (y opcionalmente `www.golden-benefits.com`) y
   agréguelo.
3. Vercel le va a mostrar exactamente qué registros DNS cambiar (normalmente un
   registro tipo A o CNAME). Entre a donde compró el dominio (GoDaddy, Namecheap, etc.)
   y haga ese cambio ahí.
4. Puede tardar entre unos minutos y unas horas en propagarse. Vercel le avisa en el
   panel cuando quede activo, y agrega el certificado de seguridad (candado) solo.
5. **Si tuasesormedicare.com sigue activo en algún lado** (anuncios viejos, tarjetas de
   presentación, Google), configure ahí una redirección 301 hacia golden-benefits.com
   en vez de dejarlo apagado sin más — así no pierde las visitas que todavía lleguen
   por ese nombre.

Esto reemplaza por completo lo que hoy sirve WordPress.com — los popups de
"Subscribe", el banner de cookies y el anuncio de "Create a free website" van a
desaparecer en cuanto el cambio de DNS se complete.

---

## Cumplimiento (léalo, es importante)

Al final del `index.html` hay dos descargos legales:

- "No estamos afiliados ni respaldados por el gobierno de los Estados Unidos…"
- "No ofrecemos todos los planes disponibles en su área…"

CMS los exige a los TPMO — agentes que promocionan planes Medicare Advantage o Parte D.
**No los borre.** El único número de teléfono que queda en toda la página es
1-800-MEDICARE, y es obligatorio: es de Medicare, no suyo.

Antes de publicar, muéstrele la página a su FMO o al departamento de cumplimiento de su
carrier y confirme:

- que el texto exacto de los descargos es el que ellos aprueban para este año;
- que la frase "sin costo para usted" está permitida como usted la usa;
- si necesita un número de aprobación de material de mercadeo en el pie de página.

**Ojo con "los 50 estados".** La página dice que usted atiende todo el país. Para
sostener eso necesita tener licencia en cada estado donde inscriba a alguien, o
trabajar bajo una agencia que sí las tenga. Confírmelo antes de publicar. Si su alcance
real es menor, cambie "50 estados" en la franja dorada y "Todo Estados Unidos — los 50
estados" en la sección de contacto.

Yo no soy abogado ni experto en cumplimiento de CMS. Esa revisión la tiene que hacer
su FMO.

---

## Qué se arregló del sitio anterior

- **Ortografía.** El sitio viejo decía "atesion", "Expliaion", "inscrpcion",
  "penanilades", "ignecesarios", "covertura", "signicar", "Nuestor". Todo corregido y
  con acentos.
- **El formulario ahora es el centro de la página.** Está arriba de todo, visible sin
  bajar. Todos los botones de la página llevan a él, y ya está conectado a Formspree.
- **Se quitó el número de teléfono** de todas las páginas, incluido el aviso de
  privacidad.
- **Se borró el texto de ejemplo de WordPress** que estaba en la página "About".
- **Se quitaron los enlaces falsos** del pie (Team, History, Careers).
- **Letra más grande y más contraste** — 19px de base en vez de los 16px típicos,
  botones de 60px de alto. Pensado para leerse a los 65+ y para dedos que no aciertan
  siempre.
- **Contenido nuevo que antes no existía:** las 4 partes de Medicare explicadas,
  8 preguntas frecuentes y una sección "¿Le suena familiar?" que conecta con lo que
  la persona está sintiendo.
- **Descargos de CMS**, que no estaban.
- **Funciona en el celular**, que es por donde va a llegar la mayoría de la gente.
  Abajo queda fija una barra con un solo botón: "Déjeme sus datos y lo llamo".

---

## Ideas para después (no urgentes)

- **Testimonios reales.** Tres frases de clientes, con nombre y ciudad, valen más que
  cualquier diseño. Pídalos por mensaje después de una inscripción.
- **Un video corto** suyo, de 60 segundos, presentándose en español.
- **Versión en inglés**, si atiende clientes bilingües o a los hijos que ayudan a sus
  padres a escoger.
- **Google Business Profile** — para que aparezca cuando alguien busque
  "agente de Medicare en español cerca de mí". Es gratis y probablemente le traiga más
  contactos que el sitio mismo.
