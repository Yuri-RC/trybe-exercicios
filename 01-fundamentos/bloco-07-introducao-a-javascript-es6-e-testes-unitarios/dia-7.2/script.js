// const order = {
//   name: 'Rafael Andrade',
//   phoneNumber: '11-98763-1416',
//   address: {
//     street: 'Rua das Flores',
//     number: '389',
//     apartment: '701',
//   },
//   order: {
//     pizza: {
//       marguerita: {
//         amount: 1,
//         price: 25,
//       },
//       pepperoni: {
//         amount: 1,
//         price: 20,
//       }
//     },
//     drinks: {
//       coke: {
//         type: 'Coca-Cola Zero',
//         price: 10,
//         amount: 1,
//       }
//     },
//     delivery: {
//       deliveryPerson: 'Ana Silveira',
//       price: 5,
//     }
//   },
//   payment: {
//     total: 60,
//   },
// };

// const customerInfo = (order) => {
//   // Adicione abaixo as informações necessárias.
//   console.log(`Olá ${order.order.delivery.deliveryPerson}, entrega para: ${order.name}, Telefone: ${order.phoneNumber}, R. ${order.address.street}, Nº: ${order.address.number}, AP: ${order.address.apartment}`);
// }

// customerInfo(order);

// const orderModifier = (order) => {
//   // Adicione abaixo as informações necessárias.
//   const name = order.name = 'Luiz Silva'
//   const pizza = Object.keys(order.order.pizza);
//   const drink = order.order.drinks.coke.type;
//   const payment = order.payment.total = '50';
//   console.log(`Olá ${name}, o total do seu pedido de ${pizza[0]}, ${pizza[1]} e ${drink} é R$ ${payment},00.`);
// }

// orderModifier(order);

const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addTurno = (obj, key, value) => { obj[key] = value }
addTurno(lesson2, 'turno', 'Noite')

const objKeys = obj => Object.keys(obj);
console.log(objKeys(lesson1))

const objLength = obj => Object.keys(obj).length
console.log(objLength(lesson1))

const objValues = obj => Object.values(obj);
console.log(objValues(lesson1))

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
console.log(allLessons);
