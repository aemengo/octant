import { Injectable, NgModule } from '@angular/core';
import { CommonModule, Location } from '@angular/common';
import { ContainerComponent } from './components/smart/container/container.component';
import { NamespaceComponent } from './components/smart/namespace/namespace.component';
import { PageNotFoundComponent } from './components/smart/page-not-found/page-not-found.component';
import { InputFilterComponent } from './components/smart/input-filter/input-filter.component';
import { NotifierComponent } from './components/smart/notifier/notifier.component';
import { NavigationComponent } from './components/smart/navigation/navigation.component';
import { QuickSwitcherComponent } from './components/smart/quick-switcher/quick-switcher.component';
import { ApplyYAMLComponent } from './components/smart/apply-yaml/apply-yaml.component';
import { ThemeSwitchButtonComponent } from './components/smart/theme-switch/theme-switch-button.component';
import { UploaderComponent } from './components/smart/uploader/uploader.component';
import { ClarityModule } from '@clr/angular';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { SharedModule } from '../shared/shared.module';
import { ContentComponent } from './components/smart/content/content.component';
import { FilterTextPipe } from './pipes/filtertext/filtertext.pipe';
import { OverlayscrollbarsModule } from 'overlayscrollbars-ngx';

const routes: Routes = [
  {
    path: '',
    component: ContainerComponent,
    children: [{ path: '**', component: ContentComponent }],
  },
];

@Injectable()
export class UnstripTrailingSlashLocation extends Location {
  public static stripTrailingSlash(url: string): string {
    return url;
  }
}

@NgModule({
  declarations: [
    ApplyYAMLComponent,
    ContainerComponent,
    NamespaceComponent,
    PageNotFoundComponent,
    InputFilterComponent,
    NotifierComponent,
    NavigationComponent,
    ContentComponent,
    QuickSwitcherComponent,
    ThemeSwitchButtonComponent,
    UploaderComponent,
    FilterTextPipe,
  ],
  imports: [
    CommonModule,
    ClarityModule,
    HttpClientModule,
    FormsModule,
    NgSelectModule,
    OverlayscrollbarsModule,
    SharedModule,

    // routing must come last
    RouterModule.forChild(routes),
  ],
  providers: [
    {
      provide: Location,
      useClass: UnstripTrailingSlashLocation,
    },
  ],
})
export class SugarloafModule {}
