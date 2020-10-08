import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {
  DIFFICULTY = {
    EASY: 'EASY',
    MEDIUM_EASY: 'MEDIUM_EASY',
    MEDIUM: 'MEDIUM',
    HARD: 'HARD',
    VERY_HARD: 'VERY_HARD'
  };

  private basicQuestions = [
    {
      question: '¿Cuál fue la ciudad principal de los israelitas?',
      options: ['Jersusalén', 'Roma', 'Babilonia', 'Vaticano'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Quién dijo "Muera yo ahora, ya que he visto tu rostro, y sé que aún vives"?',
      options: ['Israel', 'Moisés', 'Josué', 'Pablo'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿En qué versículo se registra que Jesús cantó?',
      options: ['Mateo 26:30', 'Mateo 24:25', 'Mateo 25:30', 'Mateo 27:25'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Qué capítulo es considerado el “Salón de la fama de la fe”?',
      options: ['Hebreos 11', 'Mateo 11', 'Juan 11', 'Hechos 11'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿A cuál animal Dios privó de inteligencia?',
      options: ['Avestruz', 'Hormiga', 'Pavoreal', 'Leviatán'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Quién es considerado en la Biblia "El hombre más manso"?',
      options: ['Moisés', 'Pablo', 'Pedro', 'Caleb'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Qué misionero evangelizó a los pieles rojas?',
      options: ['David Brainerd', 'William Carey', 'John Wesley', 'George Whitefield'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Que hombre tenía una larga y pesada cabellera?',
      options: ['Absalón', 'Sansón', 'Juan el Bautista', 'Roboam'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Que hombre no llevó duelo cuando murieron sus hijos?',
      options: ['Aarón', 'Adán', 'David', 'Nehemías'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Cuál era el nombre original de Josué?',
      options: ['Oseas', 'Nunca cambió su nombre', 'Caleb', 'Jozías'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Quién dio el sermón más largo de la Biblia?',
      options: ['Pablo', 'Jesús', 'Pedro', 'Moisés'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Quién dijo "Señor, no tienes con qué sacarla, y el pozo es hondo. ¿de dónde, pues, tienes el agua viva?"?',
      options: ['Mujer samaritana', 'Viuda de Sarepta', 'Mujer adultera', 'María Magdalena'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿En qué libro de la Biblia se menciona a más animales?',
      options: ['Levítico 11', 'Génesis 7', 'Levítico 9', 'Proverbios 5'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Cuántos versículos tiene el Salmo 117?',
      options: ['2', '176', '174', '4'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: 'Jesús fue crucificado entre dos personas, estás dos personas ¿quiénes fueron?',
      options: ['Ladrones', 'Rebeldes', 'Recaudadores', 'Traidores'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Quién dijo "¿Quién es Jehová, para que yo oiga su voz y deje ir a Israel? Yo no conozco a Jehová, ni tampoco dejaré ir a Israel"?',
      options: ['Faraón', 'Moisés', 'Nabucodonosor', 'Pablo'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Quién de los siguientes NO fue discípulo de Jesús?',
      options: ['Marcos', 'Santiago', 'Mateo', 'Bartolomé'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Quién dijo "Por voluntad de Jehová he adquirido varón"?',
      options: ['Eva', 'Sara', 'Raquel', 'Ana'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿A quién se refieren las siguientes pistas: "carne, sueño, mujer, huesos, costilla"?',
      options: ['Adán', 'Goliat', 'David', 'José'],
      difficulty: 'EASY',
      used: false
    },
    {
      question:
        '¿Quién dijo "Mi corazón se regocija en Jehová, Mi poder se exalta en Jehová; Mi boca se ensanchó sobre mis enemigos, Por cuanto me alegré en tu salvación"?',
      options: ['Ana', 'David', 'Jeremías', 'Josué'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Cuántos años habitaron los israelitas en Egipto antes de ser libertados?',
      options: ['430 años', '400 años', '410 años', '100 años'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: 'Moisés e Israel llegaron a un lugar llamado Elim, ¿cuántas palmeras y cuantas fuentes había en ese lugar?',
      options: ['12 fuentes y 70 palmeras', '70 fuentes y 12 palmeras', '12 fuentes y 12 palmeras', '7 fuentes y 70 palmeras'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Cuánto tiempo dio Nabucodonosor a Daniel para que aprendiera la lengua y escritura de los caldeos?',
      options: ['3 años', '3 meses', '1 año', '6 meses'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Cuántas vueltas dio a Jericó el ejercito de Josué antes del asalto a la ciudad?',
      options: ['13 vueltas', '7 vueltas', '14 vueltas', '12 vueltas'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: 'Y le dieron nombre las vecinas, y lo llamaron...',
      options: ['Obed', 'Oseas', 'Eliú', 'Jefté'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Nombre del personaje al que su asna aplastó su pie contra la pared?',
      options: ['Balaam', 'Balaac', 'Baal', 'Jonás'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿En casa de quién se alojaron los espías que Josué envió a Jericó?',
      options: ['Rahab', 'María', 'Salomé', 'Racab'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Con cuántos hombres venció Gedeón a los medianitas?',
      options: ['300 hombres', '350 hombres', '200 hombres', '600 hombres'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Cómo se llamaban las dos nueras de Noemí?',
      options: ['Rut y Orfa', 'Rut y Ester', 'Rut y Rebeca', 'Rut y Lea'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: 'Según la Biblia, ¿cuál es la raíz de todos los males?',
      options: ['El amor al dinero', 'La desobediencia', 'Un corazón perverso', 'La poca fe'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿En qué monte murió Saúl con sus tres hijos?',
      options: ['Gilboa', 'Hebrón', 'Moriah', 'Tabor'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿En qué monte murió Moisés?',
      options: ['Nebo', 'Sinaí', 'Horeb', 'Tabor'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Por cuántos días ayunó Moisés?',
      options: ['40 días', 'Nunca ayunó', '7 días', '12 días'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Cómo se llamaba el esposo de Jezabel?',
      options: ['Acab', 'Acaz', 'Ocozías', 'Urías'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Qué sígnica el lugar llamado Gólgota?',
      options: ['Lugar de la calavera', 'Lugar de tristezas', 'Lugar de llanto', 'Lugar de muerte'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Cuál es el título de Apocalipsis 21:1?',
      options: ['Cielo nuevo y tierra nueva', 'Los mil años', 'La nueva Jerusalén', 'Las bodas del cordero'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿En que libro de la Biblia se narra la historia de José y sus hermanos?',
      options: ['Génesis', 'Éxodo', 'Levítico', 'Deuteronomio'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Cuál era la nacionalidad de Rut?',
      options: ['Moabita', 'Israelita', 'Edomita', 'Filistea'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Quién fue el padre de Abel?',
      options: ['Adán', 'Moisés', 'Caín', 'Abraham'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Cómo se llamaba la mujer que se dice tenía “ojos delicados”?',
      options: ['Lea', 'Rebeca', 'Raquel', 'Ester'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Cómo se llamaba el esposo de Débora?',
      options: ['Lapidot', 'Nun', 'Jefté', 'Otoniel'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Qué oficio tenía Jesús?',
      options: ['Carpintero', 'Herrero', 'Guerrero', 'Soldado'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: 'Un barco enorme construí, por mandato divino, mis vecinos se burlaron de mí, pero lloraron cuando la lluvia vino',
      options: ['Noé', 'Caín', 'Jesús', 'Aarón'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: 'Rubio era mi semblante, fui un experto cazador, por culpa de un guisado, perdí mis derechos de hijo mayor',
      options: ['Esaú', 'Jacob', 'David', 'Saúl'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: 'De gran estatura fui el terror de Israel, ¿quién podría imaginar que con una honda me podrían vencer?',
      options: ['Goliat', 'Sansón', 'Absalón', 'Faraón'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Cuál de los siguientes colores NO eran parte de las cortinas del Tabernáculo?',
      options: ['Bermejo', 'Azul', 'Púrpura', 'Carmesí'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿De qué color era la túnica de José?',
      options: ['Muchos colores', 'Roja y amarilla', 'Blanca y roja', 'Púrpura y blanca'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Qué oficio tenía Nehemías?',
      options: ['Copero', 'Mensajero', 'Consejero', 'Cocinero'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿De qué nacionalidad era Moisés?',
      options: ['Hebreo', 'Filisteo', 'Egipcio', 'Moabita'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Qué edad tenía Moisés cuando fue descubierto por la hija de Faraón?',
      options: ['3 meses', '7 días', '8 días', '1 mes'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Cómo se llamaba el pan que caía del cielo y alimentaba a los israelitas en el desierto?',
      options: ['Maná', 'Manac', 'Francés', 'Bimbo'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Cómo se llamaba el esposo de María madre de Jesús?',
      options: ['José', 'Juan', 'Lázaro', 'Abraham'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Dónde fue prendido y arrestado Jesús cuando se encontraba orando?',
      options: ['Huerto de Getsemaní', 'Monte de los Olivos', 'Gólgota', 'En el templo'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Quién propuso a su mujer hacerse pasar por su hermana en Egipto, para preservar su vida?',
      options: ['Abraham', 'Enoc', 'Moisés', 'Sem'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Quién fue el segundo rey de Israel?',
      options: ['David', 'Jonatán', 'Saúl', 'Josué'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Quién condujo a los israelitas a conquistar la "Tierra Prometida"?',
      options: ['Josué', 'Moisés', 'Caleb', 'Coré'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: 'Fue desterrado a la isla de Patmos, donde escribió el libro de Apocalipsis:',
      options: ['Juan', 'Pablo', 'Bernabé', 'Marcos'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Dónde dijo Jehová que la serpiente heriría a la mujer?',
      options: ['En el calcañar', 'En su orgullo', 'En la cara', 'En la pierna'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Quién pasó una noche encerrado en un foso de leones?',
      options: ['Daniel', 'Jeremías', 'Pedro', 'Pablo'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿En quién se originó el pecado?',
      options: ['Lucifer', 'Eva', 'Adán', 'Caín'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿A qué ciudad se refirió Jesús cuando dijo "No hay profeta sin honra, sino en su propia tierra y en su casa"?',
      options: ['Nazaret', 'Jerusalén', 'Galilea', 'Belén'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Qué libro se encuentra entre Amós y Jonás?',
      options: ['Abdías', 'Ninguno', 'Habacuc', 'Joel'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Cuántas tinajas de agua convirtió Jesús en vino?',
      options: ['Seis', 'Diez', 'Tres', 'Cuatro'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Quién escribió el libro de Proverbios?',
      options: ['Varios autores', 'David', 'Moisés', 'Salomón'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Quién fue profeta durante el reinado de Darío?',
      options: ['Daniel', 'Zacarías', 'Hageo', 'Jeremías'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Qué significa Bet-el?',
      options: ['Casa de Dios', 'Escalera de Dios', 'Dios es mi roca', 'Sueño de Dios'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Cuántos capítulos tiene el libro de Judas?',
      options: ['Uno', 'Dos', 'Tres', 'Cinco'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Qué padre e hijo fueron circuncidados el mismo día?',
      options: ['Abraham e Ismael', 'Isaac y Jacob', 'Abraham e Isaac', 'Moisés y Gersón'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Cuánto tiempo anduvo Isaías desnudo y descalzo?',
      options: ['Tres años', 'Tres días', 'Tres meses', 'Nunca hizo eso'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿En qué libro de la Biblia cuenta que el arcángel Miguel y el diablo disputaban por el cuerpo de Moisés?',
      options: ['Judas', 'Deuteronomio', 'Zacarías', 'Apocalipsis'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿A qué tribu de Israel pertenecía el rey Saúl y el apostol Pablo?',
      options: ['Benjamín', 'Judá', 'Efraín', 'Otra'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Cuántos de los jueces de Israel fueron mujeres?',
      options: ['Una', 'Dos', 'Ninguna', 'Tres'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: 'En el N.T. aparecía una mujer llamada Lidia ¿qué vendía esta mujer?',
      options: ['Púrpura', 'Templos de Diana', 'Ungüentos', 'Tiendas'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Cuál es el evangelio que NO registra ninguna predicción de Jesús acerca de su resurreción?',
      options: ['Juan', 'Mateo', 'Marcos', 'Lucas'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Quién vió a unos ángeles subir y bajar por una escalera?',
      options: ['Jacob', 'Isaac', 'Isaías', 'Jeremías'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Cuál es el capítulo más largo de la Biblia?',
      options: ['Salmos 119', 'Apocalipsis 22', 'Job 42', 'Mateo 24'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Cuál de los siguientes hombres fueron hijos de Raquel?',
      options: ['Benjamín y José', 'Esaú y Jacob', 'Isaac e Ismael', 'Rubén y Judá'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Cuántas veces pasó el pueblo de Israel por aguas que se abrieron?',
      options: ['Dos veces', 'Una vez', 'Tres veces', 'Siete veces'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Qué parábola relató Jesús para responder a la pregunta "¿Quién es mi prójimo?"?',
      options: ['El buen samaritano', 'El hijo pródigo', 'La oveja perdida', 'El fariseo y el publicano'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Quién dijo "No temáis; estad firmes, y ved la salvación que Jehová hará hoy con vosotros"?',
      options: ['Moisés', 'Josué', 'Gedeón', 'David'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Cómo se llamaba la esposa de Moisés?',
      options: ['Séfora', 'Sara', 'Rebeca', 'Lea'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Quién cerró la puerta del arca que construyó Noé?',
      options: ['Dios', 'Noé', 'Cam', 'Jafet'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Dónde estaba situado el Monte Moriah?',
      options: ['Jerusalén', 'Jericó', 'Sinaí', 'Cerca de Ur'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Quién escribió el libro de Lamentaciones?',
      options: ['Jeremías', 'Isaías', 'Salomón', 'David'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿A qué rey se le añadieron 15 años de vida?',
      options: ['Ezequías', 'Josías', 'Ocozías', 'Ezequiel'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿A quién pertenecía el manto al que David cortó una orilla?',
      options: ['Saúl', 'Samuel', 'Jonatán', 'Urías'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Quién predicó en el día de Pentescostés?',
      options: ['Pedro', 'Jesús', 'Pablo', 'Felipe'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Quién pidió a Dios una señal dos veces?',
      options: ['Gedeón', 'Daniel', 'Otro', 'Abraham'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Cómo se llamaba el padre de Samuel?',
      options: ['Elcana', 'Jared', 'Jeroham', 'Finees'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Cuántas personas (además de Jesús) estuvieron presentes en la Transfiguración?',
      options: ['Tres', 'Dos', 'Cuatro', 'Uno'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿En qué libro se encuentra la siguiente frase "y me buscaréis y me hallaréis, porque me buscaréis de todo vuestro corazón"?',
      options: ['Jeremías', 'Isaías', 'Salmos', 'Deuteronomio'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Cuál es la primera mentira que se registra en la Biblia?',
      options: ['No moriréis', 'No te conozco', 'Soy tu hijo', 'No sé'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Por qué murió Uza?',
      options: ['Por tocar el arca', 'Por blasfemar', 'Por robar del anatema', 'Por adulterio'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Quién fue llamado el "Tisbita"?',
      options: ['Elías', 'Simón', 'Eliseo', 'Jeremías'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Cuántos capítulos tiene el libro de Rut?',
      options: ['Cuatro', 'Seis', 'Tres', 'Cinco'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Cuál es el nombre del río en el cual Jesús fue bautizado?',
      options: ['Jordán', 'Nilo', 'Éufrates', 'Tigris'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿En qué libro de la Biblia el pueblo de Israel adora a un becerro de oro hecho por Aarón?',
      options: ['Éxodo', 'Levítico', 'Números', 'Deuteronomio'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Cuál de las siguientes personas NO conocieron la muerte?',
      options: ['Enoc y Elías', 'Elías y Moisés ', 'Sansón y Moisés', 'Matusalén y Samuel'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Qué instrumento musical tocaba David delante de Saúl?',
      options: ['Arpa', 'Címbalo', 'Cítara', 'Trompeta'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Cuántos hijos tuvo Isaac?',
      options: ['Dos', 'Doce', 'Uno', 'Ninguno'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿En qué libro aparece la cita: "Dios es nuestro amparo y fortaleza, nuestro pronto auxilio en las tribulaciones"?',
      options: ['Salmos', 'Proverbios', 'Cantares', 'Eclesiastés'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: 'Según el evangelio de Lucas ¿qué tenía Jesús por costumbre los sábados?',
      options: ['Ir a la Sinangoga', 'Descansar', 'Sanar enfermos', 'Predicar'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Cuántos hijos e hijas tuvo Job?',
      options: ['Veinte', 'Siete', 'Doce', 'Diez'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: 'Bienaventurados los pobres en espíritu, porque...',
      options: ['De ellos es el reino de los cielos', 'Ellos verán a Dios', 'Ellos serán saciados', 'Ellos serán consolados'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Con qué se comparará la ley de Dios?',
      options: ['Con un espejo', 'Con una espada', 'Con una fruta', 'Con el agua'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Cuál es nombre del nieto de Adán, hijo de Set?',
      options: ['Enós', 'Enoc', 'Lamec', 'Matusael'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: 'Según el evangelio de Marcos, Jesús sanó a la suegra de uno de sus discipulos ¿de quién?',
      options: ['Simón', 'Juan', 'Jacobo', 'Andrés'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿A dónde se dirigían los discipulos cuando Jesús se les apareció después de resucitar?',
      options: ['Galilea', 'Betania', 'Jersusalén', 'Samaria'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: 'Antes de ser rey David era...',
      options: ['Pastor', 'Agricultor', 'Guerrero', 'Futbolista'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿A quién ofreció Pilato liberar en lugar de Jesús?',
      options: ['Barrabás', 'Dos ladrones', 'Juan el Bautista', 'Pedro'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Cuántas piedras lisas cogió David del arroyo en su enfrentamiento con Goliat?',
      options: ['Cinco', 'Una', 'Tres', 'Siete'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Quién fue Eliseo?',
      options: ['Un profeta', 'Un arquitecto', 'Un apostol', 'Un fariseo'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: 'Jesús dijo "cuando veáis en el lugar santo la abominación desoladora de que habló el profeta Daniel entonces los que estén en Judea..."',
      options: ['Huyan a los montes', 'Huyan a los campos', 'Clamen al Padre', 'Arrepiéntanse'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '"El hombre que tiene amigos ha de mostrarse amigo; y amigo hay más unido que..."',
      options: ['Un hermano', 'Una esposa', 'Un rey', 'Un padre'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Quién dijo "Nunca os conocí"?',
      options: ['Jesús', 'Juan el Bautista', 'Pedro', 'Pablo'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Qué tenía Nabot que fue codiciado por un rey?',
      options: ['Una viña', 'Una casa', 'Una mujer', 'Una hija'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Con qué otro nombre se le conoce al discipulo Leví de Alfeo?',
      options: ['Mateo', 'Marcos', 'Juan', 'Lucas'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿En qué día de la creación separó Dios la luz de las tinieblas?',
      options: ['Primero', 'Segundo', 'Tercero', 'Cuarto'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Qué recibirán aquellos quienes sean fieles hasta la muerte?',
      options: ['Corona de vida', 'Vida eterna', 'El fruto de la vida', 'Moradas'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿De qué ciudad escapó Pablo en un cesto?',
      options: ['Damasco', 'Éfeso', 'Corintios', 'Filipo'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿En qué ciudades puso Jeroboam los becerros de oro?',
      options: ['Bet-el y Dan', 'Bet-el y Hai', 'Siquem y Bet-el', 'Hiram y Dan'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Cuál fue el nombre de la esposa de Herodes que se había casado con su hermano Felipe?',
      options: ['Herodías', 'Adalía', 'Zila', 'Salomé'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Quién reinó por seis años en Israel y empezó su reinado matando a todos sus nietos menos a uno?',
      options: ['Atalía', 'Josabar', 'Jedida', 'Amalía'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Cómo se llamaba el sacerdote encargado del cuidado del pequeño Samuel?',
      options: ['Elí', 'Isaí', 'Elcana', 'Ananías'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Gracias a qué emperador persa pudo Nehemías reconstruir los muros de la ciudad de Jerusalén?',
      options: ['Artajerjes', 'Ciro', 'Belsasar', 'Nabucodonosor'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Quién fue puesto en una horca que él mismo había preparado?',
      options: ['Amán', 'Mardoqueo', 'Anías', 'Asuero'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Quién dijo: "¿De Nazaret puede salir algo de bueno?"?',
      options: ['Natanael', 'Felipe', 'Andrés', 'Herodes'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Qué nombre puso Jacob al lugar donde soñó con una escalera que ascendía al cielo?',
      options: ['Bet-el', 'Gilgal', 'Eben-ezer', 'Luz'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Qué profesión ejercía Lucas?',
      options: ['Médico', 'Pescador', 'Pastor', 'Recaudador de impuestos'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Quién fue juez en Israel durante 20 años en tiempos de los filisteos?',
      options: ['Sansón', 'Jefté', 'Gedeón', 'Otro'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Cuántos días pasó Jesús en el desierto después de ser bautizado?',
      options: ['40 días', '30 días', '7 días', '120 días'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Cuántas veces fue tentado Jesús en el desierto?',
      options: ['3 veces', '1 vez', '2 veces', '4 veces'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Cuál fue la primera plaga de Egipto?',
      options: ['Las aguas se tornan en sangre', 'Las ranas', 'Los piojos', 'Las serpientes'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Quién dijo "Yo sé que mi Redentor vive"?',
      options: ['Job', 'David', 'Salomón', 'Isaías'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Cómo se llamaba la mujer de Abraham?',
      options: ['Sarai', 'Raquel', 'Milca', 'Séfora'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿En que día de la creación Dios hizo los árboles y las plantas?',
      options: ['Tercero', 'Primero', 'Cuarto', 'Segundo'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Qué relación tenía Mardoqueo con Ester?',
      options: ['Primo', 'Tío', 'Padre', 'Hermano'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿A quién dijo Jesús: "Ve al mar, y echa el anzuelo, y el primer pez que saques, tómalo, y al abrirle la boca, hallarás un estatero"?',
      options: ['Pedro', 'Juan', 'Andrés', 'Tomás'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿De qué tipo de madera estaban hechos los querubines del lugar Santísimo del templo de Salomón?',
      options: ['Olivo', 'Acacia', 'Roble', 'Cedro'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Quién es el "Padre de la Fe"?',
      options: ['Abraham', 'Jesús', 'Moisés', 'Pedro'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Quién fue el mejor amigo de David?',
      options: ['Jonatán', 'Saúl', 'Samuel', 'Joab'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Con quién se casó Booz?',
      options: ['Rut', 'Abigail', 'Ester', 'Elisabet'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Quién escribió el libro de Ezequías?',
      options: ['No existe', 'Joel', 'Ezequías', 'Isaías'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿A quién se refiere Isaías con "Voz que clama en el desierto: Preparad camino a Jehová"?',
      options: ['Juan el Bautista', 'Elías', 'Jesús', 'David'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Quién dijo "Señor, si hubieses estado aquí, mi hermano no habría muerto"?',
      options: ['Marta', 'María', 'La viuda de Serepta', 'Lázaro'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Dónde vivía Tabita la discípula?',
      options: ['Jope', 'Damasco', 'Tarso', 'Jerusalén'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿En qué ciudad ascendió Jesús a los cielos después de resucitar y bendecir a sus discipulos?',
      options: ['Betania', 'Galilea', 'Capernaúm', 'Nazaret'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Quién dirigió la reconstrucción del muro de Jerusalén?',
      options: ['Nehemías', 'Esdras', 'Ciro', 'Artajerjes'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Quién mató a seiscientos filisteos con una aguijada de buey?',
      options: ['Samgar', 'Sansón', 'Otoniel', 'Barac'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Quién iba a maldecir a Israel, pero tuvo que bendecirlos?',
      options: ['Balaam', 'Balac', 'Jozabad', 'Semaías'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Quién se convirtió en el primer rey de las 10 tribus que se separaron?',
      options: ['Jeroboam', 'Roboam', 'Salomón', 'Zimri'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Quién aconsejó a David que no matara a su necio marido Nabal?',
      options: ['Abigail', 'Betsabé', 'Mical', 'Ana'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Quién fue reprendido por Pablo por negarse a comer con los gentiles?',
      options: ['Pedro', 'Bernabé', 'Lucas', 'Aquila'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿En qué lugar Elías tuvo un enfrentamiento con los profetas de Baal?',
      options: ['Monte Carmelo', 'Monte Sion', 'Monte Sinaí', 'Monte Ararat'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿En qué lugar los creyentes fueron llamados “cristianos” por primera vez?',
      options: ['Antioquía', 'Corintos', 'Jerusalén', 'Éfeso'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿A qué lugar se dirigía Pablo cuando fue cegado en el camino?',
      options: ['Damasco', 'Tarsis', 'Jerusalén', 'Samaria'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Cuál es el nombre del río en el cual estaba Ezequiel con los exiliados cuando recibió una visión de Dios?',
      options: ['Quebar', 'Jordán', 'Gihón', 'Éufrates'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿En qué libro se encuentra una descripción de la armadura de Dios?',
      options: ['Efesios 6', '1 Corintios 6', 'Gálatas 3', 'Colosenses 3'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Quién fue llamado el incredulo?',
      options: ['Tomás', 'Felipe', 'Juan', 'Simón'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Quién fue llamado rama fructífera?',
      options: ['José', 'David', 'Jesús', 'Abraham'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Quién es el dulce cantor de Israel?',
      options: ['David', 'Daniel', 'Salomón', 'Moisés'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Cuantas estrellas se inclinaron ante José en su sueño?',
      options: ['11', '14', '12', '13'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Cuántos años tardó Salomón para construir el templo?',
      options: ['7 años', '12 años', '20 años', '40 años'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Por quién se dió 20 piezas de plata?',
      options: ['José', 'Jesús', 'Rebeca', 'Ester'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Quién fue el gobernador romano que sentenció a muerte a Cristo?',
      options: ['Pilato', 'Nerón', 'Julio Cesar', 'Herodes'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Cuántas personas estuvieron en el arca de Noé?',
      options: ['Ocho', 'Siete', 'Seis', 'Nueve'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Qué significa epístola?',
      options: ['Carta', 'Evangelio', 'Buenas nuevas', 'Salvación'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Cuál era la fiesta del A.T. que recordaba cuando Dios salvó a los primogénitos de Israel la noche que salieron de Egipto?',
      options: ['La Pascua', 'La fiesta de los panes', 'Fiesta de la cosecha', 'La fiesta de Purim'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Cuáles de éstos animales hablaron?',
      options: ['La serpiente y el asno', 'La serpiente y el cordero', 'El asno y el dragón', 'El dragón y el cordero'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Con cuál mujer cometió adulterio David?',
      options: ['Betsabé', 'Elisabet', 'Mical', 'Abigail'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Cuál era la tribu de Israel encargada del sacerdocio y por tanto apartada para Jehová?',
      options: ['Leví', 'Judá', 'Benjamín', 'Zabulón'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: 'En la armadura de Dios que describe Pablo ¿qué representa el yelmo?',
      options: ['Salvación', 'Espíritu', 'Verdad', 'Fe'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Cuántos hijos varones tuvo Jacob?',
      options: ['Doce', 'Trece', 'Once', 'Diéz'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Con quién comparaban a Juan el Bautista?',
      options: ['Elías', 'Eliseo', 'Samuel', 'Isaías'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Qué edad tenía Abraham cuando nació Isaac?',
      options: ['100 años', '86 años', '102 años', '110 años'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Cuál es el libro que está entre Oseas y Amós?',
      options: ['Joel', 'Abdías', 'Jonás', 'Daniel'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿A qué tierra Abraham llevó a Isaac para sacrificarlo?',
      options: ['Moriah', 'Ur', 'Mambre', 'Beerseba'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿En cuál evangelio NO se narra el encuentro de Jesús con el hombre rico?',
      options: ['Juan', 'Mateo', 'Marcos', 'Lucas'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿A qué rey se le secó la mano cuando intentó prender a un varón de Dios?',
      options: ['Jeroboam', 'Roboam', 'Uzías', 'Josafat'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Quién es nuestro abogado en el cielo?',
      options: ['Jesús', 'Pablo', 'Abraham', 'El Papa'],
      difficulty: 'EASY',
      used: false
    },
    {
      question: '¿Cuál de los siguientes libros fue escrito por varios autores?',
      options: ['Salmos', 'Génesis', 'Éxodo', 'Lucas'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿Cuánto tiempo pasó desde que dejó de llover en el diluvio hasta que la tierra se secó?',
      options: ['150 días', '40 días', '120 días', '7 días'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Cuántas mujeres entraron en el Arca de Noé?',
      options: ['Cuatro', 'Una', 'Dos', 'Tres'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Qué libro de la Biblia se encuentra entre Ester y Job?',
      options: ['Ninguno', 'Salmos', 'Proverbios', 'Nehemías'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Cómo se llamaba el siervo del sumo sacerdote, al cual Pedro le cortó una oreja?',
      options: ['Malco', 'Jairo', 'Eliud', 'Simón'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Cuál fue el número de concubinas de Salomón?',
      options: ['300', '700', '1000', '500'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Qué significa Emanuel?',
      options: ['Dios con nosotros', 'Dios nuestro', 'Bendito de Dios', 'Principe de paz'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Cuál es el ultimo libro del Antiguo Testamento?',
      options: ['Malaquías', 'Zacarías', 'Oseas', 'Habacuc'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿En que capítulo del libro de Isaías se describe detalladamente al Mesías?',
      options: ['53', '23', '55', '56'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Quién fue el padre de Mahersalal–hasbaz?',
      options: ['Isaías', 'Nabucodonosor', 'Nehemías', 'Artajerjes'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Cuáles eran las dimensiones (en codos) del arca construida por Noé?',
      options: ['300 x 50 x 30', '300 x 30 x 20', '200 x 50 x 30', '200 x 45 x 30'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿De qué material fue hecha el Arca del Pacto para el Tabernáculo en los tiempos de Moisés?',
      options: ['Acacia', 'Oro', 'Olivo', 'Cedro'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Quién construyó el Arca del Pacto para el Tabernáculo en los tiempos de Moisés?',
      options: ['Bezaleel', 'Aholiab', 'Aarón', 'Quelal'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Qué es "Azazel"?',
      options: ['Una cabra', 'Un dios pagano', 'Una ciudad', 'Un monte'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Quién dijo "¿Soy yo perro, para que vengas a mí con palos?"?',
      options: ['Goliat', 'Acab', 'Absalón', 'Roboam'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Quién dijo "¿quién podrá gobernar este tu pueblo tan grande?"?',
      options: ['Salomón', 'Josué', 'Moisés', 'Saúl'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Quién dijo "He aquí el fuego y la leña; mas ¿dónde está el cordero para el holocausto?"?',
      options: ['Isaac', 'Abraham', 'Jacob', 'Cam'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿Quién dijo "Ordena que en tu reino se sienten estos dos hijos míos, el uno a tu derecha, y el otro a tu izquierda"?',
      options: ['La mujer de Zebedeo', 'La mujer de Felipe', 'La mujer de Zaqueo', 'La mujer de Santiago'],
      difficulty: 'VERY_HARD',
      used: false
    },
    {
      question: '¿Quién dijo "Si perezco, que perezca"?',
      options: ['Ester', 'Rut', 'Sara', 'Ana'],
      difficulty: 'MEDIUM_EASY',
      used: false
    },
    {
      question: '¿En qué capítulo se encuentra "Satanás atado por mil años"?',
      options: ['Apocalipsis 20', 'Apocalipsis 21', 'Apocalipsis 19', 'Apocalipsis 22'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿En qué capítulo se encuentra "El Sermón del monte"?',
      options: ['Mateo 5', 'Mateo 6', 'Mateo 7', 'Mateo 10'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Cuál profeta se casa con una prostituta?',
      options: ['Oseas', 'Joel', 'Abdías', 'Amós'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Quién apareció con Jesús en la Transfiguración?',
      options: ['Moisés y Elías', 'Enoc y Elías', 'Moisés e Isaías', 'Eliseo y Elías'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: '¿En que libro del A.T. se encuentran las palabras “Dios mío, Dios mío, ¿por qué me has desamparado?”?',
      options: ['Salmos', 'Jeremías', '1 Reyes', 'Eclesiastés'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿A qué edad murió Noé?',
      options: ['950 años', '930 años', '955 años', '940 años'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿A qué edad murió Moisés?',
      options: ['120 años', '110 años', '130 años', '100 años'],
      difficulty: 'HARD',
      used: false
    },
    {
      question: '¿Cuál era la estatura de Goliat?',
      options: ['6 codos y un palmo', '6 codos y 1/2 palmo', '6 codos y 2 palmos', '6 codos y 3 palmos'],
      difficulty: 'MEDIUM',
      used: false
    },
    {
      question: 'El profeta me mando 7 veces a bañar, tenía que obedecerle, para mi lepra poder sanar',
      options: ['Naamán', 'Felipe', 'Eunuco', 'Eliseo'],
      difficulty: 'MEDIUM',
      used: false
    }
  ];

  private quickQuestions = [
    {
      question: 'Ordena los siguientes libros de la Biblia según como aparecen:',
      options: ['Jueces', '1 y 2 Reyes', '1 y 2 Crónicas', 'Esdras'],
      order: [],
      used: false
    },
    {
      question: 'Ordena los siguientes libros de la Biblia según como aparecen:',
      options: ['Nehemías', 'Ester', 'Nahúm', 'Mateo'],
      order: [],
      used: false
    },
    {
      question: 'Ordena los siguientes libros de la Biblia según como aparecen:',
      options: ['Éxodo', 'Levítico', 'Números', 'Deuteronomio'],
      order: [],
      used: false
    },
    {
      question: 'Ordena los siguientes libros de la Biblia según como aparecen:',
      options: ['1 y 2 Corintios', 'Gálatas', 'Filipenses', 'Santiago'],
      order: [],
      used: false
    },
    {
      question: 'Ordena los siguientes libros de la Biblia según como aparecen:',
      options: ['Job', 'Salmos', 'Proverbios', 'Cantares'],
      order: [],
      used: false
    },
    {
      question: 'Ordena los siguientes reyes de Israel según su aparición:',
      options: ['Saúl', 'Salomón', 'Jeroboam', 'Acab'],
      order: [],
      used: false
    },
    {
      question: 'Ordena los siguientes jueces de Israel según su aparición:',
      options: ['Otoniel', 'Débora', 'Gedeón', 'Jefté'],
      order: [],
      used: false
    },
    {
      question: 'Ordena de forma cronológica los siguientes sucesos:',
      options: ['El pecado entra al mundo', 'El diluvio de Noé', 'La Torre de Babel', 'Promesa a Abraham'],
      order: [],
      used: false
    },
    {
      question: 'Ordena de forma cronológica los siguientes sucesos:',
      options: ['Muerte de los primogénitos', 'Se abre el Mar Rojo', 'Los diez mandamientos', 'La rebelión de Coré'],
      order: [],
      used: false
    },
    {
      question: 'Ordena de forma cronológica los siguientes sucesos:',
      options: ['David es ungido', 'David y Goliat', 'David comete adulterio', 'David hace un censo'],
      order: [],
      used: false
    },
    {
      question: 'Ordena del mayor al menor los siguientes hijos de Jacob:',
      options: ['Rubén', 'Simeón', 'Judá', 'Benjamín'],
      order: [],
      used: false
    },
    {
      question: 'Ordena las siguientes elementos de la creación según fueron creados:',
      options: ['Cielo y mar', 'Plantas', 'Luna, sol y estrellas', 'Hombre'],
      order: [],
      used: false
    }
  ];

  constructor() {}

  getQuestions(difficulty = null) {
    let questions = this.basicQuestions.filter((question) => !question.used);

    if (difficulty) {
      questions = questions.filter((question) => question.difficulty === difficulty);
    }

    return questions;
  }

  getQuickQuestions() {
    return this.quickQuestions.filter((question) => !question.used);
  }

  getQuestionsCount(difficulty = null) {
    const questions = this.getQuestions(difficulty);
    return questions.length;
  }
}
