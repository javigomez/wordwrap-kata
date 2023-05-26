Word Wrap Kata in Typescript

note (spanish): si te gusta este repo te recomiendo hacer el curso https://testingsostenible.com 

# Word Wrap

La función wordWrap que vamos a implementar consta de dos parámetros: el primero, el texto, y el segundo, el ancho de columna. En el primer ejemplo, la función recibe un texto corto menor que el ancho de columna, por lo tanto, no necesita añadir un salto de línea. El siguiente, es un texto que debemos partir una vez, luego tenemos una palabra más larga que se debe partir más veces. 

A continuación, afrontaremos otros ejemplos más complejos en los que los espacios tienen preferencia sobre el ancho de columna. Por ejemplo, si tenemos un espacio en la posición 3 y una columna en la posición 4, partiremos por ese espacio. Y por último, manejaremos los casos especiales: cuando recibimos un texto nulo la función debe devolver un texto vacío y en caso de recibir una columna con un número negativo debe lanzar una excepción, ya que no están permitidas tamaños de columnas negativas.
