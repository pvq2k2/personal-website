import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductManagerComponent } from './pages/admin/products/product-manager/product-manager.component';
import { ProductFormsComponent } from './pages/admin/products/product-forms/product-forms.component';
import { UserManagerComponent } from './pages/admin/user/user-manager/user-manager.component';
import { AdminLayoutComponent } from './pages/layouts/admin/admin-layout/admin-layout.component';
import { AdminContentComponent } from './pages/layouts/admin/admin-content/admin-content.component';
import { WebsiteLayoutComponent } from './pages/layouts/website/website-layout/website-layout.component';
import { WebsiteContentComponent } from './pages/layouts/website/website-content/website-content.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgZorroAntdModule } from './ng-zorro-antd.module';
import { IconsProviderModule } from './icons-provider.module';
import { SignInComponent } from './pages/sign-in/sign-in.component';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { BlogComponent } from './pages/blog/blog.component';
import { WorkComponent } from './pages/work/work.component';
import { UserFormsComponent } from './pages/admin/user/user-forms/user-forms.component';
import { CategoryPostComponent } from './pages/admin/categories/Post/category-post/category-post.component';
import { CategoryPostFormComponent } from './pages/admin/categories/Post/category-post-form/category-post-form.component';
import { PostManagerComponent } from './pages/admin/post/post-manager/post-manager.component';
import { PostFormComponent } from './pages/admin/post/post-form/post-form.component';
import { ProjectManagerComponent } from './pages/admin/project/project-manager/project-manager.component';
import { CategoryProjectComponent } from './pages/admin/categories/Project/category-project/category-project.component';
import { CategoryProjectFormComponent } from './pages/admin/categories/Project/category-project-form/category-project-form.component';
import { ProjectFormComponent } from './pages/admin/project/project-form/project-form.component';
import { WorkDetailComponent } from './pages/work-detail/work-detail.component';
import { BlogManagerComponent } from './pages/admin/blog/blog-manager/blog-manager.component';
import { BlogFormComponent } from './pages/admin/blog/blog-form/blog-form.component';
import { CategoryBlogComponent } from './pages/admin/categories/blog/category-blog/category-blog.component';
import { CategoryBlogFormComponent } from './pages/admin/categories/blog/category-blog-form/category-blog-form.component';

registerLocaleData(en);


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    AdminContentComponent,
    WebsiteLayoutComponent,
    WebsiteContentComponent,
    ProductManagerComponent,
    ProductFormsComponent,
    PostManagerComponent,
    PostFormComponent,
    BlogManagerComponent,
    BlogFormComponent,
    UserManagerComponent,
    UserFormsComponent,
    ProjectManagerComponent,
    ProjectFormComponent,
    CategoryPostComponent,
    CategoryPostFormComponent,
    CategoryProjectComponent,
    CategoryProjectFormComponent,
    CategoryBlogComponent,
    CategoryBlogFormComponent,
    SignInComponent,
    SignUpComponent,
    HomePageComponent,
    BlogComponent,
    WorkComponent,
    WorkDetailComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    BrowserAnimationsModule,
    NgZorroAntdModule,
    IconsProviderModule,
    ReactiveFormsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }
