# 📝 To-Do List App - React
## Una aplicación de tareas moderna hecha con React, con diseño de tarjetas, filtrado y estadísticas en tiempo real.

# 🔹 Funcionalidades
### ✅ Añadir tareas
### ✏️ Editar tareas directamente al hacer clic
### ✔️ Marcar tareas completadas
### 🗑️ Eliminar tareas con efecto visual
### 🔍 Filtrado: Todas / Pendientes / Completadas
### 📊 Estadísticas: Total, Pendientes y Completadas
### 🕒 Fechas visibles: Creación y última edición

# 🎨 Diseño

## 🗂 Tarjetas de tareas
### Fondo gris #bbb, bordes redondeados y sombra suave
### Hover: fondo naranja claro #f3c9a0ff, escala y sombra más intensa
### Texto blanco con sombra para legibilidad
### Fecha en naranja #f29c45ff
### Botón de eliminar rojo con efecto hover
# 📝 Formulario de tareas
### Tarjeta translúcida con blur
### Botón azul con hover y transición suave
# 🔧 Filtros y estadísticas
### Tarjetas con fondo translúcido y sombreado
### Colores diferenciados para botones y contadores

# ⚡ Tecnologías
### React 18
### CSS moderno (flex, box-shadow, backdrop-filter, hover animado)
### Responsive design
### Fuentes modernas: Inter, sans-serif

# 🗂 Estructura de archivos
# /src
# ├─ App.js
# ├─ TaskList.js        # Lista de tareas
# ├─ TaskItem.js        # Componente de cada tarea
# ├─ TaskForm.js        # Formulario para añadir tareas
# ├─ TaskFilter.js      # Filtro de tareas
# ├─ index.js
# └─ styles.css         # Estilos globales y de componentes

# Imagenes del Proyecto
### <img width="1920" height="932" alt="image" src="https://github.com/user-attachments/assets/5d0c5ab6-7648-4796-be8c-5d425a660f0b" />
### <img width="1918" height="930" alt="image" src="https://github.com/user-attachments/assets/0d58e70b-d27a-4f46-bb6d-ba7a9abed9e2" />
### <img width="1914" height="928" alt="image" src="https://github.com/user-attachments/assets/55ddaaea-76be-410a-928a-f86c609d8b47" />

# ¿Como Funciona ToDoo-app?:

## 1️⃣ App.js
### Es el componente principal que maneja todo.
### Guarda el estado de las tareas en un array (tasks).
### Contiene las funciones para:
### Añadir tareas (addTask)
### Editar tareas (editTask)
### Marcar tareas como completadas (toggleTask)
### Eliminar tareas (deleteTask)
### Renderiza los componentes: TaskForm, TaskFilter, TaskList, y las estadísticas.

## 2️⃣ TaskForm.js
### Componente que muestra un formulario para añadir nuevas tareas.
### Tiene un input controlado con estado local (taskText).
### Al enviar el formulario (handleSubmit):
### Llama a onAddTask pasado desde App.js
### Limpia el input automáticamente.
### Estilizado como tarjeta translúcida con blur y sombra.

## 3️⃣ TaskList.js
### Renderiza todas las tareas que recibe desde App.js.
### Cada tarea se muestra usando TaskItem.
### Se encarga solo de mapear el array de tareas y pasar props de acciones (editar, eliminar, marcar completada).

## 4️⃣ TaskItem.js
### Componente que representa una sola tarea:
### Checkbox para marcar como completada
### Texto de la tarea que se puede editar al hacer clic
### Fecha de creación y última edición
### Botón para eliminar
### Tiene estado local (isEditing y editedText) para manejar la edición en línea.
### Estilos:
### Tarjeta gris con borde redondeado y sombra
### Hover con fondo naranja y escala
### Texto blanco con sombra, fecha en naranja
### Botón de eliminar rojo con hover y borde

## 5️⃣ TaskFilter.js (opcional si lo tienes)
### Permite filtrar las tareas: todas, pendientes o completadas.
### Cambia la vista en TaskList según el filtro.
### Botones con estilos distintos para cada estado activo.

## 6️⃣ styles.css
### Reset y fondo global: fuente Inter, fondo oscuro con patrón de cubos.
### Estilos de componentes:
### Formulario, filtros y listas como tarjetas con sombra y blur
### Tarjetas de tareas: gris, hover naranja, texto con sombra, fecha destacada
### Botón eliminar: rojo, efecto hover y borde
### Tipografía moderna y legible, transiciones suaves para hover y animaciones de aparición (fadeIn).
###  El usuario añade tareas en TaskForm → App.js actualiza el estado → TaskList muestra la nueva tarea.
### Puede marcar tareas como completadas con el checkbox → App.js actualiza la tarea.
### Puede editar texto al hacer clic sobre la tarea → TaskItem maneja edición en línea.
### Puede eliminar tareas con el botón → TaskItem llama a App.js.
### Filtros y estadísticas se actualizan automáticamente según el estado de las tareas.

# 🔹 Flujo de la aplicación
# 1️⃣ Añadir tarea
## [ TaskForm ]
##  ↓ onAddTask()
## [ App.js - tasks[] ] → se actualiza el estado
##  ↓
## [ TaskList ]
##  ↓
## [ TaskItem ] → nueva tarjeta aparece con animación

# 2️⃣ Editar tarea
## [ TaskItem ]
##  ↓ click en texto
## [ Modo edición ]
##  ↓ enter o blur
## [ App.js - editTask() ]
##  ↓
## [ TaskList ] → se actualiza el texto

# 3️⃣ Marcar como completada
## [ TaskItem ]
##  ↓ check/uncheck
## [ App.js - toggleTask() ]
##  ↓
## [ TaskList ] → estilo tachado + opacidad

# 4️⃣ Eliminar tarea
## [ TaskItem ]
##  ↓ click en 🗑️
## [ App.js - deleteTask() ]
##  ↓
## [ TaskList ] → tarjeta desaparece

# 5️⃣ Filtrar tareas
## [ TaskFilter ]
##  ↓ cambio de filtro
## [ App.js ]
##   ↓
## [ TaskList ] → muestra:
##   🔹 Todas
##  🔹 Pendientes
##  🔹 Completadas

# 6️⃣ Estadísticas
## [ App.js ] → calcula:
##  🔹 Total
##  🔹 Pendientes
##  🔹 Completadas
##  ↓
## [ Contador visual ] en UI

