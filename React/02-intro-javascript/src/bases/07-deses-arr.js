const personaje =['Goku','Vegueta','Trunks'];
const [ , , p3] = personaje;

console.log(p3) //para desestructurar arreglo se desestructura por posicion y se llama dejando las posiciones q no se necesitan vacias



const useState = (valor) => {
    return [valor , () => { console.log('Hola Mundo')}]
}


const [nombre,setNombre] = useState('Goku');

console.log(nombre)
setNombre()
