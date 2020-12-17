import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicLayoutComponent } from './layouts/public-layout/public-layout.component';
import { HomeComponent } from './routable-components/home/home.component';
import { ExploreCoursesComponent } from './routable-components/explore-courses/explore-courses.component';
import { RegistrationComponent } from './routable-components/registration/registration.component';
import { LoginComponent } from './routable-components/login/login.component';
import { UserGuard } from './authentication-guards/user.guard';
import { PublicGuard } from './authentication-guards/public.guard';
import { LoaderComponent } from './routable-components/loader/loader.component';


const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    canActivate: [PublicGuard],
    children: [
      { path: '',component: HomeComponent },
      { path: 'registration',component: RegistrationComponent },
      { path: 'login',component: LoginComponent },
      {
        path: 'courses',
        children: [
          { path: 'explore-courses', component: ExploreCoursesComponent }
        ]
      },
      {
        path: 'loading',
        component: LoaderComponent
      },
      {
        path: 'forgot-password',
        loadChildren: () => import('../app/modules/reset-password/reset-password.module').then(m => m.ResetPasswordModule)
      }
    ]
  },
  {
    path: 'user',
    canActivate: [UserGuard],
    loadChildren: () => import('../app/modules/user/user.module').then(m => m.UserModule)
  },
  {
    path: 'mentor',
    canActivate: [UserGuard],
    loadChildren: () => import('../app/modules/mentor/mentor.module').then(m => m.MentorModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('../app/modules/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'lazy',
    loadChildren: () => import('../app/test-universal/test-universal.module').then(m => m.TestUniversalModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
