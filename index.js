

let nombreCliente = prompt("Buenas Como te Llamas perrix")
alert(`Bienvenido ${nombreCliente}`)

let necesidades = parseInt(prompt("Que buscas con nuestras viandas\n 1. Dieta adelgazar \n2. Dieta para ganar peso \n3. Dieta para Diabeticos \n4. Dieta para Celiacos \n5. Dieta para Vegetarianos \n colocar el numero correspondiente a la dieta"))
let calorias = parseInt(prompt("Ingresa la cantidad de calorias por dia"));

function elegirViandas() {
    switch (necesidades) {
        case 1:
            if (calorias >= 100 && calorias < 5000){
                alert (`Hola ${nombreCliente} bienvenido tu dieta numero ${necesidades}`);
                dieta1()
                cobrar()
                
                
                
            }
            break;
        
        case 2:
            if (calorias >= 100 && calorias < 5000){
                alert (`Hola ${nombreCliente} bienvenido tu dieta numero ${necesidades}`);
                dieta2()
                cobrar()
                
            }
            break;
            case 3:
            if (calorias >= 100 && calorias < 5000){
                alert (`Hola ${nombreCliente} bienvenido tu dieta numero ${necesidades}`);
                dieta3()
                cobrar()
                
                
            }
            break;
            case 4:
            if (calorias >= 100 && calorias < 5000){
                alert (`Hola ${nombreCliente} bienvenido tu dieta numero ${necesidades}`);
                dieta4()
                cobrar()
                
                
            }
            break;
            case 5:
            if (calorias >= 100 && calorias < 5000){
                alert (`Hola ${nombreCliente} bienvenido tu dieta numero ${necesidades}`);
                dieta5()
                cobrar()
               
                
            }
            break;

        default:
            alert ("valor invalido")
    }
}
elegirViandas();

function dieta1(){
   let array = ["lechuga","tomate","zanahoria"];
   alert (`1.${array[0]}
   2. ${array[1]}
   3. ${array[2]}`)
}

function dieta2(){
    let array = ["arroz","lentejas","papas"];
    alert (`1.${array[0]}
    2. ${array[1]}
    3. ${array[2]}`)
 }

 function dieta3(){
    let array = ["coliflor","zuccini","batatas"];
    alert (`1.${array[0]}
    2. ${array[1]}
    3. ${array[2]}`)
 }

 function dieta4(){
    let array = ["harina","pastas","pizza"];
    alert (`1.${array[0]}
    2. ${array[1]}
    3. ${array[2]}`)
 }

 function dieta5(){
    let array = ["carne","pollo","pezcado"];
    alert (`1.${array[0]}
    2. ${array[1]}
    3. ${array[2]}`)
 }

 
// que seguiria, una funcion que le cobre al cliente

function cobrar(){

let metodosDePago = parseInt(prompt(`${nombreCliente} como queres pagar?\n 1. Debito \n2. Credito \n3. Transferencia \n4. queres Saber lo que les hago a los que no pagan? \n elegi opcion de pago`))


switch (metodosDePago) {
    case 1:
        alert (`Hola ${nombreCliente} Gracias por pagar con debito `);
            
    break;
    
    case 2:
        alert (`Hola ${nombreCliente} Gracias por pagar con credito`);
        
            
        
    break;

    case 3:
        alert (`Hola ${nombreCliente} Gracias por pagar con transferencia`);
            
    break;

    case 4:
        
            alert (`${nombreCliente} Aparecere mientras duermes diciendote al oido Hola Juan Carlos`);
            
    break;
       

    default:
        alert ("valor invalido")
}
}
