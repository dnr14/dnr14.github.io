function makeFruitArray() {
    const fruit = [
        "fruit01.png", "fruit02.png", "fruit03.png", "fruit04.png", "fruit05.png", "fruit06.png", "fruit07.png", "fruit08.png",
        "fruit01.png", "fruit02.png", "fruit03.png", "fruit04.png", "fruit05.png", "fruit06.png", "fruit07.png", "fruit08.png"
    ];
    const array = [];

    for (let i = 0; i < fruit.length; i++) {
        const obj = {
            index: fruit[i].slice(6, 7),
            url: `./images/${fruit[i]}`,
            value: `${fruit[i]}`
        }
        array.push(obj);
    }

    // 무작위로 섞는다.
    return array.sort(() => Math.random() - 0.5);
}

function makeElement(arr) {

    let stopwatch;
    let button_click = false;
    const KEY_WORD = "남은 카드 갯수 : ";
    const _map = new Map();
    const $h1_card = document.getElementById("card_count");
    const $h1_end = document.getElementById("end");
    const H = 117.5;
    const iter = arr.values();

    $h1_card.innerText = `${KEY_WORD}${arr.length}장`;
    let cardCount = arr.length / 2;

    for (let obj of iter) {
        const $container = document.getElementById("container");

        const $innerDiv = document.createElement("div");
        $innerDiv.style.background = `url(${obj.url})`;
        $innerDiv.style.height = `${H}px`;
        $innerDiv.style.backgroundPosition = "center";
        $innerDiv.style.backgroundSize = "cover";

        $container.appendChild($innerDiv);

        const $questionDiv = document.createElement("div");
        $questionDiv.style.height = `${H}px`;
        $questionDiv.style.background = `url(./images/question.png)`;
        $questionDiv.style.backgroundPosition = "center";
        $questionDiv.style.backgroundSize = "cover";
        $questionDiv.style.backgroundColor = "white";
        $questionDiv.style.borderRadius = "20px";
        $questionDiv.style.borderRadius = "20px";
        $questionDiv.style.opacity = 1;
        $questionDiv.style.transition = `.5s`;

        const click = (x) => {
            return function (e) {
                if (button_click === false) {
                    const startTime = new Date();
                    const startSeconds = startTime.getSeconds();
                    button_click = true;
                    stopwatch = setInterval(() => {
                        const now = new Date();
                        const nowSeconds = now.getSeconds();
                        $h1_end.innerHTML = `경과 시간 : ${(nowSeconds - startSeconds)}초`;
                    }, 1000);
                }

                this.style.opacity = 0;

                if (_map.size < 2) {
                    _map.set(this, obj);
                }
                if (_map.size == 2) {
                    const entris = _map.entries();
                    const [iter1, iter2] = [entris.next(), entris.next()];

                    const index1 = iter1.value[1].index;
                    const index2 = iter2.value[1].index;
                    const div1 = iter1.value[0];
                    const div2 = iter2.value[0];

                    if (index1 !== index2) {
                        setTimeout(() => {
                            div1.style.opacity = 1;
                            div2.style.opacity = 1;
                        }, 500);
                        _map.clear();
                    } else if (index1 === index2) {
                        _map.clear();
                        cardCount--;
                        $h1_card.innerText = `${KEY_WORD}${arr.length -= 2}장`;
                        if (cardCount === 0) {
                            console.timeEnd("시작");
                            clearInterval(stopwatch);
                            alert("게임 끝");
                        }
                    }
                }
            }
        }

        $questionDiv.onclick = click($innerDiv);
        $innerDiv.appendChild($questionDiv);

        // 이렇게도 코딩 할 수 있다.
        // $questionDiv.addEventListener('click', ((x) => (e)=> {
        //     console.log(x);
        //     console.log(this)
        // })($innerDiv));
    }
}

function makeOnclick() {

}

window.onload = () => {
    console.time("시작");
    const fruit = makeFruitArray();
    makeElement(fruit);
}