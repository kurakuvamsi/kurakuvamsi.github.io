import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { StudentsComponent } from './features/students/students.component';
import { StaffComponent } from './features/staff/staff.component';
import { AttendanceComponent } from './features/attendance/attendance.component';
import { AssignmentsComponent } from './features/assignments/assignments.component';
import { ExaminationsComponent } from './features/examinations/examinations.component';
import { LibraryComponent } from './features/library/library.component';
import { TimetableComponent } from './features/timetable/timetable.component';
import { LeavesComponent } from './features/leaves/leaves.component';
import { FeesComponent } from './features/fees/fees.component';
import { NotificationsComponent } from './features/notifications/notifications.component';
import { ProfileComponent } from './features/profile/profile.component';
import { StudentAddComponent } from './features/student-add/student-add.component';
import { StaffAddComponent } from './features/staff-add/staff-add.component';
export const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path:'home',component:HomeComponent},
  {path:'students',component:StudentsComponent},
  {path:'staff',component:StaffComponent},
  {path:'attendance',component:AttendanceComponent},
  {path:'assignments',component:AssignmentsComponent},
  {path:'examinations',component:ExaminationsComponent},
  {path:'library',component:LibraryComponent},
  {path:'timetable',component:TimetableComponent},
  {path:'leaves',component:LeavesComponent},
  {path:'fees',component:FeesComponent},
  {path:'notifications',component:NotificationsComponent},
  {path:'profile',component:ProfileComponent},
  {path:'students/add',component:StudentAddComponent},
  {path:'staff/add',component:StaffAddComponent},
  {path:'**',redirectTo:'home'}
];
