import { Component, OnInit, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  type = 'Куртки'


  constructor(
    private router: Router,
    private productService: ProductService,
    private render: Renderer2
  ) { }

  ngOnInit(): void {
  }

  setType (type){
    this.type = type

    if (this.type !=='Корзина'){
      this.router.navigate(['/'], {
        queryParams:{
          type : this.type
        }

      })
      this.productService.setType(this.type)

    }
  }

  //clicked(event) {
  //  elementClass
    
  //  let Class('modal') = event.target.getAttribute('class');
  //  if (Class == null) {
  //    Class = '';
  //    this.render.setAttribute(event.target, "class", Class + 'selected');}
  //    else if (Class.includes('selected')) {
  //      Class = Class.replace('selected', '')
  //      this.render.setAttribute(event.target, "class", Class);
  //    } else {
  //      this.render.setAttribute(event.target, "class", Class + ' selected');
  //    }
  //}
  click(event) {
    this.render.addClass(event.target, 'selected');
  }

//  click(event) {
//    let modal_resume = document.getElementById('modal_resume')[0];
//    modal_resume.render.remove("modal");   //remove the class
//    modal_resume.render.addClass("selected");   //add the class
//  }
}