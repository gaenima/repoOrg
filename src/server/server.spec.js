import { addNewTask, updateTask } from "./server";

(async function myFunc() {
  await addNewTask({
    name: "mi actividad",
    id: "123456",
  });

  await updateTask({
    id: "123456",
    name: "Mi act - MODIFICADA!!!",
  });
})();
