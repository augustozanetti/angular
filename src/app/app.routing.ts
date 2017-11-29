import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ListCoursesComponent } from './components/list-courses/list-courses.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { ListPostsComponent } from './components/list-posts/list-posts.component';

const appRoutes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'courses', component: ListCoursesComponent },
    {path: 'posts', component: ListPostsComponent },
    {path: 'courses/detail/:tag', component: CourseDetailsComponent }
]


export const appRoutingProviders: any[] =[

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);