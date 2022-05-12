import { parseUrl } from '../../utils/utils.js';
import { Component } from "../../utils/component";
import template from "./score.component.html"

    /* class ScoreComponent constructor */
    export class ScoreComponent extends Component{
        constructor() {
            super("score");
            const params = parseUrl();
            this.name = params.name;
            this.size = parseInt(params.size);
            this.time = parseInt(params.time);
        } 
        
        /* method ScoreComponent.init */
        init() {
            document.getElementById('name').innerText = this.name;
            document.getElementById('size').innerText = this.size;
            document.getElementById('time').innerText = this.time;
        }

        getTemplate() {
            return template;
          }
    }  

