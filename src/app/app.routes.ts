import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './presentation/pages/dashboard/dashboard.component';
import { ListStudentComponent } from './presentation/pages/students/list-student/list-student.component';
import { LoginComponent } from './presentation/pages/login/login.component';
import { AdminComponent } from './presentation/components/layout/admin/admin.component';
import { ReportComponent } from './presentation/pages/report/report.component';
import { AddStudentComponent } from './presentation/pages/students/add-student/add-student.component';
import { StudentsComponent } from './presentation/pages/students/students.component';
import { TeachersComponent } from './presentation/pages/teachers/teachers.component';
import { ListTeachersComponent } from './presentation/pages/teachers/list-teachers/list-teachers.component';
import { AddTeachersComponent } from './presentation/pages/teachers/add-teachers/add-teachers.component';
import { EditStudentComponent } from './presentation/pages/students/edit-student/edit-student.component';
import { EditTeachersComponent } from './presentation/pages/teachers/edit-teachers/edit-teachers.component';
import { UsersComponent } from './presentation/pages/users/users.component';
import { ListUsersComponent } from './presentation/pages/users/list-users/list-users.component';
import { AddUsersComponent } from './presentation/pages/users/add-users/add-users.component';
import { EditUsersComponent } from './presentation/pages/users/edit-users/edit-users.component';

export const routes: Routes = [
    {
        path: '',
        component: LoginComponent 
    },
    {
        path: '',
        component: AdminComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'students',
                component: StudentsComponent,
                children: [
                    {
                        path: '',
                        component: ListStudentComponent
                    },
                    {
                        path: 'add-student',
                        component: AddStudentComponent
                    },
                    {
                        path: 'edit-student/:id',
                        component: EditStudentComponent
                    }
                ]
            },
            {
                path: 'teachers',
                component: TeachersComponent,
                children: [
                    {
                        path: '',
                        component: ListTeachersComponent
                    },
                    {
                        path: 'add-teachers',
                        component: AddTeachersComponent
                    },
                    {
                        path: 'edit-teacher/:id',
                        component: EditTeachersComponent
                    }
                ]
            },
            {
                path: 'users',
                component: UsersComponent,
                children: [
                    {
                        path: '',
                        component: ListUsersComponent
                    },
                    {
                        path: 'add-users',
                        component: AddUsersComponent
                    },
                    {
                        path: 'edit-user/:id',
                        component: EditUsersComponent
                    }
                ]
            },
            {
                path: 'reports',
                component: ReportComponent
            }
        ]
    }
];
