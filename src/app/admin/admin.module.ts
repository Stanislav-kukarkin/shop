import { NgModule } from "@angular/core";
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './shared/admin-layout/admin-layout.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { AddPageComponent } from './add-page/add-page.component';
import { OrdersPageComponent } from './orders-page/orders-page.component';
import { EditPageComponent } from './edit-page/edit-page.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


@NgModule({
    declarations: [
        AdminLayoutComponent,
        LoginPageComponent,
        DashboardPageComponent,
        EditPageComponent,
        OrdersPageComponent,
        AddPageComponent,
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild([
            {
            path:'', component: AdminLayoutComponent, children: [
                {path:'' , redirectTo:'/admin/login' , pathMatch: 'full'},
                {path:'login', component: LoginPageComponent },
                {path:'dashboard', component: DashboardPageComponent},
                {path:'product/:id/edit', component: EditPageComponent },
                {path:'orders', component: OrdersPageComponent},
                {path:'add', component: AddPageComponent },
            ]
            }
        ])
    ],
    exports: [RouterModule]
})

export class AdminModule{ }