export const defaultState = {
  users: [
    {
      id: "U1",
      name: "Dev",
      //passwordHash: md5("TUPLES"),
      //friends: [`U2`],
    },
    {
      id: "U2",
      name: "C. Eeyo",
      // passwordHash: md5("PROFITING"),
      // friends: [],
    },
  ],
  groups: [
    {
      name: "Por hacer",
      id: "G1",
      owner: "U1",
    },
    {
      name: "En proceso",
      id: "G2",
      owner: "U1",
    },
    {
      name: "Finalizado",
      id: "G3",
      owner: "U1",
    },
  ],
  tasks: [
    {
      name: "testear",
      id: "T1",
      group: "G1",
      owner: "U1",
      isComplete: false,
    },
    {
      name: "entrevista",
      id: "T2",
      group: "G1",
      owner: "U1",
      isComplete: true,
    },
    {
      name: "Compilar ES6",
      id: "T3",
      group: "G2",
      owner: "U2",
      isComplete: false,
    },
    {
      name: "actualizar componentes",
      id: "T4",
      group: "G2",
      owner: "U1",
      isComplete: true,
    },
    {
      name: "optimizar producción",
      id: "T5",
      group: "G3",
      owner: "U1",
      isComplete: false,
    },
  ],
  comments: [
    {
      owner: "U1",
      id: "C1",
      task: "T1",
      content: "¡¡Gran trabajo!!",
    },
  ],
};
