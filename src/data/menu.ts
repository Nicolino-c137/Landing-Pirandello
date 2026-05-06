export interface MenuItem {
  id: string;
  nombre: string;
  descripcion: string;
  imagen: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 'menu-1',
    nombre: 'Punta de Espalda a la Llama',
    descripcion: 'Con salsa de verdeo. Entrada a elección: 2 empanadas criollas o lengua a la vinagreta. Guarnición: papas Pirandello, rústicas, ensalada mixta o escalivada de verduras.',
    imagen: 'assets/images/menu1.jpg',
  },
  {
    id: 'menu-2',
    nombre: 'Pachata Pirandello',
    descripcion: 'Nuestra clásica pachata con el sello Pirandello. Un plato contundente con todo el sabor de nuestra cocina.',
    imagen: 'assets/images/menu2.jpg',
  },
  {
    id: 'menu-3',
    nombre: '½ Barroluco Especial Vacuno',
    descripcion: 'Nuestro barroluco especial en versión media porción. Carne vacuna seleccionada con el punto justo de cocción.',
    imagen: 'assets/images/menu3.jpg',
  },
  {
    id: 'menu-4',
    nombre: 'Lomo Pirandello Vacuno',
    descripcion: 'El clásico que nos define. Lomo vacuno con el toque especial de la casa, servido a punto con nuestros ingredientes.',
    imagen: 'assets/images/menu4.jpg',
  },
];
