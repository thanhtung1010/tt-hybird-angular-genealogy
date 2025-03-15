import { Routes } from '@angular/router';
import { authActiveGuard, layoutActiveGuard } from '@guards';
import { AppComponent } from './app.component';
import { ROUTE } from '@enums';

export const routes: Routes = [
    {
        path: ROUTE.HOME,
        canActivate: [layoutActiveGuard],
        loadComponent: () =>
            import('./pages/layout/layout.component').then(
                (c) => c.LayoutComponent
            ),
        children: [
            {
                path: ROUTE.GENEALOGY,
                loadComponent: () =>
                    import('./screens/genealogy/genealogy.component').then(
                        (c) => c.GenealogyComponent
                    ),
            },
            {
                path: ROUTE.FAMILY,
                loadComponent: () =>
                    import('./screens/family/family.component').then(
                        (c) => c.FamilyComponent
                    ),
            },
        ],
    },
    {
        path: ROUTE.AUTH,
        canActivate: [authActiveGuard],
        loadComponent: () =>
            import('./pages/auth/auth.component').then((c) => c.AuthComponent),
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: ROUTE.HOME,
    },
];
