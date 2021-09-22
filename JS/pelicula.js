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
    document.write(`<p id="subtitulo">${this.pueblo.nombre} era un pueblo ${this.pueblo.descripcion}.</p>`);

    this.narrador.hablar('Era una soleada mañana cuando se encontraron entre ellos.');
    this.maria.hablar(`Hola ${(this.paco.nombre)}, hace un día explendido.`);
    this.paco.hablar(`Hola ${(this.maria.nombre)}, la verdad es que si.`);
    this.narrador.hablar('Ambos se miraron un instante y siguieron su camino.');
    this.narrador.hablar('Poco despues una sombra asomaba por el horizonte.');
    this.morgan.hablar('Vaya pueblo tan deprimente...');
    this.morgan.hablar('¡Eh tu! ¡¿Qué se supone que estas mirando?!');
    this.narrador.hablar('Morgan apuntó con su pistola a Paco.');
    this.morgan.hablar('¡Dame todo tu p*to dinero!');
    this.paco.hablar(`Cuidado ${(this.maria.nombre)}, cubrete.`);
    this.narrador.hablar('Maria se cubrió detras de Paco.');
    this.morgan.hablar('No te lo diré una vez más ¡dame todo tu p*to dinero!');
    this.narrador.hablar('Ante la negativa de Paco, Morgan se propuso a dispararle.');
    this.morgan.disparar(3, this.paco);
    this.paco.hablar('¡Muere ca**on!.');
    this.narrador.hablar('Paco comenzó a disparar mientras María salio corriendo de la plaza.');

    this.paco.disparar(3, this.morgan);
    this.morgan.disparar(3, this.paco);
    this.paco.disparar(2, this.morgan);
    this.paco.disparar(2, this.morgan);
    this.morgan.disparar(3, this.paco);
    this.paco.disparar(2, this.morgan);
    this.paco.disparar(3, this.morgan);
    this.morgan.disparar(3, this.paco);
    this.paco.disparar(2, this.morgan);
    this.paco.disparar(2, this.morgan);
    this.morgan.disparar(4, this.paco);
    this.paco.disparar(2, this.morgan);
    this.morgan.disparar(3, this.paco);

    if(this.paco.vida==0 && this.morgan.vida>0){
      this.narrador.hablar('Paco esta tendido en el suelo cubierto de un gran charco de sangre, María se aleja rapidamente mientras sus lagrimas brotan de sus ojos.');
      if(this.morgan.arma.balas>0){
        this.narrador.hablar('Morgan corrió rapidamente en busca de María');
        this.morgan.disparar(3, this.maria);
        if(this.maria.vida<200){this.narrador.hablar('María se escapó herida, ¿se vengará?, pronto lo sabremos...');}
      }else{
        this.narrador.hablar('María se escapó, ¿se vengará?, pronto lo sabremos...');
      }
    }
    else if (this.paco.vida>0 && this.morgan.vida==0){
      this.narrador.hablar('Paco sobrevivió al ataque y eliminó a Morgan, Paco se dispuso a ir con María y proseguir con su vida.');
    }
    else if(this.paco.vida>0 && this.morgan.vida>0){
      this.narrador.hablar('Paco y Morgan se quedaron sin balas, Morgan salio por patas de la situacion buscando algun día volver para matarlo.');
      this.narrador.hablar('Paco volvió con María esperando estar preparado la proxima vez...');
    }
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
    this.arma = new Armas(7, 8);
    this.vida = 200;
  }
  hablar(mensaje){
    document.write(`<p class="personaje_hablar">${this.nombre}: ${mensaje}</p>`);
  }
  disparar(disparos, nombreDisparo){
    console.log(nombreDisparo);
    while(disparos>0 && nombreDisparo.vida>0 && this.vida > 0){
      if(this.arma.balas>0){
        document.write(`<p class="narrador_hablar disparo">- ~PUMM~ ${this.nombre} disparó el arma -</p>`);
        this.daño(nombreDisparo);
        this.arma.balas--;
      }
      else {
        document.write(`<p class="personaje_hablar">- ~CLICK~ ${this.nombre}: Mi*rd* no tengo balas en la recamara-</p>`);
        if(this.arma.cantidad>=7){
          document.write(`<p class="narrador_hablar">-${this.nombre} recargó 7 balas-</p>`);
          this.arma.cantidad-=7;
          this.arma.balas+=7;
        }
        else if(this.arma.cantidad>0 && this.arma.cantidad<7){
            document.write(`<p class="narrador_hablar">-${this.nombre} recargó ${this.arma.cantidad} balas-</p>`);
            this.arma.balas+=this.arma.cantidad;
            this.arma.cantidad-=this.arma.cantidad;
        }
        else if(this.arma.cantidad==0){
          document.write(`<p class="narrador_hablar">- ${this.nombre} miró su bolsa.-</p>`);
          document.write(`<p class="personaje_hablar">- ${this.nombre}: Mi*rd* no me quedan balas-</p>`);
          this.arma.cantidad--;
        }
      }
      disparos--;
    }
  }
  daño(nombreDisparo){
    let aleatorio = Math.round(Math.random() * 100 +1);
    if(aleatorio<50){
      document.write(`<p class="narrador_hablar">- ${this.nombre} falló el tiro.-</p>`);
    }
    else if(aleatorio>50 && nombreDisparo.vida>20){
      document.write(`<p class="narrador_hablar">- ${this.nombre} le dió a ${nombreDisparo.nombre}.-</p>`);
      nombreDisparo.vida-=20;
      document.write(`<p class="narrador_hablar">- A ${nombreDisparo.nombre} le quedan ${nombreDisparo.vida} puntos de vida.-</p>`);
    }
    else if(aleatorio>50 && nombreDisparo.vida<=20){
      document.write(`<p class="narrador_hablar">- ${this.nombre} le dió a ${nombreDisparo.nombre}.-</p>`);
      nombreDisparo.vida-=20;
      document.write(`<p class="narrador_hablar">- ${nombreDisparo.nombre} ha muerto.-</p>`);
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
