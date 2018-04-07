function spiralMatrix(n) {
    // создание пустой матрицы
    const matrix = Array.from(Array(n), () => new Array(n).fill(0));

    // правила для направления индекса x y: right, down, left, top
    let directions= [ [1, 0], [0, 1], [-1, 0], [0,-1] ];

    const rotate = () => {
        const first = directions.shift();
        directions.push(first);
    };

    let x = 0;
    let y = 0;

    for (let i = 1; i <= n*n; i++) {
        //заполняем ячейку значением
        matrix[y][x] = i;

        // проверяем что нас ждет на следующем шаге
        const nextCell = matrix[y + directions[0][1]] && (matrix[y + directions[0][1]][x + directions[0][0]] === 0);
        if (!nextCell) {
            //если все плохо - поворачиваем
            rotate();
        }
        x = x + directions[0][0];
        y = y + directions[0][1];
    }
    return matrix;
}

// вывод в HTML
function render(matrix) {
    document.querySelector('.matrix').innerHTML = '';
    matrix.forEach((el) => {
        const row = document.createElement('div');
        row.style.display = 'flex';
        row.style.justifyContent = 'space-around';
        el.forEach((num) => {
            const node = document.createElement('div');
            
            node.style.height = '25px';
            node.style.justifyContent = 'center';
            node.style.alignItems = 'center';
            node.textContent = num;
            row.appendChild(node);
        })
        
        document.querySelector('.matrix').appendChild(row)
    })
}

// генерируем матрицу с нужным значением
const matrix = spiralMatrix(9);
render(matrix);


// вывод в консоль
console.log(spiralMatrix(5))
