import { Routes, RouterModule } from '@angular/router';
import { BrandHomeComponent } from './brand-home/brand-home.component';

const appRoutes: Routes = [
    {
        path: ':id',
        component: BrandHomeComponent
    },
    {
        path: '*',
        redirectTo: '',
        pathMatch: 'full'
    },
    {
        path: '',
        component: BrandHomeComponent
    }
];

export const routing = RouterModule.forRoot(appRoutes);