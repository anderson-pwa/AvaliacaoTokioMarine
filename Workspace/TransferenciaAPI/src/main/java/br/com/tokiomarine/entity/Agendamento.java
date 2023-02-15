package br.com.tokiomarine.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;

@Table(name="agendamento")
@Entity
@Data
public class Agendamento {

	@Id
	@GeneratedValue
	private Long id;
	
	private String contaOrigem;
	private String contaDestino;
	private Double valorTransferencia;
	private Double taxaAplicada;
	private String dataTransferencia;
	private String dataAgendamento;
	
	@ManyToOne
	@JoinColumn(name="operacao_id", nullable=false)
	private Operacao operacao;
	
}
