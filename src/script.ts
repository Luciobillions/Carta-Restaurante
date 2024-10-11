class Plato {
    nombre: string;
    descripcion: string;
    precio: number;
    esVegetariano: boolean;
    esCeliaco: boolean;
    esMenuDelDia: boolean;

    constructor(
        nombre: string,
        descripcion: string,
        precio: number,
        esVegetariano: boolean = false,
        esCeliaco: boolean = false,
        esMenuDelDia: boolean = false
    ) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.esVegetariano = esVegetariano;
        this.esCeliaco = esCeliaco;
        this.esMenuDelDia = esMenuDelDia;
    }
}

const carta: Plato[] = [

        new Plato("Hamburguesa Completa", "Un medallón de carne, huevo, cebolla, jamón.", 4000),
        new Plato("Ensalada César", "Lechuga, pollo, crutones y aderezo César.", 3500, true),
        new Plato("Pizza Margarita", "Tomate, mozzarella y albahaca.", 3000, true),
        new Plato("Pastas al Pesto", "Pasta fresca con salsa pesto.", 3200, true),
        new Plato("Tarta de Verduras", "Tarta de verduras frescas, ideal para celiacos.", 2800, false, true),
        new Plato("Sopa del Día", "Sopa casera del día.", 2500, true, true, true),
        new Plato("Pechuga a la Plancha", "Pechuga de pollo a la plancha con guarnición.", 4200,false),
        new Plato("Risotto de Champiñones", "Arroz cremoso con champiñones frescos.", 3800, true),
        new Plato("Tacos de Carnitas", "Tortillas de maíz con carne de cerdo, cebolla y cilantro.", 4500),
        new Plato("Gnocchis de Espinaca", "Gnocchis caseros de espinaca con salsa de tomate.", 3600, true),
        new Plato("Bowl de Quinoa", "Quinoa con verduras asadas y aguacate.", 3400, true, true),
        new Plato("Pasta Carbonara", "Pasta con salsa cremosa de huevo, panceta y queso.", 3900),
        new Plato("Ensalada de Frutas", "Mezcla de frutas frescas de temporada.", 2500, true),
        new Plato("Milánesa de Pollo", "Pechuga de pollo empanizada con guarnición.", 4200),
        new Plato("Ceviche de Pescado", "Pescado marinado en jugo de limón con cebolla y cilantro.", 4800, false, true),
        new Plato("Brownie con Helado", "Brownie de chocolate con helado de vainilla.", 2800, true),
        new Plato("Tarta de Manzana", "Tarta de manzana casera con helado.", 3000, true, true, true)
    
    
];
function filtrarPlatos(opcion: 'vegetariano' | 'celiaco' | 'menuDelDia'): Plato[] {
    switch (opcion) {
        case 'vegetariano':
            return carta.filter(plato => plato.esVegetariano);
        case 'celiaco':
            return carta.filter(plato => plato.esCeliaco);
        case 'menuDelDia':
            return carta.filter(plato => plato.esMenuDelDia);
        default:
            return carta;
    }
}

function mostrarCarta(platos: Plato[]): void {
    const cartaDiv = document.getElementById('carta')!;
    cartaDiv.innerHTML = '';
    platos.forEach(plato => {
        cartaDiv.innerHTML += `
            <div class="plato">
                <strong>${plato.nombre}</strong>: <br> ${plato.descripcion} <br> <span class="precio">$${plato.precio}</span>
                <div class="icons">
                    <div class="carrito">
                        <img src="./icons/carro-de-la-compra.png" alt="">
                    </div>
                </div>
            </div>
        `;
    });
}

function buscarPlatos(nombre: string): Plato[] {
    return carta.filter(plato => 
        plato.nombre.toLowerCase().indexOf(nombre.toLowerCase()) !== -1
    );
}


document.getElementById('verTodos')!.onclick = () => mostrarCarta(carta);
document.getElementById('verVegetarianos')!.onclick = () => mostrarCarta(filtrarPlatos('vegetariano'));
document.getElementById('verCeliacos')!.onclick = () => mostrarCarta(filtrarPlatos('celiaco'));
document.getElementById('verMenuDelDia')!.onclick = () => mostrarCarta(filtrarPlatos('menuDelDia'));

// Evento para buscar
document.getElementById('buscador')!.addEventListener('input', (event) => {
    const input = event.target as HTMLInputElement;
    const resultados = buscarPlatos(input.value);
    mostrarCarta(resultados);
});

// Mostrar todos los platos al cargar
mostrarCarta(carta);