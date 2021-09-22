'use strict';

class Pelicula{
  constructor(){
    //this es el objeto que ejecuta el codigo
    this.titulo = "Tiroteo en Mississippi";
    this.pueblo = new Pueblo('DAWTown', 'muy polvoriento, en mitad del desierto de Arizona');
    this.narrador = new Narrador();
    this.paco = new PersonajeBueno('Paco');
    this.maria = new PersonajeBueno('Maria');
    this.morgan = new PersonajeMalo('Morgan');

    this.iniciar();
  }

  iniciar(){
    document.write(`<h1>${this.titulo}</h1>`);
    document.write(`<p>${this.pueblo.nombre} era un pueblo ${this.pueblo.descripcion}.</p>`);

    this.narrador.hablar('Era una soleada mañana cuando se encontraron entre ellos.');
    this.maria.hablar(`Hola ${(this.paco.nombre)}, hace un día explendido.`);
    this.paco.hablar(`Hola ${(this.maria.nombre)}, la verdad es que si.`);
    this.narrador.hablar('Ambos se miraron un instante y siguieron su camino.');
    this.narrador.hablar('Poco despues una sombra asomaba por el horizonte.');
    this.morgan.hablar('Vaya pueblo tan deprimente...');
    this.morgan.hablar('¡Eh tu! ¡¿Qué se supone que estas mirando?!');
    this.narrador.hablar('Morgan apuntó con su pistola a aque hombre.');
    this.morgan.hablar('¡Dame todo tu p*to dinero!');
    this.morgan.disparar();
    this.morgan.disparar();
    this.morgan.disparar();
    this.morgan.disparar();
    this.morgan.disparar();
    this.morgan.disparar();
    this.morgan.disparar();
    this.morgan.disparar();
    this.morgan.disparar();
    this.morgan.disparar();
    this.morgan.disparar();
    this.morgan.disparar();
    this.morgan.disparar();
    this.morgan.disparar();
    this.morgan.disparar();
    this.morgan.disparar();
  }
}

class Pueblo{
  constructor(nombre, descripcion){
    this.nombre = nombre;
    this.descripcion = descripcion;
  }
}

class Narrador{
  hablar(mensaje){
    document.write(`<p class="narrador_hablar">- ${mensaje} -</p>`);
  }
}

class Personaje{
  constructor(nombre){
    this.nombre = nombre;
    this.arma = new Armas(7, 13);
  }
  hablar(mensaje){
    document.write(`<p class="personaje_hablar">${this.nombre}: ${mensaje}</p>`);
  }
  disparar(){
    console.log()
    if(this.arma.balas>0){
      document.write(`<p class="narrador_hablar disparo">- ~PUMM~  Disparó el arma -</p>`);
      this.arma.balas--;
    }
    else {
      document.write(`<p class="narrador_hablar disparo">- ~KRSSS~ Mi*rd* no tengo balas en la recamara-</p>`);
      if(this.arma.cantidad>=7){
        document.write(`<p class="narrador_hablar disparo">-Recargó 7 balas-</p>`);
        this.arma.cantidad-=7;
        this.arma.balas+=7;
      }
      else if(this.arma.cantidad>0 && this.arma.cantidad<7){
          document.write(`<p class="narrador_hablar disparo">-Recargó ${this.arma.cantidad} balas-</p>`);
          this.arma.balas;
          this.arma.cantidad-=this.arma.cantidad;
      }
      else if(this.arma.cantidad==0){
        document.write(`<p class="narrador_hablar disparo">- Mi*rd* no me quedan balas-</p>`);
      }
    }
  }
}

class PersonajeBueno extends Personaje{
  hablar(mensaje){
    document.write(`<p class="personaje_hablar personaje_hablar_bueno">${this.nombre}: ${mensaje}</p>`);
  }
}

class PersonajeMalo extends Personaje{
  hablar(mensaje){
    document.write(`<p class="personaje_hablar personaje_hablar_malo">${this.nombre}: ${mensaje}</p>`);
  }
}

class Armas{
  constructor(balas, cantidad){
    this.balas = balas;
    this.cantidad = cantidad;
  }
}

new Pelicula();
