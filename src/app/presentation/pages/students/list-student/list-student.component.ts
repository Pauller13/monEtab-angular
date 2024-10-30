import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ButtonModule } from 'primeng/button';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-list-student',
  standalone: true,
  imports: [
    RouterModule,
    ToastModule,
    ConfirmPopupModule,
    ButtonModule,
  ],
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css'],
  providers: [MessageService, ConfirmationService],
})
export class ListStudentComponent {
  constructor(private messageService: MessageService, private confirmationService: ConfirmationService) {}

  confirm(event: Event): void {
    const target = event.target as EventTarget;
    this.confirmationService.confirm({
      target: target,
      message: 'Êtes-vous sûr de vouloir sauvegarder ces modifications ?',
      accept: () => {
        this.onAccept();
      },
      reject: () => {
        this.onReject();
      },
      header: 'Confirmation',
    });
  }

  private onAccept(): void {
    this.messageService.add({ severity: 'success', summary: 'Sauvegarde', detail: 'Elève supprimé avec succès' });
  }

  private onReject(): void {
    this.messageService.add({ severity: 'error', summary: 'Annulation', detail: 'Suppression annulée' });
  }
}
