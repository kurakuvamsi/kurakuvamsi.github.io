import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { EducationComponent } from './components/education-child-development/education-child-development.component';
import { HealthOrphanChildCareComponent } from './components/health-orphan-child-care/health-orphan-child-care.component';
import { LeadershipComponent } from './components/leadership-development/leadership-development.component';
import { EmploymentComponent } from './components/employment-livelihood/employment-livelihood.component';
import { IncomeConceptsComponent } from './components/income-concepts/income-concepts.component';
import { RetiredEmployeeAdvisoryComponent } from './components/retired-employee-advisory/retired-employee-advisory.component';
import { MissionaryAreaInfrastructureComponent } from './components/missionary-area-infrastructure/missionary-area-infrastructure.component';
import { FacilitiesComponent } from './components/schools-hostels-lodges-transport/schools-hostels-lodges-transport.component';
import { ResearchProblemSolvingComponent } from './components/research-problem-solving/research-problem-solving.component';
import { About } from './components/about/about';
import { ContactUs } from './components/contact-us/contact-us';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'education-child-development', component: EducationComponent },
  { path: 'health-orphan-child-care', component: HealthOrphanChildCareComponent },
  { path: 'leadership-development', component: LeadershipComponent },
  { path: 'employment-livelihood', component: EmploymentComponent },
  { path: 'income-concepts', component: IncomeConceptsComponent },
  { path: 'retired-employee-advisory', component: RetiredEmployeeAdvisoryComponent },
  { path: 'missionary-area-infrastructure', component: MissionaryAreaInfrastructureComponent },
  { path: 'schools-hostels-lodges-transport', component: FacilitiesComponent },
  { path: 'research-problem-solving', component: ResearchProblemSolvingComponent },

  { path: 'about', component: About },
  { path: 'contact-us', component: ContactUs },
  { path: '**', redirectTo: '' }
];
