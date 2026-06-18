import streamlit as st

# Prueba git
# ── Contenido de las salas ─────────────────────────────────────────────────────

SALAS = [
    {
        "id": "reglas",
        "titulo": "Las reglas",
        "intro": (
            "Llegas a una sala oscura. En las paredes grabadas con piedra se leen "
            "las normas que gobiernan este reino. Léelas con atención: "
            "el oráculo te preguntará sobre ellas."
        ),
        "contenido": """
**Las Normas de Convivencia del Reino:**

1. **Respeto** — hacia compañeros y el maestro, siempre.
2. **Participación activa y en orden** — la voz que no levanta la mano es ignorada.
3. **No entregar trabajos incompletos** — la mediocridad no tiene cabida aquí.
4. **No se aplican exámenes fuera de tiempo** — el tiempo es un recurso sagrado.
5. **Plagio de trabajos = 0 para TODOS** — el deshonor se comparte.
6. **3 faltas = final del parcial** — la inasistencia cobra su precio.
7. **Calificación máxima en examen final: 8** — quien llega al final llega con límite.
""",
        "preguntas": [
            {
                "pregunta": "¿Cuántas faltas te llevan directo al examen final del parcial?",
                "opciones": ["2 faltas", "3 faltas", "5 faltas", "1 falta"],
                "correcta": "3 faltas",
            },
            {
                "pregunta": "¿Cuál es la calificación máxima que puedes obtener en el examen final?",
                "opciones": ["10", "9", "8", "7"],
                "correcta": "8",
            },
        ],
        "compromiso": "Entiendo y acepto las reglas del reino. Avanzo con honor.",
    },
    {
        "id": "notas",
        "titulo": "El Oráculo de las Notas",
        "intro": (
            "Una esfera brillante flota en el centro de la sala. "
            "Se proyectan números y porcentajes en el aire. "
            "Aquí se decide cuánto vale cada batalla."
        ),
        "contenido": """
**Sistema de Evaluación por Parcial:**

| Evidencia              | 1er Parcial | 2do Parcial | 3er Parcial |
|------------------------|:-----------:|:-----------:|:-----------:|
| Evidencia de Conocimiento | 40 %     | 40 %        | 10 %        |
| Evidencia de Desempeño    | 20 %     | 20 %        | 10 %        |
| Evidencia de Producto     | 30 %     | 30 %        | 30 %        |
| Proyecto Integrador       | 10 %     | 10 %        | 50 %        |

**Fechas de batalla:**
- 1er Parcial: **01-06-26**
- 2do Parcial: **06-07-26**
- 3er Parcial: **10-08-26**
- Examen Final: **17-08-26**
""",
        "preguntas": [
            {
                "pregunta": "¿Cuánto vale la Evidencia de Conocimiento en el 1er Parcial?",
                "opciones": ["10 %", "20 %", "30 %", "40 %"],
                "correcta": "40 %",
            },
            {
                "pregunta": "¿Cuánto vale el Proyecto Integrador en el 3er Parcial?",
                "opciones": ["10 %", "30 %", "50 %", "20 %"],
                "correcta": "50 %",
            },
        ],
        "compromiso": "Conozco las reglas del juego. Sé cuánto vale cada movimiento.",
    },
    {
        "id": "skills",
        "titulo": "Skills a Desbloquear",
        "intro": (
            "Un árbol de habilidades aparece ante ti. "
            "Cada rama representa un poder que dominarás al terminar este cuatrimestre. "
            "Estos son los poderes que el reino espera de ti."
        ),
        "contenido": """
**Objetivo General:**

Desarrollarás aplicaciones móviles mediante lenguajes de programación, entornos de
desarrollo, diseño de interfaces de usuario, arquitecturas, patrones de diseño y
herramientas de programación móvil.

---

**Objetivos Particulares (habilidades que desbloquearás):**

**Nivel 1 — Programación en JavaScript (JS)**
- Base del reino móvil. Sin JS no hay nada.

**Nivel 2 — Introducción a React Native**
- **Componentes** — las piezas con que construyes tu mundo.
- **Screens** — las pantallas que el usuario ve.
- **Navigation** — cómo el usuario se mueve entre pantallas.
- **Comunicación con APIs** — tu app habla con el mundo exterior.
""",
        "preguntas": [
            {
                "pregunta": "¿Cuál es el framework de desarrollo móvil que aprenderás?",
                "opciones": ["Flutter", "React Native", "SwiftUI", "Ionic"],
                "correcta": "React Native",
            },
            {
                "pregunta": "¿Cuál es el lenguaje de programación base de la materia?",
                "opciones": ["Python", "Kotlin", "JavaScript (JS)", "Java"],
                "correcta": "JavaScript (JS)",
            },
        ],
        "compromiso": "Acepto el desafío. Dominaré estas habilidades antes del final.",
    },
    {
        "id": "timeline",
        "titulo": "La Línea del Tiempo",
        "intro": (
            "Has llegado al último rincón del mapa. "
            "Aquí el tiempo se vuelve visible: cada fecha es importante. "
        ),
        "contenido": """
**Fechas Clave del Cuatrimestre:**

```
HOY ──────────────────────────────────────────────────► FIN
  │                │               │              │
  │           01-Jun-26        06-Jul-26      10-Ago-26
  │           1er Parcial      2do Parcial    3er Parcial
  │
  └─ ¡Empieza a prepararte desde hoy!
```

| Evento          | Fecha       | ¿Qué necesitas? |
|-----------------|-------------|-----------------|
| 1er Parcial     | 01-06-26    | Ev. Conocimiento (40%), Desempeño (20%), Producto (30%), PI (10%) |
| 2do Parcial     | 06-07-26    | Ev. Conocimiento (40%), Desempeño (20%), Producto (30%), PI (10%) |
| 3er Parcial     | 10-08-26    | Ev. Conocimiento (10%), Desempeño (10%), Producto (30%), PI (50%) |
| Examen Final    | 17-08-26    | Máximo 8 de calificación |

---

> *"Un héroe que no conoce el mapa, muere perdido."*

**Has completado la aventura. Ya no estás perdido. Ahora toca sobrevivir el cuatrimestre.**
""",
        "preguntas": [],
        "compromiso": None,
    },
]

# ── Inicializar estado ─────────────────────────────────────────────────────────

def init_state():
    if "sala_actual" not in st.session_state:
        st.session_state.sala_actual = 0
    if "desbloqueadas" not in st.session_state:
        st.session_state.desbloqueadas = [True, False, False, False]
    if "respuestas_ok" not in st.session_state:
        st.session_state.respuestas_ok = [0, 0, 0, 0]
    if "compromisos" not in st.session_state:
        st.session_state.compromisos = [False, False, False, False]
    if "respuesta_sel" not in st.session_state:
        st.session_state.respuesta_sel = {}
    if "feedback" not in st.session_state:
        st.session_state.feedback = {}

# ── Renderizar barra de navegación ────────────────────────────────────────────

def render_nav():
    st.markdown("### Mapa de la Aventura")
    cols = st.columns(len(SALAS))
    for i, sala in enumerate(SALAS):
        desbloqueada = st.session_state.desbloqueadas[i]
        activa = st.session_state.sala_actual == i
        with cols[i]:
            if desbloqueada:
                label = sala["titulo"]
                if activa:
                    st.markdown(f"**-> {label}**")
                else:
                    if st.button(label, key=f"nav_{i}"):
                        st.session_state.sala_actual = i
                        st.rerun()
            else:
                st.markdown("*[Bloqueado]*")
    st.divider()

# ── Renderizar sala ────────────────────────────────────────────────────────────

def render_sala(idx):
    sala = SALAS[idx]
    st.markdown(f"## {sala['titulo']}")
    st.markdown(f"> {sala['intro']}")
    st.divider()
    st.markdown(sala["contenido"])

    if not sala["preguntas"]:
        return

    st.divider()
    st.markdown("### El Oráculo te habla...")
    st.markdown("Responde correctamente para continuar tu camino.")

    for q_idx, q in enumerate(sala["preguntas"]):
        key_sel = f"q_{idx}_{q_idx}_sel"
        key_checked = f"q_{idx}_{q_idx}_checked"

        if st.session_state.feedback.get(key_checked):
            st.success(f"Pregunta {q_idx+1}: {q['pregunta']}  \nRespondida correctamente.")
            continue

        st.markdown(f"**Pregunta {q_idx+1}:** {q['pregunta']}")
        respuesta = st.radio(
            "Elige tu respuesta:",
            options=["— Elige una opción —"] + q["opciones"],
            key=key_sel,
            index=0,
        )

        if st.button(f"Confirmar respuesta {q_idx+1}", key=f"btn_{idx}_{q_idx}"):
            if respuesta == "— Elige una opción —":
                st.warning("Debes seleccionar una opción.")
            elif respuesta == q["correcta"]:
                st.session_state.feedback[key_checked] = True
                st.session_state.respuestas_ok[idx] += 1
                st.rerun()
            else:
                st.error("Incorrecto. Vuelve a leer el contenido e intenta de nuevo.")

        st.markdown("")

    if st.session_state.respuestas_ok[idx] >= 2:
        st.divider()
        st.markdown("### Check de Compromiso")
        compromiso = st.checkbox(
            sala["compromiso"],
            key=f"chk_{idx}",
            value=st.session_state.compromisos[idx],
        )

        if compromiso and not st.session_state.compromisos[idx]:
            st.session_state.compromisos[idx] = True
            siguiente = idx + 1
            if siguiente < len(SALAS):
                st.session_state.desbloqueadas[siguiente] = True
            st.rerun()

        if not compromiso:
            st.info("Marca el compromiso para desbloquear la siguiente sala.")
        else:
            siguiente = idx + 1
            if siguiente < len(SALAS):
                st.success(f"Sala desbloqueada: **{SALAS[siguiente]['titulo']}**")

# ── App principal ──────────────────────────────────────────────────────────────

def main():
    st.set_page_config(
        page_title="Aventura de Texto — Programación Móvil",
        page_icon="🗺️",
        layout="centered",
    )

    st.title("Aventura de Texto")
    st.markdown("#### Programación Móvil — Guía de supervivencia para el estudiante nuevo")
    st.markdown(
        "Bienvenido. Acabas de entrar a la carrera y no sabes qué te espera. "
        "Navega sala por sala, aprende las reglas de la materia y demuestra que estás listo para avanzar."
    )
    st.divider()

    init_state()
    render_nav()
    render_sala(st.session_state.sala_actual)


if __name__ == "__main__":
    main()
