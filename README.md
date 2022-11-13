https://github.com/iSasaa/HypermediaProjectPart2

Primer de tot hem fet un objecte el qual ens ajudara a tenir en tot moment controlat el estat de la partida, victories derrotes,etc...
Tambe tenim una funcio load que ens mostrara la plana principal del mastermind, al cual trobasrem un element id que se activara i mostrara lo que seria la plana del joc.
La funcio start fa el canvi anomenat anteriorment, pero pasa de la plana d'inici i la del joc, i tambe inicia el mateix a partir de la funcio play().
random_number() ens reordena de manera aleatoria una cadena de caracters del 0 al 9 de manera aleatoria, no el genera automaticament un numero aleatori perque no podem deixar que se repeteixi el mateix numero (per exemple 3455), llavors un cop reorganitzats de manera aleatoria nomes seleccionem els 4 primers.
Finalment tenim el guess, que sera el boto que ens executara la major part del codi ja que se ocupara de comprobar que els resultats siguin correctes o no, i si se pot fer la jugada o no. apart de sumar les rondes, correctes, semicorrectes, victories i derrotes.
onlyNumberKey() es la funcio que nomes deixa entrar numeros enters, perque sino entraria la 'e' que es un numero matematic tambe
restart(), com el seu mateix nom diu restavleix la partida un cop finalitzada.
addTableRow crea i afegeix valors a la taula.
Tambe com a decoracio tinim funcions extres com changeMarqueeColor(), que canvia el color de el text del joc i setInterval() que especifica el interval entre un color i un altre.
