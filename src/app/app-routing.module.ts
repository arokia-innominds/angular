import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
import { HomeComponent } from './pages/home/home.component';
import { IndustriesComponent } from './pages/industries/industries.component';
import { OurServicesComponent } from './pages/our-services/our-services.component';
import { CareersComponent } from './pages/careers/careers.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AutomotiveComponent } from './pages/our-services/automotive/automotive.component';
import { DigitalIndManuEnggComponent } from './pages/our-services/digital-ind-manu-engg/digital-ind-manu-engg.component';
import { AecBimComponent } from './pages/our-services/aec-bim/aec-bim.component';
import { WebDevelopmentComponent } from './pages/our-services/web-development/web-development.component';
import { DesignsComponent } from './pages/our-services/automotive/designs/designs.component';
import { EmbeddedSystemsComponent } from './pages/our-services/automotive/embedded-systems/embedded-systems.component';
import { ProductLifecycleManagementComponent } from './pages/our-services/automotive/product-lifecycle-management/product-lifecycle-management.component';
import { ThreeDPrintingComponent } from './pages/our-services/automotive/three-d-printing/three-d-printing.component';
import { ToolDieComponent } from './pages/our-services/automotive/tool-die/tool-die.component';
import { VirtualValidationComponent } from './pages/our-services/automotive/virtual-validation/virtual-validation.component';
import { AiMlComponent } from './pages/our-services/digital-ind-manu-engg/ai-ml/ai-ml.component';
import { IotComponent } from './pages/our-services/digital-ind-manu-engg/iot/iot.component';
import { SemiconductorComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/semiconductor.component';
import { SoftwareTestingComponent } from './pages/our-services/digital-ind-manu-engg/software-testing/software-testing.component';
import { UiUxComponent } from './pages/our-services/digital-ind-manu-engg/ui-ux/ui-ux.component';
import { VlsiComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/vlsi/vlsi.component';
import { AnalogMixedSignalDesignsComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/vlsi/analog-mixed-signal-designs/analog-mixed-signal-designs.component';
import { DesignTestDebugComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/vlsi/design-test-debug/design-test-debug.component';
import { DesignVerificationComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/vlsi/design-verification/design-verification.component';
import { FpgaEmulationPostSiValidationComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/vlsi/fpga-emulation-post-si-validation/fpga-emulation-post-si-validation.component';
import { PhysicalDesignComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/vlsi/physical-design/physical-design.component';
import { RtlDesignComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/vlsi/rtl-design/rtl-design.component';
import { SystemcSolutionsComponent } from './pages/our-services/digital-ind-manu-engg/semiconductor/vlsi/systemc-solutions/systemc-solutions.component';
import { DetailingServicesComponent } from './pages/our-services/aec-bim/detailing-services/detailing-services.component';
import { RebarDetailingServicesComponent } from './pages/our-services/aec-bim/rebar-detailing-services/rebar-detailing-services.component';
import { ScanBimServicesComponent } from './pages/our-services/aec-bim/scan-bim-services/scan-bim-services.component';
import { ThreeDBimServicesComponent } from './pages/our-services/aec-bim/three-d-bim-services/three-d-bim-services.component';
import { ProductDesignComponent } from './pages/product-design/product-design.component';
import { EngineeringComponent } from './pages/engineering/engineering.component';
import { CompetencyDevelopmentComponent } from './pages/competency-development/competency-development.component';
import { EmbeddedSoftwareSystemComponent } from './pages/embedded-software-system/embedded-software-system.component';
import { CyberSecurityComponent } from './pages/cyber-security/cyber-security.component';
import { SystemEngineeringComponent } from './pages/system-engineering/system-engineering.component';
import { ModelBasedDevelopmentComponent } from './pages/model-based-development/model-based-development.component';
import { FunctionalSafetyComponent } from './pages/functional-safety/functional-safety.component';
import { DesignVerificationValidationComponent } from './pages/design-verification-validation/design-verification-validation.component';
import { TestAutomationComponent } from './pages/our-services/digital-ind-manu-engg/software-testing/test-automation/test-automation.component';
import { ManualTestingComponent } from './pages/our-services/digital-ind-manu-engg/software-testing/manual-testing/manual-testing.component';
import { ApplicationSupportComponent } from './pages/our-services/digital-ind-manu-engg/software-testing/application-support/application-support.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component:  HomeComponent},
  { path: 'who-we-are', component: WhoWeAreComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'our-services/automotive', component: AutomotiveComponent },
  { path: 'automotive/designs', component: DesignsComponent },
  { path: 'product-design', component: ProductDesignComponent},
  { path: 'engineering', component: EngineeringComponent},
  { path: 'competency-development', component: CompetencyDevelopmentComponent},
  { path: 'embedded-software-system', component: EmbeddedSoftwareSystemComponent},
  { path: 'cyber-security', component: CyberSecurityComponent},
  { path: 'system-engineering', component: SystemEngineeringComponent},
  { path: 'model-based-development', component: ModelBasedDevelopmentComponent},
  { path: 'functional-safety', component: FunctionalSafetyComponent},
  { path: 'design-verification-validation', component: DesignVerificationValidationComponent},
  { path: 'automotive/embedded-systems', component: EmbeddedSystemsComponent },
  { path: 'automotive/product-life-cycle-management', component: ProductLifecycleManagementComponent },
  { path: 'automotive/3d-printing', component: ThreeDPrintingComponent },
  { path: 'automotive/tool-die', component: ToolDieComponent },
  { path: 'automotive/virtual-validation', component: VirtualValidationComponent },
  { path: 'our-services/digital-industry', component: DigitalIndManuEnggComponent },
  { path: 'digital-industry/ai-ml', component: AiMlComponent },
  { path: 'digital-industry/iot', component: IotComponent },
  { path: 'digital-industry/semiconductor', component: SemiconductorComponent },
  { path: 'digital-industry/software-testing', component: SoftwareTestingComponent },
  { path: 'software-testing/test-automation', component: TestAutomationComponent },
  { path: 'software-testing/manual-testing', component: ManualTestingComponent },
  { path: 'software-testing/application-support', component: ApplicationSupportComponent },
  { path: 'digital-industry/ui-ux', component: UiUxComponent },
  { path: 'semiconductor/vlsi', component: VlsiComponent },
  { path: 'vlsi/analog-mixed-signal-designs', component: AnalogMixedSignalDesignsComponent },
  { path: 'vlsi/design-for-test-and-debug', component: DesignTestDebugComponent },
  { path: 'vlsi/design-verification', component: DesignVerificationComponent },
  { path: 'vlsi/fpga-emulation-post-si-validation', component: FpgaEmulationPostSiValidationComponent },
  { path: 'vlsi/physical-design', component: PhysicalDesignComponent },
  { path: 'vlsi/rtl-design', component: RtlDesignComponent },
  { path: 'vlsi/systemc-solutions', component: SystemcSolutionsComponent },
  { path: 'our-services/aec-bim', component: AecBimComponent },
  { path: 'aec-bim/rebar-detailing-services', component: RebarDetailingServicesComponent },
  { path: 'aec-bim/3d-bim-services', component: ThreeDBimServicesComponent },
  { path: 'aec-bim/scan-to-bim-services', component: ScanBimServicesComponent },
  { path: 'aec-bim/detailing-services', component: DetailingServicesComponent },
  { path: 'our-services/web-development', component: WebDevelopmentComponent },
  { path: 'our-services', component: OurServicesComponent},
  { path: 'careers', component: CareersComponent },
  { path: 'contact-us', component: ContactUsComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
