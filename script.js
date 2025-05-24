import { createElement } from "./component.js";
import {DATA,COLORS} from "./const.js"

const square = createElement('div',{
    style:{
        backgroundColor:COLORS.deleted,
        width: '100px',
        height : '100px'
    },
    vIf:true
});

const test = createElement(
    "div",
    {
    style:{
        backgroundColor:"red",
        width:"200px",
        height:"200px"
    }
},
"Hello"
)
const box  = createElement('div',{
    class : "card",
    vIf: false
},
"Ceci est visible avec vIf");

const list =createElement('ul',{
    vFor:{
        each: ["javascript","svelte","Nuxt"],
        render:tech=>createElement('li',{
            style:`list-style-type:none`
        },tech)
    }
})

const productList = createElement("div",{
    style:{
        border:"5px solid red",
        vfor:{
            each:[DATA],
            render: item=>{
                const color = item.done && item.deleted ? COLORS.done_deleted : item.done ? COLORS.done : item.deleted ? COLORS.deleted : COLORS.other

                return createElement('div',{
                    class:"card",
                    style:`background-color : ${color}`
                },[
                    createElement("h2",{},item.title),
                    createElement("p",{},item.content),
                    createElement("b",{},item.pts)
                ])
            }
        }
    }
})

const toggled = createElement('div',{
    class:'card',
    vShow:true,
    id:'toggleBox',

},"Ceci est masqué par vShow!")


const button = createElement('button',{
    class: 'btn',
    id: 'toggleBtn',
    style: 'margin-top :10px',
    onClick:()=>{
        toggled.style.display = toggled.style.display ==="none" ?"":"none";
    }
},
["Afficher/Masquer le bloc ", createElement('span',{},"test")]);


const app = createElement(
    'div', 
    {
        id:"app",
        style: { border: '5px solid black', padding: '50px' },
    },
    [
       test,
    ]
);

document.body.append(app);