import { Component } from '@angular/core';

@Component({
  selector: 'app-python',
  templateUrl: './python.component.html',
  styleUrls: ['./python.component.css','../dev-notes.component.css']
})
export class PythonComponent {
    // Python
    newProjectFlask = `flask --app nameFile --debug run`
    orderList = `  from collections import deque
    tareas.sort()
    cola = deque()
    for tarea in tareas:
        cola.append(tarea[1])`

    dequeExample = `  from collections import deque
    tareas.sort()
    print("==Tareas ordenadas==")
    for tarea in tareas:
        print(tarea[1])`

    formatExample = `  v = "otro texto"
    n = 10
    print( "Un texto '{1}' y un número '{0}'".format(v,n) )`

    argsWord = `  def super_funcion(*args,**kwargs):
    t = 0
    for arg in args:
        t += arg
        print(f"Sumatorio indeterminado es = {t}")

    for kwarg in kwargs:
        print(f"{kwarg} = {kwargs[kwarg]}")`

    privateAttributesMethods = `class Ejemplo:
      __atributo_privado = "Soy un atributo inalcanzable desde fuera"
      def __metodo_privado(self):
          print("Soy un metodo inalcanzable desde fuera")
      def get_atributo_publico(self):
          return self.__atributo_privado
      def get_metodo_publico(self):
          return self.__metodo_privado()`

    copyVariable = `import copy
  copia_variable = copy.copy(valoriable_copiar)
  `
}
