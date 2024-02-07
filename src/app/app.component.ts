import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from "./components/product/product.component";
import { HttpClient } from '@angular/common/http';
import { MenuService } from './core/services/menu.service';
import { Observable } from 'rxjs';
import { Product, Result } from './models/product.model';
import { AsyncPipe } from '@angular/common';
@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [CommonModule, RouterOutlet, ProductComponent, AsyncPipe]
})

export class AppComponent implements OnInit {

  public menuList$!: Observable <Result>;
  constructor (private service: MenuService){} 
  
  ngOnInit(): void {
    this.menuList$ = this.service.getMenuList();
  }
  
}



