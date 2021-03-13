import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadersComponent } from './headers/headers.component';
import { FootersComponent } from './footers/footers.component';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { CareersComponent } from './pages/careers/careers.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { AutomotiveComponent } from './pages/our-services/automotive/automotive.component';
import { DigitalIndManuEnggComponent } from './pages/our-services/digital-ind-manu-engg/digital-ind-manu-engg.component';
import { WebDevelopmentComponent } from './pages/our-services/web-development/web-development.component';
import { AecBimComponent } from './pages/our-services/aec-bim/aec-bim.component';
import { DesignsComponent } from './pages/our-services/automotive/designs/designs.component';
import { VirtualValidationComponent } from './pages/our-services/automotive/virtual-validation/virtual-validation.component';
import { EmbeddedSystemsComponent } from './pages/our-services/automotive/embedded-systems/embedded-systems.component';
import { ProductLifecycleManagementComponent } from './pages/our-services/automotive/product-lifecycle-management/product-lifecycle-management.component';
import { ToolDieComponent } from './pages/our-services/automotive/tool-die/tool-die.component';
import { ThreeDPrintingComponent } from './pages/our-services/automotive/three-d-printing/three-d-printing.component';
import { AiMlComponent } from './pages/our-services/digital-ind-manu-engg/ai-ml/ai-ml.component';
import { IotComponent } from './pages/our-services/digital-ind-manu-engg/iot/iot.component';
import { UiUxComponent } from './pages/our-services/digital-ind-manu-engg/ui-ux/ui-ux.component';
import { SoftwareTestingComponent } from './pages/our-services/digital-ind-manu-engg/software-testing/software-testing.component';
import { SemiconductorComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/semiconductor.component';
import { VlsiComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/vlsi/vlsi.component';
import { AnalogMixedSignalDesignsComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/vlsi/analog-mixed-signal-designs/analog-mixed-signal-designs.component';
import { RtlDesignComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/vlsi/rtl-design/rtl-design.component';
import { DesignVerificationComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/vlsi/design-verification/design-verification.component';
import { DesignTestDebugComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/vlsi/design-test-debug/design-test-debug.component';
import { PhysicalDesignComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/vlsi/physical-design/physical-design.component';
import { SystemcSolutionsComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/vlsi/systemc-solutions/systemc-solutions.component';
import { FpgaEmulationPostSiValidationComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/vlsi/fpga-emulation-post-si-validation/fpga-emulation-post-si-validation.component';
import { RebarDetailingServicesComponent } from './pages/our-services/aec-bim/rebar-detailing-services/rebar-detailing-services.component';
import { ThreeDBimServicesComponent } from './pages/our-services/aec-bim/three-d-bim-services/three-d-bim-services.component';
import { ScanBimServicesComponent } from './pages/our-services/aec-bim/scan-bim-services/scan-bim-services.component';
import { DetailingServicesComponent } from './pages/our-services/aec-bim/detailing-services/detailing-services.component';
import { ContactComponent } from './common/contact/contact.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductDesignComponent } from './pages/product-design/product-design.component';
import { EngineeringComponent } from './pages/engineering/engineering.component';
import { CompetencyDevelopmentComponent } from './pages/competency-development/competency-development.component';
import { EmbeddedSoftwareSystemComponent } from './pages/embedded-software-system/embedded-software-system.component';
import { DesignVerificationValidationComponent } from './pages/design-verification-validation/design-verification-validation.component';
import { FunctionalSafetyComponent } from './pages/functional-safety/functional-safety.component';
import { ModelBasedDevelopmentComponent } from './pages/model-based-development/model-based-development.component';
import { SystemEngineeringComponent } from './pages/system-engineering/system-engineering.component';
import { CyberSecurityComponent } from './pages/cyber-security/cyber-security.component';
import { TestAutomationComponent } from './pages/our-services/digital-ind-manu-engg/software-testing/test-automation/test-automation.component';
import { ManualTestingComponent } from './pages/our-services/digital-ind-manu-engg/software-testing/manual-testing/manual-testing.component';
import { ApplicationSupportComponent } from './pages/our-services/digital-ind-manu-engg/software-testing/application-support/application-support.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadersComponent,
    FootersComponent,
    WhoWeAreComponent,
    ContactUsComponent,
    CareersComponent,
    OurServicesComponent,
    IndustriesComponent,
    AutomotiveComponent,
    DigitalIndManuEnggComponent,
    WebDevelopmentComponent,
    AecBimComponent,
    DesignsComponent,
    VirtualValidationComponent,
    EmbeddedSystemsComponent,
    ProductLifecycleManagementComponent,
    ToolDieComponent,
    ThreeDPrintingComponent,
    AiMlComponent,
    IotComponent,
    UiUxComponent,
    SoftwareTestingComponent,
    SemiconductorComponent,
    VlsiComponent,
    AnalogMixedSignalDesignsComponent,
    RtlDesignComponent,
    DesignVerificationComponent,
    DesignTestDebugComponent,
    PhysicalDesignComponent,
    SystemcSolutionsComponent,
    FpgaEmulationPostSiValidationComponent,
    RebarDetailingServicesComponent,
    ThreeDBimServicesComponent,
    ScanBimServicesComponent,
    DetailingServicesComponent,
    ContactComponent,
    HomeComponent,
    ProductDesignComponent,
    EngineeringComponent,
    CompetencyDevelopmentComponent,
    EmbeddedSoftwareSystemComponent,
    DesignVerificationValidationComponent,
    FunctionalSafetyComponent,
    ModelBasedDevelopmentComponent,
    SystemEngineeringComponent,
    CyberSecurityComponent,
    TestAutomationComponent,
    ManualTestingComponent,
    ApplicationSupportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
