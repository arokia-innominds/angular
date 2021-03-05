import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WhoWeAreComponent } from './pages/who-we-are/who-we-are.component';
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

const routes: Routes = [
  { path: 'who-we-are', component: WhoWeAreComponent },
  { path: 'industries', component: IndustriesComponent },
  { path: 'our-services/automotive', component: AutomotiveComponent },
  { path: 'our-services/automotive/designs', component: DesignsComponent },
  { path: 'our-services/automotive/embedded-systems', component: EmbeddedSystemsComponent },
  { path: 'our-services/automotive/product-life-cycle-management', component: ProductLifecycleManagementComponent },
  { path: 'our-services/automotive/3d-printing', component: ThreeDPrintingComponent },
  { path: 'our-services/automotive/tool-die', component: ToolDieComponent },
  { path: 'our-services/automotive/virtual-validation', component: VirtualValidationComponent },
  { path: 'our-services/digital-industry-manufacturing-engg', component: DigitalIndManuEnggComponent },
  { path: 'our-services/digital-industry-manufacturing-engg/ai-ml', component: AiMlComponent },
  { path: 'our-services/digital-industry-manufacturing-engg/iot', component: IotComponent },
  { path: 'our-services/digital-industry-manufacturing-engg/semiconductor', component: SemiconductorComponent },
  { path: 'our-services/digital-industry-manufacturing-engg/software-testing', component: SoftwareTestingComponent },
  { path: 'our-services/digital-industry-manufacturing-engg/ui-ux', component: UiUxComponent },
  { path: 'our-services/digital-industry-manufacturing-engg/semiconductor/vlsi', component: VlsiComponent },
  { path: 'our-services/digital-industry-manufacturing-engg/semiconductor/vlsi/analog-mixed-signal-designs', component: AnalogMixedSignalDesignsComponent },
  { path: 'our-services/digital-industry-manufacturing-engg/semiconductor/vlsi/design-for-test-and-debug', component: DesignTestDebugComponent },
  { path: 'our-services/digital-industry-manufacturing-engg/semiconductor/vlsi/design-verification', component: DesignVerificationComponent },
  { path: 'our-services/digital-industry-manufacturing-engg/semiconductor/vlsi/fpga-emulation-post-si-validation', component: FpgaEmulationPostSiValidationComponent },
  { path: 'our-services/digital-industry-manufacturing-engg/semiconductor/vlsi/physical-design', component: PhysicalDesignComponent },
  { path: 'our-services/digital-industry-manufacturing-engg/semiconductor/vlsi/rtl-design', component: RtlDesignComponent },
  { path: 'our-services/digital-industry-manufacturing-engg/semiconductor/vlsi/systemc-solutions', component: SystemcSolutionsComponent },
  { path: 'our-services/aec-bim', component: AecBimComponent },
  { path: 'our-services/aec-bim/rebar-detailing-services', component: RebarDetailingServicesComponent },
  { path: 'our-services/aec-bim/3d-bim-services', component: ThreeDBimServicesComponent },
  { path: 'our-services/aec-bim/scan-to-bim-services', component: ScanBimServicesComponent },
  { path: 'our-services/aec-bim/detailing-services', component: DetailingServicesComponent },
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
