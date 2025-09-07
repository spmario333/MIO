const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',
  port: '3306',
  user: 'root',
  password: 'root1234',
  database: 'project'
});
export let contact = [];

connection.query('SELECT * FROM contacts',(error, results)=>{
  
  if (error) throw error;
  contact= [...results];
  console.log(contact);
  connection.end();
});


// export const contact = [
//      {
//         id: 37261,
//         name: 'Angel Antonio Lopez Torres',
//         center: 'T.I',
//         firstNum: '52886708',
//         secondNum:'41-322880 ',
//         position: 'ESP. C EN CIENCIAS INFORMATICAS',
//         user: 'angelantonio.lopez',

//     },
//     {
//         id: 34632,
//         name: 'Yoenny Abreu Bernal',
//         center: 'T.I',
//         firstNum: '52887430',
//         secondNum:'41-322880 ',
//         position: 'TEC. EN CIENCIAS INFORMATICAS',
//         user: 'yoenny.abreu',

//     },
//     {
//         id: 32135,
//         name: 'Yosvany Diaz Leon',
//         center: 'T.I',
//         firstNum: '59899316',
//         secondNum:'41321662',
//         position: 'ESP. C EN CIENCIAS INFORMATICAS',
//         user: 'yosvany.diaz',

//     },
//     {
//         id: 42259,
//         name: 'Daimel Diaz Garcia',
//         center: 'T.I',
//         firstNum: '52886783',
//         secondNum:'41321662',
//         position: 'ESP. C EN CIENCIAS INFORMATICAS',
//         user: 'daimel.diaz',

//     },
//     {
//         id: 41568,
//         name: 'Lizt Daniela Ibarra Ramirez',
//         center: 'T.I',
//         firstNum: '52888886',
//         secondNum:'41-323880 ',
//         position: 'TEC. EN CIENCIAS INFORMATICAS',
//         user: 'lizt.ibarra',

//     },
//     {
//         id: 41751,
//         name: 'Kenia Castaneda Izquierdo',
//         center: 'T.I',
//         firstNum: '52889104',
//         secondNum:'41-328930 ',
//         position: 'TEC. EN CIENCIAS INFORMATICAS',
//         user: 'keniac.izquierdo',

//     },
//     {
//         id: 40199,
//         name: 'Mario Jorge Rosendiz Rubio',
//         center: 'T.I',
//         firstNum: '52184436',
//         secondNum:'41321662',
//         position: 'ESP. C EN CIENCIAS INFORMATICAS',
//         user: 'mario.rosendiz',

//     },
//         {
//         id: 22751,
//         name: 'Diana Fernandez Gonzalez',
//         center: 'T.I',
//         firstNum: '',
//         secondNum:'41328947',
//         position: 'JEFE DE GRUPO',
//         user: 'diana.fernandez',
//         jefe: true,

//     },
//         {
//         id: 1197,
//         name: 'Rafael Ernesto Mazaira Fernandez',
//         center: 'T.I',
//         firstNum: '52888828',
//         secondNum:'41328947',
//         position: 'JEFE DE DEPARTAMENTO B',
//         user: 'rafael.mazaira',
//         jefe: true,

//     },
//         {
//         id: 912,
//         name: 'Yanela Perez Barcelo',
//         center: 'T.I',
//         firstNum: '',
//         secondNum:'41322880',
//         position: 'TEC. EN CIENCIAS INFORMATICAS',
//         user: 'yanela.perez',

//     },
//         {
//         id: 34629,
//         name: 'Osvel Martin Cubela',
//         center: 'T.I',
//         firstNum: '',
//         secondNum:'41322880 ',
//         position: 'ESP. C EN CIENCIAS INFORMATICAS',
//         user: 'osvel.martin',

//     },
//     {
//         id: 21877,
//         name: 'Luisa Elena Figueroa Leon',
//         center: 'UNIDAD ECONOMICA ADMINISTRATIVA',
//         firstNum: '52184446',
//         secondNum:'',
//         position: 'JEFE DE UNIDAD',
//         user: 'luisa.figueroa',
//         jefe: true,

//     },
//     {
//         id: 21881,
//         name: 'Yaquelin Reina Hernandez',
//         center: 'UNIDAD ECONOMICA ADMINISTRATIVA',
//         firstNum: '52886530',
//         secondNum:'',
//         position: 'ESP. B EN GEST. ECONOMICA',
//         user: 'yaquelin.reina',

//     },
   
//     {
//         id: 900,
//         name: 'Luis Rolando Gonzalez Sanchez',
//         center: 'DTSS',
//         firstNum: '52883822',
//         secondNum:'41327681',
//         position: 'DIRECTOR TERRITORIAL',
//         user: 'luisr.gonzalez',
//         jefe: true,

//     },
//     {
//         id: 1188,
//         name: 'Hermis Manuel Perez Rojas',
//         center: 'TALLER DE REPARACIONES',
//         firstNum: '52885871',
//         secondNum:'',
//         position: 'JEFE DE TALLER',
//         user: 'hermis.perez',
//         jefe: true,

//     },
//     {
//         id: 17241,
//         name: 'Anais Ojito Leal',
//         center: 'GPO. SOPORTE COMERCIAL',
//         firstNum: '52189032',
//         secondNum:'',
//         position: 'ESPECIALISTA C COMERCIAL',
//         user: 'anais.ojito',
        

//     },
//     {
//         id: 38083,
//         name: 'Yaribey Alfonso Perez',
//         center: 'DPTO DE COORDINACION GENERAL',
//         firstNum: '59889661',
//         secondNum:'41328180',
//         position: 'ESPEC. GRAL. C CIENCIA, TECNOL. INNOV',
//         user: 'yaribey.alfonso',
        

//     },
//     {
//         id: 1135,
//         name: 'Carlos Manuel Gonzalez Pedroso',
//         center: 'CTRO DE TELECOM ASOCIADO FOMENTO',
//         firstNum: '52187040',
//         secondNum:'',
//         position: 'ESP. C EN TELEMATICA',
//         user: 'carlos.gpedroso',
        

//     },
//     {
//         id: 36628,
//         name: 'Elizabeth Albalat Bandomo',
//         center: 'CENTRO MULTISERVICIOS TRINIDAD',
//         firstNum: '52881295',
//         secondNum:'',
//         position: 'EJECUTIVO DE PUNTO DE VENTA',
//         user: 'elisabet.albalat',
        

//     },
//     {
//         id: 1098,
//         name: 'Osmara Cantero Pomares',
//         center: 'CENTRO MULTISERVICIOS TRINIDAD',
//         firstNum: '52881355',
//         secondNum:'',
//         position: 'EJECUTIVO DE PUNTO DE VENTA',
//         user: 'omara.cantero',
        

//     },
//     {
//         id: 27083,
//         name: 'Maday de la Caridad Valle Ruiz',
//         center: 'CENTRO MULTISERVICIOS TRINIDAD',
//         firstNum: '52182044',
//         secondNum:'',
//         position: 'EJECUTIVO DE PUNTO DE VENTA',
//         user: 'maday.valle',
        

//     },
//     {
//         id: 953,
//         name: 'Odalys Gonzales Valdez',
//         center: 'OFICINA COMERCIAL JATIBONICO',
//         firstNum: '52880633',
//         secondNum:'41882110',
//         position: 'EJECUTIVO DE PUNTO DE VENTA',
//         user: 'odalys.gonzalezvaldez',
        

//     },
//     {
//         id: 940,
//         name: 'Maura Rosa Rivera Sanchez',
//         center: 'OFICINA COMERCIAL JATIBONICO',
//         firstNum: '50941845',
//         secondNum:'',
//         position: 'JEFE DE CENTRO DE TELEC. C',
//         user: 'maura.rivera',
//         jefe: true,
        

//     },
//     {
//         id: 40759,
//         name: 'Siane Felicia Enriquez Villa',
//         center: 'CENTRO MULTISERVICIOS TRINIDAD',
//         firstNum: '52109661',
//         secondNum:'',
//         position: 'ESP. C EN TELEMATICA ',
//         user: 'siane.enriquez',
        

//     },
//     {
//         id: 717,
//         name: 'Ana Libania Ruiz Santana',
//         center: 'CENTRO MULTISERVICIOS TRINIDAD',
//         firstNum: '52886083',
//         secondNum:'41996019(18)',
//         position: 'TEC. A EN GEST. DE REC. HUMANOS',
//         user: 'ana.ruiz',
        

//     },
    
//     {
//         id: 34850,
//         name: 'Yusbel Echemendia Gonzalez',
//         center: 'OFICINA COMERCIAL JATIBONICO',
//         firstNum: '',
//         secondNum:'41882615',
//         position: 'ESP. C EN TELEMATICA ',
//         user: 'yusbel.echemendia',
        

//     },
//     {
//         id: 28353,
//         name: 'Yaima Pino Sanchez',
//         center: 'GRUPO DE CONTABILIDAD',
//         firstNum: '52186442',
//         secondNum:'41325027',
//         position: 'ESP. B EN GEST. ECONOMICA',
//         user: 'yaima.pino',
        

//     },
//     {
//         id: 41573,
//         name: 'Maylin Isabel Delgado Gomez',
//         center: 'GRUPO DE CONTABILIDAD',
//         firstNum: '',
//         secondNum:'41324699',
//         position: 'ESP. B EN GEST. ECONOMICA',
//         user: 'maylin.delgado',
        

//     },
//     {
//         id: 17016,
//         name: 'Yaimara Ramirez Salas',
//         center: 'CENTRO MULTISERVICIOS SANCTI SPIRITUS',
//         firstNum: '52189031',
//         secondNum:'',
//         position: 'EJECUTIVO DE PUNTO DE VENTA (EP)',
//         user: 'yaimara.ramirez',
//         jefe: true,


//     },
//     {
//         id: 20925,
//         name: 'Thaumara Alvarez Martinez',
//         center: 'OFICINA COMERCIAL YAGUAJAY',
//         firstNum: '52884231',
//         secondNum:'',
//         position: 'JEFE DE UNIDAD',
//         user: 'thaumara.alvarez',
//         jefe: true,
        

//     },
//     {
//         id: 28221,
//         name: 'Gladimir Caceres Mursuli',
//         center: 'UNIDAD ECONOMICA ADMINISTRATIVA',
//         firstNum: '',
//         secondNum:'41329167',
//         position: 'ESP. B EN GEST. ECONOMICA',
//         user: 'gladimir.caceres',
        

//     },
//     {
//         id: 1109,
//         name: 'Margot Marrero Pacheco',
//         center: 'CENTRO MULTISERVICIOS FOMENTO',
//         firstNum: '52885457',
//         secondNum:'',
//         position: 'JEFE DE UNIDAD',
//         user: 'margot.marrero',
//         jefe: true,        

//     },
//     {
//         id: 986,
//         name: 'Rocio de Paula Rios Fuentes',
//         center: 'CENTRO MULTISERVICIOS SANCTI SPIRITUS',
//         firstNum: '52886677',
//         secondNum:'41327312',
//         position: 'EJECUTIVO DE PUNTO DE VENTA (EP)',
//         user: 'rocio.rios',
//         jefe: true,

//     },
    
//     {
//         id: 42014,
//         name: 'Francisco Rivero Cancio',
//         center: 'DPTO DE COORDINACION GENERAL',
//         firstNum: '50943838',
//         secondNum:'',
//         position: 'ESPECIALISTA B EN CIBERSEGURIDAD',
//         user: 'francisco.rivero',
        

//     },
    
//     {
//         id: .000,
//         name: 'Topes',
//         center: 'Minipunto Topes Collantes',
//         firstNum: '',
//         secondNum:'42541187',
//         position: 'EJECUTIVO DE PUNTO DE VENTA',
//         user: '',
        

//     },
//     {
//         id: .1,
//         name: 'Orniel Rodríguez Pérez',
//         center: 'OFICINA COMERCIAL JATIBONICO',
//         firstNum: '52187141',
//         secondNum:'',
//         position: 'Operario Instalador C',
//         user: 'osniel.rodriguez',
        

//     },
//     {
//         id: 20807,
//         name: 'Lisandra Acosta Hurtado',
//         center: 'GPO. COMERCIALIZACION CORPORATIVO',
//         firstNum: '',
//         secondNum:'41332099',
//         position: 'ESPECIALISTA C COMERCIAL',
//         user: 'lisandra.acosta',
        

//     },
//     {
//         id: 32726,
//         name: 'Grechel Yanez Dueñas',
//         center: 'GRUPO OPERACION Y MANTENIMIENTO',
//         firstNum: '52184449',
//         secondNum:'41329830',
//         position: 'TECNICO B EN TELEMATICA',
//         user: 'grechel.yanez',
        

//     },
//     {
//         id: 35322,
//         name: 'Kendry Quintana Garcia',
//         center: 'CENTRO DE DIRECCION TERRITORIAL',
//         firstNum: '52182482',
//         secondNum:'',
//         position: 'TECNICO B EN TELEMATICA',
//         user: 'kendry.quintana',
        

//     },
//     {
//         id: 2310,
//         name: 'Elianys Castellanos Solenzal',
//         center: 'GRUPO OPERACION Y MANTENIMIENTO',
//         firstNum: '52189014',
//         secondNum:'',
//         position: 'TECNICO B EN TELEMATICA',
//         user: 'elianys.castellanos',
//         jefe: true,

//     },
//     {
//         id: 32730,
//         name: 'Sheyla Roque Pizarro',
//         center: 'UNIDAD PLANTA EXTERIOR',
//         firstNum: '52189013',
//         secondNum:'',
//         position: 'PROBADOR DE CABLE',
//         user: 'sheyla.roque',
        

//     },
//     {
//         id: 1012,
//         name: 'Madelin Conde Rodriguez',
//         center: 'UNIDAD PLANTA EXTERIOR',
//         firstNum: '52189150',
//         secondNum:'',
//         position: 'PROBADOR DE CABLE',
//         user: 'madelin.conde',
        

//     },
//     {
//         id: 861,
//         name: 'Reinaldo Medina Montelier',
//         center: 'UNIDAD PLANTA EXTERIOR',
//         firstNum: '52885762',
//         secondNum:'',
//         position: 'JEFE DE UNIDAD',
//         user: 'reinaldo.medina',
        

//     },
//     {
//         id: 34843,
//         name: 'Aly Pimienta Perez',
//         center: 'BRIGADA RED DE ABONADOS',
//         firstNum: '52125919',
//         secondNum:'',
//         position: 'OP. B INSTAL. REPARADOR',
//         user: 'aly.pimienta',
        

//     },
//     {
//         id: .2,
//         name: 'Asiel Pérez Escobar',
//         center: 'BRIGADA RED DE ABONADOS',
//         firstNum: '52886675',
//         secondNum:'',
//         position: 'REPARADOR',
//         user: '',
        

//     },
//     {
//         id: .3,
//         name: 'Darién Sánchez Ramírez',
//         center: 'BRIGADA RED DE ABONADOS',
//         firstNum: '52189010',
//         secondNum:'',
//         position: 'REPARADOR',
//         user: '',
        

//     },
//     {
//         id: 34842,
//         name: 'Frandy Lizano Ruiz',
//         center: 'BRIGADA RED DE ABONADOS',
//         firstNum: '52189005',
//         secondNum:'',
//         position: 'OP. C INSTAL. REPARADOR',
//         user: 'frandy.lizano',
        

//     },
//     {
//         id: .4,
//         name: 'Javier Toledo Amengual',
//         center: 'BRIGADA RED DE ABONADOS',
//         firstNum: '52885860',
//         secondNum:'',
//         position: 'OP. C INSTAL. REPARADOR',
//         user: '',
        

//     },
//     {
//         id: .5,
//         name: 'Juilo César Reina Hernández',
//         center: 'BRIGADA RED DE ABONADOS',
//         firstNum: '52189021',
//         secondNum:'',
//         position: 'OP. C INSTAL. REPARADOR',
//         user: '',
        

//     },
//     {
//         id: .6,
//         name: 'Pedro Luis Concepción Marín',
//         center: 'BRIGADA RED DE ABONADOS',
//         firstNum: '52189575',
//         secondNum:'',
//         position: 'OP. C INSTAL. REPARADOR',
//         user: '',
        

//     },
//     {
//         id: 34844,
//         name: 'Yander Rodríguez Prado',
//         center: 'BRIGADA RED DE ABONADOS',
//         firstNum: '52188710',
//         secondNum:'',
//         position: 'OP. B INSTAL. REPARADOR',
//         user: 'yander.rodriguez',
        

//     },
//     {
//         id: .7,
//         name: 'Edelkis Martín Hernández',
//         center: 'BRIGADA RED DE ABONADOS',
//         firstNum: '52189007',
//         secondNum:'',
//         position: 'OP. B INSTAL. REPARADOR',
//         user: '',
        

//     },
//     {
//         id: .8,
//         name: 'Raúl Más Román',
//         center: 'BRIGADA RED DE ABONADOS',
//         firstNum: '52185198',
//         secondNum:'',
//         position: 'OP. B INSTAL. REPARADOR',
//         user: '',
        

//     },
//     {
//         id: 32732,
//         name: 'Josue Orellana Menendez',
//         center: 'UNIDAD PLANTA EXTERIOR',
//         firstNum: '52180143',
//         secondNum:'41328899',
//         position: 'TECNICO B EN TELEMATICA',
//         user: 'josue.orellana',
        

//     },
//     {
//         id: 39773,
//         name: 'Nadier Rodriguez Fabrega',
//         center: 'UNIDAD PLANTA EXTERIOR',
//         firstNum: '50407789',
//         secondNum:'41336618',
//         position: 'TECNICO B EN TELEMATICA',
//         user: 'nadier.rodriguez',
        

//     },
//     {
//         id: 1180,
//         name: 'Yudel Isnel Abreu Hernandez',
//         center: 'GPO. PLANEAMIENTO Y CTRL TEC INVERSIONES',
//         firstNum: '52889286',
//         secondNum:'',
//         position: 'ESP. C EN TELEMATICA',
//         user: 'yudel.abreu',
        

//     },
//     {
//         id: 868,
//         name: 'Adrian Bustillo Madrigal',
//         center: 'UNIDAD DE CONTROL DE LA OPERACION',
//         firstNum: '52189565',
//         secondNum:'',
//         position: 'ESP. C EN TELEMATICA',
//         user: 'adrian.bustillo',
        

//     },
    
    
// ];