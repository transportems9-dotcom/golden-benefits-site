# Golden Benefits — sitio nuevo

Página de aterrizaje para **www.tuasesormedicare.com**, diseñada para adultos mayores
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

## ⚠️ 3 cosas que hay que completar antes de publicar

Busque en `index.html` la palabra **`ERNESTO`** — cada lugar que hay que cambiar está
marcado con un comentario que empieza así.

1. **El formulario** — ahora mismo no envía nada. Vea la sección de abajo.
   Esto es lo más urgente: sin esto, la página no sirve de nada.
2. **Las cifras de la franja dorada** — dice "+10 años ayudando a la comunidad".
   Ponga su número real. No invente cifras.
3. **Su horario real** — sección de contacto.

Ya está puesto: el número de licencia **20161875** (aparece en la sección "Mucho gusto,
soy Ernesto", en la sección de contacto y en el pie de página).

---

## Hacer que el formulario funcione (10 minutos, gratis)

**Hay dos formularios** en la página: uno arriba en el héroe y otro abajo en la sección
de contacto. Los dos tienen que apuntar al mismo lugar.

1. Entre a **formspree.io** y cree una cuenta gratis con su correo.
2. Cree un formulario nuevo. Le van a dar una dirección como
   `https://formspree.io/f/xyzabcd`.
3. En `index.html`, busque **`SU_CODIGO_AQUI`**. Sale tres veces: en las **líneas 417
   y 797** (los dos formularios de verdad) y una vez en un comentario de la línea 415.
   Reemplace las tres.
4. Envíese una prueba a usted mismo desde los dos formularios antes de darle el enlace
   a nadie.

El plan gratis permite 50 mensajes al mes. Si recibe más, hay planes de pago.

**Consejo:** configure Formspree para que además le mande un mensaje de texto o una
notificación al celular. Un cliente de 65 años que llenó el formulario espera su
llamada pronto — si le contesta el mismo día, la probabilidad de que se inscriba con
usted sube muchísimo.

---

## Cómo publicarlo en www.tuasesormedicare.com

Su dominio hoy apunta a WordPress.com gratis. Tres caminos, del más fácil al mejor:

**Opción A — Netlify (gratis, 10 minutos, la que yo recomiendo)**
1. Entre a **netlify.com** y cree una cuenta gratis.
2. Arrastre esta carpeta completa a la caja que dice "Deploy manually".
3. En *Domain settings → Add custom domain*, escriba `tuasesormedicare.com`.
4. Netlify le dice qué cambiar en el panel donde compró el dominio. Cámbielo ahí.

Esto le quita la publicidad de WordPress, los popups de "Subscribe" y el banner de
cookies. Y le da certificado de seguridad (candado) gratis.

**Opción B — quedarse en WordPress.com**
Requiere el plan de pago con plugins para poder subir HTML personalizado. Cuesta más
y da más trabajo que la opción A.

**Opción C — su FMO**
Muchas organizaciones de agentes (FMO) le dan un sitio ya aprobado por cumplimiento.
Vale la pena preguntar antes de pagar hosting.

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
  bajar, y se repite al final. Todos los botones llevan a él.
- **Se quitó el número de teléfono** de todas las páginas, incluido el aviso de
  privacidad.
- **Se borró el texto de ejemplo de WordPress** que estaba en la página "About".
- **Se quitaron los enlaces falsos** del pie (Team, History, Careers).
- **Letra más grande y más contraste** — 19px de base en vez de los 16px típicos,
  botones de 60px de alto. Pensado para leerse a los 65+ y para dedos que no aciertan
  siempre.
- **Contenido nuevo que antes no existía:** las 4 partes de Medicare explicadas, las
  fechas de inscripción, 8 preguntas frecuentes y una sección "¿Le suena familiar?"
  que conecta con lo que la persona está sintiendo.
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
