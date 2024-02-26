import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form.component.html',
})
export class FormComponent {
  loanSimulationResult: any;
  loading = false;
  confirmationPopupVisible = false;
  formState = {
    nome: '',
    valorDesejado: null,
    numeroParcelas: null,
  };

  parcelOptions: number[] = [10, 12, 18, 24, 36, 48, 60, 120 ];

  constructor(private router: Router) {}

  openConfirmationPopup() {
    this.confirmationPopupVisible = true;
  }

  closeConfirmationPopup() {
    this.confirmationPopupVisible = false;
  }

  submitForm(event: Event) {
    this.loading = true;
    event.preventDefault();

    const valorDesejadoInput = parseFloat(
      (document.getElementById('valor-desejado') as HTMLInputElement).value
    );
    const numeroParcelasInput = parseInt(
      (document.getElementById('numero-parcelas') as HTMLInputElement).value,
      10
    );

    const juros = valorDesejadoInput * 0.05;
    const totalComJuros = valorDesejadoInput + juros;

    setTimeout(() => {
      this.loanSimulationResult = {
        valorParcelas: (totalComJuros / numeroParcelasInput).toLocaleString(
          'pt-BR',
          { style: 'currency', currency: 'BRL' }
        ),
        numeroParcelas: numeroParcelasInput.toLocaleString('pt-BR'),
        totalComJuros: totalComJuros.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }),
      };
      this.loading = false;
    }, 1000);
  }

  confirmLoan() {
    this.router.navigate(['/success'], {
      queryParams: {
        nome: this.formState.nome,
      },
    });
  }
}
