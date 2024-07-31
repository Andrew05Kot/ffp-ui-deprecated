import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from 'app/ffd-components/components';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatDateFormats } from '@angular/material/core';
import { NotificationModule } from '@app/admin-panel/services';
import { environment } from '../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { L10nIntlModule, L10nTranslationModule } from 'angular-l10n';
import { L10nCookieStorage } from '@app/core/utils/l10n/cookie-storge.service';
import { getL10nConfig } from '@app/core/utils/l10n/l10n-config.helper';
import { DestroyService } from '@app/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
import { TempAuthInterceptor } from '@app/core/interceptors/app-auth.interceptor';
import { KeycloakAngularModule, KeycloakService } from 'keycloak-angular';
import { AdminPanelModule } from '@app/admin-panel/admin-panel.module';
import { HomePageModule } from '@app/guest/home-page/home-page.module';

const APP_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: {day: 'numeric', month: 'numeric', year: 'numeric'},
  },
  display: {
    dateInput: {day: 'numeric', month: 'short', year: 'numeric'},
    monthYearLabel: {year: 'numeric', month: 'short'},
    dateA11yLabel: {year: 'numeric', month: 'long', day: 'numeric'},
    monthYearA11yLabel: {year: 'numeric', month: 'long'}
  }
};

const StoreDevtools = !environment.production ? StoreDevtoolsModule.instrument({maxAge: 50}) : [];

function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'ffd-app',
        clientId: 'ffp-client'
      },
      initOptions: {
        onLoad: 'check-sso'
      }
    });
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NotificationModule.forRoot(),
    StoreModule.forRoot({}),
    EffectsModule.forRoot({}),
    StoreDevtools,
    LeafletModule,
    L10nTranslationModule.forRoot(getL10nConfig(['en'], false), {
      storage: L10nCookieStorage,
    }),
    L10nIntlModule,
    KeycloakAngularModule,
    AdminPanelModule,
    HomePageModule
  ],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
    {provide: MAT_DATE_FORMATS, useValue: APP_DATE_FORMATS},
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}},
    DestroyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TempAuthInterceptor,
      multi: true,
    },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializeKeycloak,
    //   multi: true,
    //   deps: [KeycloakService]
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
