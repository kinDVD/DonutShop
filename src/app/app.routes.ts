import { Routes } from '@angular/router';
import { DonutComponent } from './components/donut/donut.component';
import { CartComponent } from './components/cart/cart.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DetaileddonutComponent } from './components/detaileddonut/detaileddonut.component';

export const routes: Routes = [    
    {path:"Donuts", component:DonutComponent},
    //:id is a path parameter indicating sub page
    {path:"Donuts/:id", component: DetaileddonutComponent},
    //Cart path
    { path:"Cart", component:CartComponent},
    //redirect to home page
    {path:"", redirectTo:"/Donuts", pathMatch:"full"},
    //not found
    {path:"**", component: PageNotFoundComponent}
    //order of these paths is intentional - first come first serve running array of routes by index
];
