import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './guard/admin.guard';
import { BlogFormComponent } from './pages/admin/blog/blog-form/blog-form.component';
import { BlogManagerComponent } from './pages/admin/blog/blog-manager/blog-manager.component';
import { CategoryBlogFormComponent } from './pages/admin/categories/blog/category-blog-form/category-blog-form.component';
import { CategoryBlogComponent } from './pages/admin/categories/blog/category-blog/category-blog.component';
import { CategoryWorkFormComponent } from './pages/admin/categories/work/category-work-form/category-work-form.component';
import { CategoryWorkComponent } from './pages/admin/categories/work/category-work/category-work.component';
import { ProductFormsComponent } from './pages/admin/products/product-forms/product-forms.component';
import { ProductManagerComponent } from './pages/admin/products/product-manager/product-manager.component';
import { UserFormsComponent } from './pages/admin/user/user-forms/user-forms.component';
import { UserManagerComponent } from './pages/admin/user/user-manager/user-manager.component';
import { WorkFormComponent } from './pages/admin/work/work-form/work-form.component';
import { WorkManagerComponent } from './pages/admin/work/work-manager/work-manager.component';
import { BlogCategoryDetailComponent } from './pages/blog-category-detail/blog-category-detail.component';
import { BlogDetailComponent } from './pages/blog-detail/blog-detail.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { AdminLayoutComponent } from './pages/layouts/admin/admin-layout/admin-layout.component';
import { WebsiteLayoutComponent } from './pages/layouts/website/website-layout/website-layout.component';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { WorkCategoryDetailComponent } from './pages/work-category-detail/work-category-detail.component';
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
          children: [
            {
              path: '',
              component: BlogComponent
            },
            {
              path: ':id',
              component: BlogDetailComponent
            },
            {
              path: 'categorydetail/:id',
              component: BlogCategoryDetailComponent
            }

          ]
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
            },
            {
              path: 'categorydetail/:id',
              component: WorkCategoryDetailComponent
            }
          ]
        },
        {
          path: 'contact',
          component: ContactComponent
        }
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
        path: 'work', canActivate:[AdminGuard], 
        children: [
          {
            path: '',
            component: WorkManagerComponent
          },
          {
            path: 'add',
            component: WorkFormComponent
          },
          {
            path: ':id/edit',
            component: WorkFormComponent
          }
        ]
      },
      {
        path: 'category', canActivate:[AdminGuard], 
        children: [
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
