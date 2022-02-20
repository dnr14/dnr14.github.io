const multi_dimensional_array = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
]

function _globalFn() {
    this.color = "white";
    this.victory = false;
    this.draw = false;
    this.VICTORY_COUNT = 4;
    this.DROWCOUNT = multi_dimensional_array.length * multi_dimensional_array[0].length;
}

const _global = new _globalFn();

function makeBox() {
    const $container = document.getElementById("container");
    for (let i = 0; i < multi_dimensional_array.length; i++) {
        for (let j = 0; j < multi_dimensional_array[i].length; j++) {
            const $element = document.createElement("div");
            $element.classList.add("box");

            $element.addEventListener('click', function (e) {
                if (_global.victory === true || _global.draw === true) return;
                const target = e.currentTarget;
                showDrawing(target);
                Allcheck();

                if (_global.victory === true) {
                    alert(`${_global.color} 승리입니다.`);
                } else if (_global.draw === true) {
                    alert(`무승부입니다.`);
                }
            });

            multi_dimensional_array[i][j] = {
                value: 0,
                div: $element,
                Coordinates: [i, j]
            };
            $container.appendChild($element);
        }
    }
}



function makeGoEgg() {
    const $goEgg = document.createElement("div");
    _global.color === 'white' ? _global.color = 'black' : _global.color = 'white';
    $goEgg.classList.add("goEgg", `goEgg_${_global.color}`);
    return $goEgg;
}

function showDrawing(target) {
    multi_dimensional_array.forEach((rows) => {
        rows.forEach((colums) => {
            const $box = colums.div;
            if ($box === target) {
                if (colums.value === 0) {
                    const $goEgg = makeGoEgg();
                    $box.appendChild($goEgg);
                    colums.value = _global.color;
                }
            }
        });
    })
}

// 공통 부분을 쪼갤땐 콜 바이 레퍼런스를 이용하면 유용하다.
function victoryCheck(x, y, checkObj) {
    const colum = multi_dimensional_array[x][y];
    // 바둑알 없다면 평가 x
    if (colum.value === 0) {
        checkObj.goEggCount = 0;
        return;
    }
    // 바둑알이 놓여져 있다면 평가 
    if (colum.value !== 0) {
        // 첫 평가 
        if (checkObj.beforvalue === 0) {
            checkObj.beforvalue = colum.value;
            checkObj.goEggCount++;
            return;
            // 두번째 평가 
        } else {
            // 이전 평가와 값이 같다면 
            if (checkObj.beforvalue === colum.value) {
                checkObj.goEggCount++;
                // 이전 평가와 값이 다르다면
            } else if (checkObj.beforvalue !== colum.value) {
                checkObj.beforvalue = colum.value;
                checkObj.goEggCount = 1;
            }
        }
        // 승리 조건 평가
        if (checkObj.goEggCount === _global.VICTORY_COUNT) {
            _global.victory = true;
        }
    }
}

function diagonalCheck1() {
    const toggle = multi_dimensional_array.length;
    for (let i = 0; i < toggle; i++) {
        const checkObj = { goEggCount: 0, beforvalue: 0 };
        for (let x = 0, y = i, j = 0; j <= i; j++, x++, y--) {
            victoryCheck(x, y, checkObj);
        }
        for (let x = i, y = toggle - 1, j = i; j < toggle; j++, x++, y--) {
            victoryCheck(x, y, checkObj);
        }
    }
}
function diagonalCheck2() {
    const toggle = multi_dimensional_array.length;
    for (let i = 0; i < toggle; i++) {
        const checkObj = { goEggCount: 0, beforvalue: 0 };
        for (let x = 0, y = (toggle - 1) - i, j = 0; j <= i; j++, x++, y++) {
            victoryCheck(x, y, checkObj);
        }
        for (let x = i + 1, y = 0, j = i; j < toggle - 1; j++, x++, y++) {
            victoryCheck(x, y, checkObj);
        }
    }
}

function rowsCheck() {
    for (let i = 0; i < multi_dimensional_array.length; i++) {
        const checkObj = { goEggCount: 0, beforvalue: 0 };
        for (let j = 0; j < multi_dimensional_array[i].length; j++) {
            victoryCheck(i, j, checkObj);
        }
    }
}

function columsCheck() {
    for (let i = 0; i < multi_dimensional_array.length; i++) {
        const checkObj = { goEggCount: 0, beforvalue: 0 };
        for (let j = 0; j < multi_dimensional_array[i].length; j++) {
            victoryCheck(j, i, checkObj);
        }
    }
}

function drawCheck() {
    let drawCount = 0;
    multi_dimensional_array.forEach((rows) => {
        rows.forEach((colums) => {
            if (colums.value !== 0) {
                drawCount++;
            }
        });
    });
    if (drawCount == _global.DROWCOUNT) {
        _global.draw = true;
    }
}

function Allcheck() {
    //가로
    rowsCheck();
    //세로
    columsCheck();
    //⬋
    diagonalCheck1();
    //⬊
    diagonalCheck2();
    //무승부
    drawCheck();
}

window.onload = () => {
    makeBox();
}