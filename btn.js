const siz = {x: 30, y: 50}

class Btn{
    constructor(Color, Text, Size){
        const color = Color;
        const text = Text;
        const size = Size;
    }

    show(id){
        const element = document.createElement('div');
        element.style.background = this.color;
        element.style.width = this.size.x;

        id.appendChild(element)
    }
}

const btn = new Btn('#ff0000', "Hello", siz)