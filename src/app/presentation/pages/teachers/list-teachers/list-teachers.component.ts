import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MessageService, ConfirmationService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';

@Component({
  selector: 'app-list-teachers',
  standalone: true,
  imports: [RouterModule,ToastModule,ButtonModule,ConfirmPopupModule],
  templateUrl: './list-teachers.component.html',
  styleUrl: './list-teachers.component.css',
  providers: [MessageService, ConfirmationService],
})
export class ListTeachersComponent {
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
    this.messageService.add({ severity: 'success', summary: 'Sauvegarde', detail: 'Professeur supprimé avec succès' });
  }

  private onReject(): void {
    this.messageService.add({ severity: 'error', summary: 'Annulation', detail: 'Suppression annulée' });
  }

}
