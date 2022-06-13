import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guard/admin.guard';
import { BlogFormComponent } from './pages/admin/blog/blog-form/blog-form.component';
import { BlogManagerComponent } from './pages/admin/blog/blog-manager/blog-manager.component';
import { CategoryBlogFormComponent } from './pages/admin/categories/blog/category-blog-form/category-blog-form.component';
import { CategoryBlogComponent } from './pages/admin/categories/blog/category-blog/category-blog.component';
import { CategoryPostFormComponent } from './pages/admin/categories/Post/category-post-form/category-post-form.component';
import { CategoryPostComponent } from './pages/admin/categories/Post/category-post/category-post.component';
import { CategoryProjectFormComponent } from './pages/admin/categories/Project/category-project-form/category-project-form.component';
import { CategoryProjectComponent } from './pages/admin/categories/Project/category-project/category-project.component';
import { CategoryWorkFormComponent } from './pages/admin/categories/work/category-work-form/category-work-form.component';
import { CategoryWorkComponent } from './pages/admin/categories/work/category-work/category-work.component';
import { PostFormComponent } from './pages/admin/post/post-form/post-form.component';
import { PostManagerComponent } from './pages/admin/post/post-manager/post-manager.component';
import { ProductFormsComponent } from './pages/admin/products/product-forms/product-forms.component';
import { ProductManagerComponent } from './pages/admin/products/product-manager/product-manager.component';
import { ProjectFormComponent } from './pages/admin/project/project-form/project-form.component';
import { ProjectManagerComponent } from './pages/admin/project/project-manager/project-manager.component';
import { UserFormsComponent } from './pages/admin/user/user-forms/user-forms.component';
import { UserManagerComponent } from './pages/admin/user/user-manager/user-manager.component';
import { BlogComponent } from './pages/blog/blog.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminLayoutComponent } from './pages/layouts/admin/admin-layout/admin-layout.component';
import { WebsiteLayoutComponent } from './pages/layouts/website/website-layout/website-layout.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { WorkDetailComponent } from './pages/work-detail/work-detail.component';
import { WorkComponent } from './pages/work/work.component';

const routes: Routes = [
  {
    path: '' , component: WebsiteLayoutComponent,
    children: [
        { 
          path: '',
          component: HomePageComponent
        },
        {
          path: 'blog',
          component: BlogComponent
        },
        {
          path: 'work',
          children: [
            {
              path: '',
              component: WorkComponent
            },
            {
              path: ':id',
              component: WorkDetailComponent
            }
          ]
        },
    ]
  },
  {
    path: 'signin',
    component: SignInComponent
  },
  {
    path: 'signup',
    component: SignUpComponent
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      {
        path: 'user', canActivate:[AdminGuard],
        children: [
          {
            path: '',
            component: UserManagerComponent
          },
          {
            path: 'add',
            component: UserFormsComponent
          },
          {
            path: ':id/edit',
            component: UserFormsComponent
          }
        ] 
      },
      
      {
        path: 'product', canActivate:[AdminGuard], 
        children: [
          {
            path: '',
            component: ProductManagerComponent
          },
          {
            path: 'add',
            component: ProductFormsComponent
          },
          {
            path: ':id/edit',
            component: ProductFormsComponent
          }
        ]
      },
      {
        path: 'post', canActivate:[AdminGuard], 
        children: [
          {
            path: '',
            component: PostManagerComponent
          },
          {
            path: 'add',
            component: PostFormComponent
          },
          {
            path: ':id/edit',
            component: PostFormComponent
          }
        ]
      },
      {
        path: 'blog', canActivate:[AdminGuard], 
        children: [
          {
            path: '',
            component: BlogManagerComponent
          },
          {
            path: 'add',
            component: BlogFormComponent
          },
          {
            path: ':id/edit',
            component: BlogFormComponent
          }
        ]
      },
      {
        path: 'project', canActivate:[AdminGuard], 
        children: [
          {
            path: '',
            component: ProjectManagerComponent
          },
          {
            path: 'add',
            component: ProjectFormComponent
          },
          {
            path: ':id/edit',
            component: ProjectFormComponent
          }
        ]
      },
      {
        path: 'category', canActivate:[AdminGuard], 
        children: [
          {
            path: 'post',
            children: [
              { 
                path: '',
                component: CategoryPostComponent,
              },
              {
                path: 'add',
                component: CategoryPostFormComponent
              },
              {
                path: ':id/edit',
                component: CategoryPostFormComponent
              }
            ]
          },
          {
            path: 'project',
            children: [
              {
                path: '',
                component: CategoryProjectComponent
              },
              {
                path: 'add',
                component: CategoryProjectFormComponent
              },
              {
                path: ':id/edit',
                component: CategoryProjectFormComponent
              }
            ]
          },
          {
            path: 'blog',
            children: [
              {
                path: '',
                component: CategoryBlogComponent
              },
              {
                path: 'add',
                component: CategoryBlogFormComponent
              },
              {
                path: ':id/edit',
                component: CategoryBlogFormComponent
              }
            ]
          },
          {
            path: 'work',
            children: [
              {
                path: '',
                component: CategoryWorkComponent
              },
              {
                path: 'add',
                component: CategoryWorkFormComponent
              },
              {
                path: ':id/edit',
                component: CategoryWorkFormComponent
              }
            ]
          }
        ]
      },
]
},
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
